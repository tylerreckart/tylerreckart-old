<?php
namespace Craft;

/**
 * Class SproutSeo_RedirectsService
 *
 * @package Craft
 */
class SproutSeo_RedirectsService extends BaseApplicationComponent
{
	/**
	 * Returns a Redirect by its ID.
	 *
	 * @param int $redirectId
	 *
	 * @return SproutSeo_RedirectModel|null
	 */
	public function getRedirectById($redirectId)
	{
		return craft()->elements->getElementById($redirectId, 'SproutSeo_Redirect');
	}

	/**
	 * Saves a redirect.
	 *
	 * @param SproutSeo_RedirectModel $redirect
	 *
	 * @throws Exception
	 * @return bool
	 */
	public function saveRedirect(SproutSeo_RedirectModel $redirect)
	{
		$isNewRedirect = !$redirect->id;

		// Event data
		if (!$isNewRedirect)
		{
			$redirectRecord = SproutSeo_RedirectRecord::model()->findById($redirect->id);

			if (!$redirectRecord)
			{
				throw new Exception(Craft::t('No redirect exists with the ID “{id}”', array('id' => $redirect->id)));
			}
		}
		else
		{
			$redirectRecord = new SproutSeo_RedirectRecord();
		}

		$redirectRecord->oldUrl = $redirect->oldUrl;
		$redirectRecord->newUrl = $redirect->newUrl;
		$redirectRecord->method = $redirect->method;
		$redirectRecord->regex  = $redirect->regex;

		$redirectRecord->validate();
		$redirect->addErrors($redirectRecord->getErrors());

		if (!$redirect->hasErrors())
		{
			$transaction = craft()->db->getCurrentTransaction() === null ? craft()->db->beginTransaction() : null;
			try
			{

				if (craft()->elements->saveElement($redirect))
				{
					// Now that we have an element ID, save it on the other stuff
					if ($isNewRedirect)
					{
						$redirectRecord->id = $redirect->id;
					}

					$redirectRecord->save(false);

					if ($isNewRedirect)
					{
						//Set the root structure
						craft()->structures->appendToRoot(sproutSeo()->redirects->getStructureId(), $redirect);
					}

					if ($transaction !== null)
					{
						$transaction->commit();
					}

					return true;
				}
			}
			catch (\Exception $e)
			{
				if ($transaction !== null)
				{
					$transaction->rollback();
				}

				throw $e;
			}
		}

		return false;
	}

	/**
	 * Update the current method in the record
	 *
	 * @param array $ids
	 * @param int   $method value to update
	 *
	 * @return bool
	 */
	public function updateMethods($ids, $newMethod)
	{
		$resp = craft()->db->createCommand()->update(
			'sproutseo_redirects',
			array('method' => $newMethod),
			array('in', 'id', $ids)
		);

		return $resp;
	}

	/**
	 * Find a regex url using the preg_match php function and replace
	 * capture groups if any using the preg_replace php function also check normal urls
	 *
	 * @param string $url
	 *
	 * @return SproutSeo_RedirectRecord $redirect
	 */
	public function findUrl($url)
	{
		$redirects = SproutSeo_RedirectRecord::model()->structured()->findAll();

		if ($redirects)
		{
			foreach ($redirects as $redirect)
			{
				if ($redirect->regex)
				{
					// Use backticks as delimiters as they are invalid characters for URLs
					$oldUrlPattern = "`" . $redirect->oldUrl . "`";

					if (preg_match($oldUrlPattern, $url))
					{
						// Replace capture groups if any
						$redirect->newUrl = preg_replace($oldUrlPattern, $redirect->newUrl, $url);

						return $redirect;
					}
				}
				else
				{
					if ($redirect->oldUrl == $url)
					{
						return $redirect;
					}
				}
			}
		}

		return null;
	}

	/**
	 * Get methods
	 *
	 * @return array
	 */
	public function getMethods()
	{
		$methods    = array_flip(SproutSeo_RedirectMethods::getConstants());
		$newMethods = array();
		foreach ($methods as $key => $value)
		{
			$newMethods[$key] = $key . ' - ' . $value;
		}

		return $newMethods;
	}

	/**
	 * Add Slash
	 *
	 * @return array
	 */
	public function addSlash($url)
	{
		$slash    = '/';
		$external = false;
		//Check if the url is external
		if (filter_var($url, FILTER_VALIDATE_URL))
		{
			$external = true;
		}

		if ($url[0] != $slash && !$external)
		{
			$url = $slash . $url;
		}

		return $url;
	}

	/**
	 * Get Method Update Response from elementaction
	 *
	 * @param bool
	 *
	 * @return string
	 */
	public function getMethodUpdateResponse($status)
	{
		$response = null;
		if ($status)
		{
			$response = Craft::t('Methods updated.');
		}
		else
		{
			$response = Craft::t('Failed to update.');
		}

		return $response;
	}

	/**
	 * This service allows find a url that needs redirect
	 *
	 * @param string current request url
	 *
	 * @return SproutSeo_RedirectRecord
	 */
	public function getRedirect($url)
	{
		// check out normal and regex urls
		$redirect = sproutSeo()->redirects->findUrl($url);

		return $redirect;
	}

	/**
	 * This service allows find the structure id from the sprout seo settings
	 *
	 * @return int
	 */
	public function getStructureId()
	{
		$plugin   = craft()->plugins->getPlugin('sproutseo');
		$settings = $plugin->getSettings();

		return $settings->structureId;
	}

	/**
	 * Install default styles to be used with Notes Field
	 *
	 * @return none
	 */
	public function installDefaultSettings($pluginName = null)
	{
		$maxLevels            = 1;
		$structure            = new StructureModel();
		$structure->maxLevels = $maxLevels;
		craft()->structures->saveStructure($structure);

		$defaultValues = '{"pluginNameOverride":"' . $pluginName . '", "seoDivider":"-", "structureId":"' . $structure->id . '"}';

		craft()->db->createCommand()->update(
			'plugins',
			array(
				'settings' => $defaultValues
			),
			'class=:class',
			array(
				':class' => 'SproutSeo'
			)
		);

		return $structure->id;
	}
}
