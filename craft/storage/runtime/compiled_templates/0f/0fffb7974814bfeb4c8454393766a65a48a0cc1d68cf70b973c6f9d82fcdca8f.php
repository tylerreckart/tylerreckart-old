<?php

/* updates */
class __TwigTemplate_9e59c1694b784a1706cc1c5af5ecdb226c1fec4b342132485776f926b7572692 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("_layouts/cp", "updates", 3);
        $this->blocks = array(
            'pageHeader' => array($this, 'block_pageHeader'),
            'main' => array($this, 'block_main'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/cp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        \Craft\craft()->userSession->requirePermission("performUpdates");
        // line 4
        $context["title"] = \Craft\Craft::t("Updates");
        // line 5
        $_js = "css/updates.css";
        \Craft\craft()->templates->includecssresource($_js);
        // line 6
        $_js = "js/updates.js";
        \Craft\craft()->templates->includejsresource($_js);
        // line 7
        \Craft\craft()->templates->includeTranslations(
        	"You’ve got updates!",
        	"You’re all up-to-date!",
        	"build {build}",
        	"Critical",
        	"Update",
        	"Download",
        	"Craft’s <a href=\"http://craftcms.com/license\" target=\"_blank\">Terms and Conditions</a> have changed.",
        	"I agree.",
        	"Seriously, download.",
        	"Seriously, update.",
        	"Install",
        	"{app} update required",
        	"Released on {date}",
        	"Show more",
        	"Added",
        	"Improved",
        	"Fixed",
        	"Download"
        );
        // line 3
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 29
    public function block_pageHeader($context, array $blocks = array())
    {
    }

    // line 33
    public function block_main($context, array $blocks = array())
    {
        // line 34
        echo "\t<div id=\"graphic\" class=\"spinner big\"></div>
\t<div id=\"status\">";
        // line 35
        echo twig_escape_filter($this->env, \Craft\Craft::t("Checking for updates…"), "html", null, true);
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "updates";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 35,  69 => 34,  66 => 33,  61 => 29,  57 => 3,  36 => 7,  33 => 6,  30 => 5,  28 => 4,  26 => 1,  11 => 3,);
    }
}
/* {% requirePermission 'performUpdates' %}*/
/* */
/* {% extends "_layouts/cp" %}*/
/* {% set title = "Updates"|t %}*/
/* {% includecssresource "css/updates.css" %}*/
/* {% includejsresource "js/updates.js" %}*/
/* {% includeTranslations*/
/* 	"You’ve got updates!",*/
/* 	"You’re all up-to-date!",*/
/* 	"build {build}",*/
/* 	"Critical",*/
/* 	"Update",*/
/* 	"Download",*/
/* 	"Craft’s <a href=\"http://craftcms.com/license\" target=\"_blank\">Terms and Conditions</a> have changed.",*/
/* 	"I agree.",*/
/* 	"Seriously, download.",*/
/* 	"Seriously, update.",*/
/* 	"Install",*/
/* 	"{app} update required",*/
/* 	"Released on {date}",*/
/* 	"Show more",*/
/* 	"Added",*/
/* 	"Improved",*/
/* 	"Fixed",*/
/* 	"Download"*/
/* %}*/
/* */
/* */
/* {% block pageHeader %}*/
/* {% endblock %}*/
/* */
/* */
/* {% block main %}*/
/* 	<div id="graphic" class="spinner big"></div>*/
/* 	<div id="status">{{ "Checking for updates…"|t }}</div>*/
/* {% endblock %}*/
/* */
