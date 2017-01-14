<?php

/* _includes/previewbtns */
class __TwigTemplate_210e335c1568e2d2bf542024aa4ce9b62d9456c377a0119f6877c2898de2a53d extends Craft\BaseTemplate
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
        if (array_key_exists("shareUrl", $context)) {
            // line 2
            echo "\t<div class=\"btngroup big previewbtns\">
";
        }
        // line 4
        echo "
<div class=\"btn big livepreviewbtn\">
\t";
        // line 6
        echo twig_escape_filter($this->env, \Craft\Craft::t("Live Preview"), "html", null, true);
        echo "
\t<div class=\"spinner hidden\"></div>
</div>

";
        // line 10
        if (array_key_exists("shareUrl", $context)) {
            // line 11
            echo "\t\t<a href=\"";
            echo twig_escape_filter($this->env, (isset($context["shareUrl"]) ? $context["shareUrl"] : null), "html", null, true);
            echo "\" class=\"btn big sharebtn\" title=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Share"), "html", null, true);
            echo "\" target=\"_blank\"></a>
\t</div>
";
        }
    }

    public function getTemplateName()
    {
        return "_includes/previewbtns";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  38 => 11,  36 => 10,  29 => 6,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% if shareUrl is defined %}*/
/* 	<div class="btngroup big previewbtns">*/
/* {% endif %}*/
/* */
/* <div class="btn big livepreviewbtn">*/
/* 	{{ "Live Preview"|t }}*/
/* 	<div class="spinner hidden"></div>*/
/* </div>*/
/* */
/* {% if shareUrl is defined %}*/
/* 		<a href="{{ shareUrl }}" class="btn big sharebtn" title="{{ 'Share'|t }}" target="_blank"></a>*/
/* 	</div>*/
/* {% endif %}*/
/* */
