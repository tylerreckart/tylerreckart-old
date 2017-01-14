<?php

/* _layouts/elementindex */
class __TwigTemplate_a54d762c9cb723376383c3f67360b2961c2fd3997b6e13244e6a9fc95021f912 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "_layouts/elementindex", 1);
        $this->blocks = array(
            'sidebar' => array($this, 'block_sidebar'),
            'content' => array($this, 'block_content'),
            'initJs' => array($this, 'block_initJs'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/cp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["elementTypeClass"] = (isset($context["elementType"]) ? $context["elementType"] : null);
        // line 4
        $context["elementType"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "elements", array()), "getElementType", array(0 => (isset($context["elementTypeClass"]) ? $context["elementTypeClass"] : null)), "method");
        // line 5
        $context["context"] = "index";
        // line 7
        if ( !(isset($context["elementType"]) ? $context["elementType"] : null)) {
            // line 8
            throw new \Craft\HttpException(404);
        }
        // line 11
        $context["sources"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "elementIndexes", array()), "getSources", array(0 => (isset($context["elementTypeClass"]) ? $context["elementTypeClass"] : null), 1 => "index"), "method");
        // line 12
        $context["customizableSources"] = (( !twig_test_empty((isset($context["sources"]) ? $context["sources"] : null)) && ((isset($context["context"]) ? $context["context"] : null) == "index")) && $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "admin", array()));
        // line 43
        $_js = $this->renderBlock("initJs", $context, $blocks);
        \Craft\craft()->templates->includejs($_js);
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 14
    public function block_sidebar($context, array $blocks = array())
    {
        // line 15
        echo "\t";
        if ( !twig_test_empty((isset($context["sources"]) ? $context["sources"] : null))) {
            // line 16
            echo "\t\t<nav>
\t\t\t";
            // line 17
            $this->loadTemplate("_elements/sources", "_layouts/elementindex", 17)->display($context);
            // line 18
            echo "\t\t</nav>

\t\t";
            // line 20
            if ((isset($context["customizableSources"]) ? $context["customizableSources"] : null)) {
                // line 21
                echo "\t\t\t<div class=\"heading\"><span></span></div>
\t\t\t<a class=\"customize-sources settings icon\" title=\"";
                // line 22
                echo twig_escape_filter($this->env, \Craft\Craft::t("Customize sources"), "html", null, true);
                echo "\"></a>
\t\t";
            }
            // line 24
            echo "\t";
        }
    }

    // line 28
    public function block_content($context, array $blocks = array())
    {
        // line 29
        echo "\t<div class=\"elementindex\">
\t\t";
        // line 30
        $this->loadTemplate("_elements/indexcontainer", "_layouts/elementindex", 30)->display($context);
        // line 31
        echo "\t</div>
";
    }

    // line 35
    public function block_initJs($context, array $blocks = array())
    {
        // line 36
        echo "\tCraft.elementIndex = Craft.createElementIndex('";
        echo twig_escape_filter($this->env, (isset($context["elementTypeClass"]) ? $context["elementTypeClass"] : null), "html", null, true);
        echo "', \$('#main'), {
\t\tcontext:        '";
        // line 37
        echo twig_escape_filter($this->env, (isset($context["context"]) ? $context["context"] : null), "html", null, true);
        echo "',
\t\tstorageKey:     'elementindex.";
        // line 38
        echo twig_escape_filter($this->env, (isset($context["elementTypeClass"]) ? $context["elementTypeClass"] : null), "html", null, true);
        echo "',
\t\tcriteria:       { localeEnabled: null }
\t});
";
    }

    public function getTemplateName()
    {
        return "_layouts/elementindex";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 38,  100 => 37,  95 => 36,  92 => 35,  87 => 31,  85 => 30,  82 => 29,  79 => 28,  74 => 24,  69 => 22,  66 => 21,  64 => 20,  60 => 18,  58 => 17,  55 => 16,  52 => 15,  49 => 14,  45 => 1,  42 => 43,  40 => 12,  38 => 11,  35 => 8,  33 => 7,  31 => 5,  29 => 4,  27 => 3,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* */
/* {% set elementTypeClass = elementType %}*/
/* {% set elementType = craft.elements.getElementType(elementTypeClass) %}*/
/* {% set context = 'index' %}*/
/* */
/* {% if not elementType %}*/
/* 	{% exit 404 %}*/
/* {% endif %}*/
/* */
/* {% set sources = craft.elementIndexes.getSources(elementTypeClass, 'index') %}*/
/* {% set customizableSources = (sources is not empty and context == 'index' and currentUser.admin) %}*/
/* */
/* {% block sidebar %}*/
/* 	{% if sources is not empty %}*/
/* 		<nav>*/
/* 			{% include "_elements/sources" %}*/
/* 		</nav>*/
/* */
/* 		{% if customizableSources %}*/
/* 			<div class="heading"><span></span></div>*/
/* 			<a class="customize-sources settings icon" title="{{ 'Customize sources'|t }}"></a>*/
/* 		{% endif %}*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
/* */
/* {% block content %}*/
/* 	<div class="elementindex">*/
/* 		{% include "_elements/indexcontainer" %}*/
/* 	</div>*/
/* {% endblock %}*/
/* */
/* */
/* {% block initJs %}*/
/* 	Craft.elementIndex = Craft.createElementIndex('{{ elementTypeClass }}', $('#main'), {*/
/* 		context:        '{{ context }}',*/
/* 		storageKey:     'elementindex.{{ elementTypeClass }}',*/
/* 		criteria:       { localeEnabled: null }*/
/* 	});*/
/* {% endblock %}*/
/* */
/* {% includejs block('initJs') %}*/
/* */
