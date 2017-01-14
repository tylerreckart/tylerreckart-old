<?php

/* globals/_edit */
class __TwigTemplate_8a24414b5728ce36d5a3207b4c5d4bfbf530c57447e9943bd363f5713fc35db1 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "globals/_edit", 1);
        $this->blocks = array(
            'pageTitle' => array($this, 'block_pageTitle'),
            'sidebar' => array($this, 'block_sidebar'),
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
        $context["title"] = \Craft\Craft::t("Globals");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_pageTitle($context, array $blocks = array())
    {
        // line 5
        echo "\t";
        $this->displayParentBlock("pageTitle", $context, $blocks);
        echo "

\t";
        // line 7
        if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
            // line 8
            echo "\t\t<div class=\"select\">
\t\t\t<select onchange=\"document.location.href='";
            // line 9
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl(("globals/{locale}/" . (isset($context["globalSetHandle"]) ? $context["globalSetHandle"] : null))), "html", null, true);
            echo "'.replace('{locale}', this.value);\">
\t\t\t\t";
            // line 10
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getEditableLocales", array(), "method"));
            foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
                // line 11
                echo "\t\t\t\t\t<option value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo "\"";
                if (($this->getAttribute($context["locale"], "id", array()) == (isset($context["localeId"]) ? $context["localeId"] : null))) {
                    echo " selected";
                }
                echo ">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "name", array()), "html", null, true);
                echo "</option>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 13
            echo "\t\t\t</select>
\t\t</div>
\t";
        }
    }

    // line 19
    public function block_sidebar($context, array $blocks = array())
    {
        // line 20
        echo "\t<nav>
\t\t<ul>
\t\t\t";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["globalSets"]) ? $context["globalSets"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["theGlobalSet"]) {
            // line 23
            echo "\t\t\t\t<li><a";
            if (($this->getAttribute($context["theGlobalSet"], "handle", array()) == (isset($context["globalSetHandle"]) ? $context["globalSetHandle"] : null))) {
                echo " class=\"sel\"";
            }
            echo " href=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["theGlobalSet"], "getCpEditUrl", array(), "method"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["theGlobalSet"], "name", array())), "html", null, true);
            echo "</a></li>
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['theGlobalSet'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "\t\t</ul>
\t</nav>
";
    }

    // line 30
    public function block_content($context, array $blocks = array())
    {
        // line 31
        echo "\t<form method=\"post\" accept-charset=\"UTF-8\" data-saveshortcut data-confirm-unload>
\t\t<input type=\"hidden\" name=\"action\" value=\"globals/saveContent\">
\t\t<input type=\"hidden\" name=\"setId\" value=\"";
        // line 33
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["globalSet"]) ? $context["globalSet"] : null), "id", array()), "html", null, true);
        echo "\">
\t\t<input type=\"hidden\" name=\"locale\" value=\"";
        // line 34
        echo twig_escape_filter($this->env, (isset($context["localeId"]) ? $context["localeId"] : null), "html", null, true);
        echo "\">
\t\t";
        // line 35
        echo twig_escape_filter($this->env, $this->env->getExtension('craft')->getCsrfInputFunction(), "html", null, true);
        echo "

\t\t";
        // line 37
        if (twig_length_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["globalSet"]) ? $context["globalSet"] : null), "getFieldLayout", array(), "method"), "getFields", array(), "method"))) {
            // line 38
            echo "\t\t\t<div>
\t\t\t\t";
            // line 39
            $this->loadTemplate("_includes/fields", "globals/_edit", 39)->display(array("fields" => $this->getAttribute($this->getAttribute(            // line 40
(isset($context["globalSet"]) ? $context["globalSet"] : null), "getFieldLayout", array(), "method"), "getFields", array(), "method"), "element" =>             // line 41
(isset($context["globalSet"]) ? $context["globalSet"] : null)));
            // line 43
            echo "\t\t\t</div>

\t\t\t<div class=\"buttons\">
\t\t\t\t<input type=\"submit\" class=\"btn submit\" value=\"";
            // line 46
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save"), "html", null, true);
            echo "\">
\t\t\t</div>
\t\t";
        } else {
            // line 49
            echo "\t\t\t";
            echo twig_escape_filter($this->env, \Craft\Craft::t("This global set doesn’t have any fields assigned to it in its field layout."), "html", null, true);
            echo "
\t\t";
        }
        // line 51
        echo "\t</form>
";
    }

    public function getTemplateName()
    {
        return "globals/_edit";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  155 => 51,  149 => 49,  143 => 46,  138 => 43,  136 => 41,  135 => 40,  134 => 39,  131 => 38,  129 => 37,  124 => 35,  120 => 34,  116 => 33,  112 => 31,  109 => 30,  103 => 25,  88 => 23,  84 => 22,  80 => 20,  77 => 19,  70 => 13,  55 => 11,  51 => 10,  47 => 9,  44 => 8,  42 => 7,  36 => 5,  33 => 4,  29 => 1,  27 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* {% set title = "Globals"|t %}*/
/* */
/* {% block pageTitle %}*/
/* 	{{ parent() }}*/
/* */
/* 	{% if craft.isLocalized() %}*/
/* 		<div class="select">*/
/* 			<select onchange="document.location.href='{{ url('globals/{locale}/'~globalSetHandle) }}'.replace('{locale}', this.value);">*/
/* 				{% for locale in craft.i18n.getEditableLocales() %}*/
/* 					<option value="{{ locale.id }}"{% if locale.id == localeId %} selected{% endif %}>{{ locale.name }}</option>*/
/* 				{% endfor %}*/
/* 			</select>*/
/* 		</div>*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
/* */
/* {% block sidebar %}*/
/* 	<nav>*/
/* 		<ul>*/
/* 			{% for theGlobalSet in globalSets %}*/
/* 				<li><a{% if theGlobalSet.handle == globalSetHandle %} class="sel"{% endif %} href="{{ theGlobalSet.getCpEditUrl() }}">{{ theGlobalSet.name|t }}</a></li>*/
/* 			{% endfor %}*/
/* 		</ul>*/
/* 	</nav>*/
/* {% endblock %}*/
/* */
/* */
/* {% block content %}*/
/* 	<form method="post" accept-charset="UTF-8" data-saveshortcut data-confirm-unload>*/
/* 		<input type="hidden" name="action" value="globals/saveContent">*/
/* 		<input type="hidden" name="setId" value="{{ globalSet.id }}">*/
/* 		<input type="hidden" name="locale" value="{{ localeId }}">*/
/* 		{{ getCsrfInput() }}*/
/* */
/* 		{% if globalSet.getFieldLayout().getFields() | length %}*/
/* 			<div>*/
/* 				{% include "_includes/fields" with {*/
/* 				    fields: globalSet.getFieldLayout().getFields(),*/
/* 				    element: globalSet*/
/* 				} only %}*/
/* 			</div>*/
/* */
/* 			<div class="buttons">*/
/* 				<input type="submit" class="btn submit" value="{{ 'Save'|t }}">*/
/* 			</div>*/
/* 		{% else %}*/
/* 			{{ "This global set doesn’t have any fields assigned to it in its field layout."|t }}*/
/* 		{% endif %}*/
/* 	</form>*/
/* {% endblock %}*/
/* */
