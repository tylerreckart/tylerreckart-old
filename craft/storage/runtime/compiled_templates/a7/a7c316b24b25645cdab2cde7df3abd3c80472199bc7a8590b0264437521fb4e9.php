<?php

/* _components/widgets/QuickPost/settings */
class __TwigTemplate_89f48046f74e0794cfd1da06041c5faa48ed7237a598b8086cfbbd14a984256d extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/widgets/QuickPost/settings", 1);
        // line 2
        echo "
";
        // line 3
        if ((isset($context["sections"]) ? $context["sections"] : null)) {
            // line 4
            echo "\t";
            $context["sectionOptions"] = array();
            // line 5
            echo "\t";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["sections"]) ? $context["sections"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["section"]) {
                // line 6
                echo "\t\t";
                $context["sectionOptions"] = twig_array_merge((isset($context["sectionOptions"]) ? $context["sectionOptions"] : null), array(0 => array("label" => \Craft\Craft::t($this->getAttribute($context["section"], "name", array())), "value" => $this->getAttribute($context["section"], "id", array()))));
                // line 7
                echo "\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['section'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 8
            echo "\t";
            echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Section"), "instructions" => \Craft\Craft::t("Which section do you want to publish entries to?"), "id" => "section", "name" => "section", "options" =>             // line 13
(isset($context["sectionOptions"]) ? $context["sectionOptions"] : null), "value" => $this->getAttribute(            // line 14
(isset($context["settings"]) ? $context["settings"] : null), "section", array()), "toggle" => true, "targetPrefix" => "section"));
            // line 17
            echo "

\t";
            // line 19
            $context["selectedSectionId"] = $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "section", array());
            // line 20
            echo "
\t";
            // line 21
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["sections"]) ? $context["sections"] : null));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["section"]) {
                // line 22
                echo "\t\t";
                $context["showSection"] = (( !(isset($context["selectedSectionId"]) ? $context["selectedSectionId"] : null) && $this->getAttribute($context["loop"], "first", array())) || ((isset($context["selectedSectionId"]) ? $context["selectedSectionId"] : null) == $this->getAttribute($context["section"], "id", array())));
                // line 23
                echo "\t\t<div id=\"section";
                echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                echo "\"";
                if ( !(isset($context["showSection"]) ? $context["showSection"] : null)) {
                    echo " class=\"hidden\"";
                }
                echo ">

\t\t\t";
                // line 25
                $context["entryTypeOptions"] = array();
                // line 26
                echo "\t\t\t";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["section"], "getEntryTypes", array(), "method"));
                foreach ($context['_seq'] as $context["_key"] => $context["entryType"]) {
                    // line 27
                    echo "\t\t\t\t";
                    $context["entryTypeOptions"] = twig_array_merge((isset($context["entryTypeOptions"]) ? $context["entryTypeOptions"] : null), array(0 => array("label" => \Craft\Craft::t($this->getAttribute($context["entryType"], "name", array())), "value" => $this->getAttribute($context["entryType"], "id", array()))));
                    // line 28
                    echo "\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entryType'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 29
                echo "
\t\t\t";
                // line 30
                if ((twig_length_filter($this->env, (isset($context["entryTypeOptions"]) ? $context["entryTypeOptions"] : null)) == 1)) {
                    // line 31
                    echo "\t\t\t\t<input type=\"hidden\" name=\"sections[";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                    echo "][entryType]\" value=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "entryType", array()), "html", null, true);
                    echo "\" />
\t\t\t";
                } else {
                    // line 33
                    echo "\t\t\t\t";
                    echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Entry Type"), "instructions" => \Craft\Craft::t("Which type of entries do you want to publish?"), "id" => "entryType", "name" => (("sections[" . $this->getAttribute(                    // line 37
$context["section"], "id", array())) . "][entryType]"), "options" =>                     // line 38
(isset($context["entryTypeOptions"]) ? $context["entryTypeOptions"] : null), "value" => $this->getAttribute(                    // line 39
(isset($context["settings"]) ? $context["settings"] : null), "entryType", array()), "toggle" => true, "targetPrefix" => (("section" . $this->getAttribute(                    // line 41
$context["section"], "id", array())) . "-type")));
                    // line 42
                    echo "
\t\t\t";
                }
                // line 44
                echo "
\t\t\t";
                // line 45
                ob_start();
                // line 46
                echo "\t\t\t\t";
                $context["entryTypes"] = $this->getAttribute($context["section"], "getEntryTypes", array(), "method");
                // line 47
                echo "\t\t\t\t";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["entryTypes"]) ? $context["entryTypes"] : null));
                $context['loop'] = array(
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                );
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["entryType"]) {
                    // line 48
                    echo "\t\t\t\t\t";
                    $context["showEntryType"] = (((( !(isset($context["showSection"]) ? $context["showSection"] : null) ||  !$this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "entryType", array())) && $this->getAttribute($context["loop"], "first", array())) || ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "entryType", array()) == $this->getAttribute($context["entryType"], "id", array()))) || (twig_length_filter($this->env, (isset($context["entryTypes"]) ? $context["entryTypes"] : null)) == 1));
                    // line 49
                    echo "\t\t\t\t\t<div id=\"section";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                    echo "-type";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["entryType"], "id", array()), "html", null, true);
                    echo "\"";
                    if ( !(isset($context["showEntryType"]) ? $context["showEntryType"] : null)) {
                        echo " class=\"hidden\"";
                    }
                    echo ">
\t\t\t\t\t\t";
                    // line 50
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($context["entryType"], "getFieldLayout", array(), "method"), "getFields", array(), "method"));
                    foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                        // line 51
                        echo "\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t";
                        // line 52
                        echo $context["forms"]->getcheckbox(array("label" => ($this->getAttribute($this->getAttribute(                        // line 53
$context["field"], "getField", array(), "method"), "name", array()) . (($this->getAttribute($context["field"], "required", array())) ? (" <span class=\"required\"></span>") : (""))), "name" => (("sections[" . $this->getAttribute(                        // line 54
$context["section"], "id", array())) . "][fields][]"), "value" => $this->getAttribute(                        // line 55
$context["field"], "fieldId", array()), "checked" => ($this->getAttribute(                        // line 56
$context["field"], "required", array()) || twig_in_filter($this->getAttribute($context["field"], "fieldId", array()), $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "fields", array()))), "disabled" => $this->getAttribute(                        // line 57
$context["field"], "required", array())));
                        // line 58
                        echo "
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 61
                    echo "\t\t\t\t\t</div>
\t\t\t\t";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entryType'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 63
                echo "\t\t\t";
                $context["fieldsInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                // line 64
                echo "
\t\t\t";
                // line 65
                echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Fields"), "instructions" => \Craft\Craft::t("Which fields should be visible in the widget?")),                 // line 68
(isset($context["fieldsInput"]) ? $context["fieldsInput"] : null));
                echo "
\t\t</div>
\t";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['section'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 71
            echo "
";
        } else {
            // line 73
            echo "
\t<p>";
            // line 74
            echo twig_escape_filter($this->env, \Craft\Craft::t("No sections are available."), "html", null, true);
            echo "</p>

";
        }
    }

    public function getTemplateName()
    {
        return "_components/widgets/QuickPost/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  235 => 74,  232 => 73,  228 => 71,  211 => 68,  210 => 65,  207 => 64,  204 => 63,  189 => 61,  181 => 58,  179 => 57,  178 => 56,  177 => 55,  176 => 54,  175 => 53,  174 => 52,  171 => 51,  167 => 50,  156 => 49,  153 => 48,  135 => 47,  132 => 46,  130 => 45,  127 => 44,  123 => 42,  121 => 41,  120 => 39,  119 => 38,  118 => 37,  116 => 33,  108 => 31,  106 => 30,  103 => 29,  97 => 28,  94 => 27,  89 => 26,  87 => 25,  77 => 23,  74 => 22,  57 => 21,  54 => 20,  52 => 19,  48 => 17,  46 => 14,  45 => 13,  43 => 8,  37 => 7,  34 => 6,  29 => 5,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% if sections %}*/
/* 	{% set sectionOptions = [] %}*/
/* 	{% for section in sections %}*/
/* 		{% set sectionOptions = sectionOptions|merge([{ label: section.name|t, value: section.id }]) %}*/
/* 	{% endfor %}*/
/* 	{{ forms.selectField({*/
/* 		label: "Section"|t,*/
/* 		instructions: "Which section do you want to publish entries to?"|t,*/
/* 		id: 'section',*/
/* 		name: 'section',*/
/* 		options: sectionOptions,*/
/* 		value: settings.section,*/
/* 		toggle: true,*/
/* 		targetPrefix: 'section'*/
/* 	}) }}*/
/* */
/* 	{% set selectedSectionId = settings.section %}*/
/* */
/* 	{% for section in sections %}*/
/* 		{% set showSection = ((not selectedSectionId and loop.first) or selectedSectionId == section.id) %}*/
/* 		<div id="section{{ section.id }}"{% if not showSection %} class="hidden"{% endif %}>*/
/* */
/* 			{% set entryTypeOptions = [] %}*/
/* 			{% for entryType in section.getEntryTypes() %}*/
/* 				{% set entryTypeOptions = entryTypeOptions|merge([{ label: entryType.name|t, value: entryType.id }]) %}*/
/* 			{% endfor %}*/
/* */
/* 			{% if entryTypeOptions|length == 1 %}*/
/* 				<input type="hidden" name="sections[{{ section.id }}][entryType]" value="{{ settings.entryType }}" />*/
/* 			{% else %}*/
/* 				{{ forms.selectField({*/
/* 					label: "Entry Type"|t,*/
/* 					instructions: "Which type of entries do you want to publish?"|t,*/
/* 					id: 'entryType',*/
/* 					name: 'sections['~section.id~'][entryType]',*/
/* 					options: entryTypeOptions,*/
/* 					value: settings.entryType,*/
/* 					toggle: true,*/
/* 					targetPrefix: 'section'~section.id~'-type'*/
/* 				}) }}*/
/* 			{% endif %}*/
/* */
/* 			{% set fieldsInput %}*/
/* 				{% set entryTypes = section.getEntryTypes() %}*/
/* 				{% for entryType in entryTypes %}*/
/* 					{% set showEntryType = (((not showSection or not settings.entryType) and loop.first) or settings.entryType == entryType.id or entryTypes|length == 1) %}*/
/* 					<div id="section{{ section.id }}-type{{ entryType.id }}"{% if not showEntryType %} class="hidden"{% endif %}>*/
/* 						{% for field in entryType.getFieldLayout().getFields() %}*/
/* 							<div>*/
/* 								{{ forms.checkbox({*/
/* 									label: field.getField().name~(field.required ? ' <span class="required"></span>' : ''),*/
/* 									name: 'sections['~section.id~'][fields][]',*/
/* 									value: field.fieldId,*/
/* 									checked: (field.required or field.fieldId in settings.fields),*/
/* 									disabled: field.required*/
/* 								}) }}*/
/* 							</div>*/
/* 						{% endfor %}*/
/* 					</div>*/
/* 				{% endfor %}*/
/* 			{% endset %}*/
/* */
/* 			{{ forms.field({*/
/* 				label: "Fields"|t,*/
/* 				instructions: "Which fields should be visible in the widget?"|t*/
/* 			}, fieldsInput) }}*/
/* 		</div>*/
/* 	{% endfor %}*/
/* */
/* {% else %}*/
/* */
/* 	<p>{{ "No sections are available."|t }}</p>*/
/* */
/* {% endif %}*/
/* */
