<?php

/* _layouts/message */
class __TwigTemplate_832822a6fc7af25edd4d386a8321a98972d3a069eab78ebea147aa88378a5bcc extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/base", "_layouts/message", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'message' => array($this, 'block_message'),
            'foot' => array($this, 'block_foot'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/base";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["bodyClass"] = "message";
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = array())
    {
        // line 5
        echo "\t<div class=\"message-container\">
\t\t<div id=\"message\" class=\"pane\">
\t\t\t";
        // line 7
        $this->displayBlock('message', $context, $blocks);
        // line 8
        echo "\t\t</div>
\t</div>
";
    }

    // line 7
    public function block_message($context, array $blocks = array())
    {
    }

    // line 12
    public function block_foot($context, array $blocks = array())
    {
        // line 13
        echo "\t<script type=\"text/javascript\">
\t\tvar message = document.getElementById('message'),
\t\t\tmargin = -Math.round(message.offsetHeight / 2);
\t\tmessage.setAttribute('style', 'margin-top: '+margin+'px !important;');
\t</script>
";
    }

    public function getTemplateName()
    {
        return "_layouts/message";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 13,  53 => 12,  48 => 7,  42 => 8,  40 => 7,  36 => 5,  33 => 4,  29 => 1,  27 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/base" %}*/
/* {% set bodyClass = 'message' %}*/
/* */
/* {% block body %}*/
/* 	<div class="message-container">*/
/* 		<div id="message" class="pane">*/
/* 			{% block message %}{% endblock %}*/
/* 		</div>*/
/* 	</div>*/
/* {% endblock %}*/
/* */
/* {% block foot %}*/
/* 	<script type="text/javascript">*/
/* 		var message = document.getElementById('message'),*/
/* 			margin = -Math.round(message.offsetHeight / 2);*/
/* 		message.setAttribute('style', 'margin-top: '+margin+'px !important;');*/
/* 	</script>*/
/* {% endblock %}*/
/* */
