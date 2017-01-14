<?php

/* _layouts/basecp */
class __TwigTemplate_1419183b9e3db22c9762b783bbaf93e398556510b4765b343e03723a81790b56 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/base", "_layouts/basecp", 1);
        $this->blocks = array(
            'foot' => array($this, 'block_foot'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/base";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 4
        if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "isMobileBrowser", array(0 => true), "method")) {
            // line 5
            $context["bodyClass"] = ((((array_key_exists("bodyClass", $context) && (isset($context["bodyClass"]) ? $context["bodyClass"] : null))) ? (((isset($context["bodyClass"]) ? $context["bodyClass"] : null) . " ")) : ("")) . "mobile");
        }
        // line 8
        $context["localeData"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleData", array(), "method");
        // line 11
        switch ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array())) {
            case "en_gb":
            {
                // line 13
                $context["datepickerLocale"] = "en-GB";
                break;
            }
            case "fr_ca":
            {
                // line 15
                $context["datepickerLocale"] = "fr-CA";
                break;
            }
            default:
            {
                // line 17
                $context["language"] = $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getLanguageID", array(0 => $this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array())), "method");
                // line 18
                if (twig_in_filter((isset($context["language"]) ? $context["language"] : null), array(0 => "ar", 1 => "de", 2 => "fr", 3 => "it", 4 => "ja", 5 => "nb", 6 => "nl", 7 => "nn", 8 => "no"))) {
                    // line 19
                    $context["datepickerLocale"] = (isset($context["language"]) ? $context["language"] : null);
                }
            }
        }
        // line 25
        if (array_key_exists("datepickerLocale", $context)) {
            // line 26
            $_js = (("lib/datepicker-i18n/datepicker-" . (isset($context["datepickerLocale"]) ? $context["datepickerLocale"] : null)) . ".js");
            \Craft\craft()->templates->includejsresource($_js, true);
        }
        // line 32
        $context["d3Locales"] = array("ca_es" => "ca-ES", "de_ch" => "de-CH", "de" => "de-DE", "en_ca" => "en-CA", "en_gb" => "en-GB", "en" => "en-US", "es" => "es-ES", "fi" => "fi-FI", "fr_ca" => "fr-CA", "fr" => "fr-FR", "he" => "he-IL", "hu" => "hu-HU", "it" => "it-IT", "ja" => "ja-JP", "ko" => "ko-KR", "nl" => "nl-NL", "pl" => "pl-PL", "pt" => "pt-BR", "ru" => "ru-RU", "sv" => "sv-SE", "zh" => "zh-CN");
        // line 56
        if ($this->getAttribute((isset($context["d3Locales"]) ? $context["d3Locales"] : null), $this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array()), array(), "array", true, true)) {
            // line 57
            $context["d3Locale"] = $this->getAttribute((isset($context["d3Locales"]) ? $context["d3Locales"] : null), $this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array()), array(), "array");
        } elseif ($this->getAttribute(        // line 58
(isset($context["d3Locales"]) ? $context["d3Locales"] : null), (isset($context["language"]) ? $context["language"] : null), array(), "array", true, true)) {
            // line 59
            $context["d3Locale"] = $this->getAttribute((isset($context["d3Locales"]) ? $context["d3Locales"] : null), (isset($context["language"]) ? $context["language"] : null), array(), "array");
        } else {
            // line 61
            $context["d3Locale"] = "en-US";
        }
        // line 65
        $_js = (("lib/d3-i18n/" . (isset($context["d3Locale"]) ? $context["d3Locale"] : null)) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 67
        $context["useCompressedJs"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "useCompressedJs", array());
        // line 68
        $_js = "js/cp.js";
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 69
        $_js = "js/craft.js";
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 70
        $_js = (("lib/garnish-0.1" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 71
        $_js = (("lib/element-resize-detector" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 72
        $_js = (("lib/picturefill" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 73
        $_js = "lib/fileupload/jquery.fileupload.js";
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 74
        $_js = "lib/fileupload/jquery.ui.widget.js";
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 75
        $_js = (("lib/selectize/selectize" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 76
        $_js = "lib/selectize/selectize.css";
        \Craft\craft()->templates->includecssresource($_js);
        // line 77
        $_js = (("lib/velocity" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 78
        $_js = (("lib/jquery-ui" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 79
        $_js = (("lib/jquery-2.2.1" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 80
        $_js = "lib/xregexp-all.js";
        \Craft\craft()->templates->includejsresource($_js, true);
        // line 82
        $_js = (("lib/d3/d3" . (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? (".min") : (""))) . ".js");
        \Craft\craft()->templates->includeJsResource($_js, true);
        // line 84
        \Craft\craft()->templates->includeTranslations(
        	"Show",
        	"Hide"
        );
        // line 86
        $context["orientation"] = $this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getOrientation", array(), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 88
    public function block_foot($context, array $blocks = array())
    {
        // line 89
        echo "
\t<noscript>
\t\t<div class=\"message-container no-access\">
\t\t\t<div class=\"pane notice\">
\t\t\t\t<p>";
        // line 93
        echo twig_escape_filter($this->env, \Craft\Craft::t("JavaScript must be enabled to access the Craft control panel."), "html", null, true);
        echo "</p>
\t\t\t</div>
\t\t</div>
\t</noscript>

\t<script type=\"text/javascript\">
\t\t// Create the Craft object
\t\twindow.Craft = {
\t\t\tsiteUid:               \"";
        // line 101
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getSiteUid", array(), "method"), "js"), "html", null, true);
        echo "\",
\t\t\tbaseUrl:               \"";
        // line 102
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\UrlHelper::getUrl(), "js"), "html", null, true);
        echo "\",
\t\t\tbaseCpUrl:             \"";
        // line 103
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\UrlHelper::getCpUrl(), "js"), "html", null, true);
        echo "\",
\t\t\tbaseSiteUrl:           \"";
        // line 104
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\UrlHelper::getSiteUrl(), "js"), "html", null, true);
        echo "\",
\t\t\tactionUrl:             \"";
        // line 105
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\UrlHelper::getActionUrl(), "js"), "html", null, true);
        echo "\",
\t\t\tresourceUrl:           \"";
        // line 106
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\UrlHelper::getResourceUrl(), "js"), "html", null, true);
        echo "\",
\t\t\tscriptName:            \"";
        // line 107
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getScriptName", array(), "method"), "js"), "html", null, true);
        echo "\",
\t\t\tomitScriptNameInUrls:  ";
        // line 108
        echo (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "omitScriptNameInUrls", array(), "method")) ? ("true") : ("false"));
        echo ",
\t\t\tusePathInfo:           ";
        // line 109
        echo (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "usePathInfo", array(), "method")) ? ("true") : ("false"));
        echo ",
\t\t\tuseCompressedJs:       ";
        // line 110
        echo (((isset($context["useCompressedJs"]) ? $context["useCompressedJs"] : null)) ? ("true") : ("false"));
        echo ",
\t\t\tresourceTrigger:       \"";
        // line 111
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "getResourceTrigger", array(), "method"), "js"), "html", null, true);
        echo "\",
\t\t\tactionTrigger:         \"";
        // line 112
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "actionTrigger", array()), "js"), "html", null, true);
        echo "\",
\t\t\tpath:                  \"";
        // line 113
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getPath", array(), "method"), "js"), "html", null, true);
        echo "\",
\t\t\tlocale:                \"";
        // line 114
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "locale", array()), "js"), "html", null, true);
        echo "\",
\t\t\torientation:           \"";
        // line 115
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, (isset($context["orientation"]) ? $context["orientation"] : null), "js"), "html", null, true);
        echo "\",
\t\t\tleft:                  \"";
        // line 116
        echo ((((isset($context["orientation"]) ? $context["orientation"] : null) == "ltr")) ? ("left") : ("right"));
        echo "\",
\t\t\tright:                 \"";
        // line 117
        echo ((((isset($context["orientation"]) ? $context["orientation"] : null) == "ltr")) ? ("right") : ("left"));
        echo "\",
\t\t\tusername:              ";
        // line 118
        echo (((array_key_exists("currentUser", $context) && (isset($context["currentUser"]) ? $context["currentUser"] : null))) ? ((("\"" . twig_escape_filter($this->env, $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "username", array()), "js")) . "\"")) : ("null"));
        echo ",
\t\t\tauthTimeout:           ";
        // line 119
        echo twig_escape_filter($this->env, ((!twig_in_filter($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getFirstSegment", array(), "method"), array(0 => "updates", 1 => "manualupdate"))) ? ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "session", array()), "getAuthTimeout", array(), "method")) : (0)), "html", null, true);
        echo ",
\t\t\tPersonal:              ";
        // line 120
        echo twig_escape_filter($this->env, (isset($context["CraftPersonal"]) ? $context["CraftPersonal"] : null), "html", null, true);
        echo ",
\t\t\tClient:                ";
        // line 121
        echo twig_escape_filter($this->env, (isset($context["CraftClient"]) ? $context["CraftClient"] : null), "html", null, true);
        echo ",
\t\t\tPro:                   ";
        // line 122
        echo twig_escape_filter($this->env, (isset($context["CraftPro"]) ? $context["CraftPro"] : null), "html", null, true);
        echo ",
\t\t\tedition:               ";
        // line 123
        echo twig_escape_filter($this->env, (isset($context["CraftEdition"]) ? $context["CraftEdition"] : null), "html", null, true);
        echo ",
\t\t\tisLocalized:           ";
        // line 124
        echo (($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) ? ("true") : ("false"));
        echo ",
\t\t\ttranslations:          ";
        // line 125
        echo \Craft\craft()->templates->getTranslations();
        echo ",
\t\t\tmaxUploadSize:         ";
        // line 126
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getMaxUploadSize", array(), "method"), "html", null, true);
        echo ",
\t\t\tforceConfirmUnload:    ";
        // line 127
        echo (((array_key_exists("forceConfirmUnload", $context) && (isset($context["forceConfirmUnload"]) ? $context["forceConfirmUnload"] : null))) ? ("true") : ("false"));
        echo ",
\t\t\t";
        // line 128
        if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "enableCsrfProtection", array())) {
            // line 129
            echo "\t\t\t\tcsrfTokenValue:        \"";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getCsrfToken", array(), "method"), "js"), "html", null, true);
            echo "\",
\t\t\t\tcsrfTokenName:         \"";
            // line 130
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "csrfTokenName", array()), "js"), "html", null, true);
            echo "\",
\t\t\t";
        }
        // line 132
        echo "\t\t\trunTasksAutomatically: ";
        echo (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "runTasksAutomatically", array())) ? ("true") : ("false"));
        echo ",
\t\t\tslugWordSeparator:     \"";
        // line 133
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "slugWordSeparator", array()), "js"), "html", null, true);
        echo "\",
\t\t\tlimitAutoSlugsToAscii: ";
        // line 134
        echo (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "limitAutoSlugsToAscii", array())) ? ("true") : ("false"));
        echo ",
\t\t\tfileKinds:             ";
        // line 135
        echo $this->env->getExtension('craft')->jsonEncodeFilter($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getFileKinds", array(), "method"));
        echo ",
\t\t\tdatepickerOptions: {
\t\t\t\tconstrainInput: false,
\t\t\t\tdateFormat: \"";
        // line 138
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getDatepickerJsFormat", array(), "method"), "js"), "html", null, true);
        echo "\",
\t\t\t\tprevText: '";
        // line 139
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\Craft::t("Prev"), "js"), "html", null, true);
        echo "',
\t\t\t\tnextText: '";
        // line 140
        echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\Craft::t("Next"), "js"), "html", null, true);
        echo "',
\t\t\t\tfirstDay: ";
        // line 141
        echo twig_escape_filter($this->env, (((array_key_exists("currentUser", $context) && (isset($context["currentUser"]) ? $context["currentUser"] : null))) ? ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "weekStartDay", array())) : ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "defaultWeekStartDay", array()))), "html", null, true);
        echo ",
\t\t\t\tdayNames: ";
        // line 142
        echo $this->env->getExtension('craft')->jsonEncodeFilter($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getWeekDayNames", array(0 => "wide", 1 => true), "method"));
        echo ",
\t\t\t\tdayNamesShort: ";
        // line 143
        echo $this->env->getExtension('craft')->jsonEncodeFilter($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getWeekDayNames", array(0 => "abbreviated", 1 => true), "method"));
        echo ",
\t\t\t\tdayNamesMin: ";
        // line 144
        echo $this->env->getExtension('craft')->jsonEncodeFilter($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getWeekDayNames", array(0 => "narrow", 1 => true), "method"));
        echo ",
\t\t\t\tmonthNames: ";
        // line 145
        echo $this->env->getExtension('craft')->jsonEncodeFilter(array_values($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getMonthNames", array(0 => "wide", 1 => true), "method")));
        echo ",
\t\t\t\tmonthNamesShort: ";
        // line 146
        echo $this->env->getExtension('craft')->jsonEncodeFilter(array_values($this->getAttribute((isset($context["localeData"]) ? $context["localeData"] : null), "getMonthNames", array(0 => "abbreviated", 1 => true), "method")));
        echo "
\t\t\t},
\t\t\tpublishableSections: [
\t\t\t\t";
        // line 149
        if ((((isset($context["isInstalled"]) ? $context["isInstalled"] : null) && array_key_exists("currentUser", $context)) && (isset($context["currentUser"]) ? $context["currentUser"] : null))) {
            // line 150
            echo "\t\t\t\t\t";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "sections", array()), "getEditableSections", array(), "method"));
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
            foreach ($context['_seq'] as $context["_key"] => $context["section"]) {
                // line 151
                echo "\t\t\t\t\t\t";
                if ((($this->getAttribute($context["section"], "type", array()) != "single") && $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("createEntries:" . $this->getAttribute($context["section"], "id", array()))), "method"))) {
                    // line 152
                    echo "\t\t\t\t\t\t\t{id: ";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "id", array()), "html", null, true);
                    echo ", name: \"";
                    echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["section"], "name", array())), "js"), "html", null, true);
                    echo "\", handle: \"";
                    echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($context["section"], "handle", array()), "js"), "html", null, true);
                    echo "\", type: \"";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["section"], "type", array()), "html", null, true);
                    echo "\"}";
                    if ( !$this->getAttribute($context["loop"], "last", array())) {
                        echo ",";
                    }
                    // line 153
                    echo "\t\t\t\t\t\t";
                }
                // line 154
                echo "\t\t\t\t\t";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['section'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 155
            echo "\t\t\t\t";
        }
        // line 156
        echo "\t\t\t],
\t\t\teditableCategoryGroups: [
\t\t\t\t";
        // line 158
        if ((isset($context["isInstalled"]) ? $context["isInstalled"] : null)) {
            // line 159
            echo "\t\t\t\t\t";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "categoryGroups", array()), "getEditableGroups", array(), "method"));
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
            foreach ($context['_seq'] as $context["_key"] => $context["group"]) {
                // line 160
                echo "\t\t\t\t\t\t{id: ";
                echo twig_escape_filter($this->env, $this->getAttribute($context["group"], "id", array()), "html", null, true);
                echo ", name: \"";
                echo twig_escape_filter($this->env, twig_escape_filter($this->env, \Craft\Craft::t($this->getAttribute($context["group"], "name", array())), "js"), "html", null, true);
                echo "\", handle: \"";
                echo twig_escape_filter($this->env, twig_escape_filter($this->env, $this->getAttribute($context["group"], "handle", array()), "js"), "html", null, true);
                echo "\"}";
                if ( !$this->getAttribute($context["loop"], "last", array())) {
                    echo ",";
                }
                // line 161
                echo "\t\t\t\t\t";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['group'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 162
            echo "\t\t\t\t";
        }
        // line 163
        echo "\t\t\t]
\t\t};

\t\t// Picture element HTML5 shiv
\t\tdocument.createElement('picture');
\t</script>
";
    }

    public function getTemplateName()
    {
        return "_layouts/basecp";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  440 => 163,  437 => 162,  423 => 161,  412 => 160,  394 => 159,  392 => 158,  388 => 156,  385 => 155,  371 => 154,  368 => 153,  355 => 152,  352 => 151,  334 => 150,  332 => 149,  326 => 146,  322 => 145,  318 => 144,  314 => 143,  310 => 142,  306 => 141,  302 => 140,  298 => 139,  294 => 138,  288 => 135,  284 => 134,  280 => 133,  275 => 132,  270 => 130,  265 => 129,  263 => 128,  259 => 127,  255 => 126,  251 => 125,  247 => 124,  243 => 123,  239 => 122,  235 => 121,  231 => 120,  227 => 119,  223 => 118,  219 => 117,  215 => 116,  211 => 115,  207 => 114,  203 => 113,  199 => 112,  195 => 111,  191 => 110,  187 => 109,  183 => 108,  179 => 107,  175 => 106,  171 => 105,  167 => 104,  163 => 103,  159 => 102,  155 => 101,  144 => 93,  138 => 89,  135 => 88,  131 => 1,  129 => 86,  124 => 84,  121 => 82,  118 => 80,  115 => 79,  112 => 78,  109 => 77,  106 => 76,  103 => 75,  100 => 74,  97 => 73,  94 => 72,  91 => 71,  88 => 70,  85 => 69,  82 => 68,  80 => 67,  77 => 65,  74 => 61,  71 => 59,  69 => 58,  67 => 57,  65 => 56,  63 => 32,  59 => 26,  57 => 25,  52 => 19,  50 => 18,  48 => 17,  42 => 15,  36 => 13,  32 => 11,  30 => 8,  27 => 5,  25 => 4,  11 => 1,);
    }
}
/* {% extends "_layouts/base" %}*/
/* */
/* {# Give the body a .mobile class for mobile devices #}*/
/* {% if craft.request.isMobileBrowser(true) %}*/
/* 	{% set bodyClass = (bodyClass is defined and bodyClass ? bodyClass~' ' : '') ~ 'mobile' %}*/
/* {% endif %}*/
/* */
/* {% set localeData = craft.i18n.getLocaleData() %}*/
/* */
/* {# Figure out which Datepicker i18n script to load #}*/
/* {%- switch craft.locale %}*/
/* 	{%- case 'en_gb' %}*/
/* 		{%- set datepickerLocale = 'en-GB' %}*/
/* 	{%- case 'fr_ca' %}*/
/* 		{%- set datepickerLocale = 'fr-CA' %}*/
/* 	{%- default %}*/
/* 		{%- set language = localeData.getLanguageID(craft.locale) %}*/
/* 		{%- if language in ['ar', 'de', 'fr', 'it', 'ja', 'nb', 'nl', 'nn', 'no'] %}*/
/* 			{%- set datepickerLocale = language %}*/
/* 		{%- endif %}*/
/* {%- endswitch %}*/
/* */
/* {# Load scripts in reverse order #}*/
/* */
/* {%- if datepickerLocale is defined %}*/
/* 	{%- includejsresource 'lib/datepicker-i18n/datepicker-'~datepickerLocale~'.js' first %}*/
/* {%- endif %}*/
/* */
/* */
/* {# Figure out which D3 i18n script to load #}*/
/* */
/* {%- set d3Locales = {*/
/* 	'ca_es': 'ca-ES',*/
/* 	'de_ch': 'de-CH',*/
/* 	'de': 'de-DE',*/
/* 	'en_ca': 'en-CA',*/
/* 	'en_gb': 'en-GB',*/
/* 	'en': 'en-US',*/
/* 	'es': 'es-ES',*/
/* 	'fi': 'fi-FI',*/
/* 	'fr_ca': 'fr-CA',*/
/* 	'fr': 'fr-FR',*/
/* 	'he': 'he-IL',*/
/* 	'hu': 'hu-HU',*/
/* 	'it': 'it-IT',*/
/* 	'ja': 'ja-JP',*/
/* 	'ko': 'ko-KR',*/
/* 	'nl': 'nl-NL',*/
/* 	'pl': 'pl-PL',*/
/* 	'pt': 'pt-BR',*/
/* 	'ru': 'ru-RU',*/
/* 	'sv': 'sv-SE',*/
/* 	'zh': 'zh-CN',*/
/* } %}*/
/* */
/* {%- if d3Locales[craft.locale] is defined %}*/
/* 	{% set d3Locale = d3Locales[craft.locale] %}*/
/* {%- elseif d3Locales[language] is defined %}*/
/* 	{% set d3Locale = d3Locales[language] %}*/
/* {%- else %}*/
/* 	{% set d3Locale = 'en-US' %}*/
/* {%- endif %}*/
/* */
/* */
/* {%- includejsresource 'lib/d3-i18n/'~d3Locale~'.js' first %}*/
/* */
/* {%- set useCompressedJs = craft.config.useCompressedJs %}*/
/* {%- includejsresource "js/cp.js" first -%}*/
/* {%- includejsresource "js/craft.js" first -%}*/
/* {%- includejsresource 'lib/garnish-0.1'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/element-resize-detector'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/picturefill'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/fileupload/jquery.fileupload.js' first %}*/
/* {%- includejsresource 'lib/fileupload/jquery.ui.widget.js' first %}*/
/* {%- includejsresource 'lib/selectize/selectize'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includecssresource 'lib/selectize/selectize.css' %}*/
/* {%- includejsresource 'lib/velocity'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/jquery-ui'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/jquery-2.2.1'~(useCompressedJs ? '.min')~'.js' first %}*/
/* {%- includejsresource 'lib/xregexp-all.js' first %}*/
/* */
/* {%- includeJsResource 'lib/d3/d3'~(useCompressedJs ? '.min')~'.js' first %}*/
/* */
/* {%- includeTranslations "Show", "Hide" %}*/
/* */
/* {% set orientation = localeData.getOrientation() %}*/
/* */
/* {% block foot %}*/
/* */
/* 	<noscript>*/
/* 		<div class="message-container no-access">*/
/* 			<div class="pane notice">*/
/* 				<p>{{ "JavaScript must be enabled to access the Craft control panel."|t }}</p>*/
/* 			</div>*/
/* 		</div>*/
/* 	</noscript>*/
/* */
/* 	<script type="text/javascript">*/
/* 		// Create the Craft object*/
/* 		window.Craft = {*/
/* 			siteUid:               "{{ craft.app.getSiteUid()|e('js') }}",*/
/* 			baseUrl:               "{{ url()|e('js') }}",*/
/* 			baseCpUrl:             "{{ cpUrl()|e('js') }}",*/
/* 			baseSiteUrl:           "{{ siteUrl()|e('js') }}",*/
/* 			actionUrl:             "{{ actionUrl()|e('js') }}",*/
/* 			resourceUrl:           "{{ resourceUrl()|e('js') }}",*/
/* 			scriptName:            "{{ craft.request.getScriptName()|e('js') }}",*/
/* 			omitScriptNameInUrls:  {{ craft.config.omitScriptNameInUrls() ? 'true' : 'false' }},*/
/* 			usePathInfo:           {{ craft.config.usePathInfo() ? 'true' : 'false' }},*/
/* 			useCompressedJs:       {{ useCompressedJs ? 'true' : 'false' }},*/
/* 			resourceTrigger:       "{{ craft.config.getResourceTrigger()|e('js') }}",*/
/* 			actionTrigger:         "{{ craft.config.actionTrigger|e('js') }}",*/
/* 			path:                  "{{ craft.request.getPath()|e('js') }}",*/
/* 			locale:                "{{ craft.locale|e('js') }}",*/
/* 			orientation:           "{{ orientation|e('js') }}",*/
/* 			left:                  "{{ orientation == 'ltr' ? 'left' : 'right' }}",*/
/* 			right:                 "{{ orientation == 'ltr' ? 'right' : 'left' }}",*/
/* 			username:              {{ currentUser is defined and currentUser ? ('"'~currentUser.username|e('js')~'"')|raw : 'null' }},*/
/* 			authTimeout:           {{ craft.request.getFirstSegment() not in ['updates', 'manualupdate'] ? craft.session.getAuthTimeout() : 0 }},*/
/* 			Personal:              {{ CraftPersonal }},*/
/* 			Client:                {{ CraftClient }},*/
/* 			Pro:                   {{ CraftPro }},*/
/* 			edition:               {{ CraftEdition }},*/
/* 			isLocalized:           {{ craft.isLocalized() ? 'true' : 'false' }},*/
/* 			translations:          {{ getTranslations()|raw }},*/
/* 			maxUploadSize:         {{ craft.app.getMaxUploadSize() }},*/
/* 			forceConfirmUnload:    {{ forceConfirmUnload is defined and forceConfirmUnload ? 'true' : 'false' }},*/
/* 			{% if craft.config.enableCsrfProtection %}*/
/* 				csrfTokenValue:        "{{ craft.request.getCsrfToken()|e('js') }}",*/
/* 				csrfTokenName:         "{{ craft.config.csrfTokenName|e('js') }}",*/
/* 			{% endif %}*/
/* 			runTasksAutomatically: {{ craft.config.runTasksAutomatically ? 'true' : 'false' }},*/
/* 			slugWordSeparator:     "{{ craft.config.slugWordSeparator|e('js') }}",*/
/* 			limitAutoSlugsToAscii: {{ craft.config.limitAutoSlugsToAscii ? 'true' : 'false' }},*/
/* 			fileKinds:             {{ craft.app.getFileKinds()|json_encode|raw }},*/
/* 			datepickerOptions: {*/
/* 				constrainInput: false,*/
/* 				dateFormat: "{{ craft.i18n.getDatepickerJsFormat()|e('js') }}",*/
/* 				prevText: '{{ "Prev"|t|e('js') }}',*/
/* 				nextText: '{{ "Next"|t|e('js') }}',*/
/* 				firstDay: {{ currentUser is defined and currentUser ? currentUser.weekStartDay : craft.config.defaultWeekStartDay }},*/
/* 				dayNames: {{ localeData.getWeekDayNames('wide', true)|json_encode|raw }},*/
/* 				dayNamesShort: {{ localeData.getWeekDayNames('abbreviated', true)|json_encode|raw }},*/
/* 				dayNamesMin: {{ localeData.getWeekDayNames('narrow', true)|json_encode|raw }},*/
/* 				monthNames: {{ localeData.getMonthNames('wide', true)|values|json_encode|raw }},*/
/* 				monthNamesShort: {{ localeData.getMonthNames('abbreviated', true)|values|json_encode|raw }}*/
/* 			},*/
/* 			publishableSections: [*/
/* 				{% if isInstalled and currentUser is defined and currentUser %}*/
/* 					{% for section in craft.sections.getEditableSections() %}*/
/* 						{% if section.type != 'single' and currentUser.can('createEntries:'~section.id) %}*/
/* 							{id: {{ section.id }}, name: "{{ section.name|t|e('js') }}", handle: "{{ section.handle|e('js') }}", type: "{{ section.type }}"}{% if not loop.last %},{% endif %}*/
/* 						{% endif %}*/
/* 					{% endfor %}*/
/* 				{% endif %}*/
/* 			],*/
/* 			editableCategoryGroups: [*/
/* 				{% if isInstalled %}*/
/* 					{% for group in craft.categoryGroups.getEditableGroups() %}*/
/* 						{id: {{ group.id }}, name: "{{ group.name|t|e('js') }}", handle: "{{ group.handle|e('js') }}"}{% if not loop.last %},{% endif %}*/
/* 					{% endfor %}*/
/* 				{% endif %}*/
/* 			]*/
/* 		};*/
/* */
/* 		// Picture element HTML5 shiv*/
/* 		document.createElement('picture');*/
/* 	</script>*/
/* {% endblock %}*/
/* */
