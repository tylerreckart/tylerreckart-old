<?php

/* _includes/forms/field */
class __TwigTemplate_4be5e124b77d469cf874e94cb47ba10bcaa292a6751d78283a97e6c3d4709f47 extends Craft\BaseTemplate
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
        $context["fieldId"] = ((array_key_exists("fieldId", $context)) ? ((isset($context["fieldId"]) ? $context["fieldId"] : null)) : (((array_key_exists("id", $context)) ? (((isset($context["id"]) ? $context["id"] : null) . "-field")) : (null))));
        // line 2
        $context["label"] = (((array_key_exists("label", $context) && ((isset($context["label"]) ? $context["label"] : null) != "__blank__"))) ? ((isset($context["label"]) ? $context["label"] : null)) : (null));
        // line 3
        $context["locale"] = ((($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method") && array_key_exists("locale", $context))) ? ((isset($context["locale"]) ? $context["locale"] : null)) : (null));
        // line 4
        $context["instructions"] = ((array_key_exists("instructions", $context)) ? ((isset($context["instructions"]) ? $context["instructions"] : null)) : (null));
        // line 5
        $context["warning"] = ((array_key_exists("warning", $context)) ? ((isset($context["warning"]) ? $context["warning"] : null)) : (null));
        // line 6
        $context["orientation"] = $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleData", array(0 => (((isset($context["locale"]) ? $context["locale"] : null)) ? ((isset($context["locale"]) ? $context["locale"] : null)) : ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array())))), "method"), "getOrientation", array(), "method");
        // line 7
        $context["errors"] = ((array_key_exists("errors", $context)) ? ((isset($context["errors"]) ? $context["errors"] : null)) : (null));
        // line 8
        $context["fieldClass"] = twig_join_filter(array_filter(array(0 => "field", 1 => (((        // line 10
array_key_exists("first", $context) && (isset($context["first"]) ? $context["first"] : null))) ? ("first") : (null)), 2 => ((        // line 11
(isset($context["errors"]) ? $context["errors"] : null)) ? ("has-errors") : (null)), 3 => (((        // line 12
array_key_exists("fieldClass", $context) && (isset($context["fieldClass"]) ? $context["fieldClass"] : null))) ? ((isset($context["fieldClass"]) ? $context["fieldClass"] : null)) : (null)))), " ");
        // line 15
        echo "<div class=\"";
        echo twig_escape_filter($this->env, (isset($context["fieldClass"]) ? $context["fieldClass"] : null), "html", null, true);
        echo "\"";
        if ((isset($context["fieldId"]) ? $context["fieldId"] : null)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["fieldId"]) ? $context["fieldId"] : null), "html", null, true);
            echo "\"";
        }
        echo ">
\t";
        // line 16
        if (((isset($context["label"]) ? $context["label"] : null) || (isset($context["instructions"]) ? $context["instructions"] : null))) {
            // line 17
            echo "\t\t<div class=\"heading\">
\t\t\t";
            // line 18
            if ((isset($context["label"]) ? $context["label"] : null)) {
                // line 19
                echo "\t\t\t\t<label";
                if ((array_key_exists("required", $context) && (isset($context["required"]) ? $context["required"] : null))) {
                    echo " class=\"required\"";
                }
                if ((array_key_exists("id", $context) && (isset($context["id"]) ? $context["id"] : null))) {
                    echo " for=\"";
                    echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
                    echo "\"";
                }
                echo ">";
                // line 20
                echo (isset($context["label"]) ? $context["label"] : null);
                // line 21
                if ((isset($context["locale"]) ? $context["locale"] : null)) {
                    // line 22
                    echo "<span class=\"locale\">";
                    echo twig_escape_filter($this->env, (isset($context["locale"]) ? $context["locale"] : null), "html", null, true);
                    echo "</span>";
                }
                // line 24
                echo "</label>
\t\t\t";
            }
            // line 26
            echo "\t\t\t";
            if ((isset($context["instructions"]) ? $context["instructions"] : null)) {
                // line 27
                echo "\t\t\t\t<div class=\"instructions\">";
                echo $this->env->getExtension('craft')->replaceFilter($this->env->getExtension('craft')->markdownFilter((isset($context["instructions"]) ? $context["instructions"] : null)), "/&amp;(\\w+);/", "&\$1;");
                echo "</div>
\t\t\t";
            }
            // line 29
            echo "\t\t</div>
\t";
        }
        // line 31
        echo "\t<div class=\"input ";
        echo twig_escape_filter($this->env, (isset($context["orientation"]) ? $context["orientation"] : null), "html", null, true);
        if ((isset($context["errors"]) ? $context["errors"] : null)) {
            echo " errors";
        }
        echo "\">
\t\t";
        // line 32
        echo (isset($context["input"]) ? $context["input"] : null);
        echo "
\t</div>
\t";
        // line 34
        if ((isset($context["warning"]) ? $context["warning"] : null)) {
            // line 35
            echo "\t\t<p class=\"warning\">";
            echo twig_escape_filter($this->env, (isset($context["warning"]) ? $context["warning"] : null), "html", null, true);
            echo "</p>
\t";
        }
        // line 37
        echo "\t";
        $this->loadTemplate("_includes/forms/errorList", "_includes/forms/field", 37)->display(array_merge($context, array("errors" => (isset($context["errors"]) ? $context["errors"] : null))));
        // line 38
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_includes/forms/field";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 38,  114 => 37,  108 => 35,  106 => 34,  101 => 32,  93 => 31,  89 => 29,  83 => 27,  80 => 26,  76 => 24,  71 => 22,  69 => 21,  67 => 20,  56 => 19,  54 => 18,  51 => 17,  49 => 16,  38 => 15,  36 => 12,  35 => 11,  34 => 10,  33 => 8,  31 => 7,  29 => 6,  27 => 5,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }
}
/* {%- set fieldId = (fieldId is defined ? fieldId : (id is defined ? id~'-field' : null)) %}*/
/* {%- set label = (label is defined and label != '__blank__' ? label : null) %}*/
/* {%- set locale = ((craft.isLocalized() and locale is defined) ? locale : null) %}*/
/* {%- set instructions = (instructions is defined ? instructions : null) %}*/
/* {%- set warning = (warning is defined ? warning : null) %}*/
/* {%- set orientation = craft.i18n.getLocaleData(locale ?: craft.locale).getOrientation() %}*/
/* {%- set errors = (errors is defined ? errors : null) -%}*/
/* {%- set fieldClass = [*/
/* 	'field',*/
/* 	(first is defined and first ? 'first' : null),*/
/* 	(errors ? 'has-errors' : null),*/
/* 	(fieldClass is defined and fieldClass ? fieldClass : null)*/
/* ]|filter|join(' ') -%}*/
/* */
/* <div class="{{ fieldClass }}"{% if fieldId %} id="{{ fieldId }}"{% endif %}>*/
/* 	{% if label or instructions %}*/
/* 		<div class="heading">*/
/* 			{% if label %}*/
/* 				<label{% if required is defined and required %} class="required"{% endif %}{% if id is defined and id %} for="{{ id }}"{% endif %}>*/
/* 					{{- label|raw -}}*/
/* 					{%- if locale -%}*/
/* 						<span class="locale">{{ locale }}</span>*/
/* 					{%- endif -%}*/
/* 				</label>*/
/* 			{% endif %}*/
/* 			{% if instructions %}*/
/* 				<div class="instructions">{{ instructions|md|replace('/&amp;(\\w+);/', '&$1;')|raw }}</div>*/
/* 			{% endif %}*/
/* 		</div>*/
/* 	{% endif %}*/
/* 	<div class="input {{ orientation }}{% if errors %} errors{% endif %}">*/
/* 		{{ input|raw }}*/
/* 	</div>*/
/* 	{% if warning %}*/
/* 		<p class="warning">{{ warning }}</p>*/
/* 	{% endif %}*/
/* 	{% include "_includes/forms/errorList" with { errors: errors } %}*/
/* </div>*/
/* */
