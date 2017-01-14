<?php

/* _components/fieldtypes/RichText/settings */
class __TwigTemplate_172ebeb84c01ff6b782699786bd82c5ddc95a1f84f71f0d0923b59c0d96792ae extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/RichText/settings", 1);
        // line 2
        echo "
";
        // line 3
        if ((twig_length_filter($this->env, (isset($context["configOptions"]) ? $context["configOptions"] : null)) > 1)) {
            // line 4
            echo "\t";
            ob_start();
            // line 5
            echo "\t\t";
            echo $context["forms"]->getselect(array("id" => "configFle", "name" => "configFile", "options" =>             // line 8
(isset($context["configOptions"]) ? $context["configOptions"] : null), "value" => $this->getAttribute(            // line 9
(isset($context["settings"]) ? $context["settings"] : null), "configFile", array())));
            // line 10
            echo "
\t";
            $context["configInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        } else {
            // line 13
            echo "\t";
            ob_start();
            // line 14
            echo "\t\t<p>";
            echo \Craft\Craft::t("You don’t have any <a href=\"http://craftcms.com/docs/rich-text-fields#redactor-configs\" target=\"_blank\">Redactor configs</a> yet.");
            echo "</p>
\t";
            $context["configInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        }
        // line 17
        echo "
";
        // line 18
        ob_start();
        // line 19
        echo "\t";
        echo $context["forms"]->getselect(array("id" => "columnType", "name" => "columnType", "options" =>         // line 22
(isset($context["columns"]) ? $context["columns"] : null), "value" => $this->getAttribute(        // line 23
(isset($context["settings"]) ? $context["settings"] : null), "columnType", array())));
        // line 24
        echo "
";
        $context["columnType"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 26
        echo "
";
        // line 27
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Config"), "instructions" => (((\Craft\Craft::t("You can save custom Redactor configs as .json files in craft/config/redactor/.") . " <a href=\"http://imperavi.com/redactor/docs/settings/\" target=\"_blank\">") . \Craft\Craft::t("View available settings")) . "</a>."), "id" => "configFile"),         // line 31
(isset($context["configInput"]) ? $context["configInput"] : null));
        echo "

";
        // line 33
        echo $context["forms"]->getcheckboxSelectField(array("id" => "availableAssetSources", "name" => "availableAssetSources", "label" => \Craft\Craft::t("Available Asset Sources"), "instructions" => \Craft\Craft::t("The asset sources that should be available when selecting assets (if the selected config has an Image or File button)."), "options" =>         // line 38
(isset($context["assetSourceOptions"]) ? $context["assetSourceOptions"] : null), "values" => $this->getAttribute(        // line 39
(isset($context["settings"]) ? $context["settings"] : null), "availableAssetSources", array())));
        // line 40
        echo "

";
        // line 42
        echo $context["forms"]->getcheckboxSelectField(array("id" => "availableTransforms", "name" => "availableTransforms", "label" => \Craft\Craft::t("Available Image Transforms"), "instructions" => \Craft\Craft::t("The image transforms that should be available when selecting images (if the selected config has an Image button)."), "options" =>         // line 47
(isset($context["transformOptions"]) ? $context["transformOptions"] : null), "values" => $this->getAttribute(        // line 48
(isset($context["settings"]) ? $context["settings"] : null), "availableTransforms", array())));
        // line 49
        echo "

";
        // line 51
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Clean up HTML?"), "instructions" => \Craft\Craft::t("Removes <code>&lt;span&gt;</code>’s, empty tags, and most <code>style</code> attributes on save."), "id" => "cleanupHtml", "name" => "cleanupHtml", "checked" => $this->getAttribute(        // line 56
(isset($context["settings"]) ? $context["settings"] : null), "cleanupHtml", array())));
        // line 57
        echo "

";
        // line 59
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Purify HTML?"), "instructions" => \Craft\Craft::t("Removes any potentially-malicious code on save, by running the submitted data through <a href=\"http://htmlpurifier.org/\" target=\"_blank\">HTML Purifier</a>."), "warning" => \Craft\Craft::t("Disable this at your own risk!"), "id" => "purifyHtml", "name" => "purifyHtml", "checked" => $this->getAttribute(        // line 65
(isset($context["settings"]) ? $context["settings"] : null), "purifyHtml", array())));
        // line 66
        echo "

";
        // line 68
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Column Type"), "instructions" => \Craft\Craft::t("The underlying database column type to use when saving content."), "id" => "columnType", "warning" => ((        // line 72
(isset($context["existing"]) ? $context["existing"] : null)) ? (\Craft\Craft::t("Changing this may result in data loss.")) : (""))),         // line 73
(isset($context["columnType"]) ? $context["columnType"] : null));
        echo "
";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/RichText/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 73,  103 => 72,  102 => 68,  98 => 66,  96 => 65,  95 => 59,  91 => 57,  89 => 56,  88 => 51,  84 => 49,  82 => 48,  81 => 47,  80 => 42,  76 => 40,  74 => 39,  73 => 38,  72 => 33,  67 => 31,  66 => 27,  63 => 26,  59 => 24,  57 => 23,  56 => 22,  54 => 19,  52 => 18,  49 => 17,  42 => 14,  39 => 13,  34 => 10,  32 => 9,  31 => 8,  29 => 5,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import '_includes/forms' as forms %}*/
/* */
/* {% if configOptions|length > 1 %}*/
/* 	{% set configInput %}*/
/* 		{{ forms.select({*/
/* 			id: 'configFle',*/
/* 			name: 'configFile',*/
/* 			options: configOptions,*/
/* 			value: settings.configFile*/
/* 		}) }}*/
/* 	{% endset %}*/
/* {% else %}*/
/* 	{% set configInput %}*/
/* 		<p>{{ 'You don’t have any <a href="http://craftcms.com/docs/rich-text-fields#redactor-configs" target="_blank">Redactor configs</a> yet.'|t|raw }}</p>*/
/* 	{% endset %}*/
/* {% endif %}*/
/* */
/* {% set columnType %}*/
/* 	{{ forms.select({*/
/* 		id: 'columnType',*/
/* 		name: 'columnType',*/
/* 		options: columns,*/
/* 		value: settings.columnType*/
/* 	}) }}*/
/* {% endset %}*/
/* */
/* {{ forms.field({*/
/* 	label: "Config"|t,*/
/* 	instructions: "You can save custom Redactor configs as .json files in craft/config/redactor/."|t~' <a href="http://imperavi.com/redactor/docs/settings/" target="_blank">'~"View available settings"|t~'</a>.',*/
/* 	id: 'configFile'*/
/* }, configInput) }}*/
/* */
/* {{ forms.checkboxSelectField({*/
/* 	id: 'availableAssetSources',*/
/* 	name: 'availableAssetSources',*/
/* 	label: 'Available Asset Sources'|t,*/
/* 	instructions: 'The asset sources that should be available when selecting assets (if the selected config has an Image or File button).'|t,*/
/* 	options: assetSourceOptions,*/
/* 	values: settings.availableAssetSources,*/
/* }) }}*/
/* */
/* {{ forms.checkboxSelectField({*/
/* 	id: 'availableTransforms',*/
/* 	name: 'availableTransforms',*/
/* 	label: 'Available Image Transforms'|t,*/
/* 	instructions: 'The image transforms that should be available when selecting images (if the selected config has an Image button).'|t,*/
/* 	options: transformOptions,*/
/* 	values: settings.availableTransforms,*/
/* }) }}*/
/* */
/* {{ forms.checkboxField({*/
/* 	label: "Clean up HTML?"|t,*/
/* 	instructions: "Removes <code>&lt;span&gt;</code>’s, empty tags, and most <code>style</code> attributes on save."|t,*/
/* 	id: 'cleanupHtml',*/
/* 	name: 'cleanupHtml',*/
/* 	checked: settings.cleanupHtml*/
/* }) }}*/
/* */
/* {{ forms.checkboxField({*/
/* 	label: "Purify HTML?"|t,*/
/* 	instructions: 'Removes any potentially-malicious code on save, by running the submitted data through <a href="http://htmlpurifier.org/" target="_blank">HTML Purifier</a>.'|t,*/
/* 	warning: 'Disable this at your own risk!'|t,*/
/* 	id: 'purifyHtml',*/
/* 	name: 'purifyHtml',*/
/* 	checked: settings.purifyHtml*/
/* }) }}*/
/* */
/* {{ forms.field({*/
/* 	label: "Column Type"|t,*/
/* 	instructions: "The underlying database column type to use when saving content."|t,*/
/* 	id: 'columnType',*/
/* 	warning: (existing ? "Changing this may result in data loss."|t),*/
/* }, columnType) }}*/
/* */
