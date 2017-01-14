<?php

/* _components/fieldtypes/PlainText/settings */
class __TwigTemplate_bb8ec58caebbd493b5cfabe8cb29a20ad103f9f1285c84d8f15a30c0da90646a extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/PlainText/settings", 1);
        // line 2
        echo "

";
        // line 4
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Placeholder Text"), "instructions" => \Craft\Craft::t("The text that will be shown if the field doesn’t have a value."), "id" => "placeholder", "name" => "placeholder", "value" => $this->getAttribute(        // line 9
(isset($context["settings"]) ? $context["settings"] : null), "placeholder", array()), "translatable" => true, "errors" => $this->getAttribute(        // line 11
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "placeholder"), "method")));
        // line 12
        echo "

";
        // line 14
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Max Length"), "instructions" => \Craft\Craft::t("The maximum length of characters the field is allowed to have."), "id" => "maxLength", "name" => "maxLength", "value" => $this->getAttribute(        // line 19
(isset($context["settings"]) ? $context["settings"] : null), "maxLength", array()), "size" => 3, "errors" => $this->getAttribute(        // line 21
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "maxLength"), "method")));
        // line 22
        echo "

";
        // line 24
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Allow line breaks"), "name" => "multiline", "checked" => $this->getAttribute(        // line 27
(isset($context["settings"]) ? $context["settings"] : null), "multiline", array()), "toggle" => "initialRowsContainer"));
        // line 29
        echo "


<div id=\"initialRowsContainer\" class=\"nested-fields";
        // line 32
        if ( !$this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "multiline", array())) {
            echo " hidden";
        }
        echo "\">
\t";
        // line 33
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Initial Rows"), "id" => "initialRows", "name" => "initialRows", "value" => $this->getAttribute(        // line 37
(isset($context["settings"]) ? $context["settings"] : null), "initialRows", array()), "size" => 3, "errors" => $this->getAttribute(        // line 39
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "initialRows"), "method")));
        // line 40
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/PlainText/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 40,  57 => 39,  56 => 37,  55 => 33,  49 => 32,  44 => 29,  42 => 27,  41 => 24,  37 => 22,  35 => 21,  34 => 19,  33 => 14,  29 => 12,  27 => 11,  26 => 9,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* */
/* {{ forms.textField({*/
/* 	label: "Placeholder Text"|t,*/
/*     instructions: "The text that will be shown if the field doesn’t have a value."|t,*/
/* 	id: 'placeholder',*/
/* 	name: 'placeholder',*/
/* 	value: settings.placeholder,*/
/* 	translatable: true,*/
/* 	errors: settings.getErrors('placeholder')*/
/* }) }}*/
/* */
/* {{ forms.textField({*/
/* 	label: "Max Length"|t,*/
/* 	instructions: "The maximum length of characters the field is allowed to have."|t,*/
/* 	id: 'maxLength',*/
/* 	name: 'maxLength',*/
/* 	value: settings.maxLength,*/
/* 	size: 3,*/
/* 	errors: settings.getErrors('maxLength')*/
/* }) }}*/
/* */
/* {{ forms.checkboxField({*/
/* 	label: "Allow line breaks"|t,*/
/* 	name: 'multiline',*/
/* 	checked: settings.multiline,*/
/* 	toggle: 'initialRowsContainer'*/
/* }) }}*/
/* */
/* */
/* <div id="initialRowsContainer" class="nested-fields{% if not settings.multiline %} hidden{% endif %}">*/
/* 	{{ forms.textField({*/
/* 		label: "Initial Rows"|t,*/
/* 		id: 'initialRows',*/
/* 		name: 'initialRows',*/
/* 		value: settings.initialRows,*/
/* 		size: 3,*/
/* 		errors: settings.getErrors('initialRows')*/
/* 	}) }}*/
/* </div>*/
/* */
