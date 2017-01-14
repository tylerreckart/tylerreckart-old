<?php

/* _includes/forms */
class __TwigTemplate_d60e0628ee2ba8f097d2e140bffdb7a83c2569a57f5e2f3d64b78cbb7e81c0a8 extends Craft\BaseTemplate
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
        // line 4
        echo "

";
        // line 7
        echo "

";
        // line 12
        echo "

";
        // line 17
        echo "

";
        // line 22
        echo "

";
        // line 27
        echo "

";
        // line 32
        echo "

";
        // line 37
        echo "

";
        // line 42
        echo "

";
        // line 47
        echo "

";
        // line 52
        echo "

";
        // line 57
        echo "

";
        // line 62
        echo "

";
        // line 67
        echo "

";
        // line 72
        echo "

";
        // line 77
        echo "

";
        // line 82
        echo "

";
        // line 87
        echo "

";
        // line 92
        echo "

";
        // line 97
        echo "

";
        // line 100
        echo "

";
        // line 105
        echo "

";
        // line 120
        echo "

";
        // line 125
        echo "

";
        // line 130
        echo "

";
        // line 135
        echo "

";
        // line 140
        echo "

";
        // line 151
        echo "

";
        // line 156
        echo "

";
        // line 161
        echo "

";
        // line 166
        echo "

";
        // line 185
        echo "

";
        // line 190
        echo "

";
        // line 195
        echo "

";
        // line 200
        echo "

";
        // line 205
        echo "

";
        // line 211
        echo "

";
        // line 216
        echo "

";
        // line 219
        echo "

";
    }

    // line 1
    public function geterrorList($__errors__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "errors" => $__errors__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 2
            echo "\t";
            $this->loadTemplate("_includes/forms/errorList", "_includes/forms", 2)->display($context);
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 9
    public function gethidden($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 10
            $this->loadTemplate("_includes/forms/hidden", "_includes/forms", 10)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 14
    public function gettext($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 15
            echo "\t";
            $this->loadTemplate("_includes/forms/text", "_includes/forms", 15)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 19
    public function getpassword($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 20
            echo "\t";
            $this->loadTemplate("_includes/forms/text", "_includes/forms", 20)->display(twig_array_merge((isset($context["config"]) ? $context["config"] : null), array("type" => "password")));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 24
    public function getdate($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 25
            echo "\t";
            $this->loadTemplate("_includes/forms/date", "_includes/forms", 25)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 29
    public function gettime($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 30
            echo "\t";
            $this->loadTemplate("_includes/forms/time", "_includes/forms", 30)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 34
    public function getcolor($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 35
            echo "\t";
            $this->loadTemplate("_includes/forms/color", "_includes/forms", 35)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 39
    public function gettextarea($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 40
            echo "\t";
            $this->loadTemplate("_includes/forms/textarea", "_includes/forms", 40)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 44
    public function getselect($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 45
            echo "\t";
            $this->loadTemplate("_includes/forms/select", "_includes/forms", 45)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 49
    public function getmultiselect($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 50
            echo "\t";
            $this->loadTemplate("_includes/forms/multiselect", "_includes/forms", 50)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 54
    public function getcheckbox($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 55
            echo "\t";
            $this->loadTemplate("_includes/forms/checkbox", "_includes/forms", 55)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 59
    public function getcheckboxGroup($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 60
            echo "\t";
            $this->loadTemplate("_includes/forms/checkboxGroup", "_includes/forms", 60)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 64
    public function getcheckboxSelect($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 65
            echo "\t";
            $this->loadTemplate("_includes/forms/checkboxSelect", "_includes/forms", 65)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 69
    public function getradio($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 70
            echo "\t";
            $this->loadTemplate("_includes/forms/radio", "_includes/forms", 70)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 74
    public function getradioGroup($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 75
            echo "\t";
            $this->loadTemplate("_includes/forms/radioGroup", "_includes/forms", 75)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 79
    public function getfile($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 80
            echo "\t";
            $this->loadTemplate("_includes/forms/file", "_includes/forms", 80)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 84
    public function getlightswitch($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 85
            echo "\t";
            $this->loadTemplate("_includes/forms/lightswitch", "_includes/forms", 85)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 89
    public function geteditableTable($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 90
            echo "\t";
            $this->loadTemplate("_includes/forms/editableTable", "_includes/forms", 90)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 94
    public function getelementSelect($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 95
            echo "\t";
            $this->loadTemplate("_includes/forms/elementSelect", "_includes/forms", 95)->display((isset($context["config"]) ? $context["config"] : null));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 102
    public function getfield($__config__ = null, $__input__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "input" => $__input__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 103
            echo "\t";
            $this->loadTemplate("_includes/forms/field", "_includes/forms", 103)->display(twig_array_merge((isset($context["config"]) ? $context["config"] : null), array("input" => (isset($context["input"]) ? $context["input"] : null))));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 107
    public function gettextField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 108
            echo "\t";
            if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "unit", array(), "any", true, true)) {
                // line 109
                echo "\t\t";
                ob_start();
                // line 110
                echo "\t\t\t<div class=\"flex\">
\t\t\t\t<div class=\"textwrapper\">";
                // line 111
                echo $this->getAttribute($this, "text", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method");
                echo "</div>
\t\t\t\t<div class=\"label light\">";
                // line 112
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "unit", array()), "html", null, true);
                echo "</div>
\t\t\t</div>
\t\t";
                $context["input"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                // line 115
                echo "\t";
            } else {
                // line 116
                echo "\t\t";
                $context["input"] = $this->getAttribute($this, "text", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method");
                // line 117
                echo "\t";
            }
            // line 118
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => (isset($context["input"]) ? $context["input"] : null)), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 122
    public function getpasswordField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 123
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "password", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 127
    public function getdateField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 128
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "date", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 132
    public function gettimeField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 133
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "time", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 137
    public function getcolorField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 138
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "color", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 142
    public function getdateTimeField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 143
            echo "\t";
            ob_start();
            // line 144
            echo "\t\t<div class=\"datetimewrapper\">
\t\t\t";
            // line 145
            echo $this->getAttribute($this, "date", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method");
            echo "
\t\t\t";
            // line 146
            echo $this->getAttribute($this, "time", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method");
            echo "
\t\t</div>
\t";
            $context["input"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 149
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => (isset($context["input"]) ? $context["input"] : null)), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 153
    public function gettextareaField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 154
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "textarea", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 158
    public function getselectField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 159
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "select", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 163
    public function getmultiselectField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 164
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "multiselect", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 168
    public function getcheckboxField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 169
            echo "\t";
            if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "fieldLabel", array(), "any", true, true)) {
                // line 170
                echo "\t\t";
                echo $this->getAttribute($this, "field", array(0 => twig_array_merge((isset($context["config"]) ? $context["config"] : null), array("label" => $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "fieldLabel", array()))), 1 => $this->getAttribute($this, "checkbox", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
                echo "
\t";
            } else {
                // line 172
                echo "\t\t";
                $context["instructions"] = ((($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "instructions", array(), "any", true, true) &&  !(null === $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "instructions", array())))) ? ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "instructions", array())) : (null));
                // line 173
                $context["warning"] = ((($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "warning", array(), "any", true, true) &&  !(null === $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "warning", array())))) ? ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "warning", array())) : (null));
                // line 174
                echo "<div class=\"field checkboxfield";
                if (($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "first", array(), "any", true, true) && $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "first", array()))) {
                    echo " first";
                }
                if ((isset($context["instructions"]) ? $context["instructions"] : null)) {
                    echo " has-instructions";
                }
                echo "\"";
                if (($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "id", array(), "any", true, true) && $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "id", array()))) {
                    echo " id=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "id", array()), "html", null, true);
                    echo "-field\"";
                }
                echo ">
\t\t\t";
                // line 175
                echo $this->getAttribute($this, "checkbox", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method");
                echo "
\t\t\t";
                // line 176
                if ((isset($context["instructions"]) ? $context["instructions"] : null)) {
                    // line 177
                    echo "\t\t\t\t<div class=\"instructions\">";
                    echo twig_escape_filter($this->env, $this->env->getExtension('craft')->markdownFilter((isset($context["instructions"]) ? $context["instructions"] : null)), "html", null, true);
                    echo "</div>
\t\t\t";
                }
                // line 179
                echo "\t\t\t";
                if ((isset($context["warning"]) ? $context["warning"] : null)) {
                    // line 180
                    echo "\t\t\t\t<p class=\"warning\">";
                    echo twig_escape_filter($this->env, (isset($context["warning"]) ? $context["warning"] : null), "html", null, true);
                    echo "</p>
\t\t\t";
                }
                // line 182
                echo "\t\t</div>
\t";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 187
    public function getcheckboxSelectField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 188
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "checkboxSelect", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 192
    public function getradioGroupField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 193
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "radioGroup", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 197
    public function getfileField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 198
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "file", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 202
    public function getlightswitchField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 203
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "lightswitch", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 207
    public function geteditableTableField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 208
            echo "\t";
            ob_start();
            $this->loadTemplate("_includes/forms/editableTable", "_includes/forms", 208)->display((isset($context["config"]) ? $context["config"] : null));
            $context["input"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 209
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => (isset($context["input"]) ? $context["input"] : null)), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 213
    public function getelementSelectField($__config__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "config" => $__config__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 214
            echo "\t";
            echo $this->getAttribute($this, "field", array(0 => (isset($context["config"]) ? $context["config"] : null), 1 => $this->getAttribute($this, "elementSelect", array(0 => (isset($context["config"]) ? $context["config"] : null)), "method")), "method");
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 221
    public function getoptionShortcutLabel($__key__ = null, $__shift__ = null, $__alt__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "key" => $__key__,
            "shift" => $__shift__,
            "alt" => $__alt__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 222
            ob_start();
            // line 223
            echo "\t\t";
            switch ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getClientOs", array(), "method")) {
                case "Mac":
                {
                    // line 225
                    echo "\t\t\t\t<span class=\"shortcut\">";
                    echo twig_escape_filter($this->env, ((((((isset($context["alt"]) ? $context["alt"] : null)) ? ("⌥") : ("")) . (((isset($context["shift"]) ? $context["shift"] : null)) ? ("⇧") : (""))) . "⌘") . (isset($context["key"]) ? $context["key"] : null)), "html", null, true);
                    echo "</span>
\t\t\t";
                    break;
                }
                default:
                {
                    // line 227
                    echo "\t\t\t\t<span class=\"shortcut\">";
                    echo twig_escape_filter($this->env, ((("Ctrl+" . (((isset($context["alt"]) ? $context["alt"] : null)) ? ("Alt+") : (""))) . (((isset($context["shift"]) ? $context["shift"] : null)) ? ("Shift+") : (""))) . (isset($context["key"]) ? $context["key"] : null)), "html", null, true);
                    echo "</span>
\t\t";
                }
            }
            // line 229
            echo "\t";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "_includes/forms";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1209 => 229,  1202 => 227,  1193 => 225,  1188 => 223,  1186 => 222,  1172 => 221,  1158 => 214,  1146 => 213,  1132 => 209,  1127 => 208,  1115 => 207,  1101 => 203,  1089 => 202,  1075 => 198,  1063 => 197,  1049 => 193,  1037 => 192,  1023 => 188,  1011 => 187,  998 => 182,  992 => 180,  989 => 179,  983 => 177,  981 => 176,  977 => 175,  961 => 174,  959 => 173,  956 => 172,  950 => 170,  947 => 169,  935 => 168,  921 => 164,  909 => 163,  895 => 159,  883 => 158,  869 => 154,  857 => 153,  843 => 149,  837 => 146,  833 => 145,  830 => 144,  827 => 143,  815 => 142,  801 => 138,  789 => 137,  775 => 133,  763 => 132,  749 => 128,  737 => 127,  723 => 123,  711 => 122,  697 => 118,  694 => 117,  691 => 116,  688 => 115,  682 => 112,  678 => 111,  675 => 110,  672 => 109,  669 => 108,  657 => 107,  645 => 103,  632 => 102,  620 => 95,  608 => 94,  596 => 90,  584 => 89,  572 => 85,  560 => 84,  548 => 80,  536 => 79,  524 => 75,  512 => 74,  500 => 70,  488 => 69,  476 => 65,  464 => 64,  452 => 60,  440 => 59,  428 => 55,  416 => 54,  404 => 50,  392 => 49,  380 => 45,  368 => 44,  356 => 40,  344 => 39,  332 => 35,  320 => 34,  308 => 30,  296 => 29,  284 => 25,  272 => 24,  260 => 20,  248 => 19,  236 => 15,  224 => 14,  213 => 10,  201 => 9,  189 => 2,  177 => 1,  171 => 219,  167 => 216,  163 => 211,  159 => 205,  155 => 200,  151 => 195,  147 => 190,  143 => 185,  139 => 166,  135 => 161,  131 => 156,  127 => 151,  123 => 140,  119 => 135,  115 => 130,  111 => 125,  107 => 120,  103 => 105,  99 => 100,  95 => 97,  91 => 92,  87 => 87,  83 => 82,  79 => 77,  75 => 72,  71 => 67,  67 => 62,  63 => 57,  59 => 52,  55 => 47,  51 => 42,  47 => 37,  43 => 32,  39 => 27,  35 => 22,  31 => 17,  27 => 12,  23 => 7,  19 => 4,);
    }
}
/* {% macro errorList(errors) %}*/
/* 	{% include "_includes/forms/errorList" %}*/
/* {% endmacro %}*/
/* */
/* */
/* {# Inputs #}*/
/* */
/* */
/* {% macro hidden(config) -%}*/
/* 	{% include "_includes/forms/hidden" with config only %}*/
/* {%- endmacro %}*/
/* */
/* */
/* {% macro text(config) %}*/
/* 	{% include "_includes/forms/text" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro password(config) %}*/
/* 	{% include "_includes/forms/text" with config|merge({ type: 'password' }) only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro date(config) %}*/
/* 	{% include "_includes/forms/date" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro time(config) %}*/
/* 	{% include "_includes/forms/time" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro color(config) %}*/
/* 	{% include "_includes/forms/color" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro textarea(config) %}*/
/* 	{% include "_includes/forms/textarea" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro select(config) %}*/
/* 	{% include "_includes/forms/select" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro multiselect(config) %}*/
/* 	{% include "_includes/forms/multiselect" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro checkbox(config) %}*/
/* 	{% include "_includes/forms/checkbox" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro checkboxGroup(config) %}*/
/* 	{% include "_includes/forms/checkboxGroup" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro checkboxSelect(config) %}*/
/* 	{% include "_includes/forms/checkboxSelect" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro radio(config) %}*/
/* 	{% include "_includes/forms/radio" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro radioGroup(config) %}*/
/* 	{% include "_includes/forms/radioGroup" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro file(config) %}*/
/* 	{% include "_includes/forms/file" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro lightswitch(config) %}*/
/* 	{% include "_includes/forms/lightswitch" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro editableTable(config) %}*/
/* 	{% include "_includes/forms/editableTable" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro elementSelect(config) %}*/
/* 	{% include "_includes/forms/elementSelect" with config only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {# Fields #}*/
/* */
/* */
/* {% macro field(config, input) %}*/
/* 	{% include "_includes/forms/field" with config|merge({ input: input }) only %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro textField(config) %}*/
/* 	{% if config.unit is defined %}*/
/* 		{% set input %}*/
/* 			<div class="flex">*/
/* 				<div class="textwrapper">{{ _self.text(config) }}</div>*/
/* 				<div class="label light">{{ config.unit }}</div>*/
/* 			</div>*/
/* 		{% endset %}*/
/* 	{% else %}*/
/* 		{% set input = _self.text(config) %}*/
/* 	{% endif %}*/
/* 	{{ _self.field(config, input) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro passwordField(config) %}*/
/* 	{{ _self.field(config, _self.password(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro dateField(config) %}*/
/* 	{{ _self.field(config, _self.date(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro timeField(config) %}*/
/* 	{{ _self.field(config, _self.time(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro colorField(config) %}*/
/* 	{{ _self.field(config, _self.color(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro dateTimeField(config) %}*/
/* 	{% set input %}*/
/* 		<div class="datetimewrapper">*/
/* 			{{ _self.date(config) }}*/
/* 			{{ _self.time(config) }}*/
/* 		</div>*/
/* 	{% endset %}*/
/* 	{{ _self.field(config, input) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro textareaField(config) %}*/
/* 	{{ _self.field(config, _self.textarea(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro selectField(config) %}*/
/* 	{{ _self.field(config, _self.select(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro multiselectField(config) %}*/
/* 	{{ _self.field(config, _self.multiselect(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro checkboxField(config) %}*/
/* 	{% if config.fieldLabel is defined %}*/
/* 		{{ _self.field(config|merge({label: config.fieldLabel}), _self.checkbox(config)) }}*/
/* 	{% else %}*/
/* 		{% set instructions = config.instructions ?? null -%}*/
/* 		{% set warning = config.warning ?? null -%}*/
/* 		<div class="field checkboxfield{% if config.first is defined and config.first %} first{% endif %}{% if instructions %} has-instructions{% endif %}"{% if config.id is defined and config.id %} id="{{ config.id }}-field"{% endif %}>*/
/* 			{{ _self.checkbox(config) }}*/
/* 			{% if instructions %}*/
/* 				<div class="instructions">{{ instructions|md }}</div>*/
/* 			{% endif %}*/
/* 			{% if warning %}*/
/* 				<p class="warning">{{ warning }}</p>*/
/* 			{% endif %}*/
/* 		</div>*/
/* 	{% endif %}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro checkboxSelectField(config) %}*/
/* 	{{ _self.field(config, _self.checkboxSelect(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro radioGroupField(config) %}*/
/* 	{{ _self.field(config, _self.radioGroup(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro fileField(config) %}*/
/* 	{{ _self.field(config, _self.file(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro lightswitchField(config) %}*/
/* 	{{ _self.field(config, _self.lightswitch(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro editableTableField(config) %}*/
/* 	{% set input %}{% include "_includes/forms/editableTable" with config only %}{% endset %}*/
/* 	{{ _self.field(config, input) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {% macro elementSelectField(config) %}*/
/* 	{{ _self.field(config, _self.elementSelect(config)) }}*/
/* {% endmacro %}*/
/* */
/* */
/* {# Other #}*/
/* */
/* */
/* {% macro optionShortcutLabel(key, shift, alt) %}*/
/* 	{%- spaceless %}*/
/* 		{% switch craft.request.getClientOs() %}*/
/* 			{% case 'Mac' %}*/
/* 				<span class="shortcut">{{ (alt ? '⌥') ~ (shift ? '⇧') ~ '⌘' ~ key }}</span>*/
/* 			{% default %}*/
/* 				<span class="shortcut">{{ 'Ctrl+' ~ (alt ? 'Alt+') ~ (shift ? 'Shift+') ~ key }}</span>*/
/* 		{% endswitch %}*/
/* 	{% endspaceless -%}*/
/* {% endmacro %}*/
/* */
