<?php

/* _layout */
class __TwigTemplate_4f61ce7aeb28459d056e6b31117d5bd4747f5e50703bf06d5dad558eb067747b extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!doctype html>
<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en-US\">
<head>
\t<meta charset=\"utf-8\" />
  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">

\t";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sproutSeo", array()), "optimize", array(), "method"), "html", null, true);
        echo "

  <meta name=\"subject\" content=\"Software Engineering & Design\">
  <meta name=\"robots\" content=\"index,follow,noodp\">

  <link rel=\"stylesheet\" href=\"/assets/styles/css/main.css\">
\t<!-- Syntax highlighting style module -->
\t<link rel=\"stylesheet\" href=\"/assets/styles/css/syntax.css\">
</head>
<body>
\t<div id=\"container\">
\t\t<main id=\"content\" role=\"main\">
\t\t\t";
        // line 22
        $this->loadTemplate("components/header", "_layout", 22)->display($context);
        // line 25
        echo "
\t\t\t";
        // line 26
        $this->displayBlock('content', $context, $blocks);
        // line 28
        echo "
\t\t\t";
        // line 31
        $this->loadTemplate("components/footer", "_layout", 31)->display($context);
        // line 34
        echo "\t\t</main>

\t\t<script async src=\"/assets/scripts/vendor.min.js\" type=\"text/javascript\"></script>
    <script async src=\"/assets/scripts/main.js\" type=\"text/javascript\"></script>
\t\t<script>
\t\t\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
\t\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
\t\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
\t\t\t})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

\t\t\tga('create', 'UA-70418516-1', 'auto');
\t\t\tga('send', 'pageview');
\t\t</script>
\t</div>
</body>
</html>
";
    }

    // line 26
    public function block_content($context, array $blocks = array())
    {
        // line 27
        echo "\t\t\t";
    }

    public function getTemplateName()
    {
        return "_layout";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  79 => 27,  76 => 26,  56 => 34,  54 => 31,  51 => 28,  49 => 26,  46 => 25,  44 => 22,  29 => 8,  20 => 1,);
    }
}
/* <!doctype html>*/
/* <html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">*/
/* <head>*/
/* 	<meta charset="utf-8" />*/
/*   <meta http-equiv="x-ua-compatible" content="ie=edge">*/
/*   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">*/
/* */
/* 	{{ craft.sproutSeo.optimize() }}*/
/* */
/*   <meta name="subject" content="Software Engineering & Design">*/
/*   <meta name="robots" content="index,follow,noodp">*/
/* */
/*   <link rel="stylesheet" href="/assets/styles/css/main.css">*/
/* 	<!-- Syntax highlighting style module -->*/
/* 	<link rel="stylesheet" href="/assets/styles/css/syntax.css">*/
/* </head>*/
/* <body>*/
/* 	<div id="container">*/
/* 		<main id="content" role="main">*/
/* 			{%*/
/* */
/* 				include "components/header"*/
/* */
/* 			%}*/
/* */
/* 			{% block content %}*/
/* 			{% endblock %}*/
/* */
/* 			{%*/
/* */
/* 				include "components/footer"*/
/* */
/* 			%}*/
/* 		</main>*/
/* */
/* 		<script async src="/assets/scripts/vendor.min.js" type="text/javascript"></script>*/
/*     <script async src="/assets/scripts/main.js" type="text/javascript"></script>*/
/* 		<script>*/
/* 			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){*/
/* 			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),*/
/* 			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)*/
/* 			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');*/
/* */
/* 			ga('create', 'UA-70418516-1', 'auto');*/
/* 			ga('send', 'pageview');*/
/* 		</script>*/
/* 	</div>*/
/* </body>*/
/* </html>*/
/* */
