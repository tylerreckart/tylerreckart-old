<?php

/* sproutseo/templates/_special/meta */
class __TwigTemplate_ff6b0b10a9280153d390c6cc671c5519fe65891e1b4509ac204b18ceb9b6e6c4 extends Craft\BaseTemplate
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
        echo "<!-- This site is optimized with the Sprout SEO plugin v";
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sproutSeo", array()), "getVersion", array()), "html", null, true);
        echo " - http://sprout.barrelstrengthdesign.com/craft-plugins/seo -->
";
        // line 2
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["meta"]) ? $context["meta"] : null), "basic", array()));
        foreach ($context['_seq'] as $context["name"] => $context["value"]) {
            // line 3
            switch ($context["name"]) {
                case "title":
                {
                    // line 5
                    echo "\t<title>";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "</title>
";
                    break;
                }
                case "author":
                {
                    // line 7
                    echo "\t<link href=\"";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "\" rel=\"author\" />
";
                    break;
                }
                case "publisher":
                {
                    // line 9
                    echo "\t<link href=\"";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "\" rel=\"publisher\" />
";
                    break;
                }
                default:
                {
                    // line 11
                    echo "\t<meta name='";
                    echo twig_escape_filter($this->env, $context["name"], "html", null, true);
                    echo "' content='";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "' />
";
                }
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['name'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["meta"]) ? $context["meta"] : null), "robots", array()));
        foreach ($context['_seq'] as $context["name"] => $context["value"]) {
            // line 15
            switch ($context["name"]) {
                case "canonical":
                {
                    // line 17
                    echo "\t<link rel='canonical' href='";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "' />
";
                    break;
                }
                default:
                {
                    // line 19
                    echo "\t<meta name='";
                    echo twig_escape_filter($this->env, $context["name"], "html", null, true);
                    echo "' content='";
                    echo twig_escape_filter($this->env, $context["value"], "html", null, true);
                    echo "' />
";
                }
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['name'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["meta"]) ? $context["meta"] : null), "geo", array()));
        foreach ($context['_seq'] as $context["name"] => $context["value"]) {
            // line 23
            echo "\t<meta name='";
            echo twig_escape_filter($this->env, $context["name"], "html", null, true);
            echo "' content='";
            echo twig_escape_filter($this->env, $context["value"], "html", null, true);
            echo "' />
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['name'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["meta"]) ? $context["meta"] : null), "openGraph", array()));
        foreach ($context['_seq'] as $context["name"] => $context["value"]) {
            // line 26
            echo "\t<meta property='";
            echo twig_escape_filter($this->env, $context["name"], "html", null, true);
            echo "' content='";
            echo twig_escape_filter($this->env, $context["value"], "html", null, true);
            echo "' />
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['name'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 28
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["meta"]) ? $context["meta"] : null), "twitter", array()));
        foreach ($context['_seq'] as $context["name"] => $context["value"]) {
            // line 29
            echo "\t<meta name='";
            echo twig_escape_filter($this->env, $context["name"], "html", null, true);
            echo "' content='";
            echo twig_escape_filter($this->env, $context["value"], "html", null, true);
            echo "'>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['name'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "\t<!-- / Sprout SEO Craft CMS plugin -->";
    }

    public function getTemplateName()
    {
        return "sproutseo/templates/_special/meta";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 31,  136 => 29,  132 => 28,  121 => 26,  117 => 25,  106 => 23,  102 => 22,  89 => 19,  80 => 17,  76 => 15,  72 => 14,  59 => 11,  50 => 9,  41 => 7,  32 => 5,  28 => 3,  24 => 2,  19 => 1,);
    }
}
/* <!-- This site is optimized with the Sprout SEO plugin v{{ craft.sproutSeo.getVersion }} - http://sprout.barrelstrengthdesign.com/craft-plugins/seo -->*/
/* {% for name, value in meta.basic %}*/
/* {% switch name %}*/
/* {% case "title" %}*/
/* 	<title>{{ value }}</title>*/
/* {% case "author" %}*/
/* 	<link href="{{ value }}" rel="author" />*/
/* {% case "publisher" %}*/
/* 	<link href="{{ value }}" rel="publisher" />*/
/* {% default %}*/
/* 	<meta name='{{ name }}' content='{{ value }}' />*/
/* {% endswitch %}*/
/* {% endfor %}*/
/* {% for name, value in meta.robots %}*/
/* {% switch name %}*/
/* {% case "canonical" %}*/
/* 	<link rel='canonical' href='{{ value }}' />*/
/* {% default %}*/
/* 	<meta name='{{ name }}' content='{{ value }}' />*/
/* {% endswitch %}*/
/* {% endfor %}*/
/* {% for name, value in meta.geo %}*/
/* 	<meta name='{{ name }}' content='{{ value }}' />*/
/* {% endfor %}*/
/* {% for name, value in meta.openGraph %}*/
/* 	<meta property='{{ name }}' content='{{ value }}' />*/
/* {% endfor %}*/
/* {% for name, value in meta.twitter %}*/
/* 	<meta name='{{ name }}' content='{{ value }}'>*/
/* {% endfor %}*/
/* 	<!-- / Sprout SEO Craft CMS plugin -->*/
