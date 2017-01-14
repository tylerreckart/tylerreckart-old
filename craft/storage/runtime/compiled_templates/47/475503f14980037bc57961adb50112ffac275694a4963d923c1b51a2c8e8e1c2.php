<?php

/* settings/fields/_edit */
class __TwigTemplate_b957e5dfd3e9be8da36b23735ff1524da631a3afe352e1629c8618ac1a677172 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/fields/_edit", 3);
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
        // line 1
        \Craft\craft()->userSession->requireAdmin();
        // line 4
        $context["fullPageForm"] = true;
        // line 6
        $context["docsUrl"] = "http://craftcms.com/docs/fields#field-layouts";
        // line 8
        $context["forms"] = $this->loadTemplate("_includes/forms", "settings/fields/_edit", 8);
        // line 10
        if (( !array_key_exists("field", $context) && array_key_exists("fieldId", $context))) {
            // line 11
            $context["field"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getFieldById", array(0 => (isset($context["fieldId"]) ? $context["fieldId"] : null)), "method");
            // line 12
            if ( !(isset($context["field"]) ? $context["field"] : null)) {
                // line 13
                throw new \Craft\HttpException(404);
            }
        }
        // line 18
        $context["groups"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getAllGroups", array(0 => "id"), "method");
        // line 19
        if ( !(isset($context["groups"]) ? $context["groups"] : null)) {
            // line 20
            throw new \Craft\HttpException(404);
        }
        // line 23
        $context["groupId"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getQuery", array(0 => "groupId"), "method");
        // line 25
        if ( !(isset($context["groupId"]) ? $context["groupId"] : null)) {
            // line 26
            if (array_key_exists("field", $context)) {
                // line 27
                $context["groupId"] = $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "groupId", array());
            } else {
                // line 29
                $context["groupId"] = $this->getAttribute(twig_get_array_keys_filter((isset($context["groups"]) ? $context["groups"] : null)), 0, array(), "array");
            }
        }
        // line 33
        if ( !$this->getAttribute((isset($context["groups"]) ? $context["groups"] : null), (isset($context["groupId"]) ? $context["groupId"] : null), array(), "array", true, true)) {
            // line 34
            throw new \Craft\HttpException(404);
        }
        // line 38
        $context["crumbs"] = array(0 => array("label" => \Craft\Craft::t("Settings"), "url" => \Craft\UrlHelper::getUrl("settings")), 1 => array("label" => \Craft\Craft::t("Fields"), "url" => \Craft\UrlHelper::getUrl("settings/fields")), 2 => array("label" => \Craft\Craft::t($this->getAttribute($this->getAttribute(        // line 41
(isset($context["groups"]) ? $context["groups"] : null), (isset($context["groupId"]) ? $context["groupId"] : null), array(), "array"), "name", array())), "url" => \Craft\UrlHelper::getUrl(("settings/fields/" . (isset($context["groupId"]) ? $context["groupId"] : null)))));
        // line 44
        if (array_key_exists("fieldId", $context)) {
            // line 45
            $context["title"] = $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array());
        } else {
            // line 47
            $context["title"] = \Craft\Craft::t("Create a new field");
        }
        // line 51
        $context["fieldTypes"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getAllFieldTypes", array(), "method");
        // line 53
        if (array_key_exists("field", $context)) {
            // line 54
            $context["fieldType"] = $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "getFieldType", array(), "method");
            // line 55
            $context["isFieldTypeMissing"] =  !(isset($context["fieldType"]) ? $context["fieldType"] : null);
        } else {
            // line 57
            $context["isFieldTypeMissing"] = false;
        }
        // line 60
        if (( !array_key_exists("fieldType", $context) || (isset($context["isFieldTypeMissing"]) ? $context["isFieldTypeMissing"] : null))) {
            // line 61
            $context["fieldType"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getFieldType", array(0 => "PlainText"), "method");
        }
        // line 160
        if (( !array_key_exists("field", $context) ||  !$this->getAttribute((isset($context["field"]) ? $context["field"] : null), "handle", array()))) {
            // line 161
            $_js = "new Craft.HandleGenerator('#name', '#handle');";
            \Craft\craft()->templates->includejs($_js);
        }
        // line 3
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 65
    public function block_content($context, array $blocks = array())
    {
        // line 66
        echo "
\t<input type=\"hidden\" name=\"action\" value=\"fields/saveField\">
\t<input type=\"hidden\" name=\"redirect\" value=\"settings/fields/{groupId}\">
\t";
        // line 69
        if (array_key_exists("fieldId", $context)) {
            // line 70
            echo "\t\t<input type=\"hidden\" name=\"fieldId\" value=\"";
            echo twig_escape_filter($this->env, (isset($context["fieldId"]) ? $context["fieldId"] : null), "html", null, true);
            echo "\">
\t";
        }
        // line 72
        echo "
\t";
        // line 73
        $context["groupOptions"] = array();
        // line 74
        echo "\t";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["groups"]) ? $context["groups"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["group"]) {
            // line 75
            echo "\t\t";
            $context["groupOptions"] = twig_array_merge((isset($context["groupOptions"]) ? $context["groupOptions"] : null), array(0 => array("label" => $this->getAttribute($context["group"], "name", array()), "value" => $this->getAttribute($context["group"], "id", array()))));
            // line 76
            echo "\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['group'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 77
        echo "\t";
        echo $context["forms"]->getselectField(array("first" => true, "label" => \Craft\Craft::t("Group"), "instructions" => \Craft\Craft::t("Which group should this field be displayed in?"), "id" => "group", "name" => "group", "options" =>         // line 83
(isset($context["groupOptions"]) ? $context["groupOptions"] : null), "value" =>         // line 84
(isset($context["groupId"]) ? $context["groupId"] : null)));
        // line 85
        echo "

\t";
        // line 87
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Name"), "instructions" => \Craft\Craft::t("What this field will be called in the CP."), "id" => "name", "name" => "name", "value" => ((        // line 92
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array())) : (null)), "errors" => ((        // line 93
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "getErrors", array(0 => "name"), "method")) : (null)), "required" => true, "translatable" => true, "autofocus" => true));
        // line 97
        echo "

\t";
        // line 99
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Handle"), "instructions" => \Craft\Craft::t("How you’ll refer to this field in the templates."), "id" => "handle", "class" => "code", "name" => "handle", "maxlength" => 64, "value" => ((        // line 106
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "handle", array())) : (null)), "errors" => ((        // line 107
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "getErrors", array(0 => "handle"), "method")) : (null)), "required" => true));
        // line 109
        echo "

\t";
        // line 111
        echo $context["forms"]->gettextareaField(array("label" => \Craft\Craft::t("Instructions"), "instructions" => \Craft\Craft::t("Helper text to guide the author."), "id" => "instructions", "class" => "nicetext", "name" => "instructions", "value" => ((        // line 117
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "instructions", array())) : (null)), "errors" => ((        // line 118
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "getErrors", array(0 => "instructions"), "method")) : (null)), "translatable" => true));
        // line 120
        echo "

\t";
        // line 122
        if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
            // line 123
            echo "\t\t";
            echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("This field is translatable"), "name" => "translatable", "checked" => ((            // line 126
array_key_exists("field", $context)) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "translatable", array())) : (false))));
            // line 127
            echo "
\t";
        }
        // line 129
        echo "
\t<hr>

\t";
        // line 132
        echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Field Type"), "instructions" => \Craft\Craft::t("What type of field is this?"), "warning" => ((        // line 135
array_key_exists("fieldId", $context)) ? (\Craft\Craft::t("Changing this may result in data loss.")) : ("")), "id" => "type", "name" => "type", "options" =>         // line 138
(isset($context["fieldTypes"]) ? $context["fieldTypes"] : null), "value" => $this->getAttribute(        // line 139
(isset($context["fieldType"]) ? $context["fieldType"] : null), "getClassHandle", array(), "method"), "errors" => ((        // line 140
(isset($context["isFieldTypeMissing"]) ? $context["isFieldTypeMissing"] : null)) ? (array(0 => \Craft\Craft::t("The fieldtype class “{class}” could not be found.", array("class" => $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "type", array()))))) : (null)), "toggle" => true));
        // line 142
        echo "

\t";
        // line 144
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["fieldTypes"]) ? $context["fieldTypes"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["_fieldType"]) {
            // line 145
            echo "\t\t";
            $context["isCurrent"] = ($this->getAttribute($context["_fieldType"], "getClassHandle", array(), "method") == $this->getAttribute((isset($context["fieldType"]) ? $context["fieldType"] : null), "getClassHandle", array(), "method"));
            // line 146
            echo "\t\t<div id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["_fieldType"], "getClassHandle", array(), "method"), "html", null, true);
            echo "\"";
            if ( !(isset($context["isCurrent"]) ? $context["isCurrent"] : null)) {
                echo " class=\"hidden\"";
            }
            echo ">
\t\t\t";
            // line 147
            $_namespace = (("types[" . $this->getAttribute($context["_fieldType"], "getClassHandle", array(), "method")) . "]");
            if ($_namespace) {
                $_originalNamespace = \Craft\craft()->templates->getNamespace();
                \Craft\craft()->templates->setNamespace(\Craft\craft()->templates->namespaceInputName($_namespace));
                ob_start();
                try {
                    // line 148
                    echo "\t\t\t\t";
                    if ((isset($context["isCurrent"]) ? $context["isCurrent"] : null)) {
                        // line 149
                        echo "\t\t\t\t\t";
                        echo $this->getAttribute((isset($context["fieldType"]) ? $context["fieldType"] : null), "getSettingsHtml", array(), "method");
                        echo "
\t\t\t\t";
                    } else {
                        // line 151
                        echo "\t\t\t\t\t";
                        echo $this->getAttribute($context["_fieldType"], "getSettingsHtml", array(), "method");
                        echo "
\t\t\t\t";
                    }
                    // line 153
                    echo "\t\t\t";
                } catch (Exception $e) {
                    ob_end_clean();

                    throw $e;
                }
                echo \Craft\craft()->templates->namespaceInputs(ob_get_clean(), $_namespace);
                \Craft\craft()->templates->setNamespace($_originalNamespace);
            } else {
                // line 148
                echo "\t\t\t\t";
                if ((isset($context["isCurrent"]) ? $context["isCurrent"] : null)) {
                    // line 149
                    echo "\t\t\t\t\t";
                    echo $this->getAttribute((isset($context["fieldType"]) ? $context["fieldType"] : null), "getSettingsHtml", array(), "method");
                    echo "
\t\t\t\t";
                } else {
                    // line 151
                    echo "\t\t\t\t\t";
                    echo $this->getAttribute($context["_fieldType"], "getSettingsHtml", array(), "method");
                    echo "
\t\t\t\t";
                }
                // line 153
                echo "\t\t\t";
            }
            unset($_originalNamespace, $_namespace);
            // line 154
            echo "\t\t</div>
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['_fieldType'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 156
        echo "
";
    }

    public function getTemplateName()
    {
        return "settings/fields/_edit";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  273 => 156,  266 => 154,  262 => 153,  256 => 151,  250 => 149,  247 => 148,  237 => 153,  231 => 151,  225 => 149,  222 => 148,  215 => 147,  206 => 146,  203 => 145,  199 => 144,  195 => 142,  193 => 140,  192 => 139,  191 => 138,  190 => 135,  189 => 132,  184 => 129,  180 => 127,  178 => 126,  176 => 123,  174 => 122,  170 => 120,  168 => 118,  167 => 117,  166 => 111,  162 => 109,  160 => 107,  159 => 106,  158 => 99,  154 => 97,  152 => 93,  151 => 92,  150 => 87,  146 => 85,  144 => 84,  143 => 83,  141 => 77,  135 => 76,  132 => 75,  127 => 74,  125 => 73,  122 => 72,  116 => 70,  114 => 69,  109 => 66,  106 => 65,  102 => 3,  98 => 161,  96 => 160,  93 => 61,  91 => 60,  88 => 57,  85 => 55,  83 => 54,  81 => 53,  79 => 51,  76 => 47,  73 => 45,  71 => 44,  69 => 41,  68 => 38,  65 => 34,  63 => 33,  59 => 29,  56 => 27,  54 => 26,  52 => 25,  50 => 23,  47 => 20,  45 => 19,  43 => 18,  39 => 13,  37 => 12,  35 => 11,  33 => 10,  31 => 8,  29 => 6,  27 => 4,  25 => 1,  11 => 3,);
    }
}
/* {% requireAdmin %}*/
/* */
/* {% extends "_layouts/cp" %}*/
/* {% set fullPageForm = true %}*/
/* */
/* {% set docsUrl = 'http://craftcms.com/docs/fields#field-layouts' %}*/
/* */
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% if field is not defined and fieldId is defined %}*/
/* 	{% set field = craft.fields.getFieldById(fieldId) %}*/
/* 	{% if not field %}*/
/* 		{% exit 404 %}*/
/* 	{% endif %}*/
/* {% endif %}*/
/* */
/* */
/* {% set groups = craft.fields.getAllGroups('id') %}*/
/* {% if not groups %}*/
/* 	{% exit 404 %}*/
/* {% endif %}*/
/* */
/* {% set groupId = craft.request.getQuery('groupId') %}*/
/* */
/* {% if not groupId %}*/
/* 	{% if field is defined %}*/
/* 		{% set groupId = field.groupId %}*/
/* 	{% else %}*/
/* 		{% set groupId = groups|keys[0] %}*/
/* 	{% endif %}*/
/* {% endif %}*/
/* */
/* {% if groups[groupId] is not defined %}*/
/* 	{% exit 404 %}*/
/* {% endif %}*/
/* */
/* */
/* {% set crumbs = [*/
/* 	{ label: "Settings"|t, url: url('settings') },*/
/* 	{ label: "Fields"|t, url: url('settings/fields') },*/
/* 	{ label: groups[groupId].name|t, url: url('settings/fields/'~groupId) }*/
/* ] %}*/
/* */
/* {% if fieldId is defined %}*/
/* 	{% set title = field.name %}*/
/* {% else %}*/
/* 	{% set title = "Create a new field"|t %}*/
/* {% endif %}*/
/* */
/* */
/* {% set fieldTypes = craft.fields.getAllFieldTypes() %}*/
/* */
/* {% if field is defined %}*/
/* 	{% set fieldType = field.getFieldType() %}*/
/* 	{% set isFieldTypeMissing = not fieldType %}*/
/* {% else %}*/
/* 	{% set isFieldTypeMissing = false %}*/
/* {% endif %}*/
/* */
/* {% if fieldType is not defined or isFieldTypeMissing %}*/
/* 	{% set fieldType = craft.fields.getFieldType('PlainText') %}*/
/* {% endif %}*/
/* */
/* */
/* {% block content %}*/
/* */
/* 	<input type="hidden" name="action" value="fields/saveField">*/
/* 	<input type="hidden" name="redirect" value="settings/fields/{groupId}">*/
/* 	{% if fieldId is defined %}*/
/* 		<input type="hidden" name="fieldId" value="{{ fieldId }}">*/
/* 	{% endif %}*/
/* */
/* 	{% set groupOptions = [] %}*/
/* 	{% for group in groups %}*/
/* 		{% set groupOptions = groupOptions|merge([{ label: group.name, value: group.id }]) %}*/
/* 	{% endfor %}*/
/* 	{{ forms.selectField({*/
/* 		first: true,*/
/* 		label: "Group"|t,*/
/* 		instructions: "Which group should this field be displayed in?"|t,*/
/* 		id: 'group',*/
/* 		name: 'group',*/
/* 		options: groupOptions,*/
/* 		value: groupId*/
/* 	}) }}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Name"|t,*/
/* 		instructions: "What this field will be called in the CP."|t,*/
/* 		id: 'name',*/
/* 		name: 'name',*/
/* 		value: (field is defined ? field.name : null),*/
/* 		errors: (field is defined ? field.getErrors('name') : null),*/
/* 		required: true,*/
/* 		translatable: true,*/
/* 		autofocus: true*/
/* 	}) }}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Handle"|t,*/
/* 		instructions: "How you’ll refer to this field in the templates."|t,*/
/* 		id: 'handle',*/
/* 		class: 'code',*/
/* 		name: 'handle',*/
/* 		maxlength: 64,*/
/* 		value: (field is defined ? field.handle : null),*/
/* 		errors: (field is defined ? field.getErrors('handle') : null),*/
/* 		required: true,*/
/* 	}) }}*/
/* */
/* 	{{ forms.textareaField({*/
/* 		label: "Instructions"|t,*/
/* 		instructions: "Helper text to guide the author."|t,*/
/* 		id: 'instructions',*/
/* 		class: 'nicetext',*/
/* 		name: 'instructions',*/
/* 		value: (field is defined ? field.instructions : null),*/
/* 		errors: (field is defined ? field.getErrors('instructions') : null),*/
/* 		translatable: true*/
/* 	}) }}*/
/* */
/* 	{% if craft.isLocalized() %}*/
/* 		{{ forms.checkboxField({*/
/* 			label: "This field is translatable"|t,*/
/* 			name: 'translatable',*/
/* 			checked: (field is defined ? field.translatable : false)*/
/* 		}) }}*/
/* 	{% endif %}*/
/* */
/* 	<hr>*/
/* */
/* 	{{ forms.selectField({*/
/* 		label: "Field Type"|t,*/
/* 		instructions: "What type of field is this?"|t,*/
/* 		warning: (fieldId is defined ? "Changing this may result in data loss."|t),*/
/* 		id: 'type',*/
/* 		name: 'type',*/
/* 		options: fieldTypes,*/
/* 		value: fieldType.getClassHandle(),*/
/* 		errors: (isFieldTypeMissing ? ["The fieldtype class “{class}” could not be found."|t({ class: field.type })] : null),*/
/* 		toggle: true*/
/* 	}) }}*/
/* */
/* 	{% for _fieldType in fieldTypes %}*/
/* 		{% set isCurrent = (_fieldType.getClassHandle() == fieldType.getClassHandle()) %}*/
/* 		<div id="{{ _fieldType.getClassHandle() }}"{% if not isCurrent %} class="hidden"{% endif %}>*/
/* 			{% namespace 'types['~_fieldType.getClassHandle()~']' %}*/
/* 				{% if isCurrent %}*/
/* 					{{ fieldType.getSettingsHtml()|raw }}*/
/* 				{% else %}*/
/* 					{{ _fieldType.getSettingsHtml()|raw }}*/
/* 				{% endif %}*/
/* 			{% endnamespace %}*/
/* 		</div>*/
/* 	{% endfor %}*/
/* */
/* {% endblock %}*/
/* */
/* */
/* {% if field is not defined or not field.handle %}*/
/* 	{% includejs "new Craft.HandleGenerator('#name', '#handle');" %}*/
/* {% endif %}*/
/* */
