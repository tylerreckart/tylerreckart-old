<?php

/* _includes/fieldlayoutdesigner */
class __TwigTemplate_9eaf0c648b139bd3b89deb6feeda03926e80a85e9b656cf0d81d4020e2cd6268 extends Craft\BaseTemplate
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
        if ( !array_key_exists("customizableTabs", $context)) {
            $context["customizableTabs"] = true;
        }
        // line 2
        if (( !(isset($context["customizableTabs"]) ? $context["customizableTabs"] : null) &&  !array_key_exists("pretendTabName", $context))) {
            // line 3
            echo "\t";
            $context["pretendTabName"] = \Craft\Craft::t("Content");
        }
        // line 5
        echo "
";
        // line 6
        $context["groups"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getAllGroups", array(0 => "id"), "method");
        // line 7
        $context["fields"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "fields", array()), "getAllFields", array(0 => "id"), "method");
        // line 8
        echo "
";
        // line 9
        \Craft\craft()->templates->includeTranslations(
        	"Rename",
        	"Delete",
        	"Make required",
        	"Make not required",
        	"Remove",
        	"Give your tab a name."
        );
        // line 17
        echo "
";
        // line 18
        $_js = "//fonts.googleapis.com/css?family=Coming+Soon";
        \Craft\craft()->templates->includecssfile($_js);
        // line 19
        echo "
";
        // line 42
        echo "


<div id=\"fieldlayoutform\" class=\"fieldlayoutform\">

\t<h2>";
        // line 47
        echo twig_escape_filter($this->env, \Craft\Craft::t("Design your field layout"), "html", null, true);
        echo "</h2>

\t";
        // line 49
        if (array_key_exists("instructions", $context)) {
            // line 50
            echo "\t\t<div class=\"instructions\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->markdownFilter((isset($context["instructions"]) ? $context["instructions"] : null)), "html", null, true);
            echo "</div>
\t";
        }
        // line 52
        echo "
\t<div class=\"fld-tabs\">
\t\t";
        // line 54
        if ((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null)) {
            // line 55
            echo "\t\t\t";
            $context["macros"] = $this;
            // line 56
            echo "
\t\t\t";
            // line 57
            if ((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null)) {
                // line 58
                echo "\t\t\t\t";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null), "getTabs", array(), "method"));
                foreach ($context['_seq'] as $context["_key"] => $context["tab"]) {
                    // line 59
                    echo "\t\t\t\t\t";
                    echo $context["macros"]->gettab((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null), $this->getAttribute($context["tab"], "name", array()), $this->getAttribute($context["tab"], "getFields", array(), "method"));
                    echo "
\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tab'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 61
                echo "\t\t\t";
            } else {
                // line 62
                echo "\t\t\t\t";
                echo $context["macros"]->gettab((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null), (isset($context["pretendTabName"]) ? $context["pretendTabName"] : null), $this->getAttribute((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null), "getFields", array(), "method"));
                echo "
\t\t\t";
            }
            // line 64
            echo "\t\t";
        }
        // line 65
        echo "\t</div>

\t";
        // line 67
        if ((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null)) {
            // line 68
            echo "\t\t<div class=\"newtabbtn-container\">
\t\t\t<div class=\"btn add icon\">";
            // line 69
            echo twig_escape_filter($this->env, \Craft\Craft::t("New Tab"), "html", null, true);
            echo "</div>
\t\t\t<h3>";
            // line 70
            echo twig_escape_filter($this->env, \Craft\Craft::t("…Or use one of your field groups as a starting point:"), "html", null, true);
            echo "</h3>
\t\t</div>
\t";
        }
        // line 73
        echo "
\t<div class=\"unusedfields\">
\t\t";
        // line 75
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["groups"]) ? $context["groups"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["group"]) {
            // line 76
            echo "\t\t\t";
            $context["totalUnselected"] = 0;
            // line 77
            echo "\t\t\t";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["group"], "fields", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                // line 78
                echo "\t\t\t\t";
                if (( !(isset($context["fieldLayout"]) ? $context["fieldLayout"] : null) || !twig_in_filter($this->getAttribute($context["field"], "id", array()), $this->getAttribute((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null), "getFieldIds", array(), "method")))) {
                    // line 79
                    echo "\t\t\t\t\t";
                    $context["totalUnselected"] = ((isset($context["totalUnselected"]) ? $context["totalUnselected"] : null) + 1);
                    // line 80
                    echo "\t\t\t\t";
                }
                // line 81
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 82
            echo "
\t\t\t<div class=\"fld-tab unused";
            // line 83
            if (((isset($context["totalUnselected"]) ? $context["totalUnselected"] : null) == 0)) {
                echo " hidden";
            }
            echo "\">
\t\t\t\t<div class=\"tabs\">
\t\t\t\t\t<div class=\"tab sel\"><span>";
            // line 85
            echo twig_escape_filter($this->env, $this->getAttribute($context["group"], "name", array()), "html", null, true);
            echo "</span></div>
\t\t\t\t</div>
\t\t\t\t<div class=\"fld-tabcontent\">
\t\t\t\t\t";
            // line 88
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["group"], "fields", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                // line 89
                echo "\t\t\t\t\t\t";
                $context["selected"] = ((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null) && twig_in_filter($this->getAttribute($context["field"], "id", array()), $this->getAttribute((isset($context["fieldLayout"]) ? $context["fieldLayout"] : null), "getFieldIds", array(), "method")));
                // line 90
                echo "\t\t\t\t\t\t<div class=\"fld-field unused";
                if ((isset($context["selected"]) ? $context["selected"] : null)) {
                    echo " hidden";
                }
                echo "\" data-id=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "id", array()), "html", null, true);
                echo "\">
\t\t\t\t\t\t\t<span>";
                // line 91
                echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "name", array()), "html", null, true);
                echo "</span>
\t\t\t\t\t\t</div>
\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 94
            echo "\t\t\t\t</div>
\t\t\t</div>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['group'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 97
        echo "\t</div>

</div>

";
        // line 101
        ob_start();
        // line 102
        echo "\tvar initFLD = function() {
\t\tnew Craft.FieldLayoutDesigner('#";
        // line 103
        echo twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputId("fieldlayoutform"), "html", null, true);
        echo "', {
\t\t\tcustomizableTabs: ";
        // line 104
        echo (((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null)) ? ("true") : ("false"));
        echo ",
\t\t\tfieldInputName: '";
        // line 105
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputName("fieldLayout[__TAB_NAME__][]"), "js"), "html", null, true);
        echo "',
\t\t\trequiredFieldInputName: '";
        // line 106
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputName("requiredFields[]"), "js"), "html", null, true);
        echo "'
\t\t});
\t};

\t";
        // line 110
        if (array_key_exists("tab", $context)) {
            // line 111
            echo "
\t\tvar \$fldTab = \$('#";
            // line 112
            echo twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputId(("tab-" . (isset($context["tab"]) ? $context["tab"] : null))), "html", null, true);
            echo "');

\t\tif (\$fldTab.hasClass('sel'))
\t\t{
\t\t\tinitFLD();
\t\t}
\t\telse
\t\t{
\t\t\t\$fldTab.on('activate.fld', function() {
\t\t\t\tinitFLD();
\t\t\t\t\$fldTab.off('activate.fld');
\t\t\t});
\t\t}

\t";
        } else {
            // line 127
            echo "
\t\tinitFLD();

\t";
        }
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
    }

    // line 20
    public function gettab($__customizableTabs__ = null, $__tabName__ = null, $__tabFields__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "customizableTabs" => $__customizableTabs__,
            "tabName" => $__tabName__,
            "tabFields" => $__tabFields__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 21
            echo "\t<div class=\"fld-tab\">
\t\t<div class=\"tabs\">
\t\t\t<div class=\"tab sel";
            // line 23
            if ((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null)) {
                echo " draggable";
            }
            echo "\">
\t\t\t\t<span>";
            // line 24
            echo twig_escape_filter($this->env, (isset($context["tabName"]) ? $context["tabName"] : null), "html", null, true);
            echo "</span>
\t\t\t\t";
            // line 25
            if ((isset($context["customizableTabs"]) ? $context["customizableTabs"] : null)) {
                // line 26
                echo "\t\t\t\t\t<a class=\"settings icon\" title=\"";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Edit"), "html", null, true);
                echo "\"></a>
\t\t\t\t";
            }
            // line 28
            echo "\t\t\t</div>
\t\t</div>
\t\t<div class=\"fld-tabcontent\">
\t\t\t";
            // line 31
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["tabFields"]) ? $context["tabFields"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                // line 32
                echo "\t\t\t\t<div class=\"fld-field";
                if ($this->getAttribute($context["field"], "required", array())) {
                    echo " fld-required";
                }
                echo "\" data-id=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "fieldId", array()), "html", null, true);
                echo "\">
\t\t\t\t\t<a class=\"settings icon\" title=\"";
                // line 33
                echo twig_escape_filter($this->env, \Craft\Craft::t("Edit"), "html", null, true);
                echo "\"></a>
\t\t\t\t\t<span>";
                // line 34
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["field"], "getField", array(), "method"), "name", array()), "html", null, true);
                echo "</span>
\t\t\t\t\t<input class=\"id-input\" type=\"hidden\" name=\"fieldLayout[";
                // line 35
                echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["tabName"]) ? $context["tabName"] : null), "url"), "html", null, true);
                echo "][]\" value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "fieldId", array()), "html", null, true);
                echo "\">
\t\t\t\t\t";
                // line 36
                if ($this->getAttribute($context["field"], "required", array())) {
                    echo "<input class=\"required-input\" type=\"hidden\" name=\"requiredFields[]\" value=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "fieldId", array()), "html", null, true);
                    echo "\">";
                }
                // line 37
                echo "\t\t\t\t</div>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 39
            echo "\t\t</div>
\t</div>
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "_includes/fieldlayoutdesigner";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  360 => 39,  353 => 37,  347 => 36,  341 => 35,  337 => 34,  333 => 33,  324 => 32,  320 => 31,  315 => 28,  309 => 26,  307 => 25,  303 => 24,  297 => 23,  293 => 21,  279 => 20,  269 => 127,  251 => 112,  248 => 111,  246 => 110,  239 => 106,  235 => 105,  231 => 104,  227 => 103,  224 => 102,  222 => 101,  216 => 97,  208 => 94,  199 => 91,  190 => 90,  187 => 89,  183 => 88,  177 => 85,  170 => 83,  167 => 82,  161 => 81,  158 => 80,  155 => 79,  152 => 78,  147 => 77,  144 => 76,  140 => 75,  136 => 73,  130 => 70,  126 => 69,  123 => 68,  121 => 67,  117 => 65,  114 => 64,  108 => 62,  105 => 61,  96 => 59,  91 => 58,  89 => 57,  86 => 56,  83 => 55,  81 => 54,  77 => 52,  71 => 50,  69 => 49,  64 => 47,  57 => 42,  54 => 19,  51 => 18,  48 => 17,  39 => 9,  36 => 8,  34 => 7,  32 => 6,  29 => 5,  25 => 3,  23 => 2,  19 => 1,);
    }
}
/* {% if customizableTabs is not defined %}{% set customizableTabs = true %}{% endif %}*/
/* {% if not customizableTabs and pretendTabName is not defined %}*/
/* 	{% set pretendTabName = "Content"|t %}*/
/* {% endif %}*/
/* */
/* {% set groups = craft.fields.getAllGroups('id') %}*/
/* {% set fields = craft.fields.getAllFields('id') %}*/
/* */
/* {% includeTranslations*/
/* 	"Rename",*/
/* 	"Delete",*/
/* 	"Make required",*/
/* 	"Make not required",*/
/* 	"Remove",*/
/* 	"Give your tab a name."*/
/* %}*/
/* */
/* {% includecssfile "//fonts.googleapis.com/css?family=Coming+Soon" %}*/
/* */
/* {% macro tab(customizableTabs, tabName, tabFields) %}*/
/* 	<div class="fld-tab">*/
/* 		<div class="tabs">*/
/* 			<div class="tab sel{% if customizableTabs %} draggable{% endif %}">*/
/* 				<span>{{ tabName }}</span>*/
/* 				{% if customizableTabs %}*/
/* 					<a class="settings icon" title="{{ 'Edit'|t }}"></a>*/
/* 				{% endif %}*/
/* 			</div>*/
/* 		</div>*/
/* 		<div class="fld-tabcontent">*/
/* 			{% for field in tabFields %}*/
/* 				<div class="fld-field{% if field.required %} fld-required{% endif %}" data-id="{{ field.fieldId }}">*/
/* 					<a class="settings icon" title="{{ 'Edit'|t }}"></a>*/
/* 					<span>{{ field.getField().name }}</span>*/
/* 					<input class="id-input" type="hidden" name="fieldLayout[{{ tabName|e('url') }}][]" value="{{ field.fieldId }}">*/
/* 					{% if field.required %}<input class="required-input" type="hidden" name="requiredFields[]" value="{{ field.fieldId }}">{% endif %}*/
/* 				</div>*/
/* 			{% endfor %}*/
/* 		</div>*/
/* 	</div>*/
/* {% endmacro %}*/
/* */
/* */
/* */
/* <div id="fieldlayoutform" class="fieldlayoutform">*/
/* */
/* 	<h2>{{ "Design your field layout"|t }}</h2>*/
/* */
/* 	{% if instructions is defined %}*/
/* 		<div class="instructions">{{ instructions|md }}</div>*/
/* 	{% endif %}*/
/* */
/* 	<div class="fld-tabs">*/
/* 		{% if fieldLayout %}*/
/* 			{% import _self as macros %}*/
/* */
/* 			{% if customizableTabs %}*/
/* 				{% for tab in fieldLayout.getTabs() %}*/
/* 					{{ macros.tab(customizableTabs, tab.name, tab.getFields()) }}*/
/* 				{% endfor %}*/
/* 			{% else %}*/
/* 				{{ macros.tab(customizableTabs, pretendTabName, fieldLayout.getFields()) }}*/
/* 			{% endif %}*/
/* 		{% endif %}*/
/* 	</div>*/
/* */
/* 	{% if customizableTabs %}*/
/* 		<div class="newtabbtn-container">*/
/* 			<div class="btn add icon">{{ "New Tab"|t }}</div>*/
/* 			<h3>{{ "…Or use one of your field groups as a starting point:"|t }}</h3>*/
/* 		</div>*/
/* 	{% endif %}*/
/* */
/* 	<div class="unusedfields">*/
/* 		{% for group in groups %}*/
/* 			{% set totalUnselected = 0 %}*/
/* 			{% for field in group.fields %}*/
/* 				{% if not fieldLayout or field.id not in fieldLayout.getFieldIds() %}*/
/* 					{% set totalUnselected = totalUnselected + 1 %}*/
/* 				{% endif %}*/
/* 			{% endfor %}*/
/* */
/* 			<div class="fld-tab unused{% if totalUnselected == 0 %} hidden{% endif %}">*/
/* 				<div class="tabs">*/
/* 					<div class="tab sel"><span>{{ group.name }}</span></div>*/
/* 				</div>*/
/* 				<div class="fld-tabcontent">*/
/* 					{% for field in group.fields %}*/
/* 						{% set selected = fieldLayout and field.id in fieldLayout.getFieldIds() %}*/
/* 						<div class="fld-field unused{% if selected %} hidden{% endif %}" data-id="{{ field.id }}">*/
/* 							<span>{{ field.name }}</span>*/
/* 						</div>*/
/* 					{% endfor %}*/
/* 				</div>*/
/* 			</div>*/
/* 		{% endfor %}*/
/* 	</div>*/
/* */
/* </div>*/
/* */
/* {% includejs %}*/
/* 	var initFLD = function() {*/
/* 		new Craft.FieldLayoutDesigner('#{{ "fieldlayoutform"|namespaceInputId }}', {*/
/* 			customizableTabs: {{ customizableTabs ? 'true' : 'false' }},*/
/* 			fieldInputName: '{{ "fieldLayout[__TAB_NAME__][]"|namespaceInputName|e("js") }}',*/
/* 			requiredFieldInputName: '{{ "requiredFields[]"|namespaceInputName|e("js") }}'*/
/* 		});*/
/* 	};*/
/* */
/* 	{% if tab is defined %}*/
/* */
/* 		var $fldTab = $('#{{ ("tab-"~tab)|namespaceInputId }}');*/
/* */
/* 		if ($fldTab.hasClass('sel'))*/
/* 		{*/
/* 			initFLD();*/
/* 		}*/
/* 		else*/
/* 		{*/
/* 			$fldTab.on('activate.fld', function() {*/
/* 				initFLD();*/
/* 				$fldTab.off('activate.fld');*/
/* 			});*/
/* 		}*/
/* */
/* 	{% else %}*/
/* */
/* 		initFLD();*/
/* */
/* 	{% endif %}*/
/* {% endincludejs %}*/
/* */
