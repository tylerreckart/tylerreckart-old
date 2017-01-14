<?php

/* _components/widgets/RecentEntries/body */
class __TwigTemplate_7da3ac613ed53561d73652997972bece649a0cabd00c40c1a8747f1d5fb584ea extends Craft\BaseTemplate
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
        echo "<div class=\"recententries-container\">
\t";
        // line 2
        if (twig_length_filter($this->env, (isset($context["entries"]) ? $context["entries"] : null))) {
            // line 3
            echo "\t\t<table class=\"data fullwidth\">
\t\t\t";
            // line 4
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["entries"]) ? $context["entries"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["entry"]) {
                // line 5
                echo "\t\t\t\t<tr>
\t\t\t\t\t<td>
\t\t\t\t\t\t<a href=\"";
                // line 7
                echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "getCpEditUrl", array(), "method"), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "title", array()), "html", null, true);
                echo "</a>
\t\t\t\t\t\t<span class=\"light\">
\t\t\t\t\t\t\t";
                // line 9
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["entry"], "dateCreated", array()), "uiTimestamp", array(), "method"), "html", null, true);
                // line 10
                if ((((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) >= (isset($context["CraftClient"]) ? $context["CraftClient"] : null)) && $this->getAttribute($context["entry"], "author", array()))) {
                    echo ", ";
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["entry"], "author", array()), "username", array()), "html", null, true);
                }
                // line 11
                echo "</span>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entry'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 15
            echo "\t\t</table>
\t";
        } else {
            // line 17
            echo "\t\t<p>";
            echo twig_escape_filter($this->env, \Craft\Craft::t("No entries exist yet."), "html", null, true);
            echo "</p>
\t";
        }
        // line 19
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_components/widgets/RecentEntries/body";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 19,  62 => 17,  58 => 15,  49 => 11,  44 => 10,  42 => 9,  35 => 7,  31 => 5,  27 => 4,  24 => 3,  22 => 2,  19 => 1,);
    }
}
/* <div class="recententries-container">*/
/* 	{% if entries|length %}*/
/* 		<table class="data fullwidth">*/
/* 			{% for entry in entries %}*/
/* 				<tr>*/
/* 					<td>*/
/* 						<a href="{{ entry.getCpEditUrl() }}">{{ entry.title }}</a>*/
/* 						<span class="light">*/
/* 							{{ entry.dateCreated.uiTimestamp() }}*/
/* 							{%- if CraftEdition >= CraftClient and entry.author %}, {{ entry.author.username }}{% endif -%}*/
/* 						</span>*/
/* 					</td>*/
/* 				</tr>*/
/* 			{% endfor %}*/
/* 		</table>*/
/* 	{% else %}*/
/* 		<p>{{ "No entries exist yet."|t }}</p>*/
/* 	{% endif %}*/
/* </div>*/
/* */
