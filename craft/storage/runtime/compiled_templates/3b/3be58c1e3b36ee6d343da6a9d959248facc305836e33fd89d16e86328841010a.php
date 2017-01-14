<?php

/* _includes/forms/time */
class __TwigTemplate_b51c9de262b6f6a6107671860910154438ccbf01a739d3a76424ad971e77f696 extends Craft\BaseTemplate
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
        $context["id"] = ((isset($context["id"]) ? $context["id"] : null) . "-time");
        // line 7
        if ((array_key_exists("name", $context) && (isset($context["name"]) ? $context["name"] : null))) {
            // line 8
            $context["name"] = ((isset($context["name"]) ? $context["name"] : null) . "[time]");
        }
        // line 11
        $_js = (("lib/jquery.timepicker/jquery.timepicker" . (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "useCompressedJs", array())) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js);
        // line 13
        if ( !array_key_exists("value", $context)) {
            // line 14
            $context["value"] = null;
        }
        // line 17
        echo "<div class=\"timewrapper\">";
        // line 18
        $this->loadTemplate("_includes/forms/text", "_includes/forms/time", 18)->display(array_merge($context, array("autocomplete" => false, "size" => 10, "value" => ((((isset($context["value"]) ? $context["value"] : null) && $this->getAttribute((isset($context["value"]) ? $context["value"] : null), "localeTime", array(), "any", true, true))) ? ($this->getAttribute((isset($context["value"]) ? $context["value"] : null), "localeTime", array(), "method")) : ((isset($context["value"]) ? $context["value"] : null))))));
        // line 19
        echo "</div>";
        // line 21
        $context["localeData"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleData", array(), "method");
        // line 23
        ob_start();
        // line 24
        echo "\tvar \$timePicker = \$('#";
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputId((isset($context["id"]) ? $context["id"] : null)), "js"), "html", null, true);
        echo "');
\t\$timePicker.timepicker({
\t\ttimeFormat: '";
        // line 26
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "timepickerJsFormat", array()), "html", null, true);
        echo "',
\t\tcloseOnWindowScroll: false,
\t\torientation: '";
        // line 28
        echo ((($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getOrientation", array(), "method") == "ltr")) ? ("l") : ("r"));
        echo "',
\t\t";
        // line 29
        if (array_key_exists("minuteIncrement", $context)) {
            echo "step: '";
            echo twig_escape_filter($this->env, (isset($context["minuteIncrement"]) ? $context["minuteIncrement"] : null), "html", null, true);
            echo "',";
        }
        // line 30
        echo "\t\tlang: {
\t\t\tam: '";
        // line 31
        echo twig_escape_filter($this->env, twig_lower_filter($this->env, $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getAMName", array(), "method")), "html", null, true);
        echo "',
\t\t\tAM: '";
        // line 32
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getAMName", array(), "method"), "html", null, true);
        echo "',
\t\t\tpm: '";
        // line 33
        echo twig_escape_filter($this->env, twig_lower_filter($this->env, $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getPMName", array(), "method")), "html", null, true);
        echo "',
\t\t\tPM: '";
        // line 34
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getPMName", array(), "method"), "html", null, true);
        echo "'
\t\t}
\t});

\t";
        // line 38
        if (((isset($context["value"]) ? $context["value"] : null) && $this->getAttribute((isset($context["value"]) ? $context["value"] : null), "format", array(), "any", true, true))) {
            // line 39
            echo "\t\t\$timePicker.timepicker('setTime', ";
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->dateFilter($this->env, (isset($context["value"]) ? $context["value"] : null), "G"), "html", null, true);
            echo "*3600 + ";
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->dateFilter($this->env, (isset($context["value"]) ? $context["value"] : null), "i"), "html", null, true);
            echo "*60 + ";
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->dateFilter($this->env, (isset($context["value"]) ? $context["value"] : null), "s"), "html", null, true);
            echo ");
\t";
        }
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
    }

    public function getTemplateName()
    {
        return "_includes/forms/time";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 39,  92 => 38,  85 => 34,  81 => 33,  77 => 32,  73 => 31,  70 => 30,  64 => 29,  60 => 28,  55 => 26,  49 => 24,  47 => 23,  45 => 21,  43 => 19,  41 => 18,  39 => 17,  36 => 14,  34 => 13,  31 => 11,  28 => 8,  26 => 7,  24 => 5,  21 => 2,  19 => 1,);
    }
}
/* {% if value is not defined -%}*/
/* 	{% set value = null -%}*/
/* {% endif -%}*/
/* */
/* {% set id = id ~ '-time' -%}*/
/* */
/* {% if name is defined and name -%}*/
/* 	{% set name = name ~ '[time]' -%}*/
/* {% endif -%}*/
/* */
/* {% includejsresource 'lib/jquery.timepicker/jquery.timepicker'~(craft.config.useCompressedJs ? '.min' : '')~'.js' -%}*/
/* */
/* {% if value is not defined -%}*/
/* 	{% set value = null -%}*/
/* {% endif -%}*/
/* */
/* <div class="timewrapper">*/
/* 	{%- include "_includes/forms/text" with { autocomplete: false, size: 10, value: (value and value.localeTime is defined ? value.localeTime() : value) } -%}*/
/* </div>*/
/* */
/* {%-	set localeData = craft.i18n.getLocaleData() %}*/
/* */
/* {%- includejs %}*/
/* 	var $timePicker = $('#{{ id|namespaceInputId|e('js') }}');*/
/* 	$timePicker.timepicker({*/
/* 		timeFormat: '{{ craft.i18n.timepickerJsFormat }}',*/
/* 		closeOnWindowScroll: false,*/
/* 		orientation: '{{ localeData.getOrientation() == 'ltr' ? 'l' : 'r' }}',*/
/* 		{% if minuteIncrement is defined %}step: '{{ minuteIncrement }}',{% endif %}*/
/* 		lang: {*/
/* 			am: '{{ localeData.getAMName()|lower }}',*/
/* 			AM: '{{ localeData.getAMName() }}',*/
/* 			pm: '{{ localeData.getPMName()|lower }}',*/
/* 			PM: '{{ localeData.getPMName() }}'*/
/* 		}*/
/* 	});*/
/* */
/* 	{% if value and value.format is defined %}*/
/* 		$timePicker.timepicker('setTime', {{ value|date('G') }}*3600 + {{ value|date('i') }}*60 + {{ value|date('s') }});*/
/* 	{% endif %}*/
/* */
/* {%- endincludejs %}*/
/* */
