<?php

/* entries/_revisions */
class __TwigTemplate_dd7c1080be3f724723048a0704110f3f01bc31d1c47ec1f31588c7a5f78cf34e extends Craft\BaseTemplate
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
        $context["drafts"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "entryRevisions", array()), "getEditableDraftsByEntryId", array(0 => $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array()), 1 => $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "locale", array())), "method");
        // line 2
        $context["baseUrl"] = ((((("entries/" . $this->getAttribute($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getSection", array(), "method"), "handle", array())) . "/") . $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array())) . (($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "slug", array())) ? (("-" . $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "slug", array()))) : (""))) . "/");
        // line 3
        echo "
<div id=\"revision-btn\" class=\"btn menubtn\">";
        // line 4
        echo twig_escape_filter($this->env, (isset($context["revisionLabel"]) ? $context["revisionLabel"] : null), "html", null, true);
        echo "</div>

<div class=\"menu\">
\t<ul class=\"padded\">
\t\t<li><a";
        // line 8
        if (($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "Entry")) {
            echo " class=\"sel\"";
        }
        echo " href=\"";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getCpEditUrl", array(), "method"), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, \Craft\Craft::t("Current"), "html", null, true);
        echo "</a></li>
\t</ul>

\t";
        // line 11
        if ((isset($context["drafts"]) ? $context["drafts"] : null)) {
            // line 12
            echo "\t\t<h6>";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Drafts"), "html", null, true);
            echo "</h6>
\t\t<ul class=\"padded\">
\t\t\t";
            // line 14
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["drafts"]) ? $context["drafts"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["draft"]) {
                // line 15
                echo "\t\t\t\t<li><a";
                if ((($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "EntryDraft") && ($this->getAttribute($context["draft"], "draftId", array()) == (isset($context["draftId"]) ? $context["draftId"] : null)))) {
                    echo " class=\"sel\"";
                }
                echo " href=\"";
                echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl((((isset($context["baseUrl"]) ? $context["baseUrl"] : null) . "drafts/") . $this->getAttribute($context["draft"], "draftId", array()))), "html", null, true);
                echo "\">
\t\t\t\t\t";
                // line 16
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["draft"], "name", array())), "html", null, true);
                echo "
\t\t\t\t\t<span class=\"light\">";
                // line 17
                echo twig_escape_filter($this->env, \Craft\Craft::t("by {creator}", array("creator" => $this->getAttribute($context["draft"], "creator", array()))), "html", null, true);
                echo "</span>
\t\t\t\t</a></li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['draft'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 20
            echo "\t\t</ul>
\t";
        }
        // line 22
        echo "
\t";
        // line 23
        if ($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "enableVersioning", array())) {
            // line 24
            echo "\t\t";
            $context["versions"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "entryRevisions", array()), "getVersionsByEntryId", array(0 => $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array()), 1 => $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "locale", array())), "method");
            // line 25
            echo "\t\t";
            if ((isset($context["versions"]) ? $context["versions"] : null)) {
                // line 26
                echo "\t\t\t<h6>";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Recent Versions"), "html", null, true);
                echo "</h6>
\t\t\t<ul class=\"padded\">
\t\t\t\t";
                // line 28
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["versions"]) ? $context["versions"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["version"]) {
                    // line 29
                    echo "\t\t\t\t\t<li><a";
                    if ((($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "EntryVersion") && ($this->getAttribute($context["version"], "versionId", array()) == (isset($context["versionId"]) ? $context["versionId"] : null)))) {
                        echo " class=\"sel\"";
                    }
                    echo " href=\"";
                    echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl((((isset($context["baseUrl"]) ? $context["baseUrl"] : null) . "versions/") . $this->getAttribute($context["version"], "versionId", array()))), "html", null, true);
                    echo "\">
\t\t\t\t\t\t";
                    // line 30
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Version {num}", array("num" => $this->getAttribute($context["version"], "num", array()))), "html", null, true);
                    echo "
\t\t\t\t\t\t<span class=\"light\">";
                    // line 31
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["version"], "dateCreated", array()), "uiTimestamp", array(), "method"), "html", null, true);
                    echo ", ";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["version"], "creator", array()), "html", null, true);
                    echo "</span>
\t\t\t\t\t</a></li>
\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['version'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 34
                echo "\t\t\t</ul>
\t\t";
            }
            // line 36
            echo "\t";
        }
        // line 37
        echo "</div>

";
        // line 39
        if (($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "EntryDraft")) {
            // line 40
            echo "\t<a id=\"editdraft-btn\" class=\"btn edit icon\" title=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Edit Draft Settings"), "html", null, true);
            echo "\"></a>
\t";
            // line 41
            $_js = "js/EntryDraftEditor.js";
            \Craft\craft()->templates->includejsresource($_js);
            // line 42
            echo "\t";
            $_js = (((((("new Craft.EntryDraftEditor(" . $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "draftId", array())) . ", \"") . twig_escape_filter($this->env, (isset($context["revisionLabel"]) ? $context["revisionLabel"] : null), "js")) . "\", \"") . twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "revisionNotes", array()), "js")) . "\");");
            \Craft\craft()->templates->includejs($_js);
            // line 43
            echo "\t";
            \Craft\craft()->templates->includeTranslations(
            	"Draft Name",
            	"Notes"
            );
        }
    }

    public function getTemplateName()
    {
        return "entries/_revisions";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  153 => 43,  149 => 42,  146 => 41,  141 => 40,  139 => 39,  135 => 37,  132 => 36,  128 => 34,  117 => 31,  113 => 30,  104 => 29,  100 => 28,  94 => 26,  91 => 25,  88 => 24,  86 => 23,  83 => 22,  79 => 20,  70 => 17,  66 => 16,  57 => 15,  53 => 14,  47 => 12,  45 => 11,  33 => 8,  26 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% set drafts = craft.entryRevisions.getEditableDraftsByEntryId(entry.id, entry.locale) %}*/
/* {% set baseUrl = 'entries/'~entry.getSection().handle~'/'~entry.id~(entry.slug ? '-'~entry.slug)~'/' %}*/
/* */
/* <div id="revision-btn" class="btn menubtn">{{ revisionLabel }}</div>*/
/* */
/* <div class="menu">*/
/* 	<ul class="padded">*/
/* 		<li><a{% if entry.getClassHandle() == 'Entry' %} class="sel"{% endif %} href="{{ entry.getCpEditUrl() }}">{{ "Current"|t }}</a></li>*/
/* 	</ul>*/
/* */
/* 	{% if drafts %}*/
/* 		<h6>{{ "Drafts"|t }}</h6>*/
/* 		<ul class="padded">*/
/* 			{% for draft in drafts %}*/
/* 				<li><a{% if entry.getClassHandle() == 'EntryDraft' and draft.draftId == draftId %} class="sel"{% endif %} href="{{ url(baseUrl~'drafts/'~draft.draftId) }}">*/
/* 					{{ draft.name|t }}*/
/* 					<span class="light">{{ "by {creator}"|t({ creator: draft.creator }) }}</span>*/
/* 				</a></li>*/
/* 			{% endfor %}*/
/* 		</ul>*/
/* 	{% endif %}*/
/* */
/* 	{% if section.enableVersioning %}*/
/* 		{% set versions = craft.entryRevisions.getVersionsByEntryId(entry.id, entry.locale) %}*/
/* 		{% if versions %}*/
/* 			<h6>{{ "Recent Versions"|t }}</h6>*/
/* 			<ul class="padded">*/
/* 				{% for version in versions %}*/
/* 					<li><a{% if entry.getClassHandle() == 'EntryVersion' and version.versionId == versionId %} class="sel"{% endif %} href="{{ url(baseUrl~'versions/'~version.versionId) }}">*/
/* 						{{ "Version {num}"|t({ num: version.num }) }}*/
/* 						<span class="light">{{ version.dateCreated.uiTimestamp() }}, {{ version.creator }}</span>*/
/* 					</a></li>*/
/* 				{% endfor %}*/
/* 			</ul>*/
/* 		{% endif %}*/
/* 	{% endif %}*/
/* </div>*/
/* */
/* {% if entry.getClassHandle() == 'EntryDraft' %}*/
/* 	<a id="editdraft-btn" class="btn edit icon" title="{{ 'Edit Draft Settings'|t }}"></a>*/
/* 	{% includejsresource 'js/EntryDraftEditor.js' %}*/
/* 	{% includejs 'new Craft.EntryDraftEditor('~entry.draftId~', "'~revisionLabel|e('js')~'", "'~entry.revisionNotes|e('js')~'");' %}*/
/* 	{% includeTranslations "Draft Name", "Notes" %}*/
/* {% endif %}*/
/* */
