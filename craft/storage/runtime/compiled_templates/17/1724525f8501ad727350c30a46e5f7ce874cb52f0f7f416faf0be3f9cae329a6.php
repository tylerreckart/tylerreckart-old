<?php

/* _includes/forms/checkbox */
class __TwigTemplate_1d442a9a21604c43dde69c1ecb3e5dac8202253b38c8d9a04ff2faba4941ccc6 extends Craft\BaseTemplate
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
        ob_start();
        // line 2
        echo "
";
        // line 3
        $context["class"] = twig_join_filter(array_filter(array(0 => ((        // line 4
array_key_exists("class", $context)) ? ((isset($context["class"]) ? $context["class"] : null)) : (null)), 1 => ((((        // line 5
array_key_exists("toggle", $context) &&  !twig_test_empty((isset($context["toggle"]) ? $context["toggle"] : null))) || (array_key_exists("reverseToggle", $context) &&  !twig_test_empty((isset($context["reverseToggle"]) ? $context["reverseToggle"] : null))))) ? ("fieldtoggle") : (null)), 2 => "checkbox")), " ");
        // line 8
        echo "
";
        // line 9
        $context["value"] = ((array_key_exists("value", $context)) ? ((isset($context["value"]) ? $context["value"] : null)) : (1));
        // line 10
        $context["id"] = (((array_key_exists("id", $context) && (isset($context["id"]) ? $context["id"] : null))) ? ((isset($context["id"]) ? $context["id"] : null)) : (("checkbox" . twig_random($this->env))));
        // line 11
        $context["label"] = ((array_key_exists("label", $context)) ? ((isset($context["label"]) ? $context["label"] : null)) : (""));
        // line 12
        echo "
";
        // line 13
        if ((array_key_exists("name", $context) && ((twig_length_filter($this->env, (isset($context["name"]) ? $context["name"] : null)) < 3) || (twig_slice($this->env, (isset($context["name"]) ? $context["name"] : null),  -2) != "[]")))) {
            // line 14
            echo "\t<input type=\"hidden\" name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\" value=\"\">
";
        }
        // line 16
        echo "
<input type=\"checkbox\" value=\"";
        // line 17
        echo twig_escape_filter($this->env, (isset($context["value"]) ? $context["value"] : null), "html", null, true);
        echo "\"";
        // line 18
        if ((isset($context["id"]) ? $context["id"] : null)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 19
        echo "\tclass=\"";
        echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
        echo "\"";
        // line 20
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 21
        if ((array_key_exists("checked", $context) && (isset($context["checked"]) ? $context["checked"] : null))) {
            echo " checked";
        }
        // line 22
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 23
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled";
        }
        // line 24
        if (array_key_exists("toggle", $context)) {
            echo " data-target=\"";
            echo twig_escape_filter($this->env, (isset($context["toggle"]) ? $context["toggle"] : null), "html", null, true);
            echo "\"";
        }
        // line 25
        if (array_key_exists("reverseToggle", $context)) {
            echo " data-reverse-target=\"";
            echo twig_escape_filter($this->env, (isset($context["reverseToggle"]) ? $context["reverseToggle"] : null), "html", null, true);
            echo "\"";
        }
        echo ">

<label for=\"";
        // line 27
        echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
        echo "\">";
        echo (isset($context["label"]) ? $context["label"] : null);
        echo "</label>

";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    public function getTemplateName()
    {
        return "_includes/forms/checkbox";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 27,  88 => 25,  82 => 24,  78 => 23,  74 => 22,  70 => 21,  64 => 20,  60 => 19,  54 => 18,  51 => 17,  48 => 16,  42 => 14,  40 => 13,  37 => 12,  35 => 11,  33 => 10,  31 => 9,  28 => 8,  26 => 5,  25 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {%- spaceless %}*/
/* */
/* {% set class = [*/
/* 	(class is defined ? class : null),*/
/* 	((toggle is defined and toggle is not empty) or (reverseToggle is defined and reverseToggle is not empty) ? 'fieldtoggle' : null),*/
/* 	'checkbox'*/
/* ]|filter|join(' ') %}*/
/* */
/* {% set value = (value is defined ? value : 1) %}*/
/* {% set id = (id is defined and id ? id : 'checkbox'~random()) %}*/
/* {% set label = (label is defined ? label) %}*/
/* */
/* {% if name is defined and (name|length < 3 or name|slice(-2) != '[]') %}*/
/* 	<input type="hidden" name="{{ name }}" value="">*/
/* {% endif %}*/
/* */
/* <input type="checkbox" value="{{ value }}"*/
/* 	{%- if id %} id="{{ id }}"{% endif %}*/
/* 	class="{{ class }}"*/
/* 	{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 	{%- if checked is defined and checked %} checked{% endif %}*/
/* 	{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 	{%- if disabled is defined and disabled %} disabled{% endif %}*/
/* 	{%- if toggle is defined %} data-target="{{ toggle }}"{% endif %}*/
/* 	{%- if reverseToggle is defined %} data-reverse-target="{{ reverseToggle }}"{% endif %}>*/
/* */
/* <label for="{{ id }}">{{ label|raw }}</label>*/
/* */
/* {% endspaceless -%}*/
/* */
