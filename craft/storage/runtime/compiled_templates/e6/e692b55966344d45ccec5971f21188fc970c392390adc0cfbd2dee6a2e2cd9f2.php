<?php

/* login */
class __TwigTemplate_d60d11d6a4d86f99978054d2fac6b8417b47d1a38df24c7a77c7025a7fb69dd7 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/basecp", "login", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/basecp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["forms"] = $this->loadTemplate("_includes/forms", "login", 2);
        // line 3
        $context["title"] = \Craft\Craft::t("Login");
        // line 4
        $context["bodyClass"] = "login";
        // line 5
        $_js = "css/login.css";
        \Craft\craft()->templates->includecssresource($_js);
        // line 6
        $_js = "js/login.js";
        \Craft\craft()->templates->includejsresource($_js);
        // line 7
        \Craft\craft()->templates->includeTranslations(
        	"Reset Password",
        	"Check your email for instructions to reset your password."
        );
        // line 12
        $context["username"] = (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "rememberUsernameDuration", array())) ? ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "session", array()), "rememberedUsername", array())) : (""));
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 14
    public function block_body($context, array $blocks = array())
    {
        // line 15
        echo "    <script type=\"text/javascript\">
\t\tvar cookieTest = 'CraftCookieTest='+Math.floor(Math.random() * 1000000);
\t\tdocument.cookie = cookieTest;
\t\tvar cookiesEnabled = document.cookie.search(cookieTest) != -1;
\t\tif (cookiesEnabled)
\t\t{
\t\t\tdocument.cookie = cookieTest + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

\t\t\tdocument.write(
\t\t\t\t'";
        // line 24
        $context["hasLogo"] = (((((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) >= (isset($context["CraftClient"]) ? $context["CraftClient"] : null)) && $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "rebrand", array()), "isLogoUploaded", array()))) ? (true) : (false));
        echo "'+
\t\t\t\t'<form id=\"login-form\" method=\"post\" accept-charset=\"UTF-8\" ";
        // line 25
        if ((isset($context["hasLogo"]) ? $context["hasLogo"] : null)) {
            // line 26
            $context["logo"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "rebrand", array()), "logo", array());
            // line 27
            $context["padding"] = ($this->getAttribute((isset($context["logo"]) ? $context["logo"] : null), "height", array()) + 30);
            // line 28
            echo "class=\"has-logo\" style=\"background-image: url(\\'";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["logo"]) ? $context["logo"] : null), "url", array()), "html", null, true);
            echo "\\'); background-size: ";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["logo"]) ? $context["logo"] : null), "width", array()), "html", null, true);
            echo "px ";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["logo"]) ? $context["logo"] : null), "height", array()), "html", null, true);
            echo "px; padding-top: ";
            echo twig_escape_filter($this->env, (isset($context["padding"]) ? $context["padding"] : null), "html", null, true);
            echo "px; margin-top: -";
            echo twig_escape_filter($this->env, round(((353 + (isset($context["padding"]) ? $context["padding"] : null)) / 2)), "html", null, true);
            echo "px\"";
        }
        // line 29
        echo ">' +
\t\t\t\t\t'";
        // line 30
        if ( !(isset($context["hasLogo"]) ? $context["hasLogo"] : null)) {
            echo "<h1>";
            echo twig_escape_filter($this->env, (isset($context["siteName"]) ? $context["siteName"] : null), "html", null, true);
            echo "</h1>";
        }
        echo "'+
\t\t\t\t\t'";
        // line 31
        $context["placeHolderText"] = (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "useEmailAsUsername", array())) ? (\Craft\Craft::t("Email")) : (\Craft\Craft::t("Username or Email")));
        echo "' +
\t\t\t\t\t'";
        // line 32
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["forms"]->gettextField(array("id" => "loginName", "name" => "username", "placeholder" => (isset($context["placeHolderText"]) ? $context["placeHolderText"] : null), "value" => (isset($context["username"]) ? $context["username"] : null))), "js"), "html", null, true);
        echo "' +

\t\t\t\t\t'<div id=\"login-fields\" class=\"nested-fields\">' +
\t\t\t\t\t\t'";
        // line 35
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["forms"]->getpasswordField(array("id" => "password", "name" => "password", "placeholder" => \Craft\Craft::t("Password"))), "js"), "html", null, true);
        echo "' +
\t\t\t\t\t\t'<a id=\"forgot-password\">";
        // line 36
        echo twig_escape_filter($this->env, \Craft\Craft::t("Forget your password?"), "html", null, true);
        echo "</a>' +
\t\t\t\t\t\t";
        // line 37
        if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "rememberedUserSessionDuration", array())) {
            // line 38
            echo "\t\t\t\t\t\t\t'";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, $context["forms"]->getcheckboxField(array("id" => "rememberMe", "label" => \Craft\Craft::t("Keep me logged in"))), "js"), "html", null, true);
            echo "' +
\t\t\t\t\t\t";
        }
        // line 40
        echo "\t\t\t\t\t'</div>' +

\t\t\t\t\t'<div class=\"buttons\">' +
\t\t\t\t\t\t'";
        // line 43
        echo "' +
\t\t\t\t\t\t'<input id=\"submit\" class=\"btn submit disabled\" type=\"submit\" value=\"";
        // line 44
        echo twig_escape_filter($this->env, \Craft\Craft::t("Login"), "html", null, true);
        echo "\">' +
\t\t\t\t\t\t'<div id=\"spinner\" class=\"spinner hidden\"></div>' +
\t\t\t\t\t'</div>' +
\t\t\t\t\t'<a id=\"poweredby\" href=\"http://craftcms.com/\" title=\"";
        // line 47
        echo twig_escape_filter($this->env, \Craft\Craft::t("Powered by Craft CMS"), "html", null, true);
        echo "\"><img src=\"";
        echo twig_escape_filter($this->env, \Craft\UrlHelper::getResourceUrl("images/craftcms.svg"), "html", null, true);
        echo "\" /></a>'+
\t\t\t\t'</form>'
\t\t\t);

\t\t\t";
        // line 51
        if ( !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method")) {
            // line 52
            echo "\t\t\t\tdocument.getElementById(\"";
            echo (((isset($context["username"]) ? $context["username"] : null)) ? ("password") : ("loginName"));
            echo "\").focus();
\t\t\t";
        }
        // line 54
        echo "\t\t}
\t\telse
\t\t{
\t\t\tdocument.write(
\t\t\t\t'<div class=\"no-access\">' +
\t\t\t\t\t'<div class=\"pane\">' +
\t\t\t\t\t\t'<div class=\"pane-body\">' +
\t\t\t\t\t\t\t'<div class=\"notice\">' +
\t\t\t\t\t\t\t\t'<div class=\"icon\"></div>' +
\t\t\t\t\t\t\t\t'<p>";
        // line 63
        echo twig_escape_filter($this->env, \Craft\Craft::t("Cookies must be enabled to access the Craft CMS control panel."), "html", null, true);
        echo "<br>' +
\t\t\t\t\t\t\t\t\t'<a class=\"go nowrap\" href=\"\">";
        // line 64
        echo twig_escape_filter($this->env, \Craft\Craft::t("See how"), "html", null, true);
        echo "</a>' +
\t\t\t\t\t\t\t\t'</p>' +
\t\t\t\t\t\t\t'</div>' +
\t\t\t\t\t\t'</div>' +
\t\t\t\t\t'</div>' +
\t\t\t\t'</div>'
\t\t\t);
\t\t}
\t</script>
";
    }

    public function getTemplateName()
    {
        return "login";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  168 => 64,  164 => 63,  153 => 54,  147 => 52,  145 => 51,  136 => 47,  130 => 44,  127 => 43,  122 => 40,  116 => 38,  114 => 37,  110 => 36,  106 => 35,  100 => 32,  96 => 31,  88 => 30,  85 => 29,  72 => 28,  70 => 27,  68 => 26,  66 => 25,  62 => 24,  51 => 15,  48 => 14,  44 => 1,  42 => 12,  37 => 7,  34 => 6,  31 => 5,  29 => 4,  27 => 3,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/basecp" %}*/
/* {% import "_includes/forms" as forms %}*/
/* {% set title = "Login"|t %}*/
/* {% set bodyClass = 'login' %}*/
/* {% includecssresource "css/login.css" %}*/
/* {% includejsresource "js/login.js" %}*/
/* {% includeTranslations*/
/* 	"Reset Password",*/
/* 	"Check your email for instructions to reset your password."*/
/* %}*/
/* */
/* {% set username = (craft.config.rememberUsernameDuration ? craft.session.rememberedUsername : '') %}*/
/* */
/* {% block body %}*/
/*     <script type="text/javascript">*/
/* 		var cookieTest = 'CraftCookieTest='+Math.floor(Math.random() * 1000000);*/
/* 		document.cookie = cookieTest;*/
/* 		var cookiesEnabled = document.cookie.search(cookieTest) != -1;*/
/* 		if (cookiesEnabled)*/
/* 		{*/
/* 			document.cookie = cookieTest + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
/* */
/* 			document.write(*/
/* 				'{%- set hasLogo = (CraftEdition >= CraftClient and craft.rebrand.isLogoUploaded ? true : false) -%}'+*/
/* 				'<form id="login-form" method="post" accept-charset="UTF-8" {% if hasLogo -%}*/
/* 						{%- set logo = craft.rebrand.logo -%}*/
/* 						{%- set padding = logo.height + 30 -%}*/
/* 						class="has-logo" style="background-image: url(\'{{ logo.url }}\'); background-size: {{ logo.width }}px {{ logo.height }}px; padding-top: {{ padding }}px; margin-top: -{{ round((353+padding)/2) }}px"*/
/* 					{%- endif %}>' +*/
/* 					'{% if not hasLogo -%}<h1>{{ siteName }}</h1>{%- endif %}'+*/
/* 					'{% set placeHolderText = (craft.config.useEmailAsUsername ? "Email"|t : "Username or Email"|t) %}' +*/
/* 					'{{ forms.textField({ id: "loginName", name: "username", placeholder: placeHolderText, value: username })|e("js") }}' +*/
/* */
/* 					'<div id="login-fields" class="nested-fields">' +*/
/* 						'{{ forms.passwordField({ id: "password", name: "password", placeholder: "Password"|t })|e("js") }}' +*/
/* 						'<a id="forgot-password">{{ "Forget your password?"|t }}</a>' +*/
/* 						{% if craft.config.rememberedUserSessionDuration %}*/
/* 							'{{ forms.checkboxField({ id: "rememberMe", label: "Keep me logged in"|t })|e("js") }}' +*/
/* 						{% endif %}*/
/* 					'</div>' +*/
/* */
/* 					'<div class="buttons">' +*/
/* 						'{# <div id="ssl-icon" class="disabled"><div class="{{ craft.request.isSecure ? "secure" : "insecure" }} icon"></div></div>#}' +*/
/* 						'<input id="submit" class="btn submit disabled" type="submit" value="{{ "Login"|t }}">' +*/
/* 						'<div id="spinner" class="spinner hidden"></div>' +*/
/* 					'</div>' +*/
/* 					'<a id="poweredby" href="http://craftcms.com/" title="{{ "Powered by Craft CMS"|t }}"><img src="{{ resourceUrl("images/craftcms.svg") }}" /></a>'+*/
/* 				'</form>'*/
/* 			);*/
/* */
/* 			{% if not craft.request.isMobileBrowser(true) %}*/
/* 				document.getElementById("{{ (username ? 'password' : 'loginName') }}").focus();*/
/* 			{% endif %}*/
/* 		}*/
/* 		else*/
/* 		{*/
/* 			document.write(*/
/* 				'<div class="no-access">' +*/
/* 					'<div class="pane">' +*/
/* 						'<div class="pane-body">' +*/
/* 							'<div class="notice">' +*/
/* 								'<div class="icon"></div>' +*/
/* 								'<p>{{ "Cookies must be enabled to access the Craft CMS control panel."|t }}<br>' +*/
/* 									'<a class="go nowrap" href="">{{ "See how"|t }}</a>' +*/
/* 								'</p>' +*/
/* 							'</div>' +*/
/* 						'</div>' +*/
/* 					'</div>' +*/
/* 				'</div>'*/
/* 			);*/
/* 		}*/
/* 	</script>*/
/* {% endblock %}*/
/* */
