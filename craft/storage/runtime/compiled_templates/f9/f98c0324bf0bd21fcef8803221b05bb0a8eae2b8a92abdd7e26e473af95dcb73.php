<?php

/*  */
class __TwigTemplate_68316efec8ed545033063337b35657d570192bebf59c091432caf0af9f078729 extends Craft\BaseTemplate
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
        \Craft\craft()->request->redirect(\Craft\UrlHelper::getUrl((($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "postCpLoginRedirect", array())) ? ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "postCpLoginRedirect", array())) : ("dashboard"))), true, 302);
    }

    public function getTemplateName()
    {
        return "";
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
/* {% redirect craft.config.postCpLoginRedirect ?: 'dashboard' %}*/
/* */
