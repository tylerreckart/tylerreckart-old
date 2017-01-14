<?php

/* _components/fieldtypes/Date/settings */
class __TwigTemplate_4010d52f1302314bf315dc196cdabbb7a33ca5bec8557e5a434c18748467585c extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/Date/settings", 1);
        // line 2
        echo "
";
        // line 3
        echo $context["forms"]->getradioGroupField(array("id" => "dateTime", "name" => "dateTime", "options" =>         // line 6
(isset($context["options"]) ? $context["options"] : null), "value" =>         // line 7
(isset($context["value"]) ? $context["value"] : null)));
        // line 8
        echo "

";
        // line 10
        echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Minute Increment"), "id" => "minuteIncrement", "name" => "minuteIncrement", "options" =>         // line 14
(isset($context["incrementOptions"]) ? $context["incrementOptions"] : null), "value" => (($this->getAttribute(        // line 15
(isset($context["settings"]) ? $context["settings"] : null), "minuteIncrement", array())) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "minuteIncrement", array())) : (30))));
        // line 16
        echo "
";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/Date/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  36 => 16,  34 => 15,  33 => 14,  32 => 10,  28 => 8,  26 => 7,  25 => 6,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {{ forms.radioGroupField({*/
/* 	id: 'dateTime',*/
/* 	name: 'dateTime',*/
/* 	options: options,*/
/* 	value: value*/
/* }) }}*/
/* */
/* {{ forms.selectField({*/
/* 	label: "Minute Increment"|t,*/
/* 	id: 'minuteIncrement',*/
/* 	name: 'minuteIncrement',*/
/* 	options: incrementOptions,*/
/* 	value: settings.minuteIncrement ? settings.minuteIncrement : 30,*/
/* }) }}*/
/* */
