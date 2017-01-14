<?php

/* _elements/indexcontainer */
class __TwigTemplate_6e4b33130d85ef681c77539e214b4a5c50668fc7a30bf25e7c981a0479dad0c8 extends Craft\BaseTemplate
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
        $context["__internal_a70b1d5526bfa45d441bcb11019523ad206f88a2521801ddc60afc4a69a265c4"] = $this->loadTemplate("_includes/forms", "_elements/indexcontainer", 1);
        // line 3
        \Craft\craft()->templates->includeTranslations(
        	"Sort by {attribute}",
        	"Score",
        	"Structure",
        	"Display in a table",
        	"Display hierarchically",
        	"Display as thumbnails"
        );
        // line 11
        echo "
";
        // line 12
        $context["context"] = ((array_key_exists("context", $context)) ? ((isset($context["context"]) ? $context["context"] : null)) : ("index"));
        // line 13
        $context["showStatusMenu"] = (((array_key_exists("showStatusMenu", $context) && ((isset($context["showStatusMenu"]) ? $context["showStatusMenu"] : null) != "auto"))) ? ((isset($context["showStatusMenu"]) ? $context["showStatusMenu"] : null)) : ($this->getAttribute((isset($context["elementType"]) ? $context["elementType"] : null), "hasStatuses", array(), "method")));
        // line 14
        $context["showLocaleMenu"] = ((($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method") && ((isset($context["context"]) ? $context["context"] : null) == "index"))) ? ((((array_key_exists("showLocaleMenu", $context) && ((isset($context["showLocaleMenu"]) ? $context["showLocaleMenu"] : null) != "auto"))) ? ((isset($context["showLocaleMenu"]) ? $context["showLocaleMenu"] : null)) : ($this->getAttribute((isset($context["elementType"]) ? $context["elementType"] : null), "isLocalized", array(), "method")))) : (false));
        // line 15
        $context["sortableAttributes"] = $this->getAttribute((isset($context["elementType"]) ? $context["elementType"] : null), "defineSortableAttributes", array(), "method");
        // line 16
        echo "
<div class=\"main\">
\t<div class=\"toolbar\">
\t\t<table class=\"inputs fullwidth collapsible\">
\t\t\t<tr>
\t\t\t\t";
        // line 21
        if ((isset($context["showStatusMenu"]) ? $context["showStatusMenu"] : null)) {
            // line 22
            echo "\t\t\t\t\t<td class=\"thin\">
\t\t\t\t\t\t<div class=\"btn menubtn statusmenubtn\"><span class=\"status\"></span>";
            // line 23
            echo twig_escape_filter($this->env, \Craft\Craft::t("All"), "html", null, true);
            echo "</div>
\t\t\t\t\t\t<div class=\"menu\">
\t\t\t\t\t\t\t<ul class=\"padded\">
\t\t\t\t\t\t\t\t<li><a data-status=\"\" class=\"sel\"><span class=\"status\"></span>";
            // line 26
            echo twig_escape_filter($this->env, \Craft\Craft::t("All"), "html", null, true);
            echo "</a></li>
\t\t\t\t\t\t\t\t";
            // line 27
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["elementType"]) ? $context["elementType"] : null), "getStatuses", array(), "method"));
            foreach ($context['_seq'] as $context["status"] => $context["label"]) {
                // line 28
                echo "\t\t\t\t\t\t\t\t\t<li><a data-status=\"";
                echo twig_escape_filter($this->env, $context["status"], "html", null, true);
                echo "\"><span class=\"status ";
                echo twig_escape_filter($this->env, $context["status"], "html", null, true);
                echo "\"></span>";
                echo twig_escape_filter($this->env, $context["label"], "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['status'], $context['label'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t\t</td>
\t\t\t\t";
        }
        // line 34
        echo "\t\t\t\t";
        if ((isset($context["showLocaleMenu"]) ? $context["showLocaleMenu"] : null)) {
            // line 35
            echo "\t\t\t\t\t";
            $context["editableLocaleIds"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getEditableLocaleIds", array(), "method");
            // line 36
            echo "\t\t\t\t\t";
            if (twig_length_filter($this->env, (isset($context["editableLocaleIds"]) ? $context["editableLocaleIds"] : null))) {
                // line 37
                echo "\t\t\t\t\t\t";
                if (twig_in_filter($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array()), (isset($context["editableLocaleIds"]) ? $context["editableLocaleIds"] : null))) {
                    // line 38
                    echo "\t\t\t\t\t\t\t";
                    $context["initialLocale"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getCurrentLocale", array(), "method");
                    // line 39
                    echo "\t\t\t\t\t\t";
                } else {
                    // line 40
                    echo "\t\t\t\t\t\t\t";
                    $context["initialLocale"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleById", array(0 => twig_first($this->env, (isset($context["editableLocaleIds"]) ? $context["editableLocaleIds"] : null))), "method");
                    // line 41
                    echo "\t\t\t\t\t\t";
                }
                // line 42
                echo "\t\t\t\t\t\t<td class=\"thin\">
\t\t\t\t\t\t\t<div class=\"btn menubtn localemenubtn\">";
                // line 43
                echo twig_escape_filter($this->env, (((isset($context["initialLocale"]) ? $context["initialLocale"] : null)) ? ($this->getAttribute((isset($context["initialLocale"]) ? $context["initialLocale"] : null), "getName", array(), "method")) : ("")), "html", null, true);
                echo "</div>
\t\t\t\t\t\t\t<div class=\"menu\">
\t\t\t\t\t\t\t\t<ul class=\"padded\">
\t\t\t\t\t\t\t\t\t";
                // line 46
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getEditableLocales", array(), "method"));
                foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
                    // line 47
                    echo "\t\t\t\t\t\t\t\t\t\t<li><a";
                    if (((isset($context["initialLocale"]) ? $context["initialLocale"] : null) && ($this->getAttribute($context["locale"], "getId", array(), "method") == $this->getAttribute((isset($context["initialLocale"]) ? $context["initialLocale"] : null), "getId", array(), "method")))) {
                        echo " class=\"sel\"";
                    }
                    echo " data-locale=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "getId", array(), "method"), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "getName", array(), "method"), "html", null, true);
                    echo "</a></li>
\t\t\t\t\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 49
                echo "\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</td>
\t\t\t\t\t";
            }
            // line 53
            echo "\t\t\t\t";
        }
        // line 54
        echo "\t\t\t\t<td>
\t\t\t\t\t<div class=\"texticon search icon clearable\">
\t\t\t\t\t\t";
        // line 56
        echo $context["__internal_a70b1d5526bfa45d441bcb11019523ad206f88a2521801ddc60afc4a69a265c4"]->gettext(array("placeholder" => \Craft\Craft::t("Search")));
        // line 58
        echo "
\t\t\t\t\t\t<div class=\"clear hidden\" title=\"";
        // line 59
        echo twig_escape_filter($this->env, \Craft\Craft::t("Clear"), "html", null, true);
        echo "\"></div>
\t\t\t\t\t</div>
\t\t\t\t</td>
\t\t\t\t<td class=\"thin\">
\t\t\t\t\t<div class=\"btn menubtn sortmenubtn\"";
        // line 63
        if ((isset($context["sortableAttributes"]) ? $context["sortableAttributes"] : null)) {
            echo " title=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Sort by {attribute}", array("attribute" => twig_first($this->env, (isset($context["sortableAttributes"]) ? $context["sortableAttributes"] : null)))), "html", null, true);
            echo "\"";
        }
        echo " data-icon=\"asc\">";
        echo twig_escape_filter($this->env, (((isset($context["sortableAttributes"]) ? $context["sortableAttributes"] : null)) ? (twig_first($this->env, (isset($context["sortableAttributes"]) ? $context["sortableAttributes"] : null))) : ("")), "html", null, true);
        echo "</div>
\t\t\t\t\t<div class=\"menu\">
\t\t\t\t\t\t<ul class=\"padded sort-attributes\">
\t\t\t\t\t\t\t";
        // line 66
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["sortableAttributes"]) ? $context["sortableAttributes"] : null));
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
        foreach ($context['_seq'] as $context["key"] => $context["label"]) {
            // line 67
            echo "\t\t\t\t\t\t\t\t<li><a";
            if ($this->getAttribute($context["loop"], "first", array())) {
                echo " class=\"sel\"";
            }
            echo " data-attr=\"";
            echo twig_escape_filter($this->env, $context["key"], "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $context["label"], "html", null, true);
            echo "</a></li>
\t\t\t\t\t\t\t";
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
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['label'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 69
        echo "\t\t\t\t\t\t</ul>
\t\t\t\t\t\t<hr>
\t\t\t\t\t\t<ul class=\"padded sort-directions\">
\t\t\t\t\t\t\t<li><a data-dir=\"asc\" class=\"sel\">";
        // line 72
        echo twig_escape_filter($this->env, \Craft\Craft::t("Ascending"), "html", null, true);
        echo "</a></li>
\t\t\t\t\t\t\t<li><a data-dir=\"desc\">";
        // line 73
        echo twig_escape_filter($this->env, \Craft\Craft::t("Descending"), "html", null, true);
        echo "</a></li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>
\t\t\t\t</td>
\t\t\t\t<td class=\"thin viewbtns hidden\"></td>
\t\t\t</tr>
\t\t</table>
\t\t<div class=\"spinner hidden\"></div>
\t</div>

\t<div class=\"elements\"></div>
</div>
";
    }

    public function getTemplateName()
    {
        return "_elements/indexcontainer";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  224 => 73,  220 => 72,  215 => 69,  192 => 67,  175 => 66,  163 => 63,  156 => 59,  153 => 58,  151 => 56,  147 => 54,  144 => 53,  138 => 49,  123 => 47,  119 => 46,  113 => 43,  110 => 42,  107 => 41,  104 => 40,  101 => 39,  98 => 38,  95 => 37,  92 => 36,  89 => 35,  86 => 34,  80 => 30,  67 => 28,  63 => 27,  59 => 26,  53 => 23,  50 => 22,  48 => 21,  41 => 16,  39 => 15,  37 => 14,  35 => 13,  33 => 12,  30 => 11,  21 => 3,  19 => 1,);
    }
}
/* {% from "_includes/forms" import text -%}*/
/* */
/* {% includeTranslations*/
/* 	"Sort by {attribute}",*/
/* 	"Score",*/
/* 	"Structure",*/
/* 	"Display in a table",*/
/* 	"Display hierarchically",*/
/* 	"Display as thumbnails"*/
/* %}*/
/* */
/* {% set context = context is defined ? context : 'index' %}*/
/* {% set showStatusMenu = (showStatusMenu is defined and showStatusMenu != 'auto' ? showStatusMenu : elementType.hasStatuses()) %}*/
/* {% set showLocaleMenu = (craft.isLocalized() and context == 'index' ? (showLocaleMenu is defined and showLocaleMenu != 'auto' ? showLocaleMenu : elementType.isLocalized()) : false) %}*/
/* {% set sortableAttributes = elementType.defineSortableAttributes() %}*/
/* */
/* <div class="main">*/
/* 	<div class="toolbar">*/
/* 		<table class="inputs fullwidth collapsible">*/
/* 			<tr>*/
/* 				{% if showStatusMenu %}*/
/* 					<td class="thin">*/
/* 						<div class="btn menubtn statusmenubtn"><span class="status"></span>{{ "All"|t }}</div>*/
/* 						<div class="menu">*/
/* 							<ul class="padded">*/
/* 								<li><a data-status="" class="sel"><span class="status"></span>{{ "All"|t }}</a></li>*/
/* 								{% for status, label in elementType.getStatuses() %}*/
/* 									<li><a data-status="{{ status }}"><span class="status {{ status }}"></span>{{ label }}</a></li>*/
/* 								{% endfor %}*/
/* 							</ul>*/
/* 						</div>*/
/* 					</td>*/
/* 				{% endif %}*/
/* 				{% if showLocaleMenu %}*/
/* 					{% set editableLocaleIds = craft.i18n.getEditableLocaleIds() %}*/
/* 					{% if editableLocaleIds|length %}*/
/* 						{% if craft.locale in editableLocaleIds %}*/
/* 							{% set initialLocale = craft.i18n.getCurrentLocale() %}*/
/* 						{% else %}*/
/* 							{% set initialLocale = craft.i18n.getLocaleById(editableLocaleIds|first) %}*/
/* 						{% endif %}*/
/* 						<td class="thin">*/
/* 							<div class="btn menubtn localemenubtn">{{ initialLocale ? initialLocale.getName() }}</div>*/
/* 							<div class="menu">*/
/* 								<ul class="padded">*/
/* 									{% for locale in craft.i18n.getEditableLocales() %}*/
/* 										<li><a{% if initialLocale and locale.getId() == initialLocale.getId() %} class="sel"{% endif %} data-locale="{{ locale.getId() }}">{{ locale.getName() }}</a></li>*/
/* 									{% endfor %}*/
/* 								</ul>*/
/* 							</div>*/
/* 						</td>*/
/* 					{% endif %}*/
/* 				{% endif %}*/
/* 				<td>*/
/* 					<div class="texticon search icon clearable">*/
/* 						{{ text({*/
/* 							placeholder: "Search"|t*/
/* 						}) }}*/
/* 						<div class="clear hidden" title="{{ 'Clear'|t }}"></div>*/
/* 					</div>*/
/* 				</td>*/
/* 				<td class="thin">*/
/* 					<div class="btn menubtn sortmenubtn"{% if sortableAttributes %} title="{{ 'Sort by {attribute}'|t({ attribute: sortableAttributes|first }) }}"{% endif %} data-icon="asc">{{ sortableAttributes ? sortableAttributes|first }}</div>*/
/* 					<div class="menu">*/
/* 						<ul class="padded sort-attributes">*/
/* 							{% for key, label in sortableAttributes %}*/
/* 								<li><a{% if loop.first %} class="sel"{% endif %} data-attr="{{ key }}">{{ label }}</a></li>*/
/* 							{% endfor %}*/
/* 						</ul>*/
/* 						<hr>*/
/* 						<ul class="padded sort-directions">*/
/* 							<li><a data-dir="asc" class="sel">{{ "Ascending"|t }}</a></li>*/
/* 							<li><a data-dir="desc">{{ "Descending"|t }}</a></li>*/
/* 						</ul>*/
/* 					</div>*/
/* 				</td>*/
/* 				<td class="thin viewbtns hidden"></td>*/
/* 			</tr>*/
/* 		</table>*/
/* 		<div class="spinner hidden"></div>*/
/* 	</div>*/
/* */
/* 	<div class="elements"></div>*/
/* </div>*/
/* */
