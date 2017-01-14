<?php

/* settings/sections/_edit */
class __TwigTemplate_5d87f65c400ca5290e6f4749cad0fb20fcc68ecc4e15dc7a176c4f89be8d2525 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "settings/sections/_edit", 1);
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
        $context["docsUrl"] = "http://craftcms.com/docs/sections-and-entries#sections";
        // line 5
        $context["forms"] = $this->loadTemplate("_includes/forms", "settings/sections/_edit", 5);
        // line 6
        $context["fullPageForm"] = true;
        // line 90
        $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"] = $this;
        // line 266
        ob_start();
        // line 267
        echo "\t";
        if ( !$this->getAttribute((isset($context["section"]) ? $context["section"] : null), "handle", array())) {
            echo "new Craft.HandleGenerator('#name', '#handle');";
        }
        // line 268
        echo "
\t";
        // line 269
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getSiteLocales", array(), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
            // line 270
            echo "\t\t";
            if (( !$this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true) ||  !$this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute($context["locale"], "id", array()), array(), "array"), "urlFormat", array()))) {
                // line 271
                echo "\t\t\tnew Craft.EntryUrlFormatGenerator('#name', '#single-urlFormat-";
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo "');
\t\t\tnew Craft.EntryUrlFormatGenerator('#name', '#channel-urlFormat-";
                // line 272
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo "',   { suffix: '/{slug}' });
\t\t\tnew Craft.EntryUrlFormatGenerator('#name', '#structure-urlFormat-";
                // line 273
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo "', { suffix: '/{slug}' });
\t\t";
            }
            // line 275
            echo "\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 276
        echo "
\t";
        // line 277
        if ((isset($context["brandNewSection"]) ? $context["brandNewSection"] : null)) {
            // line 278
            echo "\t\tnew Craft.EntryUrlFormatGenerator('#name', '#single-template');
\t\tnew Craft.EntryUrlFormatGenerator('#name', '#channel-template',   { suffix: '/_entry' });
\t\tnew Craft.EntryUrlFormatGenerator('#name', '#structure-template', { suffix: '/_entry' });
\t";
        }
        $_js = ob_get_clean();
        \Craft\craft()->templates->includejs($_js);
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 92
    public function block_content($context, array $blocks = array())
    {
        // line 93
        echo "\t<input type=\"hidden\" name=\"action\" value=\"sections/saveSection\">
\t<input type=\"hidden\" name=\"redirect\" value=\"settings/sections\">

\t";
        // line 96
        if ($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array())) {
            echo "<input type=\"hidden\" name=\"sectionId\" value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array()), "html", null, true);
            echo "\">";
        }
        // line 97
        echo "
\t";
        // line 98
        echo $context["forms"]->gettextField(array("first" => true, "label" => \Craft\Craft::t("Name"), "instructions" => \Craft\Craft::t("What this section will be called in the CP."), "id" => "name", "name" => "name", "value" => $this->getAttribute(        // line 104
(isset($context["section"]) ? $context["section"] : null), "name", array()), "errors" => $this->getAttribute(        // line 105
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "name"), "method"), "autofocus" => true, "required" => true, "translatable" => true));
        // line 109
        echo "

\t";
        // line 111
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Handle"), "instructions" => \Craft\Craft::t("How you’ll refer to this section in the templates."), "id" => "handle", "class" => "code", "name" => "handle", "value" => $this->getAttribute(        // line 117
(isset($context["section"]) ? $context["section"] : null), "handle", array()), "errors" => $this->getAttribute(        // line 118
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "handle"), "method"), "required" => true));
        // line 120
        echo "

\t";
        // line 122
        if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
            // line 123
            echo "\t\t";
            ob_start();
            // line 124
            echo "\t\t\t<table class=\"data\" style=\"width: auto;\">
\t\t\t\t<thead>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td></td>
\t\t\t\t\t\t<th scope=\"col\">";
            // line 128
            echo twig_escape_filter($this->env, \Craft\Craft::t("Locale"), "html", null, true);
            echo "</th>
\t\t\t\t\t\t<th scope=\"col\">";
            // line 129
            echo twig_escape_filter($this->env, \Craft\Craft::t("Default Entry Status"), "html", null, true);
            echo "</th>
\t\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t\t";
            // line 133
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getSiteLocales", array(), "method"));
            foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
                // line 134
                echo "\t\t\t\t\t\t";
                $context["localeSelected"] = ((isset($context["brandNewSection"]) ? $context["brandNewSection"] : null) || $this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true));
                // line 135
                echo "\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t";
                // line 137
                echo $context["forms"]->getcheckbox(array("id" => ("locale-" . $this->getAttribute(                // line 138
$context["locale"], "id", array())), "name" => "locales[]", "value" => $this->getAttribute(                // line 140
$context["locale"], "id", array()), "checked" =>                 // line 141
(isset($context["localeSelected"]) ? $context["localeSelected"] : null), "toggle" => (".for-locale-" . $this->getAttribute(                // line 142
$context["locale"], "id", array()))));
                // line 143
                echo "
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td><label for=\"locale-";
                // line 145
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "name", array()), "html", null, true);
                echo " (";
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                echo ")</label></td>
\t\t\t\t\t\t\t<td class=\"centeralign\">
\t\t\t\t\t\t\t\t<div class=\"for-locale-";
                // line 147
                echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                if ( !(isset($context["localeSelected"]) ? $context["localeSelected"] : null)) {
                    echo " hidden";
                }
                echo "\">
\t\t\t\t\t\t\t\t\t";
                // line 148
                echo $context["forms"]->getlightswitch(array("name" => (("defaultLocaleStatuses[" . $this->getAttribute(                // line 149
$context["locale"], "id", array())) . "]"), "on" => ((                // line 150
(isset($context["brandNewSection"]) ? $context["brandNewSection"] : null) ||  !$this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true)) || $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute($context["locale"], "id", array()), array(), "array"), "enabledByDefault", array())), "small" => true));
                // line 152
                echo "
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 157
            echo "\t\t\t\t</tbody>
\t\t\t</table>
\t\t";
            $context["localesInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 160
            echo "
\t\t";
            // line 161
            echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("Which locales should entries in this section target?"), "errors" => $this->getAttribute(            // line 163
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "localeErrors"), "method")),             // line 164
(isset($context["localesInput"]) ? $context["localesInput"] : null));
            echo "
\t";
        }
        // line 166
        echo "
\t";
        // line 167
        echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Section Type"), "instructions" => (\Craft\Craft::t("What type of section is this?") . (($this->getAttribute(        // line 169
(isset($context["section"]) ? $context["section"] : null), "id", array())) ? ((("<br><span class=\"error\">" . \Craft\Craft::t("Careful—changing this may result in data loss.")) . "</span>")) : (""))), "id" => "type", "name" => "type", "options" =>         // line 172
(isset($context["typeOptions"]) ? $context["typeOptions"] : null), "value" => $this->getAttribute(        // line 173
(isset($context["section"]) ? $context["section"] : null), "type", array()), "toggle" => true, "targetPrefix" => ".type-", "errors" => $this->getAttribute(        // line 176
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "type"), "method")));
        // line 177
        echo "

\t<hr>

\t<div class=\"type-single ";
        // line 181
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "single")) {
            echo "hidden";
        }
        echo "\">
\t\t";
        // line 182
        if ((isset($context["canBeHomepage"]) ? $context["canBeHomepage"] : null)) {
            // line 183
            echo "\t\t\t";
            echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("This is for the homepage"), "id" => "single-homepage", "name" => "types[single][homepage]", "checked" => $this->getAttribute(            // line 187
(isset($context["section"]) ? $context["section"] : null), "isHomepage", array(), "method"), "reverseToggle" => "single-uri-container"));
            // line 189
            echo "
\t\t";
        }
        // line 191
        echo "
\t\t<div id=\"single-uri-container\"";
        // line 192
        if ($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "isHomepage", array(), "method")) {
            echo " class=\"hidden\"";
        }
        echo ">
\t\t\t";
        // line 193
        echo $context["forms"]->getfield(array("label" => \Craft\Craft::t("URI"), "instructions" => \Craft\Craft::t("What the entry URI should be."), "required" => true, "errors" => $this->getAttribute(        // line 197
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "urlFormat"), "method")), $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->geturlFormatInput("single",         // line 198
(isset($context["brandNewSection"]) ? $context["brandNewSection"] : null), (isset($context["section"]) ? $context["section"] : null)));
        echo "
\t\t</div>

\t\t";
        // line 201
        echo $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->gettemplateField("single", (isset($context["section"]) ? $context["section"] : null));
        echo "
\t</div>

\t";
        // line 204
        $context["urlFormatParams"] = array("label" => \Craft\Craft::t("Entry URL Format"), "instructions" => \Craft\Craft::t("What the entry URLs should look like. You can include tags that output entry properties, such as {ex1} or {ex2}.", array("ex1" => "<code>{slug}</code>", "ex2" => "<code>{postDate|date(\"Y\")}</code>")), "required" => true, "errors" => $this->getAttribute(        // line 208
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "urlFormat"), "method"));
        // line 210
        echo "
\t<div class=\"type-channel ";
        // line 211
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "channel")) {
            echo "hidden";
        }
        echo "\">
\t\t";
        // line 212
        echo $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->gethasUrlsField("channel", (isset($context["section"]) ? $context["section"] : null));
        echo "

\t\t<div id=\"channel-url-settings\" class=\"nested-fields";
        // line 214
        if ( !$this->getAttribute((isset($context["section"]) ? $context["section"] : null), "hasUrls", array())) {
            echo " hidden";
        }
        echo "\">
\t\t\t";
        // line 215
        echo $context["forms"]->getfield((isset($context["urlFormatParams"]) ? $context["urlFormatParams"] : null), $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->geturlFormatInput("channel", (isset($context["brandNewSection"]) ? $context["brandNewSection"] : null), (isset($context["section"]) ? $context["section"] : null)));
        echo "

\t\t\t";
        // line 217
        echo $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->gettemplateField("channel", (isset($context["section"]) ? $context["section"] : null));
        echo "
\t\t</div>
\t</div>

\t<div class=\"type-structure ";
        // line 221
        if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "structure")) {
            echo "hidden";
        }
        echo "\">
\t\t";
        // line 222
        echo $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->gethasUrlsField("structure", (isset($context["section"]) ? $context["section"] : null));
        echo "

\t\t<div id=\"structure-url-settings\" class=\"nested-fields";
        // line 224
        if ( !$this->getAttribute((isset($context["section"]) ? $context["section"] : null), "hasUrls", array())) {
            echo " hidden";
        }
        echo "\">
\t\t\t";
        // line 225
        echo $context["forms"]->getfield((isset($context["urlFormatParams"]) ? $context["urlFormatParams"] : null), $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->geturlFormatInput("structure", (isset($context["brandNewSection"]) ? $context["brandNewSection"] : null), (isset($context["section"]) ? $context["section"] : null)));
        echo "

\t\t\t";
        // line 227
        echo $context["__internal_945c7b19b8b98c8458a23c9990ddea69f27e46548071a4dc97f06408fe10edc5"]->gettemplateField("structure", (isset($context["section"]) ? $context["section"] : null));
        echo "
\t\t</div>

\t\t";
        // line 230
        echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Max Levels"), "instructions" => \Craft\Craft::t("The maximum number of levels this section can have. Leave blank if you don’t care."), "id" => "structure-maxLevels", "name" => "types[structure][maxLevels]", "value" => $this->getAttribute(        // line 235
(isset($context["section"]) ? $context["section"] : null), "maxLevels", array()), "size" => 5, "errors" => $this->getAttribute(        // line 237
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "maxLevels"), "method")));
        // line 238
        echo "
\t</div>

\t<hr>

\t";
        // line 243
        if ( !$this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
            // line 244
            echo "\t\t<div class=\"type-channel type-structure ";
            if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == "single")) {
                echo "hidden";
            }
            echo "\">
\t\t\t";
            // line 245
            $context["locale"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getPrimarySiteLocale", array(), "method");
            // line 246
            echo "\t\t\t";
            $context["value"] = (((($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) != "single") && $this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array()), array(), "array", true, true))) ? ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array()), array(), "array"), "enabledByDefault", array())) : (true));
            // line 247
            echo "
\t\t\t";
            // line 248
            echo $context["forms"]->getlightswitchField(array("label" => \Craft\Craft::t("Default Entry Status"), "id" => "defaultEntryStatus", "name" => (("defaultLocaleStatuses[" . $this->getAttribute(            // line 251
(isset($context["locale"]) ? $context["locale"] : null), "id", array())) . "]"), "on" =>             // line 252
(isset($context["value"]) ? $context["value"] : null)));
            // line 253
            echo "
\t\t</div>
\t";
        }
        // line 256
        echo "
\t";
        // line 257
        echo $context["forms"]->getcheckboxField(array("label" => \Craft\Craft::t("Enable versioning for entries in this section?"), "id" => "enableVersioning", "name" => "enableVersioning", "checked" => $this->getAttribute(        // line 261
(isset($context["section"]) ? $context["section"] : null), "enableVersioning", array())));
        // line 262
        echo "
";
    }

    // line 8
    public function geturlFormatText($__sectionType__ = null, $__locale__ = null, $__section__ = null, $__name__ = null, $__value__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "sectionType" => $__sectionType__,
            "locale" => $__locale__,
            "section" => $__section__,
            "name" => $__name__,
            "value" => $__value__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 9
            echo "\t";
            $context["__internal_e613c59a22a03cea64fedcc1ea7298b2c0b4885d6ec1d6dc382f0443bb619aec"] = $this->loadTemplate("_includes/forms", "settings/sections/_edit", 9);
            // line 10
            echo "\t";
            $context["errors"] = $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => (((isset($context["name"]) ? $context["name"] : null) . "-") . $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array()))), "method");
            // line 11
            echo "
\t<div class=\"input";
            // line 12
            if ((isset($context["errors"]) ? $context["errors"] : null)) {
                echo " errors";
            }
            echo "\">
\t\t";
            // line 13
            echo $context["__internal_e613c59a22a03cea64fedcc1ea7298b2c0b4885d6ec1d6dc382f0443bb619aec"]->gettext(array("id" => ((((            // line 14
(isset($context["sectionType"]) ? $context["sectionType"] : null) . "-") . (isset($context["name"]) ? $context["name"] : null)) . "-") . $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array())), "class" => "code ltr", "name" => (((((("types[" .             // line 16
(isset($context["sectionType"]) ? $context["sectionType"] : null)) . "][") . (isset($context["name"]) ? $context["name"] : null)) . "][") . $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array())) . "]"), "value" => (((            // line 17
(isset($context["value"]) ? $context["value"] : null) != "__home__")) ? ((isset($context["value"]) ? $context["value"] : null)) : (null)), "errors" =>             // line 18
(isset($context["errors"]) ? $context["errors"] : null)));
            // line 19
            echo "
\t</div>

\t";
            // line 22
            echo $context["__internal_e613c59a22a03cea64fedcc1ea7298b2c0b4885d6ec1d6dc382f0443bb619aec"]->geterrorList((isset($context["errors"]) ? $context["errors"] : null));
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 25
    public function geturlFormatInput($__sectionType__ = null, $__brandNewSection__ = null, $__section__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "sectionType" => $__sectionType__,
            "brandNewSection" => $__brandNewSection__,
            "section" => $__section__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 26
            echo "\t";
            if (($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method") || ((isset($context["sectionType"]) ? $context["sectionType"] : null) == "structure"))) {
                // line 27
                echo "\t\t<table class=\"data fullwidth\">
\t\t\t";
                // line 28
                if (((isset($context["sectionType"]) ? $context["sectionType"] : null) == "structure")) {
                    // line 29
                    echo "\t\t\t\t<thead>
\t\t\t\t\t";
                    // line 30
                    if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
                        // line 31
                        echo "\t\t\t\t\t\t<th></th>
\t\t\t\t\t";
                    }
                    // line 33
                    echo "\t\t\t\t\t<th scope=\"col\">";
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Top-Level Entries"), "html", null, true);
                    echo "</th>
\t\t\t\t\t<th scope=\"col\">";
                    // line 34
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Nested Entries"), "html", null, true);
                    echo "</th>
\t\t\t\t</thead>
\t\t\t";
                }
                // line 37
                echo "\t\t\t<tbody>
\t\t\t\t";
                // line 38
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getSiteLocales", array(), "method"));
                foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
                    // line 39
                    echo "\t\t\t\t\t<tr class=\"for-locale-";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                    if ((($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method") &&  !(isset($context["brandNewSection"]) ? $context["brandNewSection"] : null)) &&  !$this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true))) {
                        echo " hidden";
                    }
                    echo "\">
\t\t\t\t\t\t";
                    // line 40
                    if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
                        // line 41
                        echo "\t\t\t\t\t\t\t<th class=\"thin nowrap\">";
                        echo twig_escape_filter($this->env, $this->getAttribute($context["locale"], "id", array()), "html", null, true);
                        echo "</th>
\t\t\t\t\t\t";
                    }
                    // line 43
                    echo "\t\t\t\t\t\t<td class=\"topalign\">
\t\t\t\t\t\t\t";
                    // line 44
                    $context["value"] = ((((($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == (isset($context["sectionType"]) ? $context["sectionType"] : null)) || ((isset($context["sectionType"]) ? $context["sectionType"] : null) != "single")) && $this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true))) ? ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute($context["locale"], "id", array()), array(), "array"), "urlFormat", array())) : (null));
                    // line 45
                    echo "\t\t\t\t\t\t\t";
                    echo $this->getAttribute($this, "urlFormatText", array(0 => (isset($context["sectionType"]) ? $context["sectionType"] : null), 1 => $context["locale"], 2 => (isset($context["section"]) ? $context["section"] : null), 3 => "urlFormat", 4 => (isset($context["value"]) ? $context["value"] : null)), "method");
                    echo "
\t\t\t\t\t\t</td>
\t\t\t\t\t\t";
                    // line 47
                    if (((isset($context["sectionType"]) ? $context["sectionType"] : null) == "structure")) {
                        // line 48
                        echo "\t\t\t\t\t\t\t<td class=\"topalign\">
\t\t\t\t\t\t\t\t";
                        // line 49
                        $context["value"] = (((($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == "structure") && $this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute($context["locale"], "id", array()), array(), "array", true, true))) ? ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute($context["locale"], "id", array()), array(), "array"), "nestedUrlFormat", array())) : ("{parent.uri}/{slug}"));
                        // line 50
                        echo "\t\t\t\t\t\t\t\t";
                        echo $this->getAttribute($this, "urlFormatText", array(0 => (isset($context["sectionType"]) ? $context["sectionType"] : null), 1 => $context["locale"], 2 => (isset($context["section"]) ? $context["section"] : null), 3 => "nestedUrlFormat", 4 => (isset($context["value"]) ? $context["value"] : null)), "method");
                        echo "
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t";
                    }
                    // line 53
                    echo "\t\t\t\t\t</tr>
\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 55
                echo "\t\t\t</tbody>
\t\t</table>
\t";
            } else {
                // line 58
                echo "\t\t";
                $context["locale"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getPrimarySiteLocale", array(), "method");
                // line 59
                echo "\t\t";
                $context["value"] = ((((($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == (isset($context["sectionType"]) ? $context["sectionType"] : null)) || ((isset($context["sectionType"]) ? $context["sectionType"] : null) != "single")) && $this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array(), "any", false, true), $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array()), array(), "array", true, true))) ? ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "locales", array()), $this->getAttribute((isset($context["locale"]) ? $context["locale"] : null), "id", array()), array(), "array"), "urlFormat", array())) : (null));
                // line 60
                echo "\t\t";
                echo $this->getAttribute($this, "urlFormatText", array(0 => (isset($context["sectionType"]) ? $context["sectionType"] : null), 1 => (isset($context["locale"]) ? $context["locale"] : null), 2 => (isset($context["section"]) ? $context["section"] : null), 3 => "urlFormat", 4 => (isset($context["value"]) ? $context["value"] : null)), "method");
                echo "
\t";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 64
    public function gethasUrlsField($__sectionType__ = null, $__section__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "sectionType" => $__sectionType__,
            "section" => $__section__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 65
            echo "\t";
            $context["__internal_690aa80836d94f0d11ebaf4aca79c98943d3042385d1e0070ecbdc999ac89a39"] = $this->loadTemplate("_includes/forms", "settings/sections/_edit", 65);
            // line 66
            echo "
\t";
            // line 67
            echo $context["__internal_690aa80836d94f0d11ebaf4aca79c98943d3042385d1e0070ecbdc999ac89a39"]->getcheckboxField(array("label" => \Craft\Craft::t("Entries in this section have their own URLs"), "id" => (            // line 69
(isset($context["sectionType"]) ? $context["sectionType"] : null) . "-hasUrls"), "name" => (("types[" .             // line 70
(isset($context["sectionType"]) ? $context["sectionType"] : null)) . "][hasUrls]"), "checked" => $this->getAttribute(            // line 71
(isset($context["section"]) ? $context["section"] : null), "hasUrls", array()), "toggle" => (            // line 72
(isset($context["sectionType"]) ? $context["sectionType"] : null) . "-url-settings")));
            // line 73
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 76
    public function gettemplateField($__sectionType__ = null, $__section__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "sectionType" => $__sectionType__,
            "section" => $__section__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 77
            echo "\t";
            $context["__internal_30745e74c8eee35e9d873a736753bf0cdf03bc4729e0ecc9983c765f45ff4cf6"] = $this->loadTemplate("_includes/forms", "settings/sections/_edit", 77);
            // line 78
            echo "
\t";
            // line 79
            echo $context["__internal_30745e74c8eee35e9d873a736753bf0cdf03bc4729e0ecc9983c765f45ff4cf6"]->gettextField(array("label" => \Craft\Craft::t("Entry Template"), "instructions" => (((            // line 81
(isset($context["sectionType"]) ? $context["sectionType"] : null) == "single")) ? (\Craft\Craft::t("The template to use when the entry’s URL is requested.")) : (\Craft\Craft::t("The template to use when an entry’s URL is requested."))), "id" => (            // line 82
(isset($context["sectionType"]) ? $context["sectionType"] : null) . "-template"), "class" => "ltr", "name" => (("types[" .             // line 84
(isset($context["sectionType"]) ? $context["sectionType"] : null)) . "][template]"), "value" => $this->getAttribute(            // line 85
(isset($context["section"]) ? $context["section"] : null), "template", array()), "errors" => $this->getAttribute(            // line 86
(isset($context["section"]) ? $context["section"] : null), "getErrors", array(0 => "template"), "method")));
            // line 87
            echo "
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "settings/sections/_edit";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  614 => 87,  612 => 86,  611 => 85,  610 => 84,  609 => 82,  608 => 81,  607 => 79,  604 => 78,  601 => 77,  588 => 76,  576 => 73,  574 => 72,  573 => 71,  572 => 70,  571 => 69,  570 => 67,  567 => 66,  564 => 65,  551 => 64,  536 => 60,  533 => 59,  530 => 58,  525 => 55,  518 => 53,  511 => 50,  509 => 49,  506 => 48,  504 => 47,  498 => 45,  496 => 44,  493 => 43,  487 => 41,  485 => 40,  477 => 39,  473 => 38,  470 => 37,  464 => 34,  459 => 33,  455 => 31,  453 => 30,  450 => 29,  448 => 28,  445 => 27,  442 => 26,  428 => 25,  415 => 22,  410 => 19,  408 => 18,  407 => 17,  406 => 16,  405 => 14,  404 => 13,  398 => 12,  395 => 11,  392 => 10,  389 => 9,  373 => 8,  368 => 262,  366 => 261,  365 => 257,  362 => 256,  357 => 253,  355 => 252,  354 => 251,  353 => 248,  350 => 247,  347 => 246,  345 => 245,  338 => 244,  336 => 243,  329 => 238,  327 => 237,  326 => 235,  325 => 230,  319 => 227,  314 => 225,  308 => 224,  303 => 222,  297 => 221,  290 => 217,  285 => 215,  279 => 214,  274 => 212,  268 => 211,  265 => 210,  263 => 208,  262 => 204,  256 => 201,  250 => 198,  249 => 197,  248 => 193,  242 => 192,  239 => 191,  235 => 189,  233 => 187,  231 => 183,  229 => 182,  223 => 181,  217 => 177,  215 => 176,  214 => 173,  213 => 172,  212 => 169,  211 => 167,  208 => 166,  203 => 164,  202 => 163,  201 => 161,  198 => 160,  193 => 157,  183 => 152,  181 => 150,  180 => 149,  179 => 148,  172 => 147,  163 => 145,  159 => 143,  157 => 142,  156 => 141,  155 => 140,  154 => 138,  153 => 137,  149 => 135,  146 => 134,  142 => 133,  135 => 129,  131 => 128,  125 => 124,  122 => 123,  120 => 122,  116 => 120,  114 => 118,  113 => 117,  112 => 111,  108 => 109,  106 => 105,  105 => 104,  104 => 98,  101 => 97,  95 => 96,  90 => 93,  87 => 92,  83 => 1,  75 => 278,  73 => 277,  70 => 276,  64 => 275,  59 => 273,  55 => 272,  50 => 271,  47 => 270,  43 => 269,  40 => 268,  35 => 267,  33 => 266,  31 => 90,  29 => 6,  27 => 5,  25 => 3,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* */
/* {% set docsUrl = 'http://craftcms.com/docs/sections-and-entries#sections' %}*/
/* */
/* {% import "_includes/forms" as forms %}*/
/* {% set fullPageForm = true %}*/
/* */
/* {% macro urlFormatText(sectionType, locale, section, name, value) %}*/
/* 	{% from "_includes/forms" import text, errorList %}*/
/* 	{% set errors = section.getErrors(name~'-'~locale.id) %}*/
/* */
/* 	<div class="input{% if errors %} errors{% endif %}">*/
/* 		{{ text({*/
/* 			id: sectionType~'-'~name~'-'~locale.id,*/
/* 			class: 'code ltr',*/
/* 			name: 'types['~sectionType~']['~name~']['~locale.id~']',*/
/* 			value: (value != '__home__' ? value : null),*/
/* 			errors: errors*/
/* 		}) }}*/
/* 	</div>*/
/* */
/* 	{{ errorList(errors) }}*/
/* {% endmacro %}*/
/* */
/* {% macro urlFormatInput(sectionType, brandNewSection, section) %}*/
/* 	{% if craft.isLocalized() or sectionType == 'structure' %}*/
/* 		<table class="data fullwidth">*/
/* 			{% if sectionType == 'structure' %}*/
/* 				<thead>*/
/* 					{% if craft.isLocalized() %}*/
/* 						<th></th>*/
/* 					{% endif %}*/
/* 					<th scope="col">{{ "Top-Level Entries"|t }}</th>*/
/* 					<th scope="col">{{ "Nested Entries"|t }}</th>*/
/* 				</thead>*/
/* 			{% endif %}*/
/* 			<tbody>*/
/* 				{% for locale in craft.i18n.getSiteLocales() %}*/
/* 					<tr class="for-locale-{{ locale.id }}{% if craft.isLocalized() and not brandNewSection and section.locales[locale.id] is not defined %} hidden{% endif %}">*/
/* 						{% if craft.isLocalized() %}*/
/* 							<th class="thin nowrap">{{ locale.id }}</th>*/
/* 						{% endif %}*/
/* 						<td class="topalign">*/
/* 							{% set value = ((section.type == sectionType or sectionType != 'single') and section.locales[locale.id] is defined ? section.locales[locale.id].urlFormat : null) %}*/
/* 							{{ _self.urlFormatText(sectionType, locale, section, 'urlFormat', value) }}*/
/* 						</td>*/
/* 						{% if sectionType == 'structure' %}*/
/* 							<td class="topalign">*/
/* 								{% set value = ((section.type == 'structure') and section.locales[locale.id] is defined ? section.locales[locale.id].nestedUrlFormat : '{parent.uri}/{slug}') %}*/
/* 								{{ _self.urlFormatText(sectionType, locale, section, 'nestedUrlFormat', value) }}*/
/* 							</td>*/
/* 						{% endif %}*/
/* 					</tr>*/
/* 				{% endfor %}*/
/* 			</tbody>*/
/* 		</table>*/
/* 	{% else %}*/
/* 		{% set locale = craft.i18n.getPrimarySiteLocale() %}*/
/* 		{% set value = ((section.type == sectionType or sectionType != 'single') and section.locales[locale.id] is defined ? section.locales[locale.id].urlFormat : null) %}*/
/* 		{{ _self.urlFormatText(sectionType, locale, section, 'urlFormat', value) }}*/
/* 	{% endif %}*/
/* {% endmacro %}*/
/* */
/* {% macro hasUrlsField(sectionType, section) %}*/
/* 	{% from "_includes/forms" import checkboxField %}*/
/* */
/* 	{{ checkboxField({*/
/* 		label: "Entries in this section have their own URLs"|t,*/
/* 		id: sectionType~'-hasUrls',*/
/* 		name: 'types['~sectionType~'][hasUrls]',*/
/* 		checked: section.hasUrls,*/
/* 		toggle: sectionType~'-url-settings'*/
/* 	}) }}*/
/* {% endmacro %}*/
/* */
/* {% macro templateField(sectionType, section) %}*/
/* 	{% from "_includes/forms" import textField %}*/
/* */
/* 	{{ textField({*/
/* 		label: "Entry Template"|t,*/
/* 		instructions: (sectionType == 'single' ? "The template to use when the entry’s URL is requested."|t : "The template to use when an entry’s URL is requested."|t),*/
/* 		id: sectionType~'-template',*/
/* 		class: 'ltr',*/
/* 		name: 'types['~sectionType~'][template]',*/
/* 		value: section.template,*/
/* 		errors: section.getErrors('template')*/
/* 	}) }}*/
/* {% endmacro %}*/
/* */
/* {% from _self import urlFormatInput, hasUrlsField, templateField %}*/
/* */
/* {% block content %}*/
/* 	<input type="hidden" name="action" value="sections/saveSection">*/
/* 	<input type="hidden" name="redirect" value="settings/sections">*/
/* */
/* 	{% if section.id %}<input type="hidden" name="sectionId" value="{{ section.id }}">{% endif %}*/
/* */
/* 	{{ forms.textField({*/
/* 		first: true,*/
/* 		label: "Name"|t,*/
/* 		instructions: "What this section will be called in the CP."|t,*/
/* 		id: 'name',*/
/* 		name: 'name',*/
/* 		value: section.name,*/
/* 		errors: section.getErrors('name'),*/
/* 		autofocus: true,*/
/* 		required: true,*/
/* 		translatable: true*/
/* 	}) }}*/
/* */
/* 	{{ forms.textField({*/
/* 		label: "Handle"|t,*/
/* 		instructions: "How you’ll refer to this section in the templates."|t,*/
/* 		id: 'handle',*/
/* 		class: 'code',*/
/* 		name: 'handle',*/
/* 		value: section.handle,*/
/* 		errors: section.getErrors('handle'),*/
/* 		required: true*/
/* 	}) }}*/
/* */
/* 	{% if craft.isLocalized() %}*/
/* 		{% set localesInput %}*/
/* 			<table class="data" style="width: auto;">*/
/* 				<thead>*/
/* 					<tr>*/
/* 						<td></td>*/
/* 						<th scope="col">{{ "Locale"|t }}</th>*/
/* 						<th scope="col">{{ "Default Entry Status"|t }}</th>*/
/* 					</tr>*/
/* 				</thead>*/
/* 				<tbody>*/
/* 					{% for locale in craft.i18n.getSiteLocales() %}*/
/* 						{% set localeSelected = (brandNewSection or section.locales[locale.id] is defined) %}*/
/* 						<tr>*/
/* 							<td>*/
/* 								{{ forms.checkbox({*/
/* 									id: 'locale-'~locale.id,*/
/* 									name: 'locales[]',*/
/* 									value: locale.id,*/
/* 									checked: localeSelected,*/
/* 									toggle: '.for-locale-'~locale.id*/
/* 								}) }}*/
/* 							</td>*/
/* 							<td><label for="locale-{{ locale.id }}">{{ locale.name }} ({{ locale.id }})</label></td>*/
/* 							<td class="centeralign">*/
/* 								<div class="for-locale-{{ locale.id }}{% if not localeSelected %} hidden{% endif %}">*/
/* 									{{ forms.lightswitch({*/
/* 										name: 'defaultLocaleStatuses['~locale.id~']',*/
/* 										on:   (brandNewSection or not section.locales[locale.id] is defined or section.locales[locale.id].enabledByDefault),*/
/* 										small: true*/
/* 									}) }}*/
/* 								</div>*/
/* 							</td>*/
/* 						</tr>*/
/* 					{% endfor %}*/
/* 				</tbody>*/
/* 			</table>*/
/* 		{% endset %}*/
/* */
/* 		{{ forms.field({*/
/* 			label: "Which locales should entries in this section target?"|t,*/
/* 			errors: section.getErrors('localeErrors'),*/
/* 		}, localesInput) }}*/
/* 	{% endif %}*/
/* */
/* 	{{ forms.selectField({*/
/* 		label: "Section Type"|t,*/
/* 		instructions: "What type of section is this?"|t ~ (section.id ? '<br><span class="error">'~"Careful—changing this may result in data loss."|t~'</span>' : ''),*/
/* 		id: 'type',*/
/* 		name: 'type',*/
/* 		options: typeOptions,*/
/* 		value: section.type,*/
/* 		toggle: true,*/
/* 		targetPrefix: '.type-',*/
/* 		errors: section.getErrors('type')*/
/* 	}) }}*/
/* */
/* 	<hr>*/
/* */
/* 	<div class="type-single {% if section.type != 'single' %}hidden{% endif %}">*/
/* 		{% if canBeHomepage %}*/
/* 			{{ forms.checkboxField({*/
/* 				label: "This is for the homepage"|t,*/
/* 				id: 'single-homepage',*/
/* 				name: 'types[single][homepage]',*/
/* 				checked: section.isHomepage(),*/
/* 				reverseToggle: 'single-uri-container'*/
/* 			}) }}*/
/* 		{% endif %}*/
/* */
/* 		<div id="single-uri-container"{% if section.isHomepage() %} class="hidden"{% endif %}>*/
/* 			{{ forms.field({*/
/* 				label: "URI"|t,*/
/* 				instructions: "What the entry URI should be."|t,*/
/* 				required: true,*/
/* 				errors: section.getErrors('urlFormat')*/
/* 			}, urlFormatInput('single', brandNewSection, section)) }}*/
/* 		</div>*/
/* */
/* 		{{ templateField('single', section) }}*/
/* 	</div>*/
/* */
/* 	{% set urlFormatParams = {*/
/* 		label: "Entry URL Format"|t,*/
/* 		instructions: "What the entry URLs should look like. You can include tags that output entry properties, such as {ex1} or {ex2}."|t({ ex1: '<code>{slug}</code>', ex2: '<code>{postDate|date("Y")}</code>' }),*/
/* 		required: true,*/
/* 		errors: section.getErrors('urlFormat')*/
/* 	} %}*/
/* */
/* 	<div class="type-channel {% if section.type != 'channel' %}hidden{% endif %}">*/
/* 		{{ hasUrlsField('channel', section) }}*/
/* */
/* 		<div id="channel-url-settings" class="nested-fields{% if not section.hasUrls %} hidden{% endif %}">*/
/* 			{{ forms.field(urlFormatParams, urlFormatInput('channel', brandNewSection, section)) }}*/
/* */
/* 			{{ templateField('channel', section) }}*/
/* 		</div>*/
/* 	</div>*/
/* */
/* 	<div class="type-structure {% if section.type != 'structure' %}hidden{% endif %}">*/
/* 		{{ hasUrlsField('structure', section) }}*/
/* */
/* 		<div id="structure-url-settings" class="nested-fields{% if not section.hasUrls %} hidden{% endif %}">*/
/* 			{{ forms.field(urlFormatParams, urlFormatInput('structure', brandNewSection, section)) }}*/
/* */
/* 			{{ templateField('structure', section) }}*/
/* 		</div>*/
/* */
/* 		{{ forms.textField({*/
/* 			label: "Max Levels"|t,*/
/* 			instructions: "The maximum number of levels this section can have. Leave blank if you don’t care."|t,*/
/* 			id: 'structure-maxLevels',*/
/* 			name: 'types[structure][maxLevels]',*/
/* 			value: section.maxLevels,*/
/* 			size: 5,*/
/* 			errors: section.getErrors('maxLevels')*/
/* 		}) }}*/
/* 	</div>*/
/* */
/* 	<hr>*/
/* */
/* 	{% if not craft.isLocalized() %}*/
/* 		<div class="type-channel type-structure {% if section.type == 'single' %}hidden{% endif %}">*/
/* 			{% set locale = craft.i18n.getPrimarySiteLocale() %}*/
/* 			{% set value = (section.type != 'single' and section.locales[locale.id] is defined ? section.locales[locale.id].enabledByDefault : true) %}*/
/* */
/* 			{{ forms.lightswitchField({*/
/* 				label: "Default Entry Status"|t,*/
/* 				id: 'defaultEntryStatus',*/
/* 				name: 'defaultLocaleStatuses['~locale.id~']',*/
/* 				on: value*/
/* 			}) }}*/
/* 		</div>*/
/* 	{% endif %}*/
/* */
/* 	{{ forms.checkboxField({*/
/* 		label: "Enable versioning for entries in this section?"|t,*/
/* 		id: 'enableVersioning',*/
/* 		name: 'enableVersioning',*/
/* 		checked: section.enableVersioning*/
/* 	}) }}*/
/* {% endblock %}*/
/* */
/* */
/* {% includejs %}*/
/* 	{% if not section.handle %}new Craft.HandleGenerator('#name', '#handle');{% endif %}*/
/* */
/* 	{% for locale in craft.i18n.getSiteLocales() %}*/
/* 		{% if section.locales[locale.id] is not defined or not section.locales[locale.id].urlFormat %}*/
/* 			new Craft.EntryUrlFormatGenerator('#name', '#single-urlFormat-{{ locale.id }}');*/
/* 			new Craft.EntryUrlFormatGenerator('#name', '#channel-urlFormat-{{ locale.id }}',   { suffix: '/{slug}' });*/
/* 			new Craft.EntryUrlFormatGenerator('#name', '#structure-urlFormat-{{ locale.id }}', { suffix: '/{slug}' });*/
/* 		{% endif %}*/
/* 	{% endfor %}*/
/* */
/* 	{% if brandNewSection %}*/
/* 		new Craft.EntryUrlFormatGenerator('#name', '#single-template');*/
/* 		new Craft.EntryUrlFormatGenerator('#name', '#channel-template',   { suffix: '/_entry' });*/
/* 		new Craft.EntryUrlFormatGenerator('#name', '#structure-template', { suffix: '/_entry' });*/
/* 	{% endif %}*/
/* {% endincludejs %}*/
/* */
