<?php

/* _components/fieldtypes/elementfieldsettings */
class __TwigTemplate_dc0a110db34bf11645cec83536d12bf61ffc4331ef6f624ee58c06af6b6a1661 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'fieldSettings' => array($this, 'block_fieldSettings'),
            'sourcesField' => array($this, 'block_sourcesField'),
            'targetLocaleField' => array($this, 'block_targetLocaleField'),
            'limitField' => array($this, 'block_limitField'),
            'viewModeField' => array($this, 'block_viewModeField'),
            'selectionLabelField' => array($this, 'block_selectionLabelField'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/elementfieldsettings", 1);
        // line 2
        echo "
";
        // line 3
        $this->displayBlock('fieldSettings', $context, $blocks);
    }

    public function block_fieldSettings($context, array $blocks = array())
    {
        // line 4
        echo "\t";
        $this->displayBlock('sourcesField', $context, $blocks);
        // line 31
        echo "
\t";
        // line 32
        $this->displayBlock('targetLocaleField', $context, $blocks);
        // line 35
        echo "
\t";
        // line 36
        $this->displayBlock('limitField', $context, $blocks);
        // line 49
        echo "
\t";
        // line 50
        $this->displayBlock('viewModeField', $context, $blocks);
        // line 53
        echo "
\t";
        // line 54
        $this->displayBlock('selectionLabelField', $context, $blocks);
    }

    // line 4
    public function block_sourcesField($context, array $blocks = array())
    {
        // line 5
        echo "\t\t";
        if ((isset($context["sources"]) ? $context["sources"] : null)) {
            // line 6
            echo "\t\t\t";
            if ((isset($context["allowMultipleSources"]) ? $context["allowMultipleSources"] : null)) {
                // line 7
                echo "\t\t\t\t";
                echo $context["forms"]->getcheckboxSelectField(array("label" => \Craft\Craft::t("Sources"), "instructions" => \Craft\Craft::t("Which sources do you want to select {type} from?", array("type" => twig_lower_filter($this->env,                 // line 9
(isset($context["type"]) ? $context["type"] : null)))), "id" => "sources", "name" => "sources", "options" =>                 // line 12
(isset($context["sources"]) ? $context["sources"] : null), "values" => $this->getAttribute(                // line 13
(isset($context["settings"]) ? $context["settings"] : null), "sources", array())));
                // line 14
                echo "
\t\t\t";
            } else {
                // line 16
                echo "\t\t\t\t";
                echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Source"), "instructions" => \Craft\Craft::t("Which source do you want to select {type} from?", array("type" => twig_lower_filter($this->env,                 // line 18
(isset($context["type"]) ? $context["type"] : null)))), "id" => "source", "name" => "source", "options" =>                 // line 21
(isset($context["sources"]) ? $context["sources"] : null), "value" => $this->getAttribute(                // line 22
(isset($context["settings"]) ? $context["settings"] : null), "source", array())));
                // line 23
                echo "
\t\t\t";
            }
            // line 25
            echo "\t\t";
        } else {
            // line 26
            echo "\t\t\t";
            echo $context["forms"]->getfield(array("label" => ((            // line 27
(isset($context["allowMultipleSources"]) ? $context["allowMultipleSources"] : null)) ? (\Craft\Craft::t("Sources")) : (\Craft\Craft::t("Source")))), (("<p class=\"error\">" . \Craft\Craft::t("No sources exist yet.")) . "</p>"));
            // line 28
            echo "
\t\t";
        }
        // line 30
        echo "\t";
    }

    // line 32
    public function block_targetLocaleField($context, array $blocks = array())
    {
        // line 33
        echo "\t\t";
        echo (isset($context["targetLocaleFieldHtml"]) ? $context["targetLocaleFieldHtml"] : null);
        echo "
\t";
    }

    // line 36
    public function block_limitField($context, array $blocks = array())
    {
        // line 37
        echo "\t\t";
        if ((isset($context["allowLimit"]) ? $context["allowLimit"] : null)) {
            // line 38
            echo "\t\t\t";
            echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Limit"), "instructions" => \Craft\Craft::t("Limit the number of selectable {type}.", array("type" => twig_lower_filter($this->env,             // line 40
(isset($context["type"]) ? $context["type"] : null)))), "id" => "limit", "name" => "limit", "value" => $this->getAttribute(            // line 43
(isset($context["settings"]) ? $context["settings"] : null), "limit", array()), "size" => 2, "errors" => $this->getAttribute(            // line 45
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "limit"), "method")));
            // line 46
            echo "
\t\t";
        }
        // line 48
        echo "\t";
    }

    // line 50
    public function block_viewModeField($context, array $blocks = array())
    {
        // line 51
        echo "\t\t";
        echo (isset($context["viewModeFieldHtml"]) ? $context["viewModeFieldHtml"] : null);
        echo "
\t";
    }

    // line 54
    public function block_selectionLabelField($context, array $blocks = array())
    {
        // line 55
        echo "\t\t";
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Selection Label"), "instructions" => \Craft\Craft::t("Enter the text you want to appear on the {type} selection input.", array("type" => twig_lower_filter($this->env,         // line 57
(isset($context["type"]) ? $context["type"] : null)))), "id" => "selectionLabel", "name" => "selectionLabel", "value" => $this->getAttribute(        // line 60
(isset($context["settings"]) ? $context["settings"] : null), "selectionLabel", array()), "placeholder" =>         // line 61
(isset($context["defaultSelectionLabel"]) ? $context["defaultSelectionLabel"] : null), "errors" => $this->getAttribute(        // line 62
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "selectionLabel"), "method")));
        // line 63
        echo "
\t";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/elementfieldsettings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  155 => 63,  153 => 62,  152 => 61,  151 => 60,  150 => 57,  148 => 55,  145 => 54,  138 => 51,  135 => 50,  131 => 48,  127 => 46,  125 => 45,  124 => 43,  123 => 40,  121 => 38,  118 => 37,  115 => 36,  108 => 33,  105 => 32,  101 => 30,  97 => 28,  95 => 27,  93 => 26,  90 => 25,  86 => 23,  84 => 22,  83 => 21,  82 => 18,  80 => 16,  76 => 14,  74 => 13,  73 => 12,  72 => 9,  70 => 7,  67 => 6,  64 => 5,  61 => 4,  57 => 54,  54 => 53,  52 => 50,  49 => 49,  47 => 36,  44 => 35,  42 => 32,  39 => 31,  36 => 4,  30 => 3,  27 => 2,  25 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% block fieldSettings %}*/
/* 	{% block sourcesField %}*/
/* 		{% if sources %}*/
/* 			{% if allowMultipleSources %}*/
/* 				{{ forms.checkboxSelectField({*/
/* 					label: "Sources"|t,*/
/* 					instructions: "Which sources do you want to select {type} from?"|t({ type: type|lower }),*/
/* 					id: 'sources',*/
/* 					name: 'sources',*/
/* 					options: sources,*/
/* 					values: settings.sources*/
/* 				})}}*/
/* 			{% else %}*/
/* 				{{ forms.selectField({*/
/* 					label: "Source"|t,*/
/* 					instructions: "Which source do you want to select {type} from?"|t({ type: type|lower }),*/
/* 					id: 'source',*/
/* 					name: 'source',*/
/* 					options: sources,*/
/* 					value: settings.source*/
/* 				}) }}*/
/* 			{% endif %}*/
/* 		{% else %}*/
/* 			{{ forms.field({*/
/* 				label: (allowMultipleSources ? "Sources"|t : "Source"|t)*/
/* 			}, '<p class="error">' ~ "No sources exist yet."|t ~ '</p>') }}*/
/* 		{% endif %}*/
/* 	{% endblock %}*/
/* */
/* 	{% block targetLocaleField %}*/
/* 		{{ targetLocaleFieldHtml|raw }}*/
/* 	{% endblock %}*/
/* */
/* 	{% block limitField %}*/
/* 		{% if allowLimit %}*/
/* 			{{ forms.textField({*/
/* 				label: "Limit"|t,*/
/* 				instructions: "Limit the number of selectable {type}."|t({ type: type|lower }),*/
/* 				id: 'limit',*/
/* 				name: 'limit',*/
/* 				value: settings.limit,*/
/* 				size: 2,*/
/* 				errors: settings.getErrors('limit')*/
/* 			}) }}*/
/* 		{% endif %}*/
/* 	{% endblock %}*/
/* */
/* 	{% block viewModeField %}*/
/* 		{{ viewModeFieldHtml|raw }}*/
/* 	{% endblock %}*/
/* */
/* 	{% block selectionLabelField %}*/
/* 		{{ forms.textField({*/
/* 			label: "Selection Label"|t,*/
/* 			instructions: "Enter the text you want to appear on the {type} selection input."|t({ type: type|lower }),*/
/* 			id: 'selectionLabel',*/
/* 			name: 'selectionLabel',*/
/* 			value: settings.selectionLabel,*/
/* 			placeholder: defaultSelectionLabel,*/
/* 			errors: settings.getErrors('selectionLabel')*/
/* 		}) }}*/
/* 	{% endblock %}*/
/* {% endblock %}*/
/* */
