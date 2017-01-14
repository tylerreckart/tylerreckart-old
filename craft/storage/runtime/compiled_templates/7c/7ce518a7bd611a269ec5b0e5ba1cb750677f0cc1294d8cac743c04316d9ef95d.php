<?php

/* settings/general/_index */
class __TwigTemplate_bdc477da592467c4722859665887bb61c2475de35a82a29ebab4896b3805a3c5 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/general/_index", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/cp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["forms"] = $this->loadTemplate("_includes/forms", "settings/general/_index", 2);
        // line 3
        $context["title"] = \Craft\Craft::t("General Settings");
        // line 4
        $context["fullPageForm"] = true;
        // line 6
        $context["crumbs"] = array(0 => array("label" => \Craft\Craft::t("Settings"), "url" => \Craft\UrlHelper::getUrl("settings")));
        // line 17
        $context["__internal_1be68543b6133de1b66506e143797d5e47e01ba2b5f62ad144b30d4d919bf72b"] = $this;
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 20
    public function block_content($context, array $blocks = array())
    {
        // line 21
        echo "\t<input type=\"hidden\" name=\"action\" value=\"systemSettings/saveGeneralSettings\">
\t<input type=\"hidden\" name=\"redirect\" value=\"settings\">

\t";
        // line 24
        echo $context["forms"]->getlightswitchField(array("first" => true, "label" => \Craft\Craft::t("System Status"), "warning" => (((($this->getAttribute($this->getAttribute(        // line 27
(isset($context["craft"]) ? $context["craft"] : null), "config", array()), "isSystemOn", array()) === true) || ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "isSystemOn", array()) === false))) ? ($context["__internal_1be68543b6133de1b66506e143797d5e47e01ba2b5f62ad144b30d4d919bf72b"]->getconfigWarning("isSystemOn")) : ("")), "id" => "on", "name" => "on", "on" => $this->getAttribute(        // line 30
(isset($context["info"]) ? $context["info"] : null), "on", array())));
        // line 31
        echo "

\t";
        // line 33
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Site Name"), "warning" => (($this->getAttribute($this->getAttribute(        // line 35
(isset($context["craft"]) ? $context["craft"] : null), "config", array()), "siteName", array())) ? ($context["__internal_1be68543b6133de1b66506e143797d5e47e01ba2b5f62ad144b30d4d919bf72b"]->getconfigWarning("siteName")) : ("")), "id" => "siteName", "name" => "siteName", "value" => $this->getAttribute(        // line 38
(isset($context["info"]) ? $context["info"] : null), "siteName", array()), "autofocus" => true, "required" => true, "errors" => $this->getAttribute(        // line 41
(isset($context["info"]) ? $context["info"] : null), "getErrors", array(0 => "siteName"), "method")));
        // line 42
        echo "

\t";
        // line 44
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Site URL"), "warning" => (($this->getAttribute($this->getAttribute(        // line 46
(isset($context["craft"]) ? $context["craft"] : null), "config", array()), "siteUrl", array())) ? ($context["__internal_1be68543b6133de1b66506e143797d5e47e01ba2b5f62ad144b30d4d919bf72b"]->getconfigWarning("siteUrl")) : ("")), "id" => "siteUrl", "class" => "ltr", "name" => "siteUrl", "value" => $this->getAttribute(        // line 50
(isset($context["info"]) ? $context["info"] : null), "siteUrl", array()), "required" => true, "errors" => $this->getAttribute(        // line 52
(isset($context["info"]) ? $context["info"] : null), "getErrors", array(0 => "siteUrl"), "method")));
        // line 53
        echo "

\t";
        // line 55
        echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Timezone"), "warning" => (($this->getAttribute($this->getAttribute(        // line 57
(isset($context["craft"]) ? $context["craft"] : null), "config", array()), "timezone", array())) ? ($context["__internal_1be68543b6133de1b66506e143797d5e47e01ba2b5f62ad144b30d4d919bf72b"]->getconfigWarning("timezone")) : ("")), "id" => "timezone", "name" => "timezone", "value" => $this->getAttribute(        // line 60
(isset($context["info"]) ? $context["info"] : null), "timezone", array()), "options" =>         // line 61
(isset($context["timezoneOptions"]) ? $context["timezoneOptions"] : null)));
        // line 62
        echo "

\t";
        // line 64
        if (((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) >= (isset($context["CraftClient"]) ? $context["CraftClient"] : null))) {
            // line 65
            echo "\t\t<hr>

\t\t";
            // line 67
            \Craft\craft()->templates->includeTranslations(
            	"Are you sure you want to delete the logo?"
            );
            // line 70
            echo "
\t\t";
            // line 71
            $_js = "lib/fileupload/jquery.ui.widget.js";
            \Craft\craft()->templates->includejsresource($_js);
            // line 72
            echo "\t\t";
            $_js = "lib/fileupload/jquery.fileupload.js";
            \Craft\craft()->templates->includejsresource($_js);
            // line 73
            echo "\t\t";
            $_js = "lib/jcrop/jquery.Jcrop.min.js";
            \Craft\craft()->templates->includejsresource($_js);
            // line 74
            echo "\t\t";
            $_js = "js/rebrand.js";
            \Craft\craft()->templates->includejsresource($_js);
            // line 75
            echo "\t\t";
            $_js = "lib/jcrop/jquery.Jcrop.min.css";
            \Craft\craft()->templates->includecssresource($_js);
            // line 76
            echo "\t\t";
            $_js = "css/rebrand.css";
            \Craft\craft()->templates->includecssresource($_js);
            // line 77
            echo "
\t\t";
            // line 78
            echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Login Page Logo")), twig_include($this->env, $context, "settings/general/_images/logo"));
            // line 80
            echo "

\t\t";
            // line 82
            echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Site Icon")), twig_include($this->env, $context, "settings/general/_images/icon"));
            // line 84
            echo "

\t\t<div class=\"clear\"></div>
\t";
        }
    }

    // line 11
    public function getconfigWarning($__setting__ = null, $__file__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "setting" => $__setting__,
            "file" => $__file__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 12
            echo \Craft\Craft::t("This is being overridden by the {setting} config setting.", array("setting" => (((("<a href=\"http://craftcms.com/docs/config-settings#" .             // line 13
(isset($context["setting"]) ? $context["setting"] : null)) . "\" target=\"_blank\">") . (isset($context["setting"]) ? $context["setting"] : null)) . "</a>")));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "settings/general/_index";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  151 => 13,  150 => 12,  137 => 11,  129 => 84,  127 => 82,  123 => 80,  121 => 78,  118 => 77,  114 => 76,  110 => 75,  106 => 74,  102 => 73,  98 => 72,  95 => 71,  92 => 70,  88 => 67,  84 => 65,  82 => 64,  78 => 62,  76 => 61,  75 => 60,  74 => 57,  73 => 55,  69 => 53,  67 => 52,  66 => 50,  65 => 46,  64 => 44,  60 => 42,  58 => 41,  57 => 38,  56 => 35,  55 => 33,  51 => 31,  49 => 30,  48 => 27,  47 => 24,  42 => 21,  39 => 20,  35 => 1,  33 => 17,  31 => 6,  29 => 4,  27 => 3,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* {% import "_includes/forms" as forms %}*/
/* {% set title = "General Settings"|t %}*/
/* {% set fullPageForm = true %}*/
/* */
/* {% set crumbs = [*/
/* 	{ label: "Settings"|t, url: url('settings') }*/
/* ] %}*/
/* */
/* */
/* {% macro configWarning(setting, file) -%}*/
/* 	{{ "This is being overridden by the {setting} config setting."|t({*/
/* 		setting: '<a href="http://craftcms.com/docs/config-settings#'~setting~'" target="_blank">'~setting~'</a>'*/
/* 	})|raw }}*/
/* {%- endmacro %}*/
/* */
/* {% from _self import configWarning %}*/
/* */
/* */
/* {% block content %}*/
/* 	<input type="hidden" name="action" value="systemSettings/saveGeneralSettings">*/
/* 	<input type="hidden" name="redirect" value="settings">*/
/* */
/* 	{{ forms.lightswitchField({*/
/* 		first: true,*/
/* 		label: "System Status"|t,*/
/* 		warning: (craft.config.isSystemOn is sameas(true) or craft.config.isSystemOn is sameas(false) ? configWarning('isSystemOn')),*/
/* 		id: 'on',*/
/* 		name: 'on',*/
/* 		on: info.on*/
/* 	}) }}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Site Name"|t,*/
/* 		warning: (craft.config.siteName ? configWarning('siteName')),*/
/* 		id: 'siteName',*/
/* 		name: 'siteName',*/
/* 		value: info.siteName,*/
/* 		autofocus: true,*/
/* 		required: true,*/
/* 		errors: info.getErrors('siteName')*/
/* 	}) }}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Site URL"|t,*/
/* 		warning: (craft.config.siteUrl ? configWarning('siteUrl')),*/
/* 		id: 'siteUrl',*/
/* 		class: 'ltr',*/
/* 		name: 'siteUrl',*/
/* 		value: info.siteUrl,*/
/* 		required: true,*/
/* 		errors: info.getErrors('siteUrl')*/
/* 	}) }}*/
/* */
/* 	{{ forms.selectField({*/
/* 		label: "Timezone"|t,*/
/* 		warning: (craft.config.timezone ? configWarning('timezone')),*/
/* 		id: 'timezone',*/
/* 		name: 'timezone',*/
/* 		value: info.timezone,*/
/* 		options: timezoneOptions*/
/* 	}) }}*/
/* */
/* 	{% if CraftEdition >= CraftClient %}*/
/* 		<hr>*/
/* */
/* 		{% includeTranslations*/
/* 			"Are you sure you want to delete the logo?"*/
/* 		%}*/
/* */
/* 		{% includejsresource "lib/fileupload/jquery.ui.widget.js" %}*/
/* 		{% includejsresource "lib/fileupload/jquery.fileupload.js" %}*/
/* 		{% includejsresource "lib/jcrop/jquery.Jcrop.min.js" %}*/
/* 		{% includejsresource "js/rebrand.js" %}*/
/* 		{% includecssresource "lib/jcrop/jquery.Jcrop.min.css" %}*/
/* 		{% includecssresource "css/rebrand.css" %}*/
/* */
/* 		{{ forms.field({*/
/* 			label: "Login Page Logo"|t*/
/* 		}, include('settings/general/_images/logo')) }}*/
/* */
/* 		{{ forms.field({*/
/* 			label: "Site Icon"|t*/
/* 		}, include('settings/general/_images/icon')) }}*/
/* */
/* 		<div class="clear"></div>*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
