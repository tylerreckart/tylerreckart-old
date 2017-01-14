<?php

/* _components/fieldtypes/Matrix/input */
class __TwigTemplate_58461f35f7e362671fa4e6d6196f6e7b6c0e19e2551417312c883fb32c64478c extends Craft\BaseTemplate
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
        echo "<input type=\"hidden\" name=\"";
        echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
        echo "\" value=\"\">

<div class=\"matrix matrix-field\" id=\"";
        // line 3
        echo twig_escape_filter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true);
        echo "\">
\t<div class=\"blocks\">
\t\t";
        // line 5
        $context["totalNewBlocks"] = 0;
        // line 6
        echo "\t\t";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["blocks"]) ? $context["blocks"] : null));
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
        foreach ($context['_seq'] as $context["_key"] => $context["block"]) {
            // line 7
            echo "\t\t\t";
            $context["blockId"] = $this->getAttribute($context["block"], "id", array());
            // line 8
            echo "\t\t\t";
            if ( !(isset($context["blockId"]) ? $context["blockId"] : null)) {
                // line 9
                echo "\t\t\t\t";
                $context["totalNewBlocks"] = ((isset($context["totalNewBlocks"]) ? $context["totalNewBlocks"] : null) + 1);
                // line 10
                echo "\t\t\t\t";
                $context["blockId"] = ("new" . (isset($context["totalNewBlocks"]) ? $context["totalNewBlocks"] : null));
                // line 11
                echo "\t\t\t";
            }
            // line 12
            echo "
\t\t\t<div class=\"matrixblock";
            // line 13
            if ( !$this->getAttribute($context["block"], "enabled", array())) {
                echo " disabled";
            }
            echo "\" data-id=\"";
            echo twig_escape_filter($this->env, (isset($context["blockId"]) ? $context["blockId"] : null), "html", null, true);
            echo "\"";
            if ($this->getAttribute($context["block"], "collapsed", array())) {
                echo " data-collapsed";
            }
            echo ">
\t\t\t\t";
            // line 14
            if ( !(isset($context["static"]) ? $context["static"] : null)) {
                // line 15
                echo "\t\t\t\t\t<input type=\"hidden\" name=\"";
                echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
                echo "[";
                echo twig_escape_filter($this->env, (isset($context["blockId"]) ? $context["blockId"] : null), "html", null, true);
                echo "][type]\" value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["block"], "getType", array(), "method"), "html", null, true);
                echo "\">
\t\t\t\t\t<input type=\"hidden\" name=\"";
                // line 16
                echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : null), "html", null, true);
                echo "[";
                echo twig_escape_filter($this->env, (isset($context["blockId"]) ? $context["blockId"] : null), "html", null, true);
                echo "][enabled]\" value=\"";
                if ($this->getAttribute($context["block"], "enabled", array())) {
                    echo "1";
                }
                echo "\">
\t\t\t\t\t<div class=\"titlebar\">
\t\t\t\t\t\t<div class=\"blocktype\">";
                // line 18
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($this->getAttribute($context["block"], "getType", array(), "method"), "name", array())), "html", null, true);
                echo "</div>
\t\t\t\t\t\t<div class=\"preview\"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"checkbox\" title=\"";
                // line 21
                echo twig_escape_filter($this->env, \Craft\Craft::t("Select"), "html", null, true);
                echo "\"></div>
\t\t\t\t\t<div class=\"actions\">
\t\t\t\t\t\t<div class=\"status off\" title=\"";
                // line 23
                echo twig_escape_filter($this->env, \Craft\Craft::t("Disabled"), "html", null, true);
                echo "\"></div>
\t\t\t\t\t\t<a class=\"settings icon menubtn\" title=\"";
                // line 24
                echo twig_escape_filter($this->env, \Craft\Craft::t("Actions"), "html", null, true);
                echo "\" role=\"button\"></a>
\t\t\t\t\t\t<div class=\"menu\">
\t\t\t\t\t\t\t<ul class=\"padded\">
\t\t\t\t\t\t\t\t<li><a data-icon=\"collapse\" data-action=\"collapse\">";
                // line 27
                echo twig_escape_filter($this->env, \Craft\Craft::t("Collapse"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t\t<li class=\"hidden\"><a data-icon=\"expand\" data-action=\"expand\">";
                // line 28
                echo twig_escape_filter($this->env, \Craft\Craft::t("Expand"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t\t<li";
                // line 29
                if ( !$this->getAttribute($context["block"], "enabled", array())) {
                    echo " class=\"hidden\"";
                }
                echo "><a data-icon=\"disabled\" data-action=\"disable\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Disable"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t\t<li";
                // line 30
                if ($this->getAttribute($context["block"], "enabled", array())) {
                    echo " class=\"hidden\"";
                }
                echo "><a data-icon=\"enabled\" data-action=\"enable\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Enable"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<hr class=\"padded\">
\t\t\t\t\t\t\t<ul class=\"padded\">
\t\t\t\t\t\t\t\t";
                // line 34
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["blockTypes"]) ? $context["blockTypes"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["blockType"]) {
                    // line 35
                    echo "\t\t\t\t\t\t\t\t\t<li><a data-icon=\"+\" data-action=\"add\" data-type=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["blockType"], "handle", array()), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Add {type} above", array("type" => \Craft\Craft::t($this->getAttribute($context["blockType"], "name", array())))), "html", null, true);
                    echo "</a></li>
\t\t\t\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['blockType'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 37
                echo "\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<hr class=\"padded\">
\t\t\t\t\t\t\t<ul class=\"padded\">
\t\t\t\t\t\t\t\t<li><a data-icon=\"remove\" data-action=\"delete\">";
                // line 40
                echo twig_escape_filter($this->env, \Craft\Craft::t("Delete"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<a class=\"move icon\" title=\"";
                // line 43
                echo twig_escape_filter($this->env, \Craft\Craft::t("Reorder"), "html", null, true);
                echo "\" role=\"button\"></a>
\t\t\t\t\t</div>
\t\t\t\t";
            }
            // line 46
            echo "\t\t\t\t<div class=\"fields\">
\t\t\t\t\t";
            // line 47
            $this->loadTemplate("_includes/fields", "_components/fieldtypes/Matrix/input", 47)->display(array_merge($context, array("namespace" => (((            // line 48
(isset($context["name"]) ? $context["name"] : null) . "[") . (isset($context["blockId"]) ? $context["blockId"] : null)) . "][fields]"), "element" =>             // line 49
$context["block"], "fields" => $this->getAttribute($this->getAttribute($this->getAttribute(            // line 50
$context["block"], "getType", array(), "method"), "getFieldLayout", array(), "method"), "getFields", array(), "method"), "static" =>             // line 51
(isset($context["static"]) ? $context["static"] : null))));
            // line 53
            echo "\t\t\t\t</div>
\t\t\t</div>
\t\t";
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 56
        echo "\t</div>
\t";
        // line 57
        if ( !(isset($context["static"]) ? $context["static"] : null)) {
            // line 58
            echo "\t\t<div class=\"buttons\">
\t\t\t<div class=\"btngroup\">
\t\t\t\t";
            // line 60
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["blockTypes"]) ? $context["blockTypes"] : null));
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
            foreach ($context['_seq'] as $context["_key"] => $context["blockType"]) {
                // line 61
                echo "\t\t\t\t\t<div class=\"btn";
                if ($this->getAttribute($context["loop"], "first", array())) {
                    echo " add icon";
                }
                echo "\" data-type=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["blockType"], "handle", array()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["blockType"], "name", array())), "html", null, true);
                echo "</div>
\t\t\t\t";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['blockType'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 63
            echo "\t\t\t</div>

\t\t\t<div class=\"btn add icon menubtn hidden\">";
            // line 65
            echo twig_escape_filter($this->env, \Craft\Craft::t("Add a block"), "html", null, true);
            echo "</div>
\t\t\t<div class=\"menu\">
\t\t\t\t<ul>
\t\t\t\t\t";
            // line 68
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["blockTypes"]) ? $context["blockTypes"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["blockType"]) {
                // line 69
                echo "\t\t\t\t\t\t<li><a data-type=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["blockType"], "handle", array()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["blockType"], "name", array())), "html", null, true);
                echo "</a></li>
\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['blockType'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 71
            echo "\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t";
        }
        // line 75
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/Matrix/input";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  287 => 75,  281 => 71,  270 => 69,  266 => 68,  260 => 65,  256 => 63,  233 => 61,  216 => 60,  212 => 58,  210 => 57,  207 => 56,  191 => 53,  189 => 51,  188 => 50,  187 => 49,  186 => 48,  185 => 47,  182 => 46,  176 => 43,  170 => 40,  165 => 37,  154 => 35,  150 => 34,  139 => 30,  131 => 29,  127 => 28,  123 => 27,  117 => 24,  113 => 23,  108 => 21,  102 => 18,  91 => 16,  82 => 15,  80 => 14,  68 => 13,  65 => 12,  62 => 11,  59 => 10,  56 => 9,  53 => 8,  50 => 7,  32 => 6,  30 => 5,  25 => 3,  19 => 1,);
    }
}
/* <input type="hidden" name="{{ name }}" value="">*/
/* */
/* <div class="matrix matrix-field" id="{{ id }}">*/
/* 	<div class="blocks">*/
/* 		{% set totalNewBlocks = 0 %}*/
/* 		{% for block in blocks %}*/
/* 			{% set blockId = block.id %}*/
/* 			{% if not blockId %}*/
/* 				{% set totalNewBlocks = totalNewBlocks + 1 %}*/
/* 				{% set blockId = 'new'~totalNewBlocks %}*/
/* 			{% endif %}*/
/* */
/* 			<div class="matrixblock{% if not block.enabled %} disabled{% endif %}" data-id="{{ blockId }}"{% if block.collapsed %} data-collapsed{% endif %}>*/
/* 				{% if not static %}*/
/* 					<input type="hidden" name="{{ name }}[{{ blockId }}][type]" value="{{ block.getType() }}">*/
/* 					<input type="hidden" name="{{ name }}[{{ blockId }}][enabled]" value="{% if block.enabled %}1{% endif %}">*/
/* 					<div class="titlebar">*/
/* 						<div class="blocktype">{{ block.getType().name|t }}</div>*/
/* 						<div class="preview"></div>*/
/* 					</div>*/
/* 					<div class="checkbox" title="{{ 'Select'|t }}"></div>*/
/* 					<div class="actions">*/
/* 						<div class="status off" title="{{ 'Disabled'|t }}"></div>*/
/* 						<a class="settings icon menubtn" title="{{ 'Actions'|t }}" role="button"></a>*/
/* 						<div class="menu">*/
/* 							<ul class="padded">*/
/* 								<li><a data-icon="collapse" data-action="collapse">{{ "Collapse"|t }}</a></li>*/
/* 								<li class="hidden"><a data-icon="expand" data-action="expand">{{ "Expand"|t }}</a></li>*/
/* 								<li{% if not block.enabled %} class="hidden"{% endif %}><a data-icon="disabled" data-action="disable">{{ "Disable"|t }}</a></li>*/
/* 								<li{% if block.enabled %} class="hidden"{% endif %}><a data-icon="enabled" data-action="enable">{{ "Enable"|t }}</a></li>*/
/* 							</ul>*/
/* 							<hr class="padded">*/
/* 							<ul class="padded">*/
/* 								{% for blockType in blockTypes %}*/
/* 									<li><a data-icon="+" data-action="add" data-type="{{ blockType.handle }}">{{ "Add {type} above"|t({ type: blockType.name|t }) }}</a></li>*/
/* 								{% endfor %}*/
/* 							</ul>*/
/* 							<hr class="padded">*/
/* 							<ul class="padded">*/
/* 								<li><a data-icon="remove" data-action="delete">{{ "Delete"|t }}</a></li>*/
/* 							</ul>*/
/* 						</div>*/
/* 						<a class="move icon" title="{{ 'Reorder'|t }}" role="button"></a>*/
/* 					</div>*/
/* 				{% endif %}*/
/* 				<div class="fields">*/
/* 					{% include "_includes/fields" with {*/
/* 						namespace: name~'['~blockId~'][fields]',*/
/* 						element: block,*/
/* 						fields: block.getType().getFieldLayout().getFields(),*/
/* 						static: static*/
/* 					} %}*/
/* 				</div>*/
/* 			</div>*/
/* 		{% endfor %}*/
/* 	</div>*/
/* 	{% if not static %}*/
/* 		<div class="buttons">*/
/* 			<div class="btngroup">*/
/* 				{% for blockType in blockTypes %}*/
/* 					<div class="btn{% if loop.first %} add icon{% endif %}" data-type="{{ blockType.handle }}">{{ blockType.name|t }}</div>*/
/* 				{% endfor %}*/
/* 			</div>*/
/* */
/* 			<div class="btn add icon menubtn hidden">{{ "Add a block"|t }}</div>*/
/* 			<div class="menu">*/
/* 				<ul>*/
/* 					{% for blockType in blockTypes %}*/
/* 						<li><a data-type="{{ blockType.handle }}">{{ blockType.name|t }}</a></li>*/
/* 					{% endfor %}*/
/* 				</ul>*/
/* 			</div>*/
/* 		</div>*/
/* 	{% endif %}*/
/* </div>*/
/* */
