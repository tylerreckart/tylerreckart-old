<?php

/* settings/sections/_entrytypes/edit */
class __TwigTemplate_224f0f1580f6738e53ea7300bbbf29fe37fff4f538474c24f0a698c5736a36b1 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/sections/_entrytypes/edit", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/cp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["fullPageForm"] = true;
        // line 4
        $context["forms"] = $this->loadTemplate("_includes/forms", "settings/sections/_entrytypes/edit", 4);
        // line 87
        if ( !$this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "handle", array())) {
            // line 88
            $_js = "new Craft.HandleGenerator('#name', '#handle');";
            \Craft\craft()->templates->includejs($_js);
        }
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 7
    public function block_content($context, array $blocks = array())
    {
        // line 8
        echo "\t<input type=\"hidden\" name=\"action\" value=\"sections/saveEntryType\">

\t";
        // line 10
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == "single")) {
            // line 11
            echo "\t\t<input type=\"hidden\" name=\"redirect\" value=\"settings/sections\">
\t";
        } else {
            // line 13
            echo "\t\t<input type=\"hidden\" name=\"redirect\" value=\"settings/sections/";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array()), "html", null, true);
            echo "/entrytypes\">
\t";
        }
        // line 15
        echo "\t<input type=\"hidden\" name=\"sectionId\" value=\"";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array()), "html", null, true);
        echo "\">
\t";
        // line 16
        if ($this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "id", array())) {
            echo "<input type=\"hidden\" name=\"entryTypeId\" value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "id", array()), "html", null, true);
            echo "\">";
        }
        // line 17
        echo "
\t";
        // line 18
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "single")) {
            // line 19
            echo "\t\t";
            echo $context["forms"]->gettextField(array("first" => true, "label" => \Craft\Craft::t("Name"), "instructions" => \Craft\Craft::t("What this entry type will be called in the CP."), "id" => "name", "name" => "name", "value" => $this->getAttribute(            // line 25
(isset($context["entryType"]) ? $context["entryType"] : null), "name", array()), "errors" => $this->getAttribute(            // line 26
(isset($context["entryType"]) ? $context["entryType"] : null), "getErrors", array(0 => "name"), "method"), "autofocus" => true, "required" => true));
            // line 29
            echo "

\t\t";
            // line 31
            echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Handle"), "instructions" => \Craft\Craft::t("How you’ll refer to this entry type in the templates."), "id" => "handle", "class" => "code", "name" => "handle", "value" => $this->getAttribute(            // line 37
(isset($context["entryType"]) ? $context["entryType"] : null), "handle", array()), "errors" => $this->getAttribute(            // line 38
(isset($context["entryType"]) ? $context["entryType"] : null), "getErrors", array(0 => "handle"), "method"), "required" => true));
            // line 40
            echo "

\t\t<hr>

\t";
        }
        // line 45
        echo "
\t";
        // line 46
        echo $context["forms"]->getcheckboxField(array("first" => ($this->getAttribute(        // line 47
(isset($context["section"]) ? $context["section"] : null), "type", array()) == "single"), "label" => \Craft\Craft::t("Show the Title field"), "name" => "hasTitleField", "toggle" => "titleLabel-container", "reverseToggle" => "titleFormat-container", "checked" => $this->getAttribute(        // line 52
(isset($context["entryType"]) ? $context["entryType"] : null), "hasTitleField", array())));
        // line 53
        echo "

\t<div id=\"titleLabel-container\"";
        // line 55
        if ( !$this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "hasTitleField", array())) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t";
        // line 56
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Title Field Label"), "instructions" => \Craft\Craft::t("What do you want the Title field to be called?"), "id" => "titleLabel", "name" => "titleLabel", "value" => $this->getAttribute(        // line 61
(isset($context["entryType"]) ? $context["entryType"] : null), "titleLabel", array()), "errors" => $this->getAttribute(        // line 62
(isset($context["entryType"]) ? $context["entryType"] : null), "getErrors", array(0 => "titleLabel"), "method"), "required" => true));
        // line 64
        echo "
\t</div>

\t<div id=\"titleFormat-container\"";
        // line 67
        if ($this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "hasTitleField", array())) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t";
        // line 68
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Title Format"), "instructions" => \Craft\Craft::t("What the auto-generated entry titles should look like. You can include tags that output entry properties, such as {ex}.", array("ex" => "<code>{myCustomField}</code>")), "id" => "titleFormat", "name" => "titleFormat", "value" => $this->getAttribute(        // line 73
(isset($context["entryType"]) ? $context["entryType"] : null), "titleFormat", array()), "errors" => $this->getAttribute(        // line 74
(isset($context["entryType"]) ? $context["entryType"] : null), "getErrors", array(0 => "titleFormat"), "method"), "required" => true));
        // line 76
        echo "
\t</div>

\t<hr>

\t";
        // line 81
        $this->loadTemplate("_includes/fieldlayoutdesigner", "settings/sections/_entrytypes/edit", 81)->display(array("fieldLayout" => $this->getAttribute(        // line 82
(isset($context["entryType"]) ? $context["entryType"] : null), "getFieldLayout", array(), "method")));
    }

    public function getTemplateName()
    {
        return "settings/sections/_entrytypes/edit";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 82,  137 => 81,  130 => 76,  128 => 74,  127 => 73,  126 => 68,  120 => 67,  115 => 64,  113 => 62,  112 => 61,  111 => 56,  105 => 55,  101 => 53,  99 => 52,  98 => 47,  97 => 46,  94 => 45,  87 => 40,  85 => 38,  84 => 37,  83 => 31,  79 => 29,  77 => 26,  76 => 25,  74 => 19,  72 => 18,  69 => 17,  63 => 16,  58 => 15,  52 => 13,  48 => 11,  46 => 10,  42 => 8,  39 => 7,  35 => 1,  31 => 88,  29 => 87,  27 => 4,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* {% set fullPageForm = true %}*/
/* */
/* {% import "_includes/forms" as forms %}*/
/* */
/* */
/* {% block content %}*/
/* 	<input type="hidden" name="action" value="sections/saveEntryType">*/
/* */
/* 	{% if section.type == 'single' %}*/
/* 		<input type="hidden" name="redirect" value="settings/sections">*/
/* 	{% else %}*/
/* 		<input type="hidden" name="redirect" value="settings/sections/{{ section.id }}/entrytypes">*/
/* 	{% endif %}*/
/* 	<input type="hidden" name="sectionId" value="{{ section.id }}">*/
/* 	{% if entryType.id %}<input type="hidden" name="entryTypeId" value="{{ entryType.id }}">{% endif %}*/
/* */
/* 	{% if section.type != 'single' %}*/
/* 		{{ forms.textField({*/
/* 			first: true,*/
/* 			label: "Name"|t,*/
/* 			instructions: "What this entry type will be called in the CP."|t,*/
/* 			id: 'name',*/
/* 			name: 'name',*/
/* 			value: entryType.name,*/
/* 			errors: entryType.getErrors('name'),*/
/* 			autofocus: true,*/
/* 			required: true*/
/* 		}) }}*/
/* */
/* 		{{ forms.textField({*/
/* 			label: "Handle"|t,*/
/* 			instructions: "How you’ll refer to this entry type in the templates."|t,*/
/* 			id: 'handle',*/
/* 			class: 'code',*/
/* 			name: 'handle',*/
/* 			value: entryType.handle,*/
/* 			errors: entryType.getErrors('handle'),*/
/* 			required: true*/
/* 		}) }}*/
/* */
/* 		<hr>*/
/* */
/* 	{% endif %}*/
/* */
/* 	{{ forms.checkboxField({*/
/* 		first: (section.type == 'single'),*/
/* 		label: "Show the Title field"|t,*/
/* 		name: 'hasTitleField',*/
/* 		toggle: 'titleLabel-container',*/
/* 		reverseToggle: 'titleFormat-container',*/
/* 		checked: entryType.hasTitleField*/
/* 	}) }}*/
/* */
/* 	<div id="titleLabel-container"{% if not entryType.hasTitleField %} class="hidden"{% endif %}>*/
/* 		{{ forms.textField({*/
/* 			label: "Title Field Label"|t,*/
/* 			instructions: "What do you want the Title field to be called?"|t,*/
/* 			id: 'titleLabel',*/
/* 			name: 'titleLabel',*/
/* 			value: entryType.titleLabel,*/
/* 			errors: entryType.getErrors('titleLabel'),*/
/* 			required: true*/
/* 		}) }}*/
/* 	</div>*/
/* */
/* 	<div id="titleFormat-container"{% if entryType.hasTitleField %} class="hidden"{% endif %}>*/
/* 		{{ forms.textField({*/
/* 			label: "Title Format"|t,*/
/* 			instructions: "What the auto-generated entry titles should look like. You can include tags that output entry properties, such as {ex}."|t({ ex: '<code>{myCustomField}</code>' }),*/
/* 			id: 'titleFormat',*/
/* 			name: 'titleFormat',*/
/* 			value: entryType.titleFormat,*/
/* 			errors: entryType.getErrors('titleFormat'),*/
/* 			required: true*/
/* 		}) }}*/
/* 	</div>*/
/* */
/* 	<hr>*/
/* */
/* 	{% include "_includes/fieldlayoutdesigner" with {*/
/* 		fieldLayout: entryType.getFieldLayout(),*/
/* 	} only %}*/
/* {% endblock %}*/
/* */
/* */
/* {% if not entryType.handle %}*/
/* 	{% includejs "new Craft.HandleGenerator('#name', '#handle');" %}*/
/* {% endif %}*/
/* */
