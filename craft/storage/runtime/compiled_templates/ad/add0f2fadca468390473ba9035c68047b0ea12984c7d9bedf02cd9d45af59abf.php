<?php

/* components/footer */
class __TwigTemplate_5881f4d3a4994e52df59a831c426dc6fcf05f40bc4bc67b02f1f06aa19fb23fc extends Craft\BaseTemplate
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
        echo "<footer id=\"footer\">
  <p>
    Subscribe to the <a href=\"/rss.html\">RSS Feed</a>, or the alternate <a href=\"/atom.html\">Atom Feed</a>.<br>
    Follow <a href=\"http://twitter.com/tylerreckart\" target=\"_blank\">@tylerreckart</a> on Twitter, if you'd like.<br>
    Copyright (c) 2010-";
        // line 5
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["now"]) ? $context["now"] : null), "year", array()), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["siteName"]) ? $context["siteName"] : null), "html", null, true);
        echo ". All rights reserved.
  </p>
</footer>
";
    }

    public function getTemplateName()
    {
        return "components/footer";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  25 => 5,  19 => 1,);
    }
}
/* <footer id="footer">*/
/*   <p>*/
/*     Subscribe to the <a href="/rss.html">RSS Feed</a>, or the alternate <a href="/atom.html">Atom Feed</a>.<br>*/
/*     Follow <a href="http://twitter.com/tylerreckart" target="_blank">@tylerreckart</a> on Twitter, if you'd like.<br>*/
/*     Copyright (c) 2010-{{ now.year }} {{ siteName }}. All rights reserved.*/
/*   </p>*/
/* </footer>*/
/* */
