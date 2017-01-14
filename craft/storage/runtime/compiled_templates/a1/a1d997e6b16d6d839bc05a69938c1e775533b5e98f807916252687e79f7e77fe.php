<?php

/* settings/fields/{{object.groupId|raw}} */
class __TwigTemplate_66b6ab80c6af3c5ee93d34d1f63e543943edef0527365f85af5e674b155fa5eb extends Craft\BaseTemplate
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
        echo "settings/fields/";
        echo $this->getAttribute((isset($context["object"]) ? $context["object"] : null), "groupId", array());
    }

    public function getTemplateName()
    {
        return "settings/fields/{{object.groupId|raw}}";
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
/* settings/fields/{{object.groupId|raw}}*/
