<?php

/* _components/widgets/Updates/body */
class __TwigTemplate_9ef821626d66d4d8226b0c4b9e99cb8a6a047f35337855c5f27f88516915303b extends Craft\BaseTemplate
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
        if ((isset($context["total"]) ? $context["total"] : null)) {
            // line 2
            echo "\t<p class=\"centeralign\">
\t\t";
            // line 3
            if (((isset($context["total"]) ? $context["total"] : null) == 1)) {
                // line 4
                echo "\t\t\t";
                echo twig_escape_filter($this->env, \Craft\Craft::t("One update available!"), "html", null, true);
                echo "
\t\t";
            } else {
                // line 6
                echo "\t\t\t";
                echo twig_escape_filter($this->env, \Craft\Craft::t("{total} updates available!", array("total" => (isset($context["total"]) ? $context["total"] : null))), "html", null, true);
                echo "
\t\t";
            }
            // line 8
            echo "\t\t<a class=\"go nowrap\" href=\"";
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("updates"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Go to Updates"), "html", null, true);
            echo "</a>
\t</p>
";
        } else {
            // line 11
            echo "\t<p class=\"centeralign\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Congrats! You’re up-to-date."), "html", null, true);
            echo "</p>
\t<p class=\"centeralign\"><a class=\"btn\" data-icon=\"refresh\">";
            // line 12
            echo twig_escape_filter($this->env, \Craft\Craft::t("Check again"), "html", null, true);
            echo "</a></p>
";
        }
    }

    public function getTemplateName()
    {
        return "_components/widgets/Updates/body";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 12,  47 => 11,  38 => 8,  32 => 6,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% if total %}*/
/* 	<p class="centeralign">*/
/* 		{% if total == 1 %}*/
/* 			{{ "One update available!"|t }}*/
/* 		{% else %}*/
/* 			{{ "{total} updates available!"|t({ total: total }) }}*/
/* 		{% endif %}*/
/* 		<a class="go nowrap" href="{{ url('updates') }}">{{ "Go to Updates"|t }}</a>*/
/* 	</p>*/
/* {% else %}*/
/* 	<p class="centeralign">{{ "Congrats! You’re up-to-date."|t }}</p>*/
/* 	<p class="centeralign"><a class="btn" data-icon="refresh">{{ 'Check again'|t }}</a></p>*/
/* {% endif %}*/
/* */
