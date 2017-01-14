<?php

/* journal/{{object.slug|raw}} */
class __TwigTemplate_0e191dc54f5a979bd579db3c51b474c5a1f2d9305879c701764842dd2e43d3ff extends Craft\BaseTemplate
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
        echo "journal/";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "slug", array());
    }

    public function getTemplateName()
    {
        return "journal/{{object.slug|raw}}";
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
/* journal/{{object.slug|raw}}*/
