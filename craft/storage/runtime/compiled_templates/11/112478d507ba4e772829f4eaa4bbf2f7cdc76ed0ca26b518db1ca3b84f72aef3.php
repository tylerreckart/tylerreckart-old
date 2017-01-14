<?php

/* _includes/forms/select */
class __TwigTemplate_f58c514ecc6e04515f8bee0c91f515174adfe1c6c7b60e6d0c1ee3700e1b5421 extends Craft\BaseTemplate
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
        $context["class"] = twig_join_filter(array_filter(array(0 => "select", 1 => ((        // line 3
array_key_exists("class", $context)) ? ((isset($context["class"]) ? $context["class"] : null)) : (null)))), " ");
        // line 6
        $context["options"] = ((array_key_exists("options", $context)) ? ((isset($context["options"]) ? $context["options"] : null)) : (array()));
        // line 7
        $context["value"] = ((array_key_exists("value", $context)) ? ((isset($context["value"]) ? $context["value"] : null)) : (null));
        // line 8
        $context["hasOptgroups"] = false;
        // line 10
        echo "<div class=\"";
        echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
        echo "\">
\t<select";
        // line 12
        if (array_key_exists("id", $context)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 13
        if ((array_key_exists("toggle", $context) && (isset($context["toggle"]) ? $context["toggle"] : null))) {
            echo " class=\"fieldtoggle\"";
        }
        // line 14
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 15
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 16
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled";
        }
        // line 17
        if (array_key_exists("targetPrefix", $context)) {
            echo " data-target-prefix=\"";
            echo twig_escape_filter($this->env, (isset($context["targetPrefix"]) ? $context["targetPrefix"] : null), "html", null, true);
            echo "\"";
        }
        echo ">
\t\t";
        // line 18
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["options"]) ? $context["options"] : null));
        foreach ($context['_seq'] as $context["key"] => $context["option"]) {
            // line 19
            echo "\t\t\t";
            if ($this->getAttribute($context["option"], "optgroup", array(), "any", true, true)) {
                // line 20
                echo "\t\t\t\t";
                if ((isset($context["hasOptgroups"]) ? $context["hasOptgroups"] : null)) {
                    // line 21
                    echo "\t\t\t\t\t</optgroup>
\t\t\t\t";
                } else {
                    // line 23
                    echo "\t\t\t\t\t";
                    $context["hasOptgroups"] = true;
                    // line 24
                    echo "\t\t\t\t";
                }
                // line 25
                echo "\t\t\t\t<optgroup label=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["option"], "optgroup", array()), "html", null, true);
                echo "\">
\t\t\t";
            } else {
                // line 27
                echo "\t\t\t\t";
                $context["optionLabel"] = (($this->getAttribute($context["option"], "label", array(), "any", true, true)) ? ($this->getAttribute($context["option"], "label", array())) : ($context["option"]));
                // line 28
                echo "\t\t\t\t";
                $context["optionValue"] = (($this->getAttribute($context["option"], "value", array(), "any", true, true)) ? ($this->getAttribute($context["option"], "value", array())) : ($context["key"]));
                // line 29
                echo "\t\t\t\t";
                $context["optionDisabled"] = (($this->getAttribute($context["option"], "disabled", array(), "any", true, true)) ? ($this->getAttribute($context["option"], "disabled", array())) : (false));
                // line 30
                echo "\t\t\t\t<option value=\"";
                echo twig_escape_filter($this->env, (isset($context["optionValue"]) ? $context["optionValue"] : null), "html", null, true);
                echo "\"";
                if (((isset($context["optionValue"]) ? $context["optionValue"] : null) == (isset($context["value"]) ? $context["value"] : null))) {
                    echo " selected";
                }
                if ((isset($context["optionDisabled"]) ? $context["optionDisabled"] : null)) {
                    echo " disabled";
                }
                echo ">";
                echo twig_escape_filter($this->env, (isset($context["optionLabel"]) ? $context["optionLabel"] : null), "html", null, true);
                echo "</option>
\t\t\t";
            }
            // line 32
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['option'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "\t\t";
        if ((isset($context["hasOptgroups"]) ? $context["hasOptgroups"] : null)) {
            // line 34
            echo "\t\t\t</optgroup>
\t\t";
        }
        // line 36
        echo "\t</select>
</div>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/select";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 36,  124 => 34,  121 => 33,  115 => 32,  100 => 30,  97 => 29,  94 => 28,  91 => 27,  85 => 25,  82 => 24,  79 => 23,  75 => 21,  72 => 20,  69 => 19,  65 => 18,  57 => 17,  53 => 16,  49 => 15,  43 => 14,  39 => 13,  33 => 12,  28 => 10,  26 => 8,  24 => 7,  22 => 6,  20 => 3,  19 => 1,);
    }
}
/* {%- set class = [*/
/* 	'select',*/
/* 	(class is defined ? class : null)*/
/* ]|filter|join(' ') %}*/
/* */
/* {%- set options = (options is defined ? options : []) %}*/
/* {%- set value = (value is defined ? value : null) %}*/
/* {%- set hasOptgroups = false -%}*/
/* */
/* <div class="{{ class }}">*/
/* 	<select*/
/* 		{%- if id is defined %} id="{{ id }}"{% endif %}*/
/* 		{%- if toggle is defined and toggle %} class="fieldtoggle"{% endif %}*/
/* 		{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 		{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 		{%- if disabled is defined and disabled %} disabled{% endif %}*/
/* 		{%- if targetPrefix is defined %} data-target-prefix="{{ targetPrefix }}"{% endif %}>*/
/* 		{% for key, option in options %}*/
/* 			{% if option.optgroup is defined %}*/
/* 				{% if hasOptgroups %}*/
/* 					</optgroup>*/
/* 				{% else %}*/
/* 					{% set hasOptgroups = true %}*/
/* 				{% endif %}*/
/* 				<optgroup label="{{ option.optgroup }}">*/
/* 			{% else %}*/
/* 				{% set optionLabel = (option.label is defined ? option.label : option) %}*/
/* 				{% set optionValue = (option.value is defined ? option.value : key) %}*/
/* 				{% set optionDisabled = (option.disabled is defined ? option.disabled : false) %}*/
/* 				<option value="{{ optionValue }}"{% if optionValue == value %} selected{% endif %}{% if optionDisabled %} disabled{% endif %}>{{ optionLabel }}</option>*/
/* 			{% endif %}*/
/* 		{% endfor %}*/
/* 		{% if hasOptgroups %}*/
/* 			</optgroup>*/
/* 		{% endif %}*/
/* 	</select>*/
/* </div>*/
/* */
