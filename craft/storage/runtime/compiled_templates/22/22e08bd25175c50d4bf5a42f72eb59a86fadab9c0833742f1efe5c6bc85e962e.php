<?php

/* components/header */
class __TwigTemplate_4aba1e4b97752bdb889dbc16556006b09a83dc01c0a3e2fac1849b3c07474d7b extends Craft\BaseTemplate
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
        echo "<header id=\"header\">
  <h1 class=\"site-title\"><a href=\"";
        // line 2
        echo twig_escape_filter($this->env, (isset($context["siteUrl"]) ? $context["siteUrl"] : null), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, (isset($context["siteName"]) ? $context["siteName"] : null), "html", null, true);
        echo "</a></h1>

  <nav>
    <ul class=\"main-navigation\">
        <li class=\"nav-item\">
          <a class=\"";
        // line 7
        if (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getSegment", array(0 => 1), "method") == "journal")) {
            echo " selected ";
        }
        echo " ";
        if (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getSegment", array(0 => 1), "method") == "")) {
            echo " selected ";
        }
        echo "\" href=\"/\">/journal</a>
        </li>

        <li class=\"nav-item\">
          <a class=\"";
        // line 11
        if (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getSegment", array(0 => 1), "method") == "about")) {
            echo " selected ";
        }
        echo "\" href=\"/about\">/about</a>
        </li>

        <li class=\"nav-item\">
          <a class=\"";
        // line 15
        if (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getSegment", array(0 => 1), "method") == "portfolio")) {
            echo " selected ";
        }
        echo "\" href=\"/portfolio\">/portfolio</a>
        </li>

    </ul>
  </nav>
</header>
";
    }

    public function getTemplateName()
    {
        return "components/header";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 15,  45 => 11,  32 => 7,  22 => 2,  19 => 1,);
    }
}
/* <header id="header">*/
/*   <h1 class="site-title"><a href="{{ siteUrl }}">{{ siteName }}</a></h1>*/
/* */
/*   <nav>*/
/*     <ul class="main-navigation">*/
/*         <li class="nav-item">*/
/*           <a class="{% if craft.request.getSegment(1) == 'journal' %} selected {% endif %} {% if craft.request.getSegment(1) == '' %} selected {% endif %}" href="/">/journal</a>*/
/*         </li>*/
/* */
/*         <li class="nav-item">*/
/*           <a class="{% if craft.request.getSegment(1) == 'about' %} selected {% endif %}" href="/about">/about</a>*/
/*         </li>*/
/* */
/*         <li class="nav-item">*/
/*           <a class="{% if craft.request.getSegment(1) == 'portfolio' %} selected {% endif %}" href="/portfolio">/portfolio</a>*/
/*         </li>*/
/* */
/*     </ul>*/
/*   </nav>*/
/* </header>*/
/* */
