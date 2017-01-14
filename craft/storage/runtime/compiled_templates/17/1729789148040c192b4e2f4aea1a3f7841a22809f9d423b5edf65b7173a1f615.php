<?php

/* _includes/forms/lightswitch */
class __TwigTemplate_dd38bed5753fcf28c30e1cdf23410a2271a7376fcd6198713cc3f75eaacdd23f extends Craft\BaseTemplate
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
        $context["on"] = ((array_key_exists("on", $context)) ? ((isset($context["on"]) ? $context["on"] : null)) : (false));
        // line 2
        $context["small"] = ((array_key_exists("small", $context)) ? ((isset($context["small"]) ? $context["small"] : null)) : (false));
        // line 3
        $context["toggle"] = ((array_key_exists("toggle", $context)) ? ((isset($context["toggle"]) ? $context["toggle"] : null)) : (false));
        // line 4
        $context["reverseToggle"] = ((array_key_exists("reverseToggle", $context)) ? ((isset($context["reverseToggle"]) ? $context["reverseToggle"] : null)) : (false));
        // line 5
        $context["disabled"] = ((array_key_exists("disabled", $context)) ? ((isset($context["disabled"]) ? $context["disabled"] : null)) : (false));
        // line 6
        echo "
<div class=\"lightswitch";
        // line 7
        if ((isset($context["on"]) ? $context["on"] : null)) {
            echo " on";
        }
        if ((isset($context["small"]) ? $context["small"] : null)) {
            echo " small";
        }
        if (((isset($context["toggle"]) ? $context["toggle"] : null) || (isset($context["reverseToggle"]) ? $context["reverseToggle"] : null))) {
            echo " fieldtoggle";
        }
        if ((isset($context["disabled"]) ? $context["disabled"] : null)) {
            echo " disabled";
        }
        echo "\" tabindex=\"0\"";
        // line 8
        if ((isset($context["toggle"]) ? $context["toggle"] : null)) {
            echo " data-target=\"";
            echo twig_escape_filter($this->env, (isset($context["toggle"]) ? $context["toggle"] : null), "html", null, true);
            echo "\"";
        }
        // line 9
        if ((isset($context["reverseToggle"]) ? $context["reverseToggle"] : null)) {
            echo " data-reverse-target=\"";
            echo twig_escape_filter($this->env, (isset($context["reverseToggle"]) ? $context["reverseToggle"] : null), "html", null, true);
            echo "\"";
        }
        echo ">
\t<div class=\"lightswitch-container\">
\t\t<div class=\"label on\"></div>
\t\t<div class=\"handle\"></div>
\t\t<div class=\"label off\"></div>
\t</div>
\t";
        // line 15
        if (array_key_exists("name", $context)) {
            // line 16
            echo "<input type=\"hidden\" name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\" value=\"";
            echo (((isset($context["on"]) ? $context["on"] : null)) ? ("1") : (""));
            echo "\"";
            if ((isset($context["disabled"]) ? $context["disabled"] : null)) {
                echo " disabled";
            }
            echo ">";
        }
        // line 18
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/lightswitch";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 18,  67 => 16,  65 => 15,  52 => 9,  46 => 8,  32 => 7,  29 => 6,  27 => 5,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }
}
/* {%- set on = (on is defined ? on : false) %}*/
/* {%- set small = (small is defined ? small : false) %}*/
/* {%- set toggle = (toggle is defined ? toggle : false) %}*/
/* {%- set reverseToggle = (reverseToggle is defined ? reverseToggle : false) %}*/
/* {%- set disabled = (disabled is defined ? disabled : false) %}*/
/* */
/* <div class="lightswitch{% if on %} on{% endif %}{% if small %} small{% endif %}{% if toggle or reverseToggle %} fieldtoggle{% endif %}{% if disabled %} disabled{% endif %}" tabindex="0"*/
/* 	{%- if toggle %} data-target="{{ toggle }}"{% endif %}*/
/* 	{%- if reverseToggle %} data-reverse-target="{{ reverseToggle }}"{% endif %}>*/
/* 	<div class="lightswitch-container">*/
/* 		<div class="label on"></div>*/
/* 		<div class="handle"></div>*/
/* 		<div class="label off"></div>*/
/* 	</div>*/
/* 	{% if name is defined -%}*/
/* 		<input type="hidden" name="{{ name }}" value="{{ on ? '1' }}"{% if disabled %} disabled{% endif %}>*/
/* 	{%- endif %}*/
/* </div>*/
/* */
