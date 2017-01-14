<?php

/* _includes/forms/text */
class __TwigTemplate_170b9227e79b380d120bc1469b41a07bdf5e45266d51604207b7b2de99975bef extends Craft\BaseTemplate
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
        $context["type"] = ((array_key_exists("type", $context)) ? ((isset($context["type"]) ? $context["type"] : null)) : ("text"));
        // line 3
        $context["class"] = twig_join_filter(array_filter(array(0 => "text", 1 => (((        // line 5
array_key_exists("class", $context) && (isset($context["class"]) ? $context["class"] : null))) ? ((isset($context["class"]) ? $context["class"] : null)) : (null)), 2 => (((        // line 6
array_key_exists("type", $context) && ((isset($context["type"]) ? $context["type"] : null) == "password"))) ? ("password") : (null)), 3 => (((        // line 7
array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) ? ("disabled") : (null)), 4 => (((        // line 8
array_key_exists("size", $context) && (isset($context["size"]) ? $context["size"] : null))) ? (null) : ("fullwidth")))), " ");
        // line 11
        if ((((array_key_exists("showCharsLeft", $context) && (isset($context["showCharsLeft"]) ? $context["showCharsLeft"] : null)) && array_key_exists("maxlength", $context)) && (isset($context["maxlength"]) ? $context["maxlength"] : null))) {
            // line 12
            $context["style"] = (((("padding-" . ((($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleData", array(), "method"), "getOrientation", array(), "method") == "ltr")) ? ("right") : ("left"))) . ": ") . ((7.2 * twig_length_filter($this->env, (isset($context["maxlength"]) ? $context["maxlength"] : null))) + 14)) . "px;");
        }
        // line 15
        if (((isset($context["type"]) ? $context["type"] : null) == "password")) {
            echo "<div class=\"passwordwrapper\">";
        }
        // line 16
        echo "<input class=\"";
        echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true);
        echo "\" type=\"";
        echo twig_escape_filter($this->env, (isset($context["type"]) ? $context["type"] : null), "html", null, true);
        echo "\"";
        // line 17
        if (array_key_exists("style", $context)) {
            echo " style=\"";
            echo twig_escape_filter($this->env, (isset($context["style"]) ? $context["style"] : null), "html", null, true);
            echo "\"";
        }
        // line 18
        if (array_key_exists("id", $context)) {
            echo " id=\"";
            echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
            echo "\"";
        }
        // line 19
        if (array_key_exists("size", $context)) {
            echo " size=\"";
            echo twig_escape_filter($this->env, (isset($context["size"]) ? $context["size"] : null), "html", null, true);
            echo "\"";
        }
        // line 20
        if (array_key_exists("name", $context)) {
            echo " name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\"";
        }
        // line 21
        if (array_key_exists("value", $context)) {
            echo " value=\"";
            echo twig_escape_filter($this->env, (isset($context["value"]) ? $context["value"] : null), "html", null, true);
            echo "\"";
        }
        // line 22
        if ((array_key_exists("maxlength", $context) && (isset($context["maxlength"]) ? $context["maxlength"] : null))) {
            echo " maxlength=\"";
            echo twig_escape_filter($this->env, (isset($context["maxlength"]) ? $context["maxlength"] : null), "html", null, true);
            echo "\"";
        }
        // line 23
        if ((array_key_exists("showCharsLeft", $context) && (isset($context["showCharsLeft"]) ? $context["showCharsLeft"] : null))) {
            echo " data-show-chars-left";
        }
        // line 24
        if (((array_key_exists("autofocus", $context) && (isset($context["autofocus"]) ? $context["autofocus"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method"))) {
            echo " autofocus";
        }
        // line 25
        if (( !array_key_exists("autocomplete", $context) ||  !(isset($context["autocomplete"]) ? $context["autocomplete"] : null))) {
            echo " autocomplete=\"off\"";
        }
        // line 26
        if ((array_key_exists("disabled", $context) && (isset($context["disabled"]) ? $context["disabled"] : null))) {
            echo " disabled ";
        }
        // line 27
        if ((array_key_exists("readonly", $context) && (isset($context["readonly"]) ? $context["readonly"] : null))) {
            echo " readonly ";
        }
        // line 28
        if (array_key_exists("title", $context)) {
            echo " title=\"";
            echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
            echo "\"";
        }
        // line 29
        if (array_key_exists("placeholder", $context)) {
            echo " placeholder=\"";
            echo twig_escape_filter($this->env, (isset($context["placeholder"]) ? $context["placeholder"] : null), "html", null, true);
            echo "\"";
        }
        echo ">";
        // line 30
        if (((isset($context["type"]) ? $context["type"] : null) == "password")) {
            echo "</div>";
        }
    }

    public function getTemplateName()
    {
        return "_includes/forms/text";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  111 => 30,  104 => 29,  98 => 28,  94 => 27,  90 => 26,  86 => 25,  82 => 24,  78 => 23,  72 => 22,  66 => 21,  60 => 20,  54 => 19,  48 => 18,  42 => 17,  36 => 16,  32 => 15,  29 => 12,  27 => 11,  25 => 8,  24 => 7,  23 => 6,  22 => 5,  21 => 3,  19 => 1,);
    }
}
/* {%- set type = (type is defined ? type : 'text') %}*/
/* */
/* {%- set class = [*/
/* 	'text',*/
/* 	(class is defined and class ? class : null),*/
/* 	(type is defined and type == 'password' ? 'password' : null),*/
/* 	(disabled is defined and disabled ? 'disabled' : null),*/
/* 	(size is defined and size ? null : 'fullwidth')*/
/* ]|filter|join(' ') %}*/
/* */
/* {%- if showCharsLeft is defined and showCharsLeft and maxlength is defined and maxlength %}*/
/* 	{%- set style = 'padding-'~(craft.i18n.getLocaleData().getOrientation() == 'ltr' ? 'right' : 'left')~': '~(7.2*maxlength|length+14)~'px;' %}*/
/* {%- endif %}*/
/* */
/* {%- if type == 'password' %}<div class="passwordwrapper">{% endif -%}*/
/* <input class="{{ class }}" type="{{ type }}"*/
/* 	{%- if style is defined %} style="{{ style }}"{% endif %}*/
/* 	{%- if id is defined %} id="{{ id }}"{% endif %}*/
/* 	{%- if size is defined %} size="{{ size }}"{% endif %}*/
/* 	{%- if name is defined %} name="{{ name }}"{% endif %}*/
/* 	{%- if value is defined %} value="{{ value }}"{% endif %}*/
/* 	{%- if maxlength is defined and maxlength %} maxlength="{{ maxlength }}"{% endif %}*/
/* 	{%- if showCharsLeft is defined and showCharsLeft %} data-show-chars-left{% endif %}*/
/* 	{%- if autofocus is defined and autofocus and not craft.request.isMobileBrowser(true) %} autofocus{% endif %}*/
/* 	{%- if autocomplete is not defined or not autocomplete %} autocomplete="off"{% endif %}*/
/* 	{%- if disabled is defined and disabled %} disabled {% endif %}*/
/* 	{%- if readonly is defined and readonly %} readonly {% endif %}*/
/* 	{%- if title is defined %} title="{{ title }}"{% endif %}*/
/* 	{%- if placeholder is defined %} placeholder="{{ placeholder }}"{% endif %}>*/
/* {%- if type == 'password' %}</div>{% endif %}*/
/* */
