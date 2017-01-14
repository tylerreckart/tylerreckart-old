<?php

/* settings/sections/_index */
class __TwigTemplate_f0d0a0ff154cd4165161cdbcc26bc054378b457742090e2a1106b6c061b80deb extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/sections/_index", 1);
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
        // line 2
        $context["title"] = \Craft\Craft::t("Sections");
        // line 4
        $context["crumbs"] = array(0 => array("label" => \Craft\Craft::t("Settings"), "url" => \Craft\UrlHelper::getUrl("settings")));
        // line 8
        $context["docsUrl"] = "http://craftcms.com/docs/sections-and-entries#sections";
        // line 11
        ob_start();
        // line 12
        echo "\t<div id=\"newsectioncontainer\" class=\"buttons right\">
\t\t<a href=\"";
        // line 13
        echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("settings/sections/new"), "html", null, true);
        echo "\" class=\"btn submit add icon\">";
        echo twig_escape_filter($this->env, \Craft\Craft::t("New section"), "html", null, true);
        echo "</a>
\t</div>
";
        $context["extraPageHeaderHtml"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 71
        ob_start();
        // line 72
        echo "\tvar adminTable = new Craft.AdminTable({
\t\ttableSelector: '#sections',
\t\tnoObjectsSelector: '#nosections',
\t\tnewObjectBtnSelector: '#newsectioncontainer',
\t\tdeleteAction: 'sections/deleteSection',
\t\tconfirmDeleteMessage: '";
        // line 77
        echo twig_escape_filter($this->env, \Craft\Craft::t("Are you sure you want to delete “{name}” and all its entries?"), "html", null, true);
        echo "',
\t\tonDeleteObject: function()
\t\t{
\t\t\t// Hide the Entries tab if that was the last one
\t\t\tif (adminTable.totalObjects == 0)
\t\t\t{
\t\t\t\t\$('#nav-entries').remove();
\t\t\t}
\t\t}
\t});
";
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 18
    public function block_content($context, array $blocks = array())
    {
        // line 19
        echo "\t<div id=\"nosections\"";
        if ((isset($context["sections"]) ? $context["sections"] : null)) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t<p>";
        // line 20
        echo twig_escape_filter($this->env, \Craft\Craft::t("No sections exist yet."), "html", null, true);
        echo "</p>
\t</div>

\t";
        // line 23
        if (twig_length_filter($this->env, (isset($context["sections"]) ? $context["sections"] : null))) {
            // line 24
            echo "\t\t<table id=\"sections\" class=\"data fullwidth collapsible\">
\t\t\t<thead>
\t\t\t\t<th scope=\"col\">";
            // line 26
            echo twig_escape_filter($this->env, \Craft\Craft::t("Name"), "html", null, true);
            echo "</th>
\t\t\t\t<th scope=\"col\">";
            // line 27
            echo twig_escape_filter($this->env, \Craft\Craft::t("Handle"), "html", null, true);
            echo "</th>
\t\t\t\t<th scope=\"col\">";
            // line 28
            echo twig_escape_filter($this->env, \Craft\Craft::t("Type"), "html", null, true);
            echo "</th>
\t\t\t\t<th scope=\"col\">";
            // line 29
            echo twig_escape_filter($this->env, \Craft\Craft::t("URL Format"), "html", null, true);
            echo "</th>
\t\t\t\t<th scope=\"col\">";
            // line 30
            echo twig_escape_filter($this->env, \Craft\Craft::t("Entry Types"), "html", null, true);
            echo "</th>
\t\t\t\t<td class=\"thin\"></td>
\t\t\t</thead>
\t\t\t<tbody>
\t\t\t\t";
            // line 34
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["sections"]) ? $context["sections"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["section"]) {
                // line 35
                echo "\t\t\t\t\t<tr data-id=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                echo "\" data-name=\"";
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["section"], "name", array())), "html", null, true);
                echo "\">
\t\t\t\t\t\t<th scope=\"row\" data-title=\"";
                // line 36
                echo twig_escape_filter($this->env, \Craft\Craft::t("Name"), "html", null, true);
                echo "\"><a href=\"";
                echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl(("settings/sections/" . $this->getAttribute($context["section"], "id", array()))), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["section"], "name", array())), "html", null, true);
                echo "</a></th>
\t\t\t\t\t\t<td data-title=\"";
                // line 37
                echo twig_escape_filter($this->env, \Craft\Craft::t("Handle"), "html", null, true);
                echo "\"><code>";
                echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "handle", array()), "html", null, true);
                echo "</code></td>
\t\t\t\t\t\t<td data-title=\"";
                // line 38
                echo twig_escape_filter($this->env, \Craft\Craft::t("Type"), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t(twig_title_string_filter($this->env, $this->getAttribute($context["section"], "type", array()))), "html", null, true);
                echo "</td>
\t\t\t\t\t\t<td data-title=\"";
                // line 39
                echo twig_escape_filter($this->env, \Craft\Craft::t("URL Format"), "html", null, true);
                echo "\" dir=\"ltr\">";
                // line 40
                if ($this->getAttribute($context["section"], "isHomepage", array(), "method")) {
                    // line 41
                    echo "<div data-icon=\"home\" title=\"";
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Homepage"), "html", null, true);
                    echo "\"></div>";
                } else {
                    // line 43
                    echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "getUrlFormat", array(), "method"), "html", null, true);
                }
                // line 45
                echo "</td>
\t\t\t\t\t\t<td data-title=\"";
                // line 46
                echo twig_escape_filter($this->env, \Craft\Craft::t("Entry Types"), "html", null, true);
                echo "\">
\t\t\t\t\t\t\t";
                // line 47
                if ((($this->getAttribute($context["section"], "type", array()) == "single") && (twig_length_filter($this->env, $this->getAttribute($context["section"], "getEntryTypes", array(), "method")) == 1))) {
                    // line 48
                    echo "\t\t\t\t\t\t\t\t";
                    $context["entryType"] = $this->getAttribute($this->getAttribute($context["section"], "getEntryTypes", array(), "method"), 0, array(), "array");
                    // line 49
                    echo "\t\t\t\t\t\t\t\t<a href=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entryType"]) ? $context["entryType"] : null), "getCpEditUrl", array(), "method"), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Edit entry type"), "html", null, true);
                    echo "</a>
\t\t\t\t\t\t\t";
                } else {
                    // line 51
                    echo "\t\t\t\t\t\t\t\t<a href=\"";
                    echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl((("settings/sections/" . $this->getAttribute($context["section"], "id", array())) . "/entrytypes")), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Edit entry types ({count})", array("count" => twig_length_filter($this->env, $this->getAttribute($context["section"], "getEntryTypes", array(), "method")))), "html", null, true);
                    echo "</a>
\t\t\t\t\t\t\t\t<a class=\"menubtn\" title=\"";
                    // line 52
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Entry Types"), "html", null, true);
                    echo "\"></a>
\t\t\t\t\t\t\t\t<div class=\"menu\">
\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t";
                    // line 55
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["section"], "getEntryTypes", array(), "method"));
                    foreach ($context['_seq'] as $context["_key"] => $context["entryType"]) {
                        // line 56
                        echo "\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"";
                        echo twig_escape_filter($this->env, $this->getAttribute($context["entryType"], "getCpEditUrl", array(), "method"), "html", null, true);
                        echo "\">";
                        echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["entryType"], "name", array())), "html", null, true);
                        echo "</a></li>
\t\t\t\t\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['entryType'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 58
                    echo "\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t";
                }
                // line 61
                echo "\t\t\t\t\t\t</td>
\t\t\t\t\t\t<td class=\"thin\"><a class=\"delete icon\" title=\"";
                // line 62
                echo twig_escape_filter($this->env, \Craft\Craft::t("Delete"), "html", null, true);
                echo "\" role=\"button\"></a></td>
\t\t\t\t\t</tr>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['section'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 65
            echo "\t\t\t</tbody>
\t\t</table>
\t";
        }
    }

    public function getTemplateName()
    {
        return "settings/sections/_index";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  226 => 65,  217 => 62,  214 => 61,  209 => 58,  198 => 56,  194 => 55,  188 => 52,  181 => 51,  173 => 49,  170 => 48,  168 => 47,  164 => 46,  161 => 45,  158 => 43,  153 => 41,  151 => 40,  148 => 39,  142 => 38,  136 => 37,  128 => 36,  121 => 35,  117 => 34,  110 => 30,  106 => 29,  102 => 28,  98 => 27,  94 => 26,  90 => 24,  88 => 23,  82 => 20,  75 => 19,  72 => 18,  68 => 1,  53 => 77,  46 => 72,  44 => 71,  36 => 13,  33 => 12,  31 => 11,  29 => 8,  27 => 4,  25 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* {% set title = "Sections"|t %}*/
/* */
/* {% set crumbs = [*/
/* 	{ label: "Settings"|t, url: url('settings') }*/
/* ] %}*/
/* */
/* {% set docsUrl = 'http://craftcms.com/docs/sections-and-entries#sections' %}*/
/* */
/* */
/* {% set extraPageHeaderHtml %}*/
/* 	<div id="newsectioncontainer" class="buttons right">*/
/* 		<a href="{{ url('settings/sections/new') }}" class="btn submit add icon">{{ "New section"|t }}</a>*/
/* 	</div>*/
/* {% endset %}*/
/* */
/* */
/* {% block content %}*/
/* 	<div id="nosections"{% if sections %} class="hidden"{% endif %}>*/
/* 		<p>{{ "No sections exist yet."|t }}</p>*/
/* 	</div>*/
/* */
/* 	{% if sections|length %}*/
/* 		<table id="sections" class="data fullwidth collapsible">*/
/* 			<thead>*/
/* 				<th scope="col">{{ "Name"|t }}</th>*/
/* 				<th scope="col">{{ "Handle"|t }}</th>*/
/* 				<th scope="col">{{ "Type"|t }}</th>*/
/* 				<th scope="col">{{ "URL Format"|t }}</th>*/
/* 				<th scope="col">{{ "Entry Types"|t}}</th>*/
/* 				<td class="thin"></td>*/
/* 			</thead>*/
/* 			<tbody>*/
/* 				{% for section in sections %}*/
/* 					<tr data-id="{{ section.id }}" data-name="{{ section.name|t }}">*/
/* 						<th scope="row" data-title="{{ 'Name'|t }}"><a href="{{ url('settings/sections/' ~ section.id) }}">{{ section.name|t }}</a></th>*/
/* 						<td data-title="{{ 'Handle'|t }}"><code>{{ section.handle }}</code></td>*/
/* 						<td data-title="{{ 'Type'|t }}">{{ section.type|title|t }}</td>*/
/* 						<td data-title="{{ 'URL Format'|t }}" dir="ltr">*/
/* 							{%- if section.isHomepage() -%}*/
/* 								<div data-icon="home" title="{{ 'Homepage'|t }}"></div>*/
/* 							{%- else -%}*/
/* 								{{ section.getUrlFormat() }}*/
/* 							{%- endif -%}*/
/* 						</td>*/
/* 						<td data-title="{{ 'Entry Types'|t }}">*/
/* 							{% if section.type == 'single' and section.getEntryTypes()|length == 1 %}*/
/* 								{% set entryType = section.getEntryTypes()[0] %}*/
/* 								<a href="{{ entryType.getCpEditUrl() }}">{{ "Edit entry type"|t }}</a>*/
/* 							{% else %}*/
/* 								<a href="{{ url('settings/sections/' ~ section.id ~ '/entrytypes') }}">{{ "Edit entry types ({count})"|t({ count: section.getEntryTypes()|length }) }}</a>*/
/* 								<a class="menubtn" title="{{ 'Entry Types'|t }}"></a>*/
/* 								<div class="menu">*/
/* 									<ul>*/
/* 										{% for entryType in section.getEntryTypes() %}*/
/* 											<li><a href="{{ entryType.getCpEditUrl() }}">{{ entryType.name|t }}</a></li>*/
/* 										{% endfor %}*/
/* 									</ul>*/
/* 								</div>*/
/* 							{% endif %}*/
/* 						</td>*/
/* 						<td class="thin"><a class="delete icon" title="{{ 'Delete'|t }}" role="button"></a></td>*/
/* 					</tr>*/
/* 				{% endfor %}*/
/* 			</tbody>*/
/* 		</table>*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
/* */
/* {% includejs %}*/
/* 	var adminTable = new Craft.AdminTable({*/
/* 		tableSelector: '#sections',*/
/* 		noObjectsSelector: '#nosections',*/
/* 		newObjectBtnSelector: '#newsectioncontainer',*/
/* 		deleteAction: 'sections/deleteSection',*/
/* 		confirmDeleteMessage: '{{ "Are you sure you want to delete “{name}” and all its entries?"|t }}',*/
/* 		onDeleteObject: function()*/
/* 		{*/
/* 			// Hide the Entries tab if that was the last one*/
/* 			if (adminTable.totalObjects == 0)*/
/* 			{*/
/* 				$('#nav-entries').remove();*/
/* 			}*/
/* 		}*/
/* 	});*/
/* {% endincludejs %}*/
/* */
