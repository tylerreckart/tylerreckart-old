<?php

/* template-projects/index.html */
class __TwigTemplate_4554391907c7ed90cbf8abd8e76af03313dad66689050f3f980cfa9dde358d18 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layout", "template-projects/index.html", 1);
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
(isset($context["entry"]) ? $context["entry"] : null), "title", array()))), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 8
    public function block_content($context, array $blocks = array())
    {
        // line 9
        echo "
<script>
  var template = 'projects';
</script>

";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "projectContainer", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
            // line 15
            echo "  <div class=\"project\">
    <h1 class=\"title\">";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "heading", array()), "html", null, true);
            echo "</h1>
    <div class=\"description\">";
            // line 17
            echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "body", array()), "html", null, true);
            echo "</div>
  </div>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 20
        echo "
";
    }

    public function getTemplateName()
    {
        return "template-projects/index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  62 => 20,  53 => 17,  49 => 16,  46 => 15,  42 => 14,  35 => 9,  32 => 8,  28 => 1,  26 => 5,  25 => 3,  11 => 1,);
    }
}
/* {% extends "_layout" %}*/
/* */
/* {% do craft.sproutSeo.meta({*/
/*         default: 'default',*/
/*         title: entry.title*/
/* }) %}*/
/* */
/* {% block content %}*/
/* */
/* <script>*/
/*   var template = 'projects';*/
/* </script>*/
/* */
/* {% for block in entry.projectContainer %}*/
/*   <div class="project">*/
/*     <h1 class="title">{{ block.heading }}</h1>*/
/*     <div class="description">{{ block.body }}</div>*/
/*   </div>*/
/* {% endfor %}*/
/* */
/* {% endblock %}*/
/* */
