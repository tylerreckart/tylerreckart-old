<?php

/* rss.html */
class __TwigTemplate_57b0bed2135799bccd881b2040fca53865dc25c73d7ac1a12ba7a2e6bfa29192 extends Craft\BaseTemplate
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
        \Craft\HeaderHelper::setHeader("Content-Type: application/rss+xml");
        // line 2
        echo "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">

";
        // line 5
        $context["rss"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "entries", array()), "section", array(0 => "journal"), "method");
        // line 6
        echo "
<channel>
  <title>Tyler Reckart | RSS</title>
  <link>http://www.tylerreckart.com/</link>
  <description>Tyler Reckart is a software developer and designer. This blog is an outlet for his thoughts on programming and design. This is the RSS feed.</description>
  <language>en-us</language>
  <atom:link href=\"";
        // line 12
        echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl(), "html", null, true);
        echo "\" rel=\"self\" type=\"application/rss+xml\" />

  ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["rss"]) ? $context["rss"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 15
            echo "  <item>
    <title>";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "title", array()), "html", null, true);
            echo "</title>
    <link>";
            // line 17
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "url", array(), "method"), "html", null, true);
            echo "</link>
    <description>";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "body", array()), "html", null, true);
            echo "</description>
    <pubDate>";
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["item"], "postDate", array()), "rfc2822", array(), "method"), "html", null, true);
            echo "</pubDate>
    <guid>";
            // line 20
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "url", array(), "method"), "html", null, true);
            echo "</guid>
  </item>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "</channel>

</rss>
";
    }

    public function getTemplateName()
    {
        return "rss.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 23,  63 => 20,  59 => 19,  55 => 18,  51 => 17,  47 => 16,  44 => 15,  40 => 14,  35 => 12,  27 => 6,  25 => 5,  20 => 2,);
    }
}
/* {% header "Content-Type: application/rss+xml" %}*/
/* <?xml version="1.0" encoding="UTF-8" ?>*/
/* <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">*/
/* */
/* {% set rss = craft.entries.section('journal') %}*/
/* */
/* <channel>*/
/*   <title>Tyler Reckart | RSS</title>*/
/*   <link>http://www.tylerreckart.com/</link>*/
/*   <description>Tyler Reckart is a software developer and designer. This blog is an outlet for his thoughts on programming and design. This is the RSS feed.</description>*/
/*   <language>en-us</language>*/
/*   <atom:link href="{{ url() }}" rel="self" type="application/rss+xml" />*/
/* */
/*   {% for item in rss %}*/
/*   <item>*/
/*     <title>{{ item.title }}</title>*/
/*     <link>{{ item.url() }}</link>*/
/*     <description>{{ item.body }}</description>*/
/*     <pubDate>{{ item.postDate.rfc2822() }}</pubDate>*/
/*     <guid>{{ item.url() }}</guid>*/
/*   </item>*/
/*   {% endfor %}*/
/* </channel>*/
/* */
/* </rss>*/
/* */
