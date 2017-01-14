<?php

/* _special/cantrun */
class __TwigTemplate_b6aaa4cbb1015857bbd8462262c78adb2305fff35b81fc5f881bed912b9ad50b extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/message", "_special/cantrun", 1);
        $this->blocks = array(
            'message' => array($this, 'block_message'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/message";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["title"] = \Craft\Craft::t("Can’t run Craft CMS");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_message($context, array $blocks = array())
    {
        // line 5
        echo "\t<h2>";
        echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
        echo " :(</h2>

\t";
        // line 7
        if (($this->getAttribute((isset($context["reqCheck"]) ? $context["reqCheck"] : null), "result", array()) == "failed")) {
            // line 8
            echo "\t\t<p>";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Your server doesn’t meet the following requirements to run Craft CMS:"), "html", null, true);
            echo "</p>

\t\t<ul class=\"bullets\">
\t\t\t";
            // line 11
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["reqCheck"]) ? $context["reqCheck"] : null), "requirements", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["req"]) {
                // line 12
                echo "\t\t\t\t";
                if (($this->getAttribute($context["req"], "result", array()) == "failed")) {
                    // line 13
                    echo "\t\t\t\t\t<li>";
                    echo $this->getAttribute($context["req"], "notes", array());
                    echo "</li>
\t\t\t\t";
                }
                // line 15
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['req'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 16
            echo "\t\t</ul>

\t\t<p>";
            // line 18
            echo twig_escape_filter($this->env, \Craft\Craft::t("Please talk to your host/IT department about upgrading your server."), "html", null, true);
            echo "</p>
\t";
        }
    }

    public function getTemplateName()
    {
        return "_special/cantrun";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 18,  68 => 16,  62 => 15,  56 => 13,  53 => 12,  49 => 11,  42 => 8,  40 => 7,  34 => 5,  31 => 4,  27 => 1,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/message" %}*/
/* {% set title = "Can’t run Craft CMS"|t %}*/
/* */
/* {% block message %}*/
/* 	<h2>{{ title }} :(</h2>*/
/* */
/* 	{% if reqCheck.result == 'failed' %}*/
/* 		<p>{{ "Your server doesn’t meet the following requirements to run Craft CMS:"|t }}</p>*/
/* */
/* 		<ul class="bullets">*/
/* 			{% for req in reqCheck.requirements %}*/
/* 				{% if req.result == 'failed' %}*/
/* 					<li>{{ req.notes|raw }}</li>*/
/* 				{% endif %}*/
/* 			{% endfor %}*/
/* 		</ul>*/
/* */
/* 		<p>{{ "Please talk to your host/IT department about upgrading your server."|t }}</p>*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
