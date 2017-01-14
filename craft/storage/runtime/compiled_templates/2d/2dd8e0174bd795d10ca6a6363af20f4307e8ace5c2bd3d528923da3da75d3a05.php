<?php

/* template-blog/index.html */
class __TwigTemplate_c93707789777074ba1a1e69456762986a3fb16472c9a56980e866a38a81d66ea extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layout", "template-blog/index.html", 1);
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
        $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sproutSeo", array()), "meta", array(0 => array("default" => "default", "title" => $this->getAttribute(        // line 5
(isset($context["entry"]) ? $context["entry"] : null), "heading", array()))), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 8
    public function block_content($context, array $blocks = array())
    {
        // line 9
        echo "
<script>
  var template = 'blog';
</script>

";
        // line 16
        $this->loadTemplate("components/article", "template-blog/index.html", 16)->display($context);
        // line 19
        echo "
";
    }

    public function getTemplateName()
    {
        return "template-blog/index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 19,  42 => 16,  35 => 9,  32 => 8,  28 => 1,  26 => 5,  25 => 3,  11 => 1,);
    }
}
/* {% extends "_layout" %}*/
/* */
/* {% do craft.sproutSeo.meta({*/
/*         default: 'default',*/
/*         title: entry.heading*/
/* }) %}*/
/* */
/* {% block content %}*/
/* */
/* <script>*/
/*   var template = 'blog';*/
/* </script>*/
/* */
/* {%*/
/* */
/*   include "components/article"*/
/* */
/* %}*/
/* */
/* {% endblock %}*/
/* */
