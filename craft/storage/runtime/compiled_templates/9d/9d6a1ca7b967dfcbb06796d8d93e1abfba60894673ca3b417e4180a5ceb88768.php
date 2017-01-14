<?php

/* _components/widgets/GetHelp/body */
class __TwigTemplate_a1d47565c6c5bf5e42c19828249671945770d41f26d0669d840257d7d21cb40f extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/widgets/GetHelp/body", 1);
        // line 2
        echo "
<form method=\"post\" accept-charset=\"UTF-8\" enctype=\"multipart/form-data\">
\t";
        // line 4
        $context["fromEmail"] = ((array_key_exists("getHelp", $context)) ? ($this->getAttribute((isset($context["getHelp"]) ? $context["getHelp"] : null), "fromEmail", array())) : ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "email", array())));
        // line 5
        echo "
\t";
        // line 6
        if ((((isset($context["fromEmail"]) ? $context["fromEmail"] : null) == "support@pixelandtonic.com") || ((isset($context["fromEmail"]) ? $context["fromEmail"] : null) == "support@craftcms.com"))) {
            // line 7
            echo "\t\t";
            $context["fromEmail"] = "";
            // line 8
            echo "\t";
        }
        // line 9
        echo "
\t";
        // line 10
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Your Email"), "class" => "fromEmail", "name" => "fromEmail", "value" =>         // line 14
(isset($context["fromEmail"]) ? $context["fromEmail"] : null), "errors" => ((        // line 15
array_key_exists("getHelp", $context)) ? ($this->getAttribute((isset($context["getHelp"]) ? $context["getHelp"] : null), "getErrors", array(0 => "fromEmail"), "method")) : (""))));
        // line 16
        echo "

\t";
        // line 18
        echo $context["forms"]->gettextareaField(array("label" => \Craft\Craft::t("Message"), "class" => "message", "name" => "message", "placeholder" => \Craft\Craft::t("Tell us about your problems."), "rows" => 4));
        // line 24
        echo "

\t<a class=\"fieldtoggle\" data-target=\"gethelp-more\">";
        // line 26
        echo twig_escape_filter($this->env, \Craft\Craft::t("More"), "html", null, true);
        echo "</a>

\t<div id=\"gethelp-more\" class=\"hidden\">
\t\t";
        // line 29
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Attach error logs?"), "class" => "attachLogs", "name" => "attachLogs", "checked" => true));
        // line 34
        echo "

\t\t";
        // line 36
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Attach a database backup?"), "class" => "attachDbBackup", "name" => "attachDbBackup", "checked" => $this->getAttribute($this->getAttribute(        // line 40
(isset($context["craft"]) ? $context["craft"] : null), "config", array()), "backupDbOnUpdate", array())));
        // line 41
        echo "

\t\t";
        // line 43
        echo $context["forms"]->getcheckboxField(array("name" => "attachTemplates", "checked" => true, "class" => "attachTemplates", "label" => \Craft\Craft::t("Include your template files?")));
        // line 48
        echo "

\t\t";
        // line 50
        echo $context["forms"]->getfileField(array("label" => \Craft\Craft::t("Attach an additional file?"), "class" => "attachAdditionalFile", "name" => "attachAdditionalFile"));
        // line 54
        echo "
\t</div>

\t<div class=\"buttons last\">
\t\t<input type=\"submit\" class=\"btn submit\" value=\"";
        // line 58
        echo twig_escape_filter($this->env, \Craft\Craft::t("Send"), "html", null, true);
        echo "\">
\t\t<div class=\"spinner hidden\"></div>
\t</div>

\t";
        // line 62
        $context["email"] = ('' === $tmp = "<a href=\"mailto:support@craftcms.com\">support@craftcms.com</a>") ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 63
        echo "\t<p class=\"error hidden\">";
        echo \Craft\Craft::t("Couldn’t send your message. Please email it to {email} instead.", array("email" => (isset($context["email"]) ? $context["email"] : null)));
        echo "</p>
</form>
";
    }

    public function getTemplateName()
    {
        return "_components/widgets/GetHelp/body";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 63,  95 => 62,  88 => 58,  82 => 54,  80 => 50,  76 => 48,  74 => 43,  70 => 41,  68 => 40,  67 => 36,  63 => 34,  61 => 29,  55 => 26,  51 => 24,  49 => 18,  45 => 16,  43 => 15,  42 => 14,  41 => 10,  38 => 9,  35 => 8,  32 => 7,  30 => 6,  27 => 5,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* <form method="post" accept-charset="UTF-8" enctype="multipart/form-data">*/
/* 	{% set fromEmail = getHelp is defined ? getHelp.fromEmail : currentUser.email %}*/
/* */
/* 	{% if fromEmail == "support@pixelandtonic.com" or fromEmail == "support@craftcms.com" %}*/
/* 		{% set fromEmail = "" %}*/
/* 	{% endif %}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Your Email"|t,*/
/* 		class: 'fromEmail',*/
/* 		name: 'fromEmail',*/
/* 		value: fromEmail,*/
/* 		errors: getHelp is defined ? getHelp.getErrors('fromEmail') : ''*/
/* 	}) }}*/
/* */
/* 	{{ forms.textareaField({*/
/* 		label: "Message"|t,*/
/* 		class: 'message',*/
/* 		name: 'message',*/
/* 		placeholder: "Tell us about your problems."|t,*/
/* 		rows: 4*/
/* 	}) }}*/
/* */
/* 	<a class="fieldtoggle" data-target="gethelp-more">{{ "More"|t }}</a>*/
/* */
/* 	<div id="gethelp-more" class="hidden">*/
/* 		{{ forms.checkboxField({*/
/* 			label: "Attach error logs?"|t,*/
/* 			class: 'attachLogs',*/
/* 			name: 'attachLogs',*/
/* 			checked: true*/
/* 		}) }}*/
/* */
/* 		{{ forms.checkboxField({*/
/* 			label: "Attach a database backup?"|t,*/
/* 			class: 'attachDbBackup',*/
/* 			name: 'attachDbBackup',*/
/* 			checked: craft.config.backupDbOnUpdate,*/
/* 		}) }}*/
/* */
/* 		{{ forms.checkboxField({*/
/* 			name: 'attachTemplates',*/
/* 			checked: true,*/
/* 			class: 'attachTemplates',*/
/* 			label: "Include your template files?"|t,*/
/* 		}) }}*/
/* */
/* 		{{ forms.fileField({*/
/* 			label: "Attach an additional file?"|t,*/
/* 			class: 'attachAdditionalFile',*/
/* 			name: 'attachAdditionalFile',*/
/* 		}) }}*/
/* 	</div>*/
/* */
/* 	<div class="buttons last">*/
/* 		<input type="submit" class="btn submit" value="{{ 'Send'|t }}">*/
/* 		<div class="spinner hidden"></div>*/
/* 	</div>*/
/* */
/* 	{% set email %}<a href="mailto:support@craftcms.com">support@craftcms.com</a>{% endset %}*/
/* 	<p class="error hidden">{{ "Couldn’t send your message. Please email it to {email} instead."|t({ email: email })|raw }}</p>*/
/* </form>*/
/* */
