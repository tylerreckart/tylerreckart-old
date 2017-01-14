<?php

/* atom.html */
class __TwigTemplate_00991ba7f1f4dea7828b0d2a7c6b777db83fcd2b0472a781c897b3808b9fcc9d extends Craft\BaseTemplate
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
        echo "<?xml version=\"1.0\"?>
<feed xmlns=\"http://www.w3.org/2005/Atom\">

    <title>";
        // line 4
        echo twig_escape_filter($this->env, (isset($context["siteName"]) ? $context["siteName"] : null), "html", null, true);
        echo " | Atom</title>
    <link href=\"";
        // line 5
        echo twig_escape_filter($this->env, (isset($context["siteUrl"]) ? $context["siteUrl"] : null), "html", null, true);
        echo "\" />
    <link type=\"application/atom+xml\" rel=\"self\" href=\"";
        // line 6
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "url", array()), "html", null, true);
        echo "\" />
    <updated>";
        // line 7
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["now"]) ? $context["now"] : null), "atom", array()), "html", null, true);
        echo "</updated>
    <id>";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "url", array()), "html", null, true);
        echo "</id>
    <author>
        <name>";
        // line 10
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["globals"]) ? $context["globals"] : null), "feedAuthorName", array()), "html", null, true);
        echo "</name>
        <email>";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["globals"]) ? $context["globals"] : null), "feedAuthorEmail", array()), "html", null, true);
        echo "</email>
    </author>

    ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "entries", array()), "section", array(0 => "journal"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["entry"]) {
            // line 15
            echo "        <entry>
            <id>";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "url", array()), "html", null, true);
            echo "</id>
            <link type=\"text/html\" rel=\"alternate\" href=\"";
            // line 17
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "url", array()), "html", null, true);
            echo "\" />
            <title>";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "title", array()), "html", null, true);
            echo "</title>
            <published>";
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["entry"], "postDate", array()), "atom", array()), "html", null, true);
            echo "</published>
            <updated>";
            // line 20
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["entry"], "dateUpdated", array()), "atom", array()), "html", null, true);
            echo "</updated>
            <author>
                <name>";
            // line 22
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["entry"], "author", array()), "fullName", array()), "html", null, true);
            echo "</name>
                <uri>";
            // line 23
            echo twig_escape_filter($this->env, (isset($context["siteUrl"]) ? $context["siteUrl"] : null), "html", null, true);
            echo "</uri>
            </author>
            <content type=\"html\"><![CDATA[
                ";
            // line 26
            echo twig_escape_filter($this->env, $this->getAttribute($context["entry"], "body", array()), "html", null, true);
            echo "
            ]]></content>
        </entry>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entry'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "</feed>
";
    }

    public function getTemplateName()
    {
        return "atom.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 30,  93 => 26,  87 => 23,  83 => 22,  78 => 20,  74 => 19,  70 => 18,  66 => 17,  62 => 16,  59 => 15,  55 => 14,  49 => 11,  45 => 10,  40 => 8,  36 => 7,  32 => 6,  28 => 5,  24 => 4,  19 => 1,);
    }
}
/* <?xml version="1.0"?>*/
/* <feed xmlns="http://www.w3.org/2005/Atom">*/
/* */
/*     <title>{{ siteName }} | Atom</title>*/
/*     <link href="{{ siteUrl }}" />*/
/*     <link type="application/atom+xml" rel="self" href="{{ craft.request.url }}" />*/
/*     <updated>{{ now.atom }}</updated>*/
/*     <id>{{ craft.request.url }}</id>*/
/*     <author>*/
/*         <name>{{ globals.feedAuthorName }}</name>*/
/*         <email>{{ globals.feedAuthorEmail }}</email>*/
/*     </author>*/
/* */
/*     {% for entry in craft.entries.section('journal') %}*/
/*         <entry>*/
/*             <id>{{ entry.url }}</id>*/
/*             <link type="text/html" rel="alternate" href="{{ entry.url }}" />*/
/*             <title>{{ entry.title }}</title>*/
/*             <published>{{ entry.postDate.atom }}</published>*/
/*             <updated>{{ entry.dateUpdated.atom }}</updated>*/
/*             <author>*/
/*                 <name>{{ entry.author.fullName }}</name>*/
/*                 <uri>{{ siteUrl }}</uri>*/
/*             </author>*/
/*             <content type="html"><![CDATA[*/
/*                 {{ entry.body }}*/
/*             ]]></content>*/
/*         </entry>*/
/*     {% endfor %}*/
/* </feed>*/
/* */
