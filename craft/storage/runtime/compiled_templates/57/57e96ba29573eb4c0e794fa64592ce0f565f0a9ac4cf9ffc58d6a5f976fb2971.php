<?php

/* _includes/defaulticon.svg */
class __TwigTemplate_be697e19815767e7f1d01c14b5db5eed2e306d5a614b19d60a5e1f99b5f83ab3 extends Craft\BaseTemplate
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
        echo "<svg version=\"1.1\" baseProfile=\"full\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">
\t<circle cx=\"10\" cy=\"10\" r=\"10\" fill=\"#000\" fill-opacity=\"0.35\"/>
\t<text x=\"10\" y=\"15\" font-size=\"15\" font-family=\"sans-serif\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\">";
        // line 3
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_slice($this->env, (isset($context["label"]) ? $context["label"] : null), 0, 1)), "html", null, true);
        echo "</text>
</svg>
";
    }

    public function getTemplateName()
    {
        return "_includes/defaulticon.svg";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  23 => 3,  19 => 1,);
    }
}
/* <svg version="1.1" baseProfile="full" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/
/* 	<circle cx="10" cy="10" r="10" fill="#000" fill-opacity="0.35"/>*/
/* 	<text x="10" y="15" font-size="15" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#000">{{ label[0:1]|upper }}</text>*/
/* </svg>*/
/* */
