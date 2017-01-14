<?php

/* assets */
class __TwigTemplate_54125b665cf2aea953c432aff7187f50ae8821cc65a062e2f8fe7b643983040f extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/elementindex", "assets", 1);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/elementindex";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["title"] = \Craft\Craft::t("Assets");
        // line 3
        $context["elementType"] = "Asset";
        // line 5
        $_js = "lib/fileupload/jquery.ui.widget.js";
        \Craft\craft()->templates->includejsresource($_js);
        // line 6
        $_js = "lib/fileupload/jquery.fileupload.js";
        \Craft\craft()->templates->includejsresource($_js);
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "assets";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  34 => 1,  31 => 6,  28 => 5,  26 => 3,  24 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/elementindex" %}*/
/* {% set title = "Assets"|t %}*/
/* {% set elementType = 'Asset' %}*/
/* */
/* {% includejsresource "lib/fileupload/jquery.ui.widget.js" %}*/
/* {% includejsresource "lib/fileupload/jquery.fileupload.js" %}*/
/* */
