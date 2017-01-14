<?php

/* template-home/index.html */
class __TwigTemplate_1dc15afbd82cfb899c3a20bc318a97eaa9f7c43900d98dbd76355fe619b15b26 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layout", "template-home/index.html", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layout";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sproutSeo", array()), "meta", array(0 => array("default" => "default", "title" => "Journal")), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 8
    public function block_content($context, array $blocks = array())
    {
        // line 9
        echo "
<script>
  var template = 'home';
</script>

";
        // line 16
        $this->loadTemplate("components/slug", "template-home/index.html", 16)->display($context);
        // line 19
        echo "
";
    }

    public function getTemplateName()
    {
        return "template-home/index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 19,  41 => 16,  34 => 9,  31 => 8,  27 => 1,  25 => 3,  11 => 1,);
    }
}
/* {% extends "_layout" %}*/
/* */
/* {% do craft.sproutSeo.meta({*/
/*         default: 'default',*/
/*         title: "Journal"*/
/* }) %}*/
/* */
/* {% block content %}*/
/* */
/* <script>*/
/*   var template = 'home';*/
/* </script>*/
/* */
/* {%*/
/* */
/*   include "components/slug"*/
/* */
/* %}*/
/* */
/* {% endblock %}*/
/* */
