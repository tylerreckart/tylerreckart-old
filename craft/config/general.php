<?php

/**
 * General Configuration
 *
 * This example multi-environment config file is a
 * collection of several possible use cases for your
 * multi-environment workflow
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

// Ensure our urls have the right scheme
define('URI_SCHEME', ( isset($_SERVER['HTTPS'] ) ) ? "https://" :"http://" );

// The site url
define('SITE_URL', URI_SCHEME . $_SERVER['SERVER_NAME'] . '/');

// The site basepath
define('BASEPATH', realpath(CRAFT_BASE_PATH . '/../') . '/');

return array(
  
      'imageDriver' => 'imagick',
      'devMode' => false,
      'omitScriptNameInUrls' => true,
      
      'environmentVariables' => array(
          'siteUrl' => SITE_URL,
          'basePath' => BASEPATH
      )      
);
