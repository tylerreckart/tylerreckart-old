<?php

/* _components/widgets/RecentEntries/settings */
class __TwigTemplate_2e42e243ceb924fbca961fd5b23425a503eb3a894038f0e165603df3508bd039 extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/widgets/RecentEntries/settings", 1);
        // line 2
        echo "

";
        // line 4
        ob_start();
        // line 5
        echo "\t<div class=\"select\">
\t\t<select id=\"section\" name=\"section\">
\t\t\t<option value=\"*\">";
        // line 7
        echo twig_escape_filter($this->env, \Craft\Craft::t("All"), "html", null, true);
        echo "</option>
\t\t\t";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sections", array()), "getAllSections", array(), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["section"]) {
            // line 9
            echo "\t\t\t\t";
            if (($this->getAttribute($context["section"], "type", array()) != "single")) {
                // line 10
                echo "\t\t\t\t\t<option value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                echo "\"";
                if (($this->getAttribute($context["section"], "id", array()) == $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "section", array()))) {
                    echo " selected";
                }
                echo ">";
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["section"], "name", array())), "html", null, true);
                echo "</option>
\t\t\t\t";
            }
            // line 12
            echo "\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['section'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "\t\t</select>
\t</div>
";
        $context["sectionInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 16
        echo "
";
        // line 17
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Section"), "instructions" => \Craft\Craft::t("Which section do you want to pull recent entries from?"), "id" => "section"),         // line 21
(isset($context["sectionInput"]) ? $context["sectionInput"] : null));
        echo "

";
        // line 23
        if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
            // line 24
            echo "\t";
            $context["editableLocales"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getEditableLocales", array(), "method");
            // line 25
            echo "
\t";
            // line 26
            if ((twig_length_filter($this->env, (isset($context["editableLocales"]) ? $context["editableLocales"] : null)) > 1)) {
                // line 27
                echo "\t\t";
                ob_start();
                // line 28
                echo "\t\t\t<div class=\"select\">
\t\t\t\t<select id=\"locale\" name=\"locale\">
\t\t\t\t\t";
                // line 30
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["editableLocales"]) ? $context["editableLocales"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
                    // line 31
                    echo "\t\t\t\t\t\t<option value=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                    echo "\"";
                    if (($this->getAttribute($context["locale"], "id", array()) == $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "locale", array()))) {
                        echo " selected";
                    }
                    echo ">";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "getName", array(), "method"), "html", null, true);
                    echo "</option>
\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 33
                echo "\t\t\t\t</select>
\t\t\t</div>
\t\t";
                $context["localeInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                // line 36
                echo "
\t\t";
                // line 37
                echo $context["forms"]->getfield(array("id" => "locale", "label" => \Craft\Craft::t("Locale")),                 // line 40
(isset($context["localeInput"]) ? $context["localeInput"] : null));
                echo "
\t";
            }
        }
        // line 43
        echo "

";
        // line 45
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Limit"), "id" => "limit", "name" => "limit", "value" => $this->getAttribute(        // line 49
(isset($context["settings"]) ? $context["settings"] : null), "limit", array()), "size" => 2, "errors" => $this->getAttribute(        // line 51
(isset($context["settings"]) ? $context["settings"] : null), "getErrors", array(0 => "limit"), "method")));
        // line 52
        echo "
";
    }

    public function getTemplateName()
    {
        return "_components/widgets/RecentEntries/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  133 => 52,  131 => 51,  130 => 49,  129 => 45,  125 => 43,  119 => 40,  118 => 37,  115 => 36,  110 => 33,  95 => 31,  91 => 30,  87 => 28,  84 => 27,  82 => 26,  79 => 25,  76 => 24,  74 => 23,  69 => 21,  68 => 17,  65 => 16,  60 => 13,  54 => 12,  42 => 10,  39 => 9,  35 => 8,  31 => 7,  27 => 5,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* */
/* {% set sectionInput %}*/
/* 	<div class="select">*/
/* 		<select id="section" name="section">*/
/* 			<option value="*">{{ "All"|t }}</option>*/
/* 			{% for section in craft.sections.getAllSections() %}*/
/* 				{% if section.type != 'single' %}*/
/* 					<option value="{{ section.id }}"{% if section.id == settings.section %} selected{% endif %}>{{ section.name|t }}</option>*/
/* 				{% endif %}*/
/* 			{% endfor %}*/
/* 		</select>*/
/* 	</div>*/
/* {% endset %}*/
/* */
/* {{ forms.field({*/
/* 	label: "Section"|t,*/
/* 	instructions: "Which section do you want to pull recent entries from?"|t,*/
/* 	id: 'section',*/
/* }, sectionInput) }}*/
/* */
/* {% if craft.isLocalized() %}*/
/* 	{% set editableLocales = craft.i18n.getEditableLocales() %}*/
/* */
/* 	{% if editableLocales|length > 1 %}*/
/* 		{% set localeInput %}*/
/* 			<div class="select">*/
/* 				<select id="locale" name="locale">*/
/* 					{% for locale in editableLocales %}*/
/* 						<option value="{{ locale.id }}"{% if locale.id == settings.locale %} selected{% endif %}>{{ locale.getName() }}</option>*/
/* 					{% endfor %}*/
/* 				</select>*/
/* 			</div>*/
/* 		{% endset %}*/
/* */
/* 		{{ forms.field({*/
/* 			id: 'locale',*/
/* 			label: "Locale"|t*/
/* 		}, localeInput) }}*/
/* 	{% endif %}*/
/* {% endif %}*/
/* */
/* */
/* {{ forms.textField({*/
/* 	label: "Limit"|t,*/
/* 	id: 'limit',*/
/* 	name: 'limit',*/
/* 	value: settings.limit,*/
/* 	size: 2,*/
/* 	errors: settings.getErrors('limit')*/
/* }) }}*/
/* */
