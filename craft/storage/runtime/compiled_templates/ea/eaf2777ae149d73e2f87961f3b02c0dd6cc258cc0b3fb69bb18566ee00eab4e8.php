<?php

/* _includes/forms/editableTable */
class __TwigTemplate_3dc3ae4f3ba90290621ba4734064bcd6d91c05c1f19193e9c3823bb28c333a31 extends Craft\BaseTemplate
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
        $context["static"] = ((array_key_exists("static", $context)) ? ((isset($context["static"]) ? $context["static"] : null)) : (false));
        // line 2
        $context["cols"] = ((array_key_exists("cols", $context)) ? ((isset($context["cols"]) ? $context["cols"] : null)) : (array()));
        // line 3
        $context["rows"] = ((array_key_exists("rows", $context)) ? ((isset($context["rows"]) ? $context["rows"] : null)) : (array()));
        // line 5
        echo "<table id=\"";
        echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
        echo "\" class=\"shadow-box editable\">
\t<thead>
\t\t<tr>
\t\t\t";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["cols"]) ? $context["cols"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["col"]) {
            // line 9
            echo "\t\t\t\t<th scope=\"col\" class=\"header\">";
            echo twig_escape_filter($this->env, (($this->getAttribute($context["col"], "heading", array())) ? ($this->getAttribute($context["col"], "heading", array())) : (" ")), "html", null, true);
            echo "</th>
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['col'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 11
        echo "\t\t\t";
        if ( !(isset($context["static"]) ? $context["static"] : null)) {
            // line 12
            echo "\t\t\t\t<th class=\"header\" colspan=\"2\"></th>
\t\t\t";
        }
        // line 14
        echo "\t\t</tr>
\t</thead>
\t<tbody>
\t\t";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["rows"]) ? $context["rows"] : null));
        foreach ($context['_seq'] as $context["rowId"] => $context["row"]) {
            // line 18
            echo "\t\t\t<tr data-id=\"";
            echo twig_escape_filter($this->env, $context["rowId"], "html", null, true);
            echo "\">
\t\t\t\t";
            // line 19
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["cols"]) ? $context["cols"] : null));
            foreach ($context['_seq'] as $context["colId"] => $context["col"]) {
                // line 20
                echo "\t\t\t\t\t";
                $context["cellName"] = ((((((isset($context["name"]) ? $context["name"] : null) . "[") . $context["rowId"]) . "][") . $context["colId"]) . "]");
                // line 21
                echo "\t\t\t\t\t";
                $context["value"] = (($this->getAttribute($context["row"], $context["colId"], array(), "array", true, true)) ? ($this->getAttribute($context["row"], $context["colId"], array(), "array")) : (null));
                // line 22
                echo "\t\t\t\t\t";
                $context["textual"] = twig_in_filter($this->getAttribute($context["col"], "type", array()), array(0 => "singleline", 1 => "multiline", 2 => "number"));
                // line 23
                echo "\t\t\t\t\t<td class=\"";
                if ((isset($context["textual"]) ? $context["textual"] : null)) {
                    echo "textual";
                }
                echo " ";
                if ($this->getAttribute($context["col"], "class", array(), "any", true, true)) {
                    echo twig_escape_filter($this->env, $this->getAttribute($context["col"], "class", array()), "html", null, true);
                }
                echo "\"";
                if ($this->getAttribute($context["col"], "width", array(), "any", true, true)) {
                    echo " width=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["col"], "width", array()), "html", null, true);
                    echo "\"";
                }
                echo ">";
                // line 24
                if (($this->getAttribute($context["col"], "type", array()) == "select")) {
                    // line 25
                    $this->loadTemplate("_includes/forms/select", "_includes/forms/editableTable", 25)->display(array("class" => "small", "name" =>                     // line 27
(isset($context["cellName"]) ? $context["cellName"] : null), "options" => $this->getAttribute(                    // line 28
$context["col"], "options", array()), "value" =>                     // line 29
(isset($context["value"]) ? $context["value"] : null), "disabled" =>                     // line 30
(isset($context["static"]) ? $context["static"] : null)));
                } elseif (($this->getAttribute(                // line 32
$context["col"], "type", array()) == "checkbox")) {
                    // line 33
                    echo "<input type=\"hidden\" name=\"";
                    echo twig_escape_filter($this->env, (isset($context["cellName"]) ? $context["cellName"] : null), "html", null, true);
                    echo "\">
\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"";
                    // line 34
                    echo twig_escape_filter($this->env, (isset($context["cellName"]) ? $context["cellName"] : null), "html", null, true);
                    echo "\" value=\"1\"";
                    if ((isset($context["value"]) ? $context["value"] : null)) {
                        echo " checked";
                    }
                    if ((isset($context["static"]) ? $context["static"] : null)) {
                        echo " disabled";
                    }
                    echo ">";
                } else {
                    // line 36
                    echo "<textarea name=\"";
                    echo twig_escape_filter($this->env, (isset($context["cellName"]) ? $context["cellName"] : null), "html", null, true);
                    echo "\" rows=\"1\"";
                    if ((isset($context["static"]) ? $context["static"] : null)) {
                        echo " disabled";
                    }
                    echo ">";
                    echo twig_escape_filter($this->env, (isset($context["value"]) ? $context["value"] : null), "html", null, true);
                    echo "</textarea>";
                }
                // line 38
                echo "</td>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['colId'], $context['col'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 40
            echo "\t\t\t\t";
            if ( !(isset($context["static"]) ? $context["static"] : null)) {
                // line 41
                echo "\t\t\t\t\t<td class=\"thin action\"><a class=\"move icon\" title=\"";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Reorder"), "html", null, true);
                echo "\"></a></td>
\t\t\t\t\t<td class=\"thin action\"><a class=\"delete icon\" title=\"";
                // line 42
                echo twig_escape_filter($this->env, \Craft\Craft::t("Delete"), "html", null, true);
                echo "\"></a></td>
\t\t\t\t";
            }
            // line 44
            echo "\t\t\t</tr>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['rowId'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 46
        echo "\t</tbody>
</table>
";
        // line 48
        if ( !(isset($context["static"]) ? $context["static"] : null)) {
            // line 49
            echo "\t<div class=\"btn add icon\">";
            echo twig_escape_filter($this->env, ((array_key_exists("addRowLabel", $context)) ? ((isset($context["addRowLabel"]) ? $context["addRowLabel"] : null)) : (\Craft\Craft::t("Add a row"))), "html", null, true);
            echo "</div>
";
        }
        // line 51
        echo "
";
        // line 52
        if (( !(isset($context["static"]) ? $context["static"] : null) && ( !array_key_exists("initJs", $context) || (isset($context["initJs"]) ? $context["initJs"] : null)))) {
            // line 53
            echo "\t";
            ob_start();
            // line 54
            echo "\t\tnew Craft.EditableTable(
\t\t\t\"";
            // line 55
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputId((isset($context["id"]) ? $context["id"] : null)), "js"), "html", null, true);
            echo "\",
\t\t\t\"";
            // line 56
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\craft()->templates->namespaceInputName((isset($context["name"]) ? $context["name"] : null)), "js"), "html", null, true);
            echo "\",
\t\t\t";
            // line 57
            echo $this->env->getExtension('craft')->jsonEncodeFilter((isset($context["cols"]) ? $context["cols"] : null));
            echo ");
\t";
            $_js = ob_get_clean();
            \Craft\craft()->templates->includejs($_js);
        }
    }

    public function getTemplateName()
    {
        return "_includes/forms/editableTable";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  190 => 57,  186 => 56,  182 => 55,  179 => 54,  176 => 53,  174 => 52,  171 => 51,  165 => 49,  163 => 48,  159 => 46,  152 => 44,  147 => 42,  142 => 41,  139 => 40,  132 => 38,  121 => 36,  110 => 34,  105 => 33,  103 => 32,  101 => 30,  100 => 29,  99 => 28,  98 => 27,  97 => 25,  95 => 24,  79 => 23,  76 => 22,  73 => 21,  70 => 20,  66 => 19,  61 => 18,  57 => 17,  52 => 14,  48 => 12,  45 => 11,  36 => 9,  32 => 8,  25 => 5,  23 => 3,  21 => 2,  19 => 1,);
    }
}
/* {%- set static = (static is defined ? static : false) %}*/
/* {%- set cols = (cols is defined ? cols : []) %}*/
/* {%- set rows = (rows is defined ? rows : []) -%}*/
/* */
/* <table id="{{ id }}" class="shadow-box editable">*/
/* 	<thead>*/
/* 		<tr>*/
/* 			{% for col in cols %}*/
/* 				<th scope="col" class="header">{{ col.heading ? col.heading : ' ' }}</th>*/
/* 			{% endfor %}*/
/* 			{% if not static %}*/
/* 				<th class="header" colspan="2"></th>*/
/* 			{% endif %}*/
/* 		</tr>*/
/* 	</thead>*/
/* 	<tbody>*/
/* 		{% for rowId, row in rows %}*/
/* 			<tr data-id="{{ rowId }}">*/
/* 				{% for colId, col in cols %}*/
/* 					{% set cellName = name~'['~rowId~']['~colId~']' %}*/
/* 					{% set value = (row[colId] is defined ? row[colId] : null) %}*/
/* 					{% set textual = (col.type in ['singleline','multiline','number']) %}*/
/* 					<td class="{% if textual %}textual{% endif %} {% if col.class is defined %}{{ col.class }}{% endif %}"{% if col.width is defined %} width="{{ col.width }}"{% endif %}>*/
/* 						{%- if col.type == 'select' -%}*/
/* 							{% include "_includes/forms/select" with {*/
/* 								class:    'small',*/
/* 								name:     cellName,*/
/* 								options:  col.options,*/
/* 								value:    value,*/
/* 								disabled: static*/
/* 							} only %}*/
/* 						{%- elseif col.type == 'checkbox' -%}*/
/* 							<input type="hidden" name="{{ cellName }}">*/
/* 							<input type="checkbox" name="{{ cellName }}" value="1"{% if value %} checked{% endif %}{% if static %} disabled{% endif %}>*/
/* 						{%- else -%}*/
/* 							<textarea name="{{ cellName }}" rows="1"{% if static %} disabled{% endif %}>{{ value }}</textarea>*/
/* 						{%- endif -%}*/
/* 					</td>*/
/* 				{% endfor %}*/
/* 				{% if not static %}*/
/* 					<td class="thin action"><a class="move icon" title="{{ 'Reorder'|t }}"></a></td>*/
/* 					<td class="thin action"><a class="delete icon" title="{{ 'Delete'|t }}"></a></td>*/
/* 				{% endif %}*/
/* 			</tr>*/
/* 		{% endfor %}*/
/* 	</tbody>*/
/* </table>*/
/* {% if not static %}*/
/* 	<div class="btn add icon">{{ addRowLabel is defined ? addRowLabel : "Add a row"|t }}</div>*/
/* {% endif %}*/
/* */
/* {% if not static and (initJs is not defined or initJs) %}*/
/* 	{% includejs %}*/
/* 		new Craft.EditableTable(*/
/* 			"{{ id   | namespaceInputId   | e('js') }}",*/
/* 			"{{ name | namespaceInputName | e('js') }}",*/
/* 			{{ cols|json_encode|raw }});*/
/* 	{% endincludejs %}*/
/* {% endif %}*/
/* */
