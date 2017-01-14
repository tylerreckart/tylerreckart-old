<?php

/* _includes/forms/checkboxSelect */
class __TwigTemplate_05cb346359a39b6823bd70f9ee6d32408612dc5c8293edeea82524467abe339f extends Craft\BaseTemplate
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
        $context["options"] = ((array_key_exists("options", $context)) ? ((isset($context["options"]) ? $context["options"] : null)) : (array()));
        // line 2
        $context["values"] = ((array_key_exists("values", $context)) ? ((isset($context["values"]) ? $context["values"] : null)) : (array()));
        // line 4
        $context["showAllOption"] = ((array_key_exists("showAllOption", $context)) ? ((isset($context["showAllOption"]) ? $context["showAllOption"] : null)) : (true));
        // line 5
        if ((isset($context["showAllOption"]) ? $context["showAllOption"] : null)) {
            // line 6
            $context["allLabel"] = ((array_key_exists("allLabel", $context)) ? ((isset($context["allLabel"]) ? $context["allLabel"] : null)) : (\Craft\Craft::t("All")));
            // line 7
            $context["allValue"] = ((array_key_exists("allValue", $context)) ? ((isset($context["allValue"]) ? $context["allValue"] : null)) : ("*"));
            // line 8
            $context["allChecked"] = (twig_test_empty((isset($context["values"]) ? $context["values"] : null)) || ((isset($context["values"]) ? $context["values"] : null) == (isset($context["allValue"]) ? $context["allValue"] : null)));
        }
        // line 10
        echo "
<div class=\"checkbox-select";
        // line 11
        if (array_key_exists("class", $context)) {
            echo " ";
            echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
        }
        echo "\">";
        // line 12
        if ((isset($context["showAllOption"]) ? $context["showAllOption"] : null)) {
            // line 13
            echo "\t\t<div>
\t\t\t";
            // line 14
            $this->loadTemplate("_includes/forms/checkbox", "_includes/forms/checkboxSelect", 14)->display(array("id" => ((            // line 15
array_key_exists("id", $context)) ? ((isset($context["id"]) ? $context["id"] : null)) : (null)), "class" => "all", "label" => (("<b>" .             // line 17
(isset($context["allLabel"]) ? $context["allLabel"] : null)) . "</b>"), "name" => ((            // line 18
array_key_exists("name", $context)) ? ((isset($context["name"]) ? $context["name"] : null)) : (null)), "value" =>             // line 19
(isset($context["allValue"]) ? $context["allValue"] : null), "checked" =>             // line 20
(isset($context["allChecked"]) ? $context["allChecked"] : null), "autofocus" => ((            // line 21
array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))));
            // line 23
            echo "\t\t</div>";
        }
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["options"]) ? $context["options"] : null));
        foreach ($context['_seq'] as $context["key"] => $context["option"]) {
            // line 26
            $context["optionLabel"] = (($this->getAttribute($context["option"], "label", array(), "any", true, true)) ? ($this->getAttribute($context["option"], "label", array())) : ($context["option"]));
            // line 27
            $context["optionValue"] = (($this->getAttribute($context["option"], "value", array(), "any", true, true)) ? ($this->getAttribute($context["option"], "value", array())) : ($context["key"]));
            // line 28
            if (( !(isset($context["showAllOption"]) ? $context["showAllOption"] : null) || ((isset($context["optionValue"]) ? $context["optionValue"] : null) != (isset($context["allValue"]) ? $context["allValue"] : null)))) {
                // line 29
                echo "\t\t\t<div>
\t\t\t\t";
                // line 30
                $this->loadTemplate("_includes/forms/checkbox", "_includes/forms/checkboxSelect", 30)->display(array("label" =>                 // line 31
(isset($context["optionLabel"]) ? $context["optionLabel"] : null), "name" => ((                // line 32
array_key_exists("name", $context)) ? (((isset($context["name"]) ? $context["name"] : null) . "[]")) : (null)), "value" =>                 // line 33
(isset($context["optionValue"]) ? $context["optionValue"] : null), "checked" => ((                // line 34
(isset($context["showAllOption"]) ? $context["showAllOption"] : null) && (isset($context["allChecked"]) ? $context["allChecked"] : null)) || twig_in_filter((isset($context["optionValue"]) ? $context["optionValue"] : null), (isset($context["values"]) ? $context["values"] : null))), "disabled" => (                // line 35
(isset($context["showAllOption"]) ? $context["showAllOption"] : null) && (isset($context["allChecked"]) ? $context["allChecked"] : null))));
                // line 37
                echo "\t\t\t</div>
\t\t";
            }
            // line 39
            echo "\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['option'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/checkboxSelect";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  89 => 40,  83 => 39,  79 => 37,  77 => 35,  76 => 34,  75 => 33,  74 => 32,  73 => 31,  72 => 30,  69 => 29,  67 => 28,  65 => 27,  63 => 26,  59 => 25,  56 => 23,  54 => 21,  53 => 20,  52 => 19,  51 => 18,  50 => 17,  49 => 15,  48 => 14,  45 => 13,  43 => 12,  37 => 11,  34 => 10,  31 => 8,  29 => 7,  27 => 6,  25 => 5,  23 => 4,  21 => 2,  19 => 1,);
    }
}
/* {%- set options = (options is defined ? options : []) %}*/
/* {%- set values = (values is defined ? values : []) -%}*/
/* */
/* {%- set showAllOption  = (showAllOption is defined ? showAllOption : true) %}*/
/* {%- if showAllOption %}*/
/* 	{%- set allLabel = (allLabel is defined ? allLabel : "All"|t) %}*/
/* 	{%- set allValue = (allValue is defined ? allValue : '*') %}*/
/* 	{%- set allChecked = (values is empty or values == allValue) %}*/
/* {%- endif %}*/
/* */
/* <div class="checkbox-select{% if class is defined %} {{ class }}{% endif %}">*/
/* 	{%- if showAllOption %}*/
/* 		<div>*/
/* 			{% include "_includes/forms/checkbox" with {*/
/* 				id:        (id is defined ? id : null),*/
/* 				class:     'all',*/
/* 				label:     '<b>' ~ allLabel ~ '</b>',*/
/* 				name:      (name is defined ? name : null),*/
/* 				value:     allValue,*/
/* 				checked:   allChecked,*/
/* 				autofocus: (autofocus is defined and autofocus and not craft.request.isMobileBrowser(true))*/
/* 			} only %}*/
/* 		</div>*/
/* 	{%- endif %}*/
/* 	{%- for key, option in options %}*/
/* 		{%- set optionLabel = (option.label is defined ? option.label : option) %}*/
/* 		{%- set optionValue = (option.value is defined ? option.value : key) -%}*/
/* 		{% if not showAllOption or optionValue != allValue %}*/
/* 			<div>*/
/* 				{% include "_includes/forms/checkbox" with {*/
/* 					label:    optionLabel,*/
/* 					name:     (name is defined ? name~'[]' : null),*/
/* 					value:    optionValue,*/
/* 					checked:  ((showAllOption and allChecked) or optionValue in values),*/
/* 					disabled: (showAllOption and allChecked)*/
/* 				} only %}*/
/* 			</div>*/
/* 		{% endif %}*/
/* 	{% endfor %}*/
/* </div>*/
/* */
