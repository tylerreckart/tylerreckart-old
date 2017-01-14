<?php

/* _elements/element */
class __TwigTemplate_cffe462bbbd317195a3ed95d9bf9f84238a78bc027c297d7612ef39d10428f25 extends Craft\BaseTemplate
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
        echo \Craft\craft()->templates->invokeHook("cp.elements.element", $context);

    }

    public function getTemplateName()
    {
        return "_elements/element";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
/* {% hook "cp.elements.element" %}*/
/* */
