<?php

/* 404 */
class __TwigTemplate_eaa18e523f391b918827a3959571625d250b37e13ca7e215420d55462df2b9df extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layout", "404", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layout";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["title"] = "404";
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_content($context, array $blocks = array())
    {
        // line 5
        echo "\t<h1 style=\"color: #FF3F4B\">Oops! The page you're looking for can't be found.</h1>
  <em style=\"display: inline-block; padding-bottom: 30px;\">Error code: 404</em>

\t<iframe width=\"100%\" height=\"394\" src=\"https://www.youtube.com/embed/SIaFtAKnqBU?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3&rel=0\" frameborder=\"0\" allowfullscreen></iframe>
";
    }

    public function getTemplateName()
    {
        return "404";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  34 => 5,  31 => 4,  27 => 1,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layout" %}*/
/* {% set title = "404" %}*/
/* */
/* {% block content %}*/
/* 	<h1 style="color: #FF3F4B">Oops! The page you're looking for can't be found.</h1>*/
/*   <em style="display: inline-block; padding-bottom: 30px;">Error code: 404</em>*/
/* */
/* 	<iframe width="100%" height="394" src="https://www.youtube.com/embed/SIaFtAKnqBU?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3&rel=0" frameborder="0" allowfullscreen></iframe>*/
/* {% endblock %}*/
/* */
