<?php

/* components/slug */
class __TwigTemplate_ce1990de0b3c64631f60715be44be32b214d187b48d038df6ac5162e9257d479 extends Craft\BaseTemplate
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
        list($context["pageInfo"], $context["pageEntries"]) = \Craft\TemplateHelper::paginateCriteria($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "entries", array()), "section", array(0 => "journal"), "method"), "limit", array(0 => 5), "method"));
        // line 3
        echo "
";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["pageEntries"]) ? $context["pageEntries"] : null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["entry"]) {
            // line 5
            echo "  <div class=\"row post-slug\">
    <h1 class=\"title\">
      <a href=\"";
            // line 7
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "url", array()), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Hacksaw')->HacksawFilter($this->getAttribute($context["entry"], "heading", array()), "0", "70", "", "", "...");
            echo "</a>
    </h1>

    ";
            // line 12
            $this->loadTemplate("includes/meta", "components/slug", 12)->display($context);
            // line 15
            echo "
    <div class=\"description\">
      ";
            // line 17
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["entry"], "contentSection", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
                // line 18
                echo "      ";
                if (($this->getAttribute($context["block"], "type", array()) == "body")) {
                    // line 19
                    echo "        <p>";
                    echo $this->env->getExtension('Hacksaw')->HacksawFilter($this->getAttribute($context["block"], "body", array()), "0", "", "50", "", "...");
                    echo "</p>
      ";
                }
                // line 21
                echo "      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 22
            echo "    </div>

    <a class=\"permalink\" href=\"";
            // line 24
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "url", array()), "html", null, true);
            echo "\">Read more</a>
  </div>
";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entry'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 27
        echo "
<div class=\"row pagination\">
  ";
        // line 29
        if ($this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "prevUrl", array())) {
            // line 30
            echo "    <a href=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "prevUrl", array()), "html", null, true);
            echo "\" class=\"older\">Older</a>
  ";
        } else {
            // line 32
            echo "    <span class=\"inactive older\">Older</span>
  ";
        }
        // line 34
        echo "
  <span class=\"pages\">";
        // line 35
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "currentPage", array()), "html", null, true);
        echo " of ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "totalPages", array()), "html", null, true);
        echo "</span>

  ";
        // line 37
        if ($this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "nextUrl", array())) {
            // line 38
            echo "    <a href=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["pageInfo"]) ? $context["pageInfo"] : null), "nextUrl", array()), "html", null, true);
            echo "\" class=\"newer\">Newer</a>
  ";
        } else {
            // line 40
            echo "    <span class=\"inactive newer\">Newer</span>
  ";
        }
        // line 42
        echo "</div>

";
    }

    public function getTemplateName()
    {
        return "components/slug";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 42,  133 => 40,  127 => 38,  125 => 37,  118 => 35,  115 => 34,  111 => 32,  105 => 30,  103 => 29,  99 => 27,  82 => 24,  78 => 22,  72 => 21,  66 => 19,  63 => 18,  59 => 17,  55 => 15,  53 => 12,  45 => 7,  41 => 5,  24 => 4,  21 => 3,  19 => 1,);
    }
}
/* {% paginate craft.entries.section('journal').limit(5) as pageInfo,*/
/* pageEntries %}*/
/* */
/* {% for entry in pageEntries %}*/
/*   <div class="row post-slug">*/
/*     <h1 class="title">*/
/*       <a href="{{ entry.url }}">{{ entry.heading|hacksaw(chars='70', append='...') }}</a>*/
/*     </h1>*/
/* */
/*     {%*/
/* */
/*       include "includes/meta"*/
/* */
/*     %}*/
/* */
/*     <div class="description">*/
/*       {% for block in entry.contentSection %}*/
/*       {% if block.type == 'body' %}*/
/*         <p>{{ block.body|hacksaw(words='50', append='...')  }}</p>*/
/*       {% endif %}*/
/*       {% endfor %}*/
/*     </div>*/
/* */
/*     <a class="permalink" href="{{ entry.url }}">Read more</a>*/
/*   </div>*/
/* {% endfor %}*/
/* */
/* <div class="row pagination">*/
/*   {% if pageInfo.prevUrl %}*/
/*     <a href="{{ pageInfo.prevUrl }}" class="older">Older</a>*/
/*   {% else %}*/
/*     <span class="inactive older">Older</span>*/
/*   {% endif %}*/
/* */
/*   <span class="pages">{{ pageInfo.currentPage }} of {{ pageInfo.totalPages }}</span>*/
/* */
/*   {% if pageInfo.nextUrl %}*/
/*     <a href="{{ pageInfo.nextUrl }}" class="newer">Newer</a>*/
/*   {% else %}*/
/*     <span class="inactive newer">Newer</span>*/
/*   {% endif %}*/
/* </div>*/
/* */
/* */
