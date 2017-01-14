<?php

/* components/article */
class __TwigTemplate_c6a6245659c9c7ab3b0332def113c2831dbe86beac003e07ce19895a17fc26f4 extends Craft\BaseTemplate
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
        echo "<div class=\"row\">

  <h1 class=\"title\">
    <a href=\"";
        // line 4
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "url", array()), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "heading", array()), "html", null, true);
        echo "</a>
  </h1>

  ";
        // line 9
        $this->loadTemplate("includes/meta", "components/article", 9)->display($context);
        // line 12
        echo "
  <div id=\"js-description\" class=\"description\">

    ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "contentSection", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
            // line 16
            echo "
      ";
            // line 17
            if (($this->getAttribute($context["block"], "type", array()) == "image")) {
                // line 18
                echo "      ";
                $context["image"] = $this->getAttribute($this->getAttribute($context["block"], "image", array()), "first", array(), "method");
                // line 19
                echo "        <img src=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["image"]) ? $context["image"] : null), "url", array()), "html", null, true);
                echo "\" width=\"100%\" alt=\"\">
      ";
            }
            // line 21
            echo "
      ";
            // line 22
            if (($this->getAttribute($context["block"], "type", array()) == "heading")) {
                // line 23
                echo "        <h2 class=\"heading\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "heading", array()), "html", null, true);
                echo "</h2>
      ";
            }
            // line 25
            echo "
      ";
            // line 26
            if (($this->getAttribute($context["block"], "type", array()) == "body")) {
                // line 27
                echo "        ";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "body", array()), "html", null, true);
                echo "
      ";
            }
            // line 29
            echo "
      ";
            // line 30
            if (($this->getAttribute($context["block"], "type", array()) == "embed")) {
                // line 31
                echo "        <div class=\"embed\">
          ";
                // line 32
                echo $this->getAttribute($context["block"], "script", array());
                echo "
        </div>
      ";
            }
            // line 35
            echo "
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "
  </div>

  <div class=\"separator\">***</div>

  <div class=\"tweet-button\">
    <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"tylerreckart\" data-size=\"large\">Tweet</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
  </div>

  <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>
  <!-- Article -->
  <ins class=\"adsbygoogle\"
       style=\"display:inline-block;width:728px;height:90px\"
       data-ad-client=\"ca-pub-5103755521227726\"
       data-ad-slot=\"9271550292\"></ins>
  <script>
  (adsbygoogle = window.adsbygoogle || []).push({});
  </script>

  <div id=\"disqus_thread\"></div>
  <script>
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() {
    var d = document, s = d.createElement('script');

    s.src = '//tylerreckart.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\" rel=\"nofollow\">comments powered by Disqus.</a></noscript>
</div>
";
    }

    public function getTemplateName()
    {
        return "components/article";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  100 => 37,  93 => 35,  87 => 32,  84 => 31,  82 => 30,  79 => 29,  73 => 27,  71 => 26,  68 => 25,  62 => 23,  60 => 22,  57 => 21,  51 => 19,  48 => 18,  46 => 17,  43 => 16,  39 => 15,  34 => 12,  32 => 9,  24 => 4,  19 => 1,);
    }
}
/* <div class="row">*/
/* */
/*   <h1 class="title">*/
/*     <a href="{{ entry.url }}">{{ entry.heading }}</a>*/
/*   </h1>*/
/* */
/*   {%*/
/* */
/*     include "includes/meta"*/
/* */
/*   %}*/
/* */
/*   <div id="js-description" class="description">*/
/* */
/*     {% for block in entry.contentSection %}*/
/* */
/*       {% if block.type == 'image' %}*/
/*       {% set image = block.image.first() %}*/
/*         <img src="{{ image.url }}" width="100%" alt="">*/
/*       {% endif %}*/
/* */
/*       {% if block.type == 'heading' %}*/
/*         <h2 class="heading">{{ block.heading }}</h2>*/
/*       {% endif %}*/
/* */
/*       {% if block.type == 'body' %}*/
/*         {{ block.body }}*/
/*       {% endif %}*/
/* */
/*       {% if block.type == 'embed' %}*/
/*         <div class="embed">*/
/*           {{ block.script|raw }}*/
/*         </div>*/
/*       {% endif %}*/
/* */
/*     {% endfor %}*/
/* */
/*   </div>*/
/* */
/*   <div class="separator">***</div>*/
/* */
/*   <div class="tweet-button">*/
/*     <a href="https://twitter.com/share" class="twitter-share-button" data-via="tylerreckart" data-size="large">Tweet</a>*/
/*     <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>*/
/*   </div>*/
/* */
/*   <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>*/
/*   <!-- Article -->*/
/*   <ins class="adsbygoogle"*/
/*        style="display:inline-block;width:728px;height:90px"*/
/*        data-ad-client="ca-pub-5103755521227726"*/
/*        data-ad-slot="9271550292"></ins>*/
/*   <script>*/
/*   (adsbygoogle = window.adsbygoogle || []).push({});*/
/*   </script>*/
/* */
/*   <div id="disqus_thread"></div>*/
/*   <script>*/
/*     var disqus_config = function () {*/
/*     this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable*/
/*     this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable*/
/*     };*/
/* */
/*     (function() {*/
/*     var d = document, s = d.createElement('script');*/
/* */
/*     s.src = '//tylerreckart.disqus.com/embed.js';*/
/* */
/*     s.setAttribute('data-timestamp', +new Date());*/
/*     (d.head || d.body).appendChild(s);*/
/*     })();*/
/*   </script>*/
/*   <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>*/
/* </div>*/
/* */
