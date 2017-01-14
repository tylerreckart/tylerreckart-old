<?php

/* entries/_fields */
class __TwigTemplate_bed145c3334b9376712c21703e6e0935f9aaf7e8ba553a5f1ff599a75deaac3f extends Craft\BaseTemplate
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
        if ($this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "hasTitleField", array())) {
            // line 2
            echo "\t";
            $this->loadTemplate("entries/_titlefield", "entries/_fields", 2)->display($context);
        }
        // line 4
        echo "
<div>
\t";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "getFieldLayout", array(), "method"), "getTabs", array(), "method"));
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
        foreach ($context['_seq'] as $context["_key"] => $context["tab"]) {
            // line 7
            echo "\t\t<div id=\"tab";
            echo twig_escape_filter($this->env, $this->getAttribute($context["loop"], "index", array()), "html", null, true);
            echo "\"";
            if ( !$this->getAttribute($context["loop"], "first", array())) {
                echo " class=\"hidden\"";
            }
            echo ">
\t\t\t";
            // line 8
            $this->loadTemplate("_includes/fields", "entries/_fields", 8)->display(array("fields" => $this->getAttribute(            // line 9
$context["tab"], "getFields", array(), "method"), "element" =>             // line 10
(isset($context["entry"]) ? $context["entry"] : null), "static" => ((            // line 11
array_key_exists("static", $context)) ? ((isset($context["static"]) ? $context["static"] : null)) : (false))));
            // line 13
            echo "\t\t</div>
\t";
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tab'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 15
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "entries/_fields";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  75 => 15,  60 => 13,  58 => 11,  57 => 10,  56 => 9,  55 => 8,  46 => 7,  29 => 6,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% if entryType.hasTitleField %}*/
/* 	{% include "entries/_titlefield" %}*/
/* {% endif %}*/
/* */
/* <div>*/
/* 	{% for tab in entryType.getFieldLayout().getTabs() %}*/
/* 		<div id="tab{{ loop.index }}"{% if not loop.first %} class="hidden"{% endif %}>*/
/* 			{% include "_includes/fields" with {*/
/* 				fields:  tab.getFields(),*/
/* 				element: entry,*/
/* 				static:  (static is defined ? static : false)*/
/* 			} only %}*/
/* 		</div>*/
/* 	{% endfor %}*/
/* </div>*/
/* */
