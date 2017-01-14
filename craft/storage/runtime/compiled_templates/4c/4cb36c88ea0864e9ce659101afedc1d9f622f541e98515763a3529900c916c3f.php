<?php

/* _elements/modalbody */
class __TwigTemplate_2b21eb9c4d7947682ff6fa20ce853791c4b012084479cc083891c50b14c68758 extends Craft\BaseTemplate
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
        echo "<div class=\"content";
        if ((isset($context["showSidebar"]) ? $context["showSidebar"] : null)) {
            echo " has-sidebar";
        }
        echo "\">
\t<div class=\"sidebar";
        // line 2
        if ( !(isset($context["showSidebar"]) ? $context["showSidebar"] : null)) {
            echo " hidden";
        }
        echo "\">
\t\t<nav>
\t\t\t";
        // line 4
        $this->loadTemplate("_elements/sources", "_elements/modalbody", 4)->display($context);
        // line 5
        echo "\t\t</nav>
\t</div>

\t";
        // line 8
        $this->loadTemplate("_elements/indexcontainer", "_elements/modalbody", 8)->display($context);
        // line 9
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_elements/modalbody";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  42 => 9,  40 => 8,  35 => 5,  33 => 4,  26 => 2,  19 => 1,);
    }
}
/* <div class="content{% if showSidebar %} has-sidebar{% endif %}">*/
/* 	<div class="sidebar{% if not showSidebar %} hidden{% endif %}">*/
/* 		<nav>*/
/* 			{% include "_elements/sources" %}*/
/* 		</nav>*/
/* 	</div>*/
/* */
/* 	{% include "_elements/indexcontainer" %}*/
/* </div>*/
/* */
