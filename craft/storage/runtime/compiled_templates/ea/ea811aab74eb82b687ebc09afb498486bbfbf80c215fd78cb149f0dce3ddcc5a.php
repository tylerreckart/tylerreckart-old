<?php

/* sproutnotes/_settings */
class __TwigTemplate_021451af8f313569cd9116441e6a7e755f1ccfb723098204b26804895f875f81 extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "sproutnotes/_settings", 1);
        // line 2
        echo "
";
        // line 3
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Heading"), "id" => "heading", "name" => "heading", "value" => (($this->getAttribute(        // line 7
(isset($context["settings"]) ? $context["settings"] : null), "heading", array(), "any", true, true)) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "heading", array())) : ("")), "errors" => (($this->getAttribute(        // line 8
(isset($context["settings"]) ? $context["settings"] : null), "heading", array(), "any", true, true)) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "heading"), "method")) : (""))));
        // line 9
        echo "

";
        // line 11
        echo $context["forms"]->gettextareaField(array("label" => \Craft\Craft::t("Notes"), "id" => "notes", "class" => "sprout-notes redactor", "name" => "notes", "value" => (($this->getAttribute(        // line 16
(isset($context["settings"]) ? $context["settings"] : null), "notes", array(), "any", true, true)) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "notes", array())) : ("")), "errors" => (($this->getAttribute(        // line 17
(isset($context["settings"]) ? $context["settings"] : null), "notes", array(), "any", true, true)) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "notes"), "method")) : (""))));
        // line 18
        echo "

";
        // line 20
        echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Output As"), "id" => "output", "name" => "output", "options" => $this->getAttribute(        // line 24
(isset($context["options"]) ? $context["options"] : null), "output", array()), "value" => (($this->getAttribute(        // line 25
(isset($context["settings"]) ? $context["settings"] : null), "output", array(), "any", true, true)) ? ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "output", array())) : (""))));
        // line 26
        echo "

<style type=\"text/css\">
  textarea.text.sprout-notes {
    min-height: 300px;
  }
</style>
";
    }

    public function getTemplateName()
    {
        return "sproutnotes/_settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 26,  42 => 25,  41 => 24,  40 => 20,  36 => 18,  34 => 17,  33 => 16,  32 => 11,  28 => 9,  26 => 8,  25 => 7,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {{ forms.textField({*/
/*   label: "Heading"|t,*/
/*   id: 'heading',*/
/*   name: 'heading',*/
/*   value: (settings.heading is defined) ? settings.heading : '',*/
/*   errors: (settings.heading is defined) ? settings.getErrors('heading') : ''  */
/* }) }}*/
/* */
/* {{ forms.textareaField({*/
/*   label: "Notes"|t,*/
/*   id: 'notes',*/
/*   class: 'sprout-notes redactor',*/
/*   name: 'notes',*/
/*   value: (settings.notes is defined) ? settings.notes : '',*/
/*   errors: (settings.notes is defined) ? settings.getErrors('notes') : ''  */
/* }) }}*/
/* */
/* {{ forms.selectField({*/
/*   label: "Output As"|t,*/
/*   id: 'output',*/
/*   name: 'output',*/
/*   options: options.output,*/
/*   value: (settings.output is defined) ? settings.output : '',*/
/* }) }}*/
/* */
/* <style type="text/css">*/
/*   textarea.text.sprout-notes {*/
/*     min-height: 300px;*/
/*   }*/
/* </style>*/
/* */
