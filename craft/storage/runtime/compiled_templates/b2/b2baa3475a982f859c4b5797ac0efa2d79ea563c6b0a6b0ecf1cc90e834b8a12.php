<?php

/* _includes/forms/radio */
class __TwigTemplate_d1496a1b2b6649c8182425bf3d8aad302173a6a6dd99f10e5ffefa2ea21c6b0b extends Craft\BaseTemplate
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
        $context["value"] = ((array_key_exists("value", $context)) ? ((isset($context["value"]) ? $context["value"] : null)) : ("1"));
        // line 3
        echo "<label>
\t<input type=\"radio\" value=\"";
        // line 4
        echo twig_escape_filter($this->env, (isset($context["value"]) ? $context["value"] : null), "html", null, true);
        echo "\"";
        // line 5
        if (array_key_exists("id", $context)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 6
        if (array_key_exists("class", $context)) {
            echo " class=\"";
            echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
            echo "\"";
        }
        // line 7
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 8
        if ((array_key_exists("checked", $context) && (isset($context["checked"]) ? $context["checked"] : null))) {
            echo " checked";
        }
        // line 9
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 10
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled";
        }
        echo ">
\t";
        // line 11
        if (array_key_exists("label", $context)) {
            echo (isset($context["label"]) ? $context["label"] : null);
        }
        // line 12
        echo "</label>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/radio";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 12,  59 => 11,  53 => 10,  49 => 9,  45 => 8,  39 => 7,  33 => 6,  27 => 5,  24 => 4,  21 => 3,  19 => 1,);
    }
}
/* {%- set value = (value is defined ? value : '1') -%}*/
/* */
/* <label>*/
/* 	<input type="radio" value="{{ value }}"*/
/* 		{%- if id is defined %} id="{{ id }}"{% endif %}*/
/* 		{%- if class is defined %} class="{{ class }}"{% endif %}*/
/* 		{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 		{%- if checked is defined and checked %} checked{% endif %}*/
/* 		{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 		{%- if disabled is defined and disabled %} disabled{% endif %}>*/
/* 	{% if label is defined %}{{ label|raw }}{% endif %}*/
/* </label>*/
/* */
