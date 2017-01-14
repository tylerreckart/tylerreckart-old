<?php

/* _includes/forms/textarea */
class __TwigTemplate_bf09f57f9eaba938ab2864ba1542f4ba76b67312f646b8f37e6885fd95e9e0b0 extends Craft\BaseTemplate
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
        $context["class"] = twig_join_filter(array_filter(array(0 => "text", 1 => (((        // line 3
array_key_exists("class", $context) && (isset($context["class"]) ? $context["class"] : null))) ? ((isset($context["class"]) ? $context["class"] : null)) : (null)), 2 => (((        // line 4
array_key_exists("placeholder", $context) && (isset($context["placeholder"]) ? $context["placeholder"] : null))) ? ("nicetext") : (null)), 3 => (((        // line 5
array_key_exists("size", $context) && (isset($context["size"]) ? $context["size"] : null))) ? (null) : ("fullwidth")))), " ");
        // line 8
        $context["rows"] = ((array_key_exists("rows", $context)) ? ((isset($context["rows"]) ? $context["rows"] : null)) : (2));
        // line 9
        $context["cols"] = ((array_key_exists("cols", $context)) ? ((isset($context["cols"]) ? $context["cols"] : null)) : (50));
        // line 11
        echo "<textarea class=\"";
        echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
        echo "\" rows=\"";
        echo twig_escape_filter($this->env, (isset($context["rows"]) ? $context["rows"] : null), "html", null, true);
        echo "\" cols=\"";
        echo twig_escape_filter($this->env, (isset($context["cols"]) ? $context["cols"] : null), "html", null, true);
        echo "\"";
        // line 12
        if (array_key_exists("id", $context)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 13
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 14
        if ((array_key_exists("maxlength", $context) && (isset($context["maxlength"]) ? $context["maxlength"] : null))) {
            echo " maxlength=\"";
            echo twig_escape_filter($this->env, (isset($context["maxlength"]) ? $context["maxlength"] : null), "html", null, true);
            echo "\"";
        }
        // line 15
        if ((array_key_exists("showCharsLeft", $context) && (isset($context["showCharsLeft"]) ? $context["showCharsLeft"] : null))) {
            echo " data-show-chars-left";
        }
        // line 16
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 17
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled";
        }
        // line 18
        if (array_key_exists("placeholder", $context)) {
            echo " placeholder=\"";
            echo twig_escape_filter($this->env, (isset($context["placeholder"]) ? $context["placeholder"] : null), "html", null, true);
            echo "\"";
        }
        echo ">";
        echo twig_escape_filter($this->env, ((array_key_exists("value", $context)) ? ((isset($context["value"]) ? $context["value"] : null)) : (null)), "html", null, true);
        echo "</textarea>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/textarea";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 18,  62 => 17,  58 => 16,  54 => 15,  48 => 14,  42 => 13,  36 => 12,  28 => 11,  26 => 9,  24 => 8,  22 => 5,  21 => 4,  20 => 3,  19 => 1,);
    }
}
/* {%- set class = [*/
/* 	'text',*/
/* 	(class is defined and class ? class : null),*/
/* 	(placeholder is defined and placeholder ? 'nicetext' : null),*/
/* 	(size is defined and size ? null : 'fullwidth')*/
/* ]|filter|join(' ') %}*/
/* */
/* {%- set rows = (rows is defined ? rows : 2) %}*/
/* {%- set cols = (cols is defined ? cols : 50) -%}*/
/* */
/* <textarea class="{{ class }}" rows="{{ rows }}" cols="{{ cols }}"*/
/* 	{%- if id is defined %} id="{{ id }}"{% endif %}*/
/* 	{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 	{%- if maxlength is defined and maxlength %} maxlength="{{ maxlength }}"{% endif %}*/
/* 	{%- if showCharsLeft is defined and showCharsLeft %} data-show-chars-left{% endif %}*/
/* 	{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 	{%- if disabled is defined and disabled %} disabled{% endif %}*/
/* 	{%- if placeholder is defined %} placeholder="{{ placeholder }}"{% endif %}>{{ value is defined ? value : null }}</textarea>*/
/* */
