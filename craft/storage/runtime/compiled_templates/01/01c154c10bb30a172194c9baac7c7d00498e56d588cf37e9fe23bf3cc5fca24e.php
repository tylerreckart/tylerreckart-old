<?php

/* _components/elementactions/SetStatus/trigger */
class __TwigTemplate_628240961c3cef99b62eb4511b66c12077fd4fcfd96bd684c91233fd2d748be0 extends Craft\BaseTemplate
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
        echo "<div class=\"btn menubtn\">";
        echo twig_escape_filter($this->env, \Craft\Craft::t("Set status"), "html", null, true);
        echo "</div>
<div class=\"menu\">
\t<ul>
\t\t<li><a class=\"formsubmit\" data-param=\"status\" data-value=\"enabled\"><span class=\"status enabled\"></span> ";
        // line 4
        echo twig_escape_filter($this->env, \Craft\Craft::t("Enabled"), "html", null, true);
        echo "</a></li>
\t\t<li><a class=\"formsubmit\" data-param=\"status\" data-value=\"disabled\"><span class=\"status disabled\"></span> ";
        // line 5
        echo twig_escape_filter($this->env, \Craft\Craft::t("Disabled"), "html", null, true);
        echo "</a></li>
\t</ul>
</div>
";
    }

    public function getTemplateName()
    {
        return "_components/elementactions/SetStatus/trigger";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 5,  26 => 4,  19 => 1,);
    }
}
/* <div class="btn menubtn">{{ "Set status"|t }}</div>*/
/* <div class="menu">*/
/* 	<ul>*/
/* 		<li><a class="formsubmit" data-param="status" data-value="enabled"><span class="status enabled"></span> {{ "Enabled"|t }}</a></li>*/
/* 		<li><a class="formsubmit" data-param="status" data-value="disabled"><span class="status disabled"></span> {{ "Disabled"|t }}</a></li>*/
/* 	</ul>*/
/* </div>*/
/* */
