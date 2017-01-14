<?php

/* _includes/forms/date */
class __TwigTemplate_0ef11620c54b1a2d9a3a2ccc603e0fcf098d981e18b61a95c2a1d9ee366c395e extends Craft\BaseTemplate
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
        if ( !array_key_exists("value", $context)) {
            // line 2
            $context["value"] = null;
        }
        // line 5
        $context["id"] = ((isset($context["id"]) ? $context["id"] : null) . "-date");
        // line 7
        if ((array_key_exists("name", $context) && (isset($context["name"]) ? $context["name"] : null))) {
            // line 8
            $context["name"] = ((isset($context["name"]) ? $context["name"] : null) . "[date]");
        }
        // line 11
        echo "<div class=\"datewrapper\">";
        // line 12
        $this->loadTemplate("_includes/forms/text", "_includes/forms/date", 12)->display(array_merge($context, array("autocomplete" => false, "size" => 10, "value" => (((isset($context["value"]) ? $context["value"] : null)) ? ($this->getAttribute((isset($context["value"]) ? $context["value"] : null), "localeDate", array(), "method")) : ("")))));
        // line 13
        echo "</div>";
        // line 15
        ob_start();
        // line 16
        echo "\t\$('#";
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputId((isset($context["id"]) ? $context["id"] : null)), "js"), "html", null, true);
        echo "').datepicker(\$.extend({
\t\tdefaultDate: new Date(";
        // line 17
        if ((isset($context["value"]) ? $context["value"] : null)) {
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["value"]) ? $context["value"] : null), "year", array()), "html", null, true);
            echo ", ";
            echo twig_escape_filter($this->env, ($this->getAttribute((isset($context["value"]) ? $context["value"] : null), "month", array()) - 1), "html", null, true);
            echo ", ";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["value"]) ? $context["value"] : null), "day", array()), "html", null, true);
        }
        echo ")
\t}, Craft.datepickerOptions));";
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
    }

    public function getTemplateName()
    {
        return "_includes/forms/date";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 17,  39 => 16,  37 => 15,  35 => 13,  33 => 12,  31 => 11,  28 => 8,  26 => 7,  24 => 5,  21 => 2,  19 => 1,);
    }
}
/* {% if value is not defined -%}*/
/* 	{% set value = null -%}*/
/* {% endif -%}*/
/* */
/* {% set id = id ~ '-date' -%}*/
/* */
/* {% if name is defined and name -%}*/
/* 	{% set name = name ~ '[date]' -%}*/
/* {% endif -%}*/
/* */
/* <div class="datewrapper">*/
/* 	{%- include "_includes/forms/text" with { autocomplete: false, size: 10, value: (value ? value.localeDate() : '') } -%}*/
/* </div>*/
/* */
/* {%- includejs %}*/
/* 	$('#{{ id|namespaceInputId|e('js') }}').datepicker($.extend({*/
/* 		defaultDate: new Date({% if value %}{{ value.year }}, {{ value.month-1 }}, {{ value.day }}{% endif %})*/
/* 	}, Craft.datepickerOptions));*/
/* {%- endincludejs %}*/
/* */
