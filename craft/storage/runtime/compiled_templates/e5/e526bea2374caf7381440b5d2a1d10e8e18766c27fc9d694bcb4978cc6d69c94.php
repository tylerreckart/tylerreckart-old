<?php

/* entries/_titlefield */
class __TwigTemplate_06cf57e8c0b8eb4d1b33b3bbd492b8b87ed86b5cc6caf6138d786fea2608014a extends Craft\BaseTemplate
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
        $context["__internal_cf7ec6a3199f7b66f974c990a49f5754dbb1b616c7d46d0f6e800df1f46d43a0"] = $this->loadTemplate("_includes/forms", "entries/_titlefield", 1);
        // line 2
        $context["static"] = ((array_key_exists("static", $context)) ? ((isset($context["static"]) ? $context["static"] : null)) : (false));
        // line 3
        echo "
";
        // line 4
        echo $context["__internal_cf7ec6a3199f7b66f974c990a49f5754dbb1b616c7d46d0f6e800df1f46d43a0"]->gettextField(array("label" => \Craft\Craft::t($this->getAttribute($this->getAttribute(        // line 5
(isset($context["entry"]) ? $context["entry"] : null), "getType", array(), "method"), "titleLabel", array())), "locale" => $this->getAttribute(        // line 6
(isset($context["entry"]) ? $context["entry"] : null), "locale", array()), "id" => "title", "name" => "title", "value" => $this->getAttribute(        // line 9
(isset($context["entry"]) ? $context["entry"] : null), "title", array()), "errors" => (( !        // line 10
(isset($context["static"]) ? $context["static"] : null)) ? ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getErrors", array(0 => "title"), "method")) : ("")), "first" => true, "autofocus" => true, "required" =>  !        // line 13
(isset($context["static"]) ? $context["static"] : null), "disabled" =>         // line 14
(isset($context["static"]) ? $context["static"] : null), "maxlength" => 255));
        // line 16
        echo "
";
    }

    public function getTemplateName()
    {
        return "entries/_titlefield";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  34 => 16,  32 => 14,  31 => 13,  30 => 10,  29 => 9,  28 => 6,  27 => 5,  26 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% from "_includes/forms" import textField %}*/
/* {% set static = static is defined ? static : false %}*/
/* */
/* {{ textField({*/
/* 	label: entry.getType().titleLabel|t,*/
/* 	locale: entry.locale,*/
/* 	id: 'title',*/
/* 	name: 'title',*/
/* 	value: entry.title,*/
/* 	errors: (not static ? entry.getErrors('title')),*/
/* 	first: true,*/
/* 	autofocus: true,*/
/* 	required: (not static),*/
/* 	disabled: static,*/
/* 	maxlength: 255*/
/* }) }}*/
/* */
