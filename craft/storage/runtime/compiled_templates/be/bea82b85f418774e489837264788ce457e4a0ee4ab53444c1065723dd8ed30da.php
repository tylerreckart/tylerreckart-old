<?php

/* _elements/tableview/container */
class __TwigTemplate_4c1f95656fb9e671483c673e89925ed58c2feb698f0960f89a7b10a26c123267 extends Craft\BaseTemplate
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
        echo "<div class=\"tableview\">
\t<table class=\"data fullwidth\"";
        // line 2
        if ((array_key_exists("structureEditable", $context) && (isset($context["structureEditable"]) ? $context["structureEditable"] : null))) {
            echo " data-structure-id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["structure"]) ? $context["structure"] : null), "id", array()), "html", null, true);
            echo "\" data-max-levels=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["structure"]) ? $context["structure"] : null), "maxLevels", array()), "html", null, true);
            echo "\"";
        }
        echo ">
\t\t<thead>
\t\t\t<tr>
\t\t\t\t";
        // line 5
        if ((isset($context["showCheckboxes"]) ? $context["showCheckboxes"] : null)) {
            // line 6
            echo "\t\t\t\t\t<td class=\"thin checkbox-cell\"></td>
\t\t\t\t";
        }
        // line 8
        echo "\t\t\t\t";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["attributes"]) ? $context["attributes"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["attribute"]) {
            // line 9
            echo "\t\t\t\t\t";
            $context["icon"] = (($this->getAttribute($this->getAttribute($context["attribute"], 1, array(), "array", false, true), "icon", array(), "any", true, true)) ? ($this->getAttribute($this->getAttribute($context["attribute"], 1, array(), "array"), "icon", array())) : (null));
            // line 10
            echo "\t\t\t\t\t<th scope=\"col\" data-attribute=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["attribute"], 0, array(), "array"), "html", null, true);
            echo "\"";
            // line 11
            if ((isset($context["icon"]) ? $context["icon"] : null)) {
                echo " data-icon=\"";
                echo twig_escape_filter($this->env, (isset($context["icon"]) ? $context["icon"] : null), "html", null, true);
                echo "\" title=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["attribute"], 1, array(), "array"), "label", array()), "html", null, true);
                echo "\"";
            }
            // line 12
            echo "\t\t\t\t\t>";
            // line 13
            if ( !(isset($context["icon"]) ? $context["icon"] : null)) {
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["attribute"], 1, array(), "array"), "label", array()), "html", null, true);
            }
            // line 14
            echo "</th>
\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attribute'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 16
        echo "\t\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t\t";
        // line 19
        $this->loadTemplate("_elements/tableview/elements", "_elements/tableview/container", 19)->display($context);
        // line 20
        echo "\t\t</tbody>
\t</table>
</div>
";
    }

    public function getTemplateName()
    {
        return "_elements/tableview/container";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  80 => 20,  78 => 19,  73 => 16,  66 => 14,  62 => 13,  60 => 12,  52 => 11,  48 => 10,  45 => 9,  40 => 8,  36 => 6,  34 => 5,  22 => 2,  19 => 1,);
    }
}
/* <div class="tableview">*/
/* 	<table class="data fullwidth"{% if structureEditable is defined and structureEditable %} data-structure-id="{{ structure.id }}" data-max-levels="{{ structure.maxLevels }}"{% endif %}>*/
/* 		<thead>*/
/* 			<tr>*/
/* 				{% if showCheckboxes %}*/
/* 					<td class="thin checkbox-cell"></td>*/
/* 				{% endif %}*/
/* 				{% for attribute in attributes %}*/
/* 					{% set icon = (attribute[1].icon is defined ? attribute[1].icon : null) %}*/
/* 					<th scope="col" data-attribute="{{ attribute[0] }}"*/
/* 						{%- if icon %} data-icon="{{ icon }}" title="{{ attribute[1].label }}"{% endif %}*/
/* 					>*/
/* 						{%- if not icon %}{{ attribute[1].label }}{% endif -%}*/
/* 					</th>*/
/* 				{% endfor %}*/
/* 			</tr>*/
/* 		</thead>*/
/* 		<tbody>*/
/* 			{% include "_elements/tableview/elements" %}*/
/* 		</tbody>*/
/* 	</table>*/
/* </div>*/
/* */
