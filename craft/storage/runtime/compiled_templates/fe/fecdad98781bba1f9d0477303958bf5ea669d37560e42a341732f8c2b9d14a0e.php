<?php

/* settings/sections/_entrytypes/index */
class __TwigTemplate_c87b8c735d3ba09d10b9fa29db846a127460f8eb9b9f640a3336d3f07ac495ee extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/sections/_entrytypes/index", 1);
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
        // line 3
        $context["entryTypes"] = $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "getEntryTypes", array(), "method");
        // line 4
        $context["multiple"] = (twig_length_filter($this->env, (isset($context["entryTypes"]) ? $context["entryTypes"] : null)) > 1);
        // line 7
        ob_start();
        // line 8
        echo "\t";
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "single")) {
            // line 9
            echo "\t\t<div class=\"buttons\">
\t\t\t<a href=\"";
            // line 10
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl((("settings/sections/" . $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array())) . "/entrytypes/new")), "html", null, true);
            echo "\" class=\"btn submit add icon\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("New entry type"), "html", null, true);
            echo "</a>
\t\t</div>
\t";
        }
        $context["extraPageHeaderHtml"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 42
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "single")) {
            // line 43
            ob_start();
            // line 44
            echo "\t\tnew Craft.AdminTable({
\t\t\ttableSelector: '#entrytypes',
\t\t\tdeleteAction: 'sections/deleteEntryType',
\t\t\tminObjects: 1,
\t\t\tsortable: true,
\t\t\treorderAction: 'sections/reorderEntryTypes',
\t\t\tconfirmDeleteMessage: '";
            // line 50
            echo twig_escape_filter($this->env, \Craft\Craft::t("Are you sure you want to delete “{name}” and all entries that use it?"), "html", null, true);
            echo "',
\t\t});
\t";
            $_js = ob_get_clean();
            \Craft\craft()->templates->includejs($_js);
        }
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 16
    public function block_content($context, array $blocks = array())
    {
        // line 17
        echo "\t<table id=\"entrytypes\" class=\"data fullwidth collapsible\">
\t\t<thead>
\t\t\t<th scope=\"col\">";
        // line 19
        echo twig_escape_filter($this->env, \Craft\Craft::t("Name"), "html", null, true);
        echo "</th>
\t\t\t<th scope=\"col\">";
        // line 20
        echo twig_escape_filter($this->env, \Craft\Craft::t("Handle"), "html", null, true);
        echo "</th>
\t\t\t";
        // line 21
        if ((isset($context["multiple"]) ? $context["multiple"] : null)) {
            // line 22
            echo "\t\t\t\t<td class=\"thin\"></td>
\t\t\t\t<td class=\"thin\"></td>
\t\t\t";
        }
        // line 25
        echo "\t\t</thead>
\t\t<tbody>
\t\t\t";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "getEntryTypes", array(), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["entryType"]) {
            // line 28
            echo "\t\t\t\t<tr data-id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["entryType"], "id", array()), "html", null, true);
            echo "\" data-name=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["entryType"], "name", array())), "html", null, true);
            echo "\">
\t\t\t\t\t<th scope=\"row\" data-title=\"";
            // line 29
            echo twig_escape_filter($this->env, \Craft\Craft::t("Name"), "html", null, true);
            echo "\"><a href=\"";
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl(((("settings/sections/" . $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array())) . "/entrytypes/") . $this->getAttribute($context["entryType"], "id", array()))), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["entryType"], "name", array())), "html", null, true);
            echo "</a></th>
\t\t\t\t\t<td data-title=\"";
            // line 30
            echo twig_escape_filter($this->env, \Craft\Craft::t("Handle"), "html", null, true);
            echo "\"><code>";
            echo twig_escape_filter($this->env, $this->getAttribute($context["entryType"], "handle", array()), "html", null, true);
            echo "</code></td>
\t\t\t\t\t";
            // line 31
            if ((isset($context["multiple"]) ? $context["multiple"] : null)) {
                // line 32
                echo "\t\t\t\t\t\t<td class=\"thin\"><a class=\"move icon\" title=\"";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Reorder"), "html", null, true);
                echo "\" role=\"button\"></a></td>
\t\t\t\t\t\t<td class=\"thin\"><a class=\"delete icon\" title=\"";
                // line 33
                echo twig_escape_filter($this->env, \Craft\Craft::t("Delete"), "html", null, true);
                echo "\" role=\"button\"></a></td>
\t\t\t\t\t";
            }
            // line 35
            echo "\t\t\t\t</tr>
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entryType'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "\t\t</tbody>
\t</table>
";
    }

    public function getTemplateName()
    {
        return "settings/sections/_entrytypes/index";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 37,  133 => 35,  128 => 33,  123 => 32,  121 => 31,  115 => 30,  107 => 29,  100 => 28,  96 => 27,  92 => 25,  87 => 22,  85 => 21,  81 => 20,  77 => 19,  73 => 17,  70 => 16,  66 => 1,  58 => 50,  50 => 44,  48 => 43,  46 => 42,  37 => 10,  34 => 9,  31 => 8,  29 => 7,  27 => 4,  25 => 3,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* */
/* {% set entryTypes = section.getEntryTypes() %}*/
/* {% set multiple  = (entryTypes|length > 1) %}*/
/* */
/* */
/* {% set extraPageHeaderHtml %}*/
/* 	{% if section.type != 'single' %}*/
/* 		<div class="buttons">*/
/* 			<a href="{{ url('settings/sections/' ~ section.id ~ '/entrytypes/new') }}" class="btn submit add icon">{{ "New entry type"|t }}</a>*/
/* 		</div>*/
/* 	{% endif %}*/
/* {% endset %}*/
/* */
/* */
/* {% block content %}*/
/* 	<table id="entrytypes" class="data fullwidth collapsible">*/
/* 		<thead>*/
/* 			<th scope="col">{{ "Name"|t }}</th>*/
/* 			<th scope="col">{{ "Handle"|t }}</th>*/
/* 			{% if multiple %}*/
/* 				<td class="thin"></td>*/
/* 				<td class="thin"></td>*/
/* 			{% endif %}*/
/* 		</thead>*/
/* 		<tbody>*/
/* 			{% for entryType in section.getEntryTypes() %}*/
/* 				<tr data-id="{{ entryType.id }}" data-name="{{ entryType.name|t }}">*/
/* 					<th scope="row" data-title="{{ 'Name'|t }}"><a href="{{ url('settings/sections/' ~ section.id ~ '/entrytypes/' ~ entryType.id) }}">{{ entryType.name|t }}</a></th>*/
/* 					<td data-title="{{ 'Handle'|t }}"><code>{{ entryType.handle }}</code></td>*/
/* 					{% if multiple %}*/
/* 						<td class="thin"><a class="move icon" title="{{ 'Reorder'|t }}" role="button"></a></td>*/
/* 						<td class="thin"><a class="delete icon" title="{{ 'Delete'|t }}" role="button"></a></td>*/
/* 					{% endif %}*/
/* 				</tr>*/
/* 			{% endfor %}*/
/* 		</tbody>*/
/* 	</table>*/
/* {% endblock %}*/
/* */
/* */
/* {% if section.type != 'single' %}*/
/* 	{% includejs %}*/
/* 		new Craft.AdminTable({*/
/* 			tableSelector: '#entrytypes',*/
/* 			deleteAction: 'sections/deleteEntryType',*/
/* 			minObjects: 1,*/
/* 			sortable: true,*/
/* 			reorderAction: 'sections/reorderEntryTypes',*/
/* 			confirmDeleteMessage: '{{ "Are you sure you want to delete “{name}” and all entries that use it?"|t }}',*/
/* 		});*/
/* 	{% endincludejs %}*/
/* {% endif %}*/
/* */
