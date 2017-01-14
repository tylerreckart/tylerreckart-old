<?php

/* _includes/tabs */
class __TwigTemplate_9b15547f9ca6e6bb584743abef8a996b4bd0c187feee8582125f8c690c82a528 extends Craft\BaseTemplate
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
        echo "<nav id=\"tabs\" class=\"tabs\">
\t<ul>
\t\t";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["tabs"]) ? $context["tabs"] : null));
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
        foreach ($context['_seq'] as $context["tabId"] => $context["tab"]) {
            // line 4
            echo "\t\t\t";
            if ($context["tab"]) {
                // line 5
                echo "\t\t\t\t";
                $context["tabIsSelected"] = (( !array_key_exists("selectedTab", $context) && $this->getAttribute($context["loop"], "first", array())) || (array_key_exists("selectedTab", $context) && ((isset($context["selectedTab"]) ? $context["selectedTab"] : null) == $context["tabId"])));
                // line 6
                echo "<li><a id=\"tab-";
                echo twig_escape_filter($this->env, $context["tabId"], "html", null, true);
                echo "\" class=\"tab";
                if ((isset($context["tabIsSelected"]) ? $context["tabIsSelected"] : null)) {
                    echo " sel";
                }
                if ($this->getAttribute($context["tab"], "class", array(), "any", true, true)) {
                    echo " ";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["tab"], "class", array()), "html", null, true);
                }
                echo "\" href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["tab"], "url", array()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["tab"], "label", array()), "html", null, true);
                echo "</a></li>
\t\t\t";
            }
            // line 8
            echo "\t\t";
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
        unset($context['_seq'], $context['_iterated'], $context['tabId'], $context['tab'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 9
        echo "\t</ul>
</nav>
";
    }

    public function getTemplateName()
    {
        return "_includes/tabs";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 9,  64 => 8,  46 => 6,  43 => 5,  40 => 4,  23 => 3,  19 => 1,);
    }
}
/* <nav id="tabs" class="tabs">*/
/* 	<ul>*/
/* 		{% for tabId, tab in tabs %}*/
/* 			{% if tab %}*/
/* 				{% set tabIsSelected = ((selectedTab is not defined and loop.first) or (selectedTab is defined and selectedTab == tabId)) -%}*/
/* 				<li><a id="tab-{{ tabId }}" class="tab{% if tabIsSelected %} sel{% endif %}{% if tab.class is defined %} {{ tab.class }}{% endif %}" href="{{ tab.url }}">{{ tab.label }}</a></li>*/
/* 			{% endif %}*/
/* 		{% endfor %}*/
/* 	</ul>*/
/* </nav>*/
/* */
