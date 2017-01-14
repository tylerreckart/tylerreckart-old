<?php

/* _components/fieldtypes/PositionSelect/settings */
class __TwigTemplate_dee1493e85daed8f373b5abaffa521201f84381037758f5613d5776da925fdb6 extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "_components/fieldtypes/PositionSelect/settings", 1);
        // line 2
        echo "
";
        // line 3
        ob_start();
        // line 4
        echo "\t<table class=\"data\">
\t\t";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["allOptions"]) ? $context["allOptions"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["option"]) {
            // line 6
            echo "\t\t\t<tr>
\t\t\t\t<td>
\t\t\t\t\t";
            // line 8
            echo $context["forms"]->getlightswitch(array("on" => twig_in_filter(            // line 9
$context["option"], $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "options", array())), "small" => true, "name" => (("options[" .             // line 11
$context["option"]) . "]")));
            // line 12
            echo "
\t\t\t\t</td>
\t\t\t\t<td>
\t\t\t\t\t<span data-icon=\"pos";
            // line 15
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->replaceFilter($context["option"], "-", ""), "html", null, true);
            echo "\"></span>
\t\t\t\t</td>
\t\t\t\t<td class=\"code\">
\t\t\t\t\t";
            // line 18
            echo twig_escape_filter($this->env, $context["option"], "html", null, true);
            echo "
\t\t\t\t</td>
\t\t\t</tr>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['option'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "\t</table>
";
        $context["input"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 24
        echo "
";
        // line 25
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Options"), "instructions" => \Craft\Craft::t("Choose which position options should be available to your field.")),         // line 28
(isset($context["input"]) ? $context["input"] : null));
        echo "
";
    }

    public function getTemplateName()
    {
        return "_components/fieldtypes/PositionSelect/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 28,  69 => 25,  66 => 24,  62 => 22,  52 => 18,  46 => 15,  41 => 12,  39 => 11,  38 => 9,  37 => 8,  33 => 6,  29 => 5,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% set input %}*/
/* 	<table class="data">*/
/* 		{% for option in allOptions %}*/
/* 			<tr>*/
/* 				<td>*/
/* 					{{ forms.lightswitch({*/
/* 						 on: (option in settings.options),*/
/* 						 small: true,*/
/* 						 name: 'options['~option~']'*/
/* 					}) }}*/
/* 				</td>*/
/* 				<td>*/
/* 					<span data-icon="pos{{ option|replace('-', '') }}"></span>*/
/* 				</td>*/
/* 				<td class="code">*/
/* 					{{ option }}*/
/* 				</td>*/
/* 			</tr>*/
/* 		{% endfor %}*/
/* 	</table>*/
/* {% endset %}*/
/* */
/* {{ forms.field({*/
/* 	label: "Options"|t,*/
/* 	instructions: "Choose which position options should be available to your field."|t,*/
/* }, input) }}*/
/* */
