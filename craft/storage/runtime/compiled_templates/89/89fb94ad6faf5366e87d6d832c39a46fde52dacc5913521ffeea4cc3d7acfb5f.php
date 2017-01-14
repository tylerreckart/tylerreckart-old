<?php

/* _components/widgets/Feed/settings */
class __TwigTemplate_4d0c512d3c550b107cdaa46db81fb6dbbe7a5dc6d44c409c8a1a6b3d523e1443 extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/widgets/Feed/settings", 1);
        // line 2
        echo "

";
        // line 4
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("URL"), "id" => "url", "name" => "url", "value" => $this->getAttribute(        // line 8
(isset($context["settings"]) ? $context["settings"] : null), "url", array()), "required" => true, "errors" => $this->getAttribute(        // line 10
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "url"), "method")));
        // line 11
        echo "


";
        // line 14
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Title"), "id" => "title", "name" => "title", "value" => $this->getAttribute(        // line 18
(isset($context["settings"]) ? $context["settings"] : null), "title", array()), "required" => true, "errors" => $this->getAttribute(        // line 20
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "title"), "method")));
        // line 21
        echo "


";
        // line 24
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Limit"), "id" => "limit", "name" => "limit", "value" => $this->getAttribute(        // line 28
(isset($context["settings"]) ? $context["settings"] : null), "limit", array()), "size" => 2, "errors" => $this->getAttribute(        // line 30
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "limit"), "method")));
        // line 31
        echo "
";
    }

    public function getTemplateName()
    {
        return "_components/widgets/Feed/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 31,  45 => 30,  44 => 28,  43 => 24,  38 => 21,  36 => 20,  35 => 18,  34 => 14,  29 => 11,  27 => 10,  26 => 8,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* */
/* {{ forms.textField({*/
/* 	label: "URL"|t,*/
/* 	id: 'url',*/
/* 	name: 'url',*/
/* 	value: settings.url,*/
/* 	required: true,*/
/* 	errors: settings.getErrors('url')*/
/* }) }}*/
/* */
/* */
/* {{ forms.textField({*/
/* 	label: "Title"|t,*/
/* 	id: 'title',*/
/* 	name: 'title',*/
/* 	value: settings.title,*/
/* 	required: true,*/
/* 	errors: settings.getErrors('title')*/
/* }) }}*/
/* */
/* */
/* {{ forms.textField({*/
/* 	label: "Limit"|t,*/
/* 	id: 'limit',*/
/* 	name: 'limit',*/
/* 	value: settings.limit,*/
/* 	size: 2,*/
/* 	errors: settings.getErrors('limit')*/
/* }) }}*/
/* */
