<?php

/* _components/fieldtypes/Assets/input */
class __TwigTemplate_5f8b1f42a599a3d901cafd91556bf8f10cf585ac79107a516bbea4b3d260f5e0 extends Craft\BaseTemplate
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
        if ((array_key_exists("name", $context) && (isset($context["name"]) ? $context["name"] : null))) {
            // line 2
            echo "\t<input type=\"hidden\" name=\"";
            echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
            echo "\" value=\"\">
";
        }
        // line 5
        $context["elements"] = ((array_key_exists("elements", $context)) ? ((isset($context["elements"]) ? $context["elements"] : null)) : (array()));
        // line 6
        $context["jsClass"] = (((array_key_exists("jsClass", $context) && (isset($context["jsClass"]) ? $context["jsClass"] : null))) ? ((isset($context["jsClass"]) ? $context["jsClass"] : null)) : ("Craft.BaseElementSelectInput"));
        // line 7
        $context["sources"] = (((array_key_exists("sources", $context) && (isset($context["sources"]) ? $context["sources"] : null))) ? ((isset($context["sources"]) ? $context["sources"] : null)) : (null));
        // line 8
        $context["criteria"] = (((array_key_exists("criteria", $context) && (isset($context["criteria"]) ? $context["criteria"] : null))) ? ((isset($context["criteria"]) ? $context["criteria"] : null)) : (null));
        // line 9
        $context["storageKey"] = (((array_key_exists("storageKey", $context) && (isset($context["storageKey"]) ? $context["storageKey"] : null))) ? ((isset($context["storageKey"]) ? $context["storageKey"] : null)) : (null));
        // line 11
        echo "<div id=\"";
        echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
        echo "\" class=\"elementselect\">
\t<div class=\"elements\">
\t\t";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["elements"]) ? $context["elements"] : null));
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
        foreach ($context['_seq'] as $context["_key"] => $context["element"]) {
            // line 14
            echo "\t\t\t";
            $this->loadTemplate("_elements/element", "_components/fieldtypes/Assets/input", 14)->display(array_merge($context, array("context" => "field", "size" => (((            // line 16
(isset($context["viewMode"]) ? $context["viewMode"] : null) == "large")) ? ("large") : ("small")))));
            // line 18
            echo "\t\t";
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['element'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "\t</div>

\t<div class=\"btn add icon dashed\">";
        // line 21
        echo twig_escape_filter($this->env, (isset($context["selectionLabel"]) ? $context["selectionLabel"] : null), "html", null, true);
        echo "</div>
</div>

";
        // line 24
        $context["jsSettings"] = array("id" => \Craft\craft()->templates->namespaceInputId(        // line 25
(isset($context["id"]) ? $context["id"] : null)), "name" => \Craft\craft()->templates->namespaceInputName(        // line 26
(isset($context["name"]) ? $context["name"] : null)), "elementType" => $this->getAttribute(        // line 27
(isset($context["elementType"]) ? $context["elementType"] : null), "getClassHandle", array(), "method"), "sources" =>         // line 28
(isset($context["sources"]) ? $context["sources"] : null), "criteria" =>         // line 29
(isset($context["criteria"]) ? $context["criteria"] : null), "sourceElementId" =>         // line 30
(isset($context["sourceElementId"]) ? $context["sourceElementId"] : null), "viewMode" =>         // line 31
(isset($context["viewMode"]) ? $context["viewMode"] : null), "limit" =>         // line 32
(isset($context["limit"]) ? $context["limit"] : null), "modalStorageKey" =>         // line 33
(isset($context["storageKey"]) ? $context["storageKey"] : null), "fieldId" =>         // line 34
(isset($context["fieldId"]) ? $context["fieldId"] : null));
        // line 36
        echo "
";
        // line 37
        ob_start();
        // line 38
        echo "\tnew ";
        echo twig_escape_filter($this->env, (isset($context["jsClass"]) ? $context["jsClass"] : null), "html", null, true);
        echo "(";
        echo $this->env->getExtension('craft')->jsonEncodeFilter((isset($context["jsSettings"]) ? $context["jsSettings"] : null));
        echo ");
";
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/Assets/input";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 38,  103 => 37,  100 => 36,  98 => 34,  97 => 33,  96 => 32,  95 => 31,  94 => 30,  93 => 29,  92 => 28,  91 => 27,  90 => 26,  89 => 25,  88 => 24,  82 => 21,  78 => 19,  64 => 18,  62 => 16,  60 => 14,  43 => 13,  37 => 11,  35 => 9,  33 => 8,  31 => 7,  29 => 6,  27 => 5,  21 => 2,  19 => 1,);
    }
}
/* {% if name is defined and name %}*/
/* 	<input type="hidden" name="{{ name }}" value="">*/
/* {% endif -%}*/
/* */
/* {% set elements = (elements is defined ? elements : []) -%}*/
/* {% set jsClass = (jsClass is defined and jsClass ? jsClass : 'Craft.BaseElementSelectInput') -%}*/
/* {% set sources = (sources is defined and sources ? sources : null) -%}*/
/* {% set criteria = (criteria is defined and criteria ? criteria : null) -%}*/
/* {% set storageKey = (storageKey is defined and storageKey ? storageKey : null) -%}*/
/* */
/* <div id="{{ id }}" class="elementselect">*/
/* 	<div class="elements">*/
/* 		{% for element in elements %}*/
/* 			{% include "_elements/element" with {*/
/* 				context: 'field',*/
/* 				size: (viewMode == 'large' ? 'large' : 'small')*/
/* 			} %}*/
/* 		{% endfor %}*/
/* 	</div>*/
/* */
/* 	<div class="btn add icon dashed">{{ selectionLabel }}</div>*/
/* </div>*/
/* */
/* {% set jsSettings = {*/
/* 	id: id|namespaceInputId,*/
/* 	name: name|namespaceInputName,*/
/* 	elementType: elementType.getClassHandle(),*/
/* 	sources: sources,*/
/* 	criteria: criteria,*/
/* 	sourceElementId: sourceElementId,*/
/* 	viewMode: viewMode,*/
/* 	limit: limit,*/
/* 	modalStorageKey: storageKey,*/
/* 	fieldId: fieldId*/
/* } %}*/
/* */
/* {% includejs %}*/
/* 	new {{ jsClass }}({{ jsSettings|json_encode|raw }});*/
/* {% endincludejs %}*/
/* */
