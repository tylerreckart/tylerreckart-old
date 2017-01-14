<?php

/* includes/meta */
class __TwigTemplate_fdc85f8cd169a91d63672906b787ee435052abd500e549b044d858b296cb7c58 extends Craft\BaseTemplate
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
        echo "<div class=\"meta\">
  <span id=\"date\">";
        // line 2
        echo twig_escape_filter($this->env, $this->env->getExtension('craft')->dateFilter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "postDate", array()), "l M d, Y"), "html", null, true);
        echo "</span>
  <span class=\"timestamp\">(";
        // line 3
        echo twig_escape_filter($this->env, $this->env->getExtension('date')->diff($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "postDate", array())), "html", null, true);
        echo ")</span> ·
  <span id=\"time\" class=\"reading-time\">
\t";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "contentSection", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
            // line 6
            echo "    ";
            if (($this->getAttribute($context["block"], "type", array()) == "body")) {
                // line 7
                echo "
    ";
                // line 8
                $context["statistics"] = $this->env->getExtension('ReadTime')->readtimeFilter($this->getAttribute($context["block"], "body", array()));
                // line 9
                echo "
      ";
                // line 10
                if (((isset($context["statistics"]) ? $context["statistics"] : null) > 1)) {
                    // line 11
                    echo "        ";
                    echo twig_escape_filter($this->env, (isset($context["statistics"]) ? $context["statistics"] : null), "html", null, true);
                    echo "s read
      ";
                } else {
                    // line 13
                    echo "        ";
                    echo twig_escape_filter($this->env, (isset($context["statistics"]) ? $context["statistics"] : null), "html", null, true);
                    echo " read
      ";
                }
                // line 15
                echo "
    ";
            }
            // line 17
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "  </span>
</div>
";
    }

    public function getTemplateName()
    {
        return "includes/meta";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 18,  64 => 17,  60 => 15,  54 => 13,  48 => 11,  46 => 10,  43 => 9,  41 => 8,  38 => 7,  35 => 6,  31 => 5,  26 => 3,  22 => 2,  19 => 1,);
    }
}
/* <div class="meta">*/
/*   <span id="date">{{ entry.postDate | date("l M d, Y") }}</span>*/
/*   <span class="timestamp">({{ entry.postDate | time_diff }})</span> ·*/
/*   <span id="time" class="reading-time">*/
/* 	{% for block in entry.contentSection %}*/
/*     {% if block.type == 'body' %}*/
/* */
/*     {% set statistics = block.body|readtime %}*/
/* */
/*       {% if statistics > 1 %}*/
/*         {{ statistics }}s read*/
/*       {% else %}*/
/*         {{ statistics }} read*/
/*       {% endif %}*/
/* */
/*     {% endif %}*/
/*     {% endfor %}*/
/*   </span>*/
/* </div>*/
/* */
