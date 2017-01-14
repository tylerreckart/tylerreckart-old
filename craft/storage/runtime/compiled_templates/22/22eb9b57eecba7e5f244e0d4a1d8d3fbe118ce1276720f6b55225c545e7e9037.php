<?php

/* entries/journal/{{object.id|raw}}-{{object.slug|raw}} */
class __TwigTemplate_b161920924301125118f6aefd57690bdc4c2e73a9a795509a831b05885bcdd5a extends Craft\BaseTemplate
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
        echo "entries/journal/";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "id", array());
        echo "-";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "slug", array());
    }

    public function getTemplateName()
    {
        return "entries/journal/{{object.id|raw}}-{{object.slug|raw}}";
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
/* entries/journal/{{object.id|raw}}-{{object.slug|raw}}*/
