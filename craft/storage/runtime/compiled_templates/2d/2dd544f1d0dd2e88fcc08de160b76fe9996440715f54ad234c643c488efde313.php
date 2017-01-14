<?php

/* amcommand/settings */
class __TwigTemplate_93e2149eff308aa6172a77110b721069dd0d336f3684a2de578549f52b0adf91 extends Craft\BaseTemplate
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
        $context["forms"] = $this->loadTemplate("_includes/forms", "amcommand/settings", 1);
        // line 2
        echo "
<h1>";
        // line 3
        echo twig_escape_filter($this->env, \Craft\Craft::t("Enabled commands"), "html", null, true);
        echo "</h1>
<p>
    ";
        // line 5
        echo twig_escape_filter($this->env, \Craft\Craft::t("By default, the command palette will only allow users to see and use commands they have permissions for."), "html", null, true);
        echo "
    <br>
    ";
        // line 7
        echo twig_escape_filter($this->env, \Craft\Craft::t("E.g.: Users that do not have permission to edit entries within a specific section, that section won’t even show for them."), "html", null, true);
        echo "
</p>
<p>";
        // line 9
        echo twig_escape_filter($this->env, \Craft\Craft::t("You can disable commands you do not wish to use, by unchecking the checkboxes below."), "html", null, true);
        echo "</p>
<hr>

";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["commands"]) ? $context["commands"] : null));
        foreach ($context['_seq'] as $context["commandSetting"] => $context["command"]) {
            // line 13
            echo "    ";
            echo $context["forms"]->getlightswitchField(array("id" =>             // line 14
$context["commandSetting"], "name" =>             // line 15
$context["commandSetting"], "label" => $this->getAttribute(            // line 16
$context["command"], "name", array()), "on" => $this->getAttribute(            // line 17
(isset($context["settings"]) ? $context["settings"] : null), $context["commandSetting"]), "instructions" => $this->getAttribute(            // line 18
$context["command"], "info", array())));
            // line 19
            echo "
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['commandSetting'], $context['command'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "amcommand/settings";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  57 => 19,  55 => 18,  54 => 17,  53 => 16,  52 => 15,  51 => 14,  49 => 13,  45 => 12,  39 => 9,  34 => 7,  29 => 5,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% import "_includes/forms" as forms %}*/
/* */
/* <h1>{{ 'Enabled commands'|t }}</h1>*/
/* <p>*/
/*     {{ 'By default, the command palette will only allow users to see and use commands they have permissions for.'|t }}*/
/*     <br>*/
/*     {{ 'E.g.: Users that do not have permission to edit entries within a specific section, that section won’t even show for them.'|t }}*/
/* </p>*/
/* <p>{{ 'You can disable commands you do not wish to use, by unchecking the checkboxes below.'|t }}</p>*/
/* <hr>*/
/* */
/* {% for commandSetting, command in commands %}*/
/*     {{ forms.lightswitchField({*/
/*         id:           commandSetting,*/
/*         name:         commandSetting,*/
/*         label:        command.name,*/
/*         on:           attribute(settings, commandSetting),*/
/*         instructions: command.info*/
/*     }) }}*/
/* {% endfor %}*/
