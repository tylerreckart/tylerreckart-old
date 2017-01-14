<?php

/* {{object.section.name|raw|raw}} */
class __TwigTemplate_8f00bc67d7cf4fe8983e7b20847b16041e94074a93e83212385194855be7e6b8 extends Craft\BaseTemplate
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
        echo $this->getAttribute($this->getAttribute((isset($context["object"]) ? $context["object"] : null), "section", array()), "name", array());
    }

    public function getTemplateName()
    {
        return "{{object.section.name|raw|raw}}";
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
/* {{object.section.name|raw|raw}}*/
