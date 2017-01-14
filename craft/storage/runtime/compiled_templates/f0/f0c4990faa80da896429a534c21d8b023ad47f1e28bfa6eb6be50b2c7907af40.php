<?php

/* _components/fieldtypes/PlainText/input */
class __TwigTemplate_d9138700cc28680f7986bd37b241aaf908fc0be9fffac2816fe7dd3e256cf5da extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/PlainText/input", 1);
        // line 2
        echo "
";
        // line 3
        $context["config"] = array("id" =>         // line 4
(isset($context["name"]) ? $context["name"] : null), "name" =>         // line 5
(isset($context["name"]) ? $context["name"] : null), "value" =>         // line 6
(isset($context["value"]) ? $context["value"] : null), "class" => "nicetext", "maxlength" => $this->getAttribute(        // line 8
(isset($context["settings"]) ? $context["settings"] : null), "maxLength", array()), "showCharsLeft" => true, "placeholder" => $this->getAttribute(        // line 10
(isset($context["settings"]) ? $context["settings"] : null), "placeholder", array()), "rows" => $this->getAttribute(        // line 11
(isset($context["settings"]) ? $context["settings"] : null), "initialRows", array()));
        // line 13
        echo "
";
        // line 14
        if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "multiline", array())) {
            // line 15
            echo "\t";
            echo $context["forms"]->gettextarea((isset($context["config"]) ? $context["config"] : null));
            echo "
";
        } else {
            // line 17
            echo "\t";
            echo $context["forms"]->gettext((isset($context["config"]) ? $context["config"] : null));
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/PlainText/input";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 17,  37 => 15,  35 => 14,  32 => 13,  30 => 11,  29 => 10,  28 => 8,  27 => 6,  26 => 5,  25 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% set config = {*/
/* 	id: name,*/
/* 	name: name,*/
/* 	value: value,*/
/* 	class: 'nicetext',*/
/* 	maxlength: settings.maxLength,*/
/* 	showCharsLeft: true,*/
/*     placeholder: settings.placeholder,*/
/* 	rows: settings.initialRows*/
/* } %}*/
/* */
/* {% if settings.multiline %}*/
/* 	{{ forms.textarea(config) }}*/
/* {% else %}*/
/* 	{{ forms.text(config) }}*/
/* {% endif %}*/
/* */
