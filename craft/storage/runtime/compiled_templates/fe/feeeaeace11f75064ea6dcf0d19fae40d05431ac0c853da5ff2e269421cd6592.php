<?php

/* _components/fieldtypes/Assets/settings */
class __TwigTemplate_dcadb1e1f22cfdfd07519264750037426e451cfed819d6cc451cca133b4d984c extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_components/fieldtypes/elementfieldsettings", "_components/fieldtypes/Assets/settings", 1);
        $this->blocks = array(
            'fieldSettings' => array($this, 'block_fieldSettings'),
            'uploadLocationFields' => array($this, 'block_uploadLocationFields'),
            'fileTypesField' => array($this, 'block_fileTypesField'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_components/fieldtypes/elementfieldsettings";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/Assets/settings", 3);
        // line 30
        $context["__internal_72768c4c066e5f24094678a00b5c2e95f0a62e28b3435bca8998f19c89548ccb"] = $this;
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 33
    public function block_fieldSettings($context, array $blocks = array())
    {
        // line 34
        echo "\t";
        $this->displayBlock('uploadLocationFields', $context, $blocks);
        // line 86
        echo "
\t";
        // line 87
        $this->displayBlock('fileTypesField', $context, $blocks);
        // line 110
        echo "
\t";
        // line 111
        $this->displayBlock("targetLocaleField", $context, $blocks);
        echo "
\t";
        // line 112
        $this->displayBlock("limitField", $context, $blocks);
        echo "
\t";
        // line 113
        $this->displayBlock("viewModeField", $context, $blocks);
        echo "
\t";
        // line 114
        $this->displayBlock("selectionLabelField", $context, $blocks);
        echo "
";
    }

    // line 34
    public function block_uploadLocationFields($context, array $blocks = array())
    {
        // line 35
        echo "\t\t";
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Restrict uploads to a single folder?"), "id" => "useSingleFolder-toggle", "name" => "useSingleFolder", "class" => "use-single-folder-cb", "value" => 1, "checked" => $this->getAttribute(        // line 41
(isset($context["settings"]) ? $context["settings"] : null), "useSingleFolder", array()), "toggle" => "single-folder-settings", "reverseToggle" => "multi-folder-settings"));
        // line 44
        echo "

\t\t";
        // line 46
        $context["uploadLocationNote"] = \Craft\Craft::t("Note that the subfolder path can contain variables like <code>{slug}</code> or <code>{author.username}</code>.");
        // line 47
        echo "\t\t";
        if ((isset($context["isMatrix"]) ? $context["isMatrix"] : null)) {
            // line 48
            echo "\t\t\t";
            $context["uploadLocationNote"] = $this->env->getExtension('craft')->replaceFilter((isset($context["uploadLocationNote"]) ? $context["uploadLocationNote"] : null), array("{slug}" => "{owner.slug}", "{author.username}" => "{owner.author.username}"));
            // line 52
            echo "\t\t";
        }
        // line 53
        echo "
\t\t<div id=\"multi-folder-settings\"";
        // line 54
        if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "useSingleFolder", array())) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t\t";
        // line 55
        if ((isset($context["folderOptions"]) ? $context["folderOptions"] : null)) {
            // line 56
            echo "\t\t\t\t";
            echo $context["forms"]->getcheckboxSelectField(array("label" => \Craft\Craft::t("Sources"), "instructions" => \Craft\Craft::t("Which sources do you want to select {type} from?", array("type" => twig_lower_filter($this->env,             // line 58
(isset($context["type"]) ? $context["type"] : null)))), "id" => "sources", "name" => "sources", "options" =>             // line 61
(isset($context["folderOptions"]) ? $context["folderOptions"] : null), "values" => $this->getAttribute(            // line 62
(isset($context["settings"]) ? $context["settings"] : null), "sources", array())));
            // line 63
            echo "
\t\t\t";
        } else {
            // line 65
            echo "\t\t\t\t";
            echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Sources")), (("<p class=\"error\">" . \Craft\Craft::t("No sources exist yet.")) . "</p>"));
            // line 67
            echo "
\t\t\t";
        }
        // line 69
        echo "

\t\t\t";
        // line 71
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Default Upload Location"), "instructions" => ((\Craft\Craft::t("Where should files be uploaded when they are dragged directly onto the field, or uploaded from the front end?") . " ") .         // line 73
(isset($context["uploadLocationNote"]) ? $context["uploadLocationNote"] : null)), "errors" => $this->getAttribute(        // line 74
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "defaultUploadLocationSubpath"), "method")), $context["__internal_72768c4c066e5f24094678a00b5c2e95f0a62e28b3435bca8998f19c89548ccb"]->getuploadLocationInput("defaultUploadLocation",         // line 75
(isset($context["settings"]) ? $context["settings"] : null), (isset($context["sourceOptions"]) ? $context["sourceOptions"] : null)));
        echo "
\t\t</div>

\t\t<div id=\"single-folder-settings\"";
        // line 78
        if ( !$this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "useSingleFolder", array())) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t\t";
        // line 79
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Upload Location"), "instructions" =>         // line 81
(isset($context["uploadLocationNote"]) ? $context["uploadLocationNote"] : null), "errors" => $this->getAttribute(        // line 82
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "singleUploadLocationSubpath"), "method")), $context["__internal_72768c4c066e5f24094678a00b5c2e95f0a62e28b3435bca8998f19c89548ccb"]->getuploadLocationInput("singleUploadLocation",         // line 83
(isset($context["settings"]) ? $context["settings"] : null), (isset($context["sourceOptions"]) ? $context["sourceOptions"] : null)));
        echo "
\t\t</div>
\t";
    }

    // line 87
    public function block_fileTypesField($context, array $blocks = array())
    {
        // line 88
        echo "\t\t";
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Restrict allowed file types?"), "class" => "restrictFiles", "id" => "restrictFiles", "name" => "restrictFiles", "value" => 1, "checked" => $this->getAttribute(        // line 94
(isset($context["settings"]) ? $context["settings"] : null), "restrictFiles", array()), "toggle" => "restrict-allowed-types"));
        // line 96
        echo "

\t\t<div id=\"restrict-allowed-types\"";
        // line 98
        if ( !$this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "restrictFiles", array())) {
            echo " class=\"hidden indent\"";
        }
        echo ">
\t\t\t";
        // line 99
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["fileKindOptions"]) ? $context["fileKindOptions"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["option"]) {
            // line 100
            echo "\t\t\t\t";
            echo $context["forms"]->getcheckboxField(array("label" => $this->getAttribute(            // line 101
$context["option"], "label", array()), "id" => ("allowedKinds-" . $this->getAttribute(            // line 102
$context["option"], "value", array())), "name" => "allowedKinds[]", "value" => $this->getAttribute(            // line 104
$context["option"], "value", array()), "checked" => twig_in_filter($this->getAttribute(            // line 105
$context["option"], "value", array()), $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "allowedKinds", array()))));
            // line 106
            echo "
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['option'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 108
        echo "\t\t</div>
\t";
    }

    // line 5
    public function getuploadLocationInput($__name__ = null, $__settings__ = null, $__sourceOptions__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "name" => $__name__,
            "settings" => $__settings__,
            "sourceOptions" => $__sourceOptions__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 6
            echo "\t";
            $context["__internal_da332492d492af8bc8d14594ce49dd8500e5cdfc8501ff7117d9dfb00654ae54"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/Assets/settings", 6);
            // line 7
            echo "\t<table class=\"inputs fullwidth\">
\t\t<tr>
\t\t\t<td class=\"thin\">
\t\t\t\t";
            // line 10
            echo $context["__internal_da332492d492af8bc8d14594ce49dd8500e5cdfc8501ff7117d9dfb00654ae54"]->getselect(array("id" => (            // line 11
(isset($context["name"]) ? $context["name"] : null) . "Source"), "name" => (            // line 12
(isset($context["name"]) ? $context["name"] : null) . "Source"), "options" =>             // line 13
(isset($context["sourceOptions"]) ? $context["sourceOptions"] : null), "value" => $this->getAttribute(            // line 14
(isset($context["settings"]) ? $context["settings"] : null), ((isset($context["name"]) ? $context["name"] : null) . "Source"), array(), "array")));
            // line 15
            echo "
\t\t\t</td>
\t\t\t<td>
\t\t\t\t";
            // line 18
            echo $context["__internal_da332492d492af8bc8d14594ce49dd8500e5cdfc8501ff7117d9dfb00654ae54"]->gettext(array("id" => (            // line 19
(isset($context["name"]) ? $context["name"] : null) . "Subpath"), "class" => "ltr", "name" => (            // line 21
(isset($context["name"]) ? $context["name"] : null) . "Subpath"), "value" => $this->getAttribute(            // line 22
(isset($context["settings"]) ? $context["settings"] : null), ((isset($context["name"]) ? $context["name"] : null) . "Subpath"), array(), "array"), "placeholder" => \Craft\Craft::t("path/to/subfolder")));
            // line 24
            echo "
\t\t\t</td>
\t\t</tr>
\t</table>
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/Assets/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  224 => 24,  222 => 22,  221 => 21,  220 => 19,  219 => 18,  214 => 15,  212 => 14,  211 => 13,  210 => 12,  209 => 11,  208 => 10,  203 => 7,  200 => 6,  186 => 5,  181 => 108,  174 => 106,  172 => 105,  171 => 104,  170 => 102,  169 => 101,  167 => 100,  163 => 99,  157 => 98,  153 => 96,  151 => 94,  149 => 88,  146 => 87,  139 => 83,  138 => 82,  137 => 81,  136 => 79,  130 => 78,  124 => 75,  123 => 74,  122 => 73,  121 => 71,  117 => 69,  113 => 67,  110 => 65,  106 => 63,  104 => 62,  103 => 61,  102 => 58,  100 => 56,  98 => 55,  92 => 54,  89 => 53,  86 => 52,  83 => 48,  80 => 47,  78 => 46,  74 => 44,  72 => 41,  70 => 35,  67 => 34,  61 => 114,  57 => 113,  53 => 112,  49 => 111,  46 => 110,  44 => 87,  41 => 86,  38 => 34,  35 => 33,  31 => 1,  29 => 30,  27 => 3,  11 => 1,);
    }
}
/* {% extends "_components/fieldtypes/elementfieldsettings" %}*/
/* */
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% macro uploadLocationInput(name, settings, sourceOptions) %}*/
/* 	{% from "_includes/forms" import select, text %}*/
/* 	<table class="inputs fullwidth">*/
/* 		<tr>*/
/* 			<td class="thin">*/
/* 				{{ select({*/
/* 					id: name~'Source',*/
/* 					name: name~'Source',*/
/* 					options: sourceOptions,*/
/* 					value: settings[name~'Source'],*/
/* 				}) }}*/
/* 			</td>*/
/* 			<td>*/
/* 				{{ text({*/
/* 					id: name~'Subpath',*/
/* 					class: 'ltr',*/
/* 					name: name~'Subpath',*/
/* 					value: settings[name~'Subpath'],*/
/* 					placeholder: "path/to/subfolder"|t*/
/* 				}) }}*/
/* 			</td>*/
/* 		</tr>*/
/* 	</table>*/
/* {% endmacro %}*/
/* */
/* {% from _self import uploadLocationInput %}*/
/* */
/* */
/* {% block fieldSettings %}*/
/* 	{% block uploadLocationFields %}*/
/* 		{{ forms.checkboxField({*/
/* 			label: "Restrict uploads to a single folder?"|t,*/
/* 			id: 'useSingleFolder-toggle',*/
/* 			name: 'useSingleFolder',*/
/* 			class: 'use-single-folder-cb',*/
/* 			value: 1,*/
/* 			checked: settings.useSingleFolder,*/
/* 			toggle: 'single-folder-settings',*/
/* 			reverseToggle: 'multi-folder-settings'*/
/* 		}) }}*/
/* */
/* 		{% set uploadLocationNote = "Note that the subfolder path can contain variables like <code>{slug}</code> or <code>{author.username}</code>."|t %}*/
/* 		{% if isMatrix %}*/
/* 			{% set uploadLocationNote = uploadLocationNote|replace({*/
/* 				'{slug}': '{owner.slug}',*/
/* 				'{author.username}': '{owner.author.username}'*/
/* 			}) %}*/
/* 		{% endif %}*/
/* */
/* 		<div id="multi-folder-settings"{% if settings.useSingleFolder %} class="hidden"{% endif %}>*/
/* 			{% if folderOptions %}*/
/* 				{{ forms.checkboxSelectField({*/
/* 					label: "Sources"|t,*/
/* 					instructions: "Which sources do you want to select {type} from?"|t({ type: type|lower }),*/
/* 					id: 'sources',*/
/* 					name: 'sources',*/
/* 					options: folderOptions,*/
/* 					values: settings.sources*/
/* 				})}}*/
/* 			{% else %}*/
/* 				{{ forms.field({*/
/* 					label: "Sources"|t*/
/* 				}, '<p class="error">' ~ "No sources exist yet."|t ~ '</p>') }}*/
/* 			{% endif %}*/
/* */
/* */
/* 			{{ forms.field({*/
/* 				label: "Default Upload Location"|t,*/
/* 				instructions: "Where should files be uploaded when they are dragged directly onto the field, or uploaded from the front end?"|t ~' '~ uploadLocationNote,*/
/* 				errors: settings.getErrors('defaultUploadLocationSubpath')*/
/* 			}, uploadLocationInput('defaultUploadLocation', settings, sourceOptions)) }}*/
/* 		</div>*/
/* */
/* 		<div id="single-folder-settings"{% if not settings.useSingleFolder %} class="hidden"{% endif %}>*/
/* 			{{ forms.field({*/
/* 				label: "Upload Location"|t,*/
/* 				instructions: uploadLocationNote,*/
/* 				errors: settings.getErrors('singleUploadLocationSubpath')*/
/* 			}, uploadLocationInput('singleUploadLocation', settings, sourceOptions)) }}*/
/* 		</div>*/
/* 	{% endblock %}*/
/* */
/* 	{% block fileTypesField %}*/
/* 		{{ forms.checkboxField({*/
/* 			label: "Restrict allowed file types?"|t,*/
/* 			class: 'restrictFiles',*/
/* 			id: 'restrictFiles',*/
/* 			name: 'restrictFiles',*/
/* 			value: 1,*/
/* 			checked: settings.restrictFiles,*/
/* 			toggle: 'restrict-allowed-types'*/
/* 		}) }}*/
/* */
/* 		<div id="restrict-allowed-types"{% if not settings.restrictFiles %} class="hidden indent"{% endif %}>*/
/* 			{% for option in fileKindOptions %}*/
/* 				{{ forms.checkboxField({*/
/* 					label: option.label,*/
/* 					id: 'allowedKinds-'~option.value,*/
/* 					name: 'allowedKinds[]',*/
/* 					value: option.value,*/
/* 					checked: (option.value in settings.allowedKinds)*/
/* 				}) }}*/
/* 			{% endfor %}*/
/* 		</div>*/
/* 	{% endblock %}*/
/* */
/* 	{{ block('targetLocaleField') }}*/
/* 	{{ block('limitField') }}*/
/* 	{{ block('viewModeField') }}*/
/* 	{{ block('selectionLabelField') }}*/
/* {% endblock %}*/
/* */
