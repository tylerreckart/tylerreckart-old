<?php

/* entries/about/{{object.id|raw}}-{{object.slug|raw}} */
class __TwigTemplate_9a88624a5c2e4c46f759e62ffd64d54c3b85f01d85c3f62c51438001968fe886 extends Craft\BaseTemplate
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
        echo "entries/about/";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "id", array());
        echo "-";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "slug", array());
    }

    public function getTemplateName()
    {
        return "entries/about/{{object.id|raw}}-{{object.slug|raw}}";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
/* entries/about/{{object.id|raw}}-{{object.slug|raw}}*/
