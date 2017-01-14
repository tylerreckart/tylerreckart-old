<?php

/* _includes/forms/file */
class __TwigTemplate_a1e168a2c2b73216fb5597e1e9e321312a7a1610112154a6f04a909a890dcd8f extends Craft\BaseTemplate
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
        echo "<input type=\"file\"";
        // line 2
        if (array_key_exists("id", $context)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 3
        if (array_key_exists("class", $context)) {
            echo " class=\"";
            echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
            echo "\"";
        }
        // line 4
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 5
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 6
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled";
        }
        echo ">
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/file";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 6,  39 => 5,  33 => 4,  27 => 3,  21 => 2,  19 => 1,);
    }
}
/* <input type="file"*/
/* 	{%- if id is defined %} id="{{ id }}"{% endif %}*/
/* 	{%- if class is defined %} class="{{ class }}"{% endif %}*/
/* 	{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 	{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 	{%- if disabled is defined and disabled %} disabled{% endif %}>*/
/* */
