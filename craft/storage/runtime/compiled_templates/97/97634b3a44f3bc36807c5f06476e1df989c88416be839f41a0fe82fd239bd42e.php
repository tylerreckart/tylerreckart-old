<?php

/* template-about/index.html */
class __TwigTemplate_fe4c5cfbcbcd124873c2defb4b6bf0cffbfec0dfbdf9b5fd68a3b7a8b1e03061 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layout", "template-about/index.html", 1);
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
  var template = 'about';
</script>

<h1 class=\"title\">";
        // line 14
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "heading", array()), "html", null, true);
        echo "</h1>
<div class=\"description\">

  ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "contentSection", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
            // line 18
            echo "
    ";
            // line 19
            if (($this->getAttribute($context["block"], "type", array()) == "heading")) {
                // line 20
                echo "      <h2 class=\"heading\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "heading", array()), "html", null, true);
                echo "</h2>
    ";
            }
            // line 22
            echo "
    ";
            // line 23
            if (($this->getAttribute($context["block"], "type", array()) == "body")) {
                // line 24
                echo "      ";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "body", array()), "html", null, true);
                echo "
    ";
            }
            // line 26
            echo "
    ";
            // line 27
            if (($this->getAttribute($context["block"], "type", array()) == "embed")) {
                // line 28
                echo "      ";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "script", array()), "html", null, true);
                echo "
    ";
            }
            // line 30
            echo "
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 32
        echo "
</div>

";
    }

    public function getTemplateName()
    {
        return "template-about/index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  92 => 32,  85 => 30,  79 => 28,  77 => 27,  74 => 26,  68 => 24,  66 => 23,  63 => 22,  57 => 20,  55 => 19,  52 => 18,  48 => 17,  42 => 14,  35 => 9,  32 => 8,  28 => 1,  26 => 5,  25 => 3,  11 => 1,);
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
/*   var template = 'about';*/
/* </script>*/
/* */
/* <h1 class="title">{{ entry.heading }}</h1>*/
/* <div class="description">*/
/* */
/*   {% for block in entry.contentSection %}*/
/* */
/*     {% if block.type == 'heading' %}*/
/*       <h2 class="heading">{{ block.heading }}</h2>*/
/*     {% endif %}*/
/* */
/*     {% if block.type == 'body' %}*/
/*       {{ block.body }}*/
/*     {% endif %}*/
/* */
/*     {% if block.type == 'embed' %}*/
/*       {{ block.script }}*/
/*     {% endif %}*/
/* */
/*   {% endfor %}*/
/* */
/* </div>*/
/* */
/* {% endblock %}*/
/* */
