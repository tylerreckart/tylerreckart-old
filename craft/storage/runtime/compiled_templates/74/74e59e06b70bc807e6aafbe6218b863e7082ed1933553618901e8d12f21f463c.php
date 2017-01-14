<?php

/* _includes/forms/errorList */
class __TwigTemplate_aac2923416d946d3eb75cab8667f71ce1cb1ef0fea7c9406bcd22b78d6ab47f7 extends Craft\BaseTemplate
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
        if ((isset($context["errors"]) ? $context["errors"] : null)) {
            // line 2
            echo "\t<ul class=\"errors\">
\t\t";
            // line 3
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["errors"]) ? $context["errors"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 4
                echo "\t\t\t<li>";
                echo twig_escape_filter($this->env, $context["error"], "html", null, true);
                echo "</li>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 6
            echo "\t</ul>";
        }
    }

    public function getTemplateName()
    {
        return "_includes/forms/errorList";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  37 => 6,  28 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {%- if errors %}*/
/* 	<ul class="errors">*/
/* 		{% for error in errors %}*/
/* 			<li>{{ error }}</li>*/
/* 		{% endfor %}*/
/* 	</ul>*/
/* {%- endif %}*/
/* */
