<?php

/* entries/_edit */
class __TwigTemplate_de31a9a9f66036d1692f6495ce04d9d0d69656482b46ecec2a45008b77501378 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/cp", "entries/_edit", 1);
        $this->blocks = array(
            'pageTitle' => array($this, 'block_pageTitle'),
            'saveButton' => array($this, 'block_saveButton'),
            'main' => array($this, 'block_main'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/cp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        $context["forms"] = $this->loadTemplate("_includes/forms", "entries/_edit", 2);
        // line 11
        $context["sectionHandle"] = $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "handle", array());
        // line 12
        $context["isSingle"] = ($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == "single");
        // line 13
        $context["isVersion"] = ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "EntryVersion");
        // line 14
        $context["isDraft"] = ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array()) && ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getClassHandle", array(), "method") == "EntryDraft"));
        // line 16
        $context["canPublish"] = $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method");
        // line 17
        $context["canSave"] = ((($this->getAttribute(        // line 18
(isset($context["entry"]) ? $context["entry"] : null), "id", array()) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("createEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method")) && (( !$this->getAttribute(        // line 19
(isset($context["entry"]) ? $context["entry"] : null), "id", array()) ||  !$this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "enabled", array())) || (isset($context["canPublish"]) ? $context["canPublish"] : null))) && ((        // line 20
(isset($context["isSingle"]) ? $context["isSingle"] : null) || ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "authorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array()))) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method")));
        // line 24
        echo \Craft\craft()->templates->invokeHook("cp.entries.edit", $context);

        // line 338
        if ( !$this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "slug", array())) {
            // line 339
            $_js = "window.slugGenerator = new Craft.SlugGenerator('#title', '#slug');";
            \Craft\craft()->templates->includejs($_js);
        }
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
        // line 6
        if ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array())) {
            // line 7
            echo "\t\t";
            $this->loadTemplate("entries/_revisions", "entries/_edit", 7)->display($context);
            // line 8
            echo "\t";
        }
    }

    // line 27
    public function block_saveButton($context, array $blocks = array())
    {
        // line 28
        echo "\t";
        if ((isset($context["isDraft"]) ? $context["isDraft"] : null)) {
            // line 29
            echo "
\t\t<input type=\"hidden\" name=\"action\" value=\"entryRevisions/saveDraft\">
\t\t<input type=\"hidden\" name=\"redirect\" value=\"";
            // line 31
            echo twig_escape_filter($this->env, (isset($context["baseCpEditUrl"]) ? $context["baseCpEditUrl"] : null), "html", null, true);
            echo "/drafts/";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "draftId", array()), "html", null, true);
            echo "\">
\t\t<input type=\"hidden\" name=\"draftId\" value=\"";
            // line 32
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "draftId", array()), "html", null, true);
            echo "\">

\t\t<div class=\"btngroup\">
\t\t\t<input type=\"submit\" class=\"btn submit\" value=\"";
            // line 35
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save draft"), "html", null, true);
            echo "\">

\t\t\t";
            // line 38
            echo "\t\t\t";
            $context["canPublishDraft"] = ((            // line 39
(isset($context["canPublish"]) ? $context["canPublish"] : null) && ((            // line 40
(isset($context["isSingle"]) ? $context["isSingle"] : null) || ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "authorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array()))) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method"))) && (($this->getAttribute(            // line 41
(isset($context["entry"]) ? $context["entry"] : null), "creatorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array())) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntryDrafts" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method")));
            // line 43
            echo "
\t\t\t";
            // line 45
            echo "\t\t\t";
            $context["canDeleteDraft"] = ((            // line 46
(isset($context["canPublish"]) ? $context["canPublish"] : null) && ((            // line 47
(isset($context["isSingle"]) ? $context["isSingle"] : null) || ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "authorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array()))) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method"))) && (($this->getAttribute(            // line 48
(isset($context["entry"]) ? $context["entry"] : null), "creatorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array())) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntryDrafts" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method")));
            // line 50
            echo "
\t\t\t";
            // line 51
            if (((isset($context["canPublishDraft"]) ? $context["canPublishDraft"] : null) || (isset($context["canDeleteDraft"]) ? $context["canDeleteDraft"] : null))) {
                // line 52
                echo "\t\t\t\t<div class=\"btn submit menubtn\"></div>
\t\t\t\t<div class=\"menu\">
\t\t\t\t\t";
                // line 54
                if ((isset($context["canPublishDraft"]) ? $context["canPublishDraft"] : null)) {
                    // line 55
                    echo "\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t<li><a class=\"formsubmit\"
\t\t\t\t\t\t\t       data-action=\"entryRevisions/publishDraft\"
\t\t\t\t\t\t\t       data-redirect=\"";
                    // line 58
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getCpEditUrl", array(), "method"), "html", null, true);
                    echo "\">
\t\t\t\t\t\t\t\t";
                    // line 59
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Publish draft"), "html", null, true);
                    echo "
\t\t\t\t\t\t\t</a></li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t";
                }
                // line 63
                echo "
\t\t\t\t\t";
                // line 64
                if (((isset($context["canPublishDraft"]) ? $context["canPublishDraft"] : null) && (isset($context["canDeleteDraft"]) ? $context["canDeleteDraft"] : null))) {
                    // line 65
                    echo "\t\t\t\t\t\t<hr>
\t\t\t\t\t";
                }
                // line 67
                echo "
\t\t\t\t\t";
                // line 68
                if ((isset($context["canDeleteDraft"]) ? $context["canDeleteDraft"] : null)) {
                    // line 69
                    echo "\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t<li><a class=\"formsubmit\"
\t\t\t\t\t\t\t       data-action=\"entryRevisions/deleteDraft\"
\t\t\t\t\t\t\t       data-confirm=\"";
                    // line 72
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Are you sure you want to delete this draft?"), "html", null, true);
                    echo "\"
\t\t\t\t   \t\t\t       data-redirect=\"";
                    // line 73
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getCpEditUrl", array(), "method"), "html", null, true);
                    echo "\">
\t\t\t\t\t\t\t\t";
                    // line 74
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Delete draft"), "html", null, true);
                    echo "
\t\t\t\t\t\t\t</a></li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t";
                }
                // line 78
                echo "\t\t\t\t</div>
\t\t\t";
            }
            // line 80
            echo "\t\t</div>

\t";
        } elseif (        // line 82
(isset($context["isVersion"]) ? $context["isVersion"] : null)) {
            // line 83
            echo "
\t\t";
            // line 85
            echo "\t\t";
            if ((            // line 86
(isset($context["canPublish"]) ? $context["canPublish"] : null) && ((            // line 87
(isset($context["isSingle"]) ? $context["isSingle"] : null) || ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "authorId", array()) == $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "id", array()))) || $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("publishPeerEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method")))) {
                // line 89
                echo "
\t\t\t<input type=\"hidden\" name=\"action\" value=\"entryRevisions/revertEntryToVersion\">
\t\t\t<input type=\"hidden\" name=\"redirect\" value=\"";
                // line 91
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getCpEditUrl", array(), "method"), "html", null, true);
                echo "\">
\t\t\t<input type=\"hidden\" name=\"versionId\" value=\"";
                // line 92
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "versionId", array()), "html", null, true);
                echo "\">

\t\t\t<div class=\"secondary-buttons\">
\t\t\t\t<input type=\"button\" class=\"btn submit formsubmit\" value=\"";
                // line 95
                echo twig_escape_filter($this->env, \Craft\Craft::t("Revert entry to this version"), "html", null, true);
                echo "\">
\t\t\t</div>
\t\t";
            }
            // line 98
            echo "
\t";
        } elseif (        // line 99
(isset($context["canSave"]) ? $context["canSave"] : null)) {
            // line 100
            echo "
\t\t<input type=\"hidden\" name=\"action\" value=\"entries/saveEntry\">
\t\t<input type=\"hidden\" name=\"redirect\" value=\"entries/";
            // line 102
            echo twig_escape_filter($this->env, (isset($context["sectionHandle"]) ? $context["sectionHandle"] : null), "html", null, true);
            echo "\">

\t\t<div class=\"btngroup\">
\t\t\t<input type=\"submit\" class=\"btn submit\" value=\"";
            // line 105
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save"), "html", null, true);
            echo "\">

\t\t\t<div class=\"btn submit menubtn\"></div>
\t\t\t<div class=\"menu\">
\t\t\t\t<ul>
\t\t\t\t\t<li><a class=\"formsubmit\" data-redirect=\"";
            // line 110
            echo twig_escape_filter($this->env, (isset($context["continueEditingUrl"]) ? $context["continueEditingUrl"] : null), "html", null, true);
            echo "\">
\t\t\t\t\t\t";
            // line 111
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save and continue editing"), "html", null, true);
            echo "
\t\t\t\t\t\t";
            // line 112
            echo $context["forms"]->getoptionShortcutLabel("S");
            echo "
\t\t\t\t\t</a></li>

\t\t\t\t\t";
            // line 115
            $context["nextEntryParams"] = array();
            // line 116
            echo "\t\t\t\t\t";
            if ((isset($context["showEntryTypes"]) ? $context["showEntryTypes"] : null)) {
                // line 117
                echo "\t\t\t\t\t\t";
                $context["nextEntryParams"] = twig_array_merge((isset($context["nextEntryParams"]) ? $context["nextEntryParams"] : null), array(0 => "typeId={type.id}"));
                // line 118
                echo "\t\t\t\t\t";
            }
            // line 119
            echo "\t\t\t\t\t";
            if (($this->getAttribute((isset($context["section"]) ? $context["section"] : null), "type", array()) == "structure")) {
                // line 120
                echo "\t\t\t\t\t\t";
                $context["nextEntryParams"] = twig_array_merge((isset($context["nextEntryParams"]) ? $context["nextEntryParams"] : null), array(0 => "parentId={parent.id}"));
                // line 121
                echo "\t\t\t\t\t";
            }
            // line 122
            echo "
\t\t\t\t\t";
            // line 123
            if ( !(isset($context["isSingle"]) ? $context["isSingle"] : null)) {
                // line 124
                echo "\t\t\t\t\t\t<li><a class=\"formsubmit\" data-redirect=\"entries/";
                echo twig_escape_filter($this->env, (isset($context["sectionHandle"]) ? $context["sectionHandle"] : null), "html", null, true);
                echo "/new";
                if ((isset($context["nextEntryParams"]) ? $context["nextEntryParams"] : null)) {
                    echo "?";
                    echo twig_escape_filter($this->env, twig_join_filter((isset($context["nextEntryParams"]) ? $context["nextEntryParams"] : null), "&"), "html", null, true);
                }
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Save and add another"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t";
            }
            // line 126
            echo "
\t\t\t\t\t<li><a class=\"formsubmit\" data-action=\"entryRevisions/saveDraft\" data-redirect=\"";
            // line 127
            echo twig_escape_filter($this->env, (isset($context["baseCpEditUrl"]) ? $context["baseCpEditUrl"] : null), "html", null, true);
            echo "/drafts/{draftId}\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save as a draft"), "html", null, true);
            echo "</a></li>

\t\t\t\t\t";
            // line 129
            if (( !(isset($context["isSingle"]) ? $context["isSingle"] : null) && $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array()))) {
                // line 130
                echo "\t\t\t\t\t\t<li><a class=\"formsubmit\" data-param=\"entryId\" data-value=\"\" data-redirect=\"";
                echo twig_escape_filter($this->env, (isset($context["continueEditingUrl"]) ? $context["continueEditingUrl"] : null), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, \Craft\Craft::t("Save as a new entry"), "html", null, true);
                echo "</a></li>
\t\t\t\t\t";
            }
            // line 132
            echo "\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>

\t";
        } else {
            // line 137
            echo "
\t\t<input type=\"hidden\" name=\"action\" value=\"entryRevisions/saveDraft\">
\t\t<input type=\"hidden\" name=\"redirect\" value=\"";
            // line 139
            echo twig_escape_filter($this->env, (isset($context["baseCpEditUrl"]) ? $context["baseCpEditUrl"] : null), "html", null, true);
            echo "/drafts/{draftId}\">

\t\t<input type=\"submit\" class=\"btn submit first\" value=\"";
            // line 141
            echo twig_escape_filter($this->env, \Craft\Craft::t("Save as a draft"), "html", null, true);
            echo "\">

\t";
        }
    }

    // line 147
    public function block_main($context, array $blocks = array())
    {
        // line 148
        echo "\t\t";
        if ( !(isset($context["isVersion"]) ? $context["isVersion"] : null)) {
            // line 149
            echo "\t\t\t<input type=\"hidden\" name=\"sectionId\" value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "id", array()), "html", null, true);
            echo "\">
\t\t\t";
            // line 150
            if ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array())) {
                echo "<input type=\"hidden\" name=\"entryId\" value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array()), "html", null, true);
                echo "\">";
            }
            // line 151
            echo "\t\t\t";
            if ($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method")) {
                echo "<input type=\"hidden\" name=\"locale\" value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "locale", array()), "html", null, true);
                echo "\">";
            }
            // line 152
            echo "\t\t";
        } else {
            // line 153
            echo "\t\t\t<input type=\"hidden\" name=\"versionId\" value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "versionId", array()), "html", null, true);
            echo "\">
\t\t";
        }
        // line 155
        echo "
\t\t<div class=\"grid first\" data-max-cols=\"3\">
\t\t\t<div class=\"item\" data-position=\"left\" data-colspan=\"2\">
\t\t\t\t<div id=\"fields\" class=\"pane\">
\t\t\t\t\t";
        // line 159
        $this->loadTemplate("_includes/tabs", "entries/_edit", 159)->display($context);
        // line 160
        echo "\t\t\t\t\t";
        $this->loadTemplate("entries/_fields", "entries/_edit", 160)->display(array_merge($context, array("static" =>         // line 161
(isset($context["isVersion"]) ? $context["isVersion"] : null))));
        // line 163
        echo "\t\t\t\t</div>
\t\t\t</div><!--/item-->

\t\t\t<div class=\"item\" data-position=\"right\">

\t\t\t\t";
        // line 168
        if ((isset($context["showPreviewBtn"]) ? $context["showPreviewBtn"] : null)) {
            // line 169
            echo "\t\t\t\t\t";
            $this->loadTemplate("_includes/previewbtns", "entries/_edit", 169)->display($context);
            // line 170
            echo "\t\t\t\t";
        }
        // line 171
        echo "
\t\t\t\t";
        // line 172
        if (($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "isLocalized", array(), "method") && (twig_length_filter($this->env, $this->getAttribute((isset($context["section"]) ? $context["section"] : null), "getLocales", array(), "method")) > 1))) {
            // line 173
            echo "\t\t\t\t\t<ul id=\"locales\" class=\"pane\">
\t\t\t\t\t\t";
            // line 174
            $context["parentIdParam"] = (($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getParam", array(0 => "parentId.0"), "method")) ? ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getParam", array(0 => "parentId.0"), "method")) : ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getParam", array(0 => "parentId"), "method")));
            // line 175
            echo "\t\t\t\t\t\t";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["localeIds"]) ? $context["localeIds"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["localeId"]) {
                // line 176
                echo "\t\t\t\t\t\t\t";
                $context["localeName"] = $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "i18n", array()), "getLocaleById", array(0 => $context["localeId"]), "method"), "name", array());
                // line 177
                echo "\t\t\t\t\t\t\t<li";
                if (($context["localeId"] == $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "locale", array()))) {
                    echo " class=\"sel\"";
                }
                echo ">";
                // line 178
                if (($context["localeId"] == $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "locale", array()))) {
                    // line 179
                    echo twig_escape_filter($this->env, (isset($context["localeName"]) ? $context["localeName"] : null), "html", null, true);
                    echo "
\t\t\t\t\t\t\t\t\t";
                    // line 180
                    echo $context["forms"]->getlightswitch(array("name" => "localeEnabled", "on" => $this->getAttribute(                    // line 182
(isset($context["entry"]) ? $context["entry"] : null), "localeEnabled", array()), "small" => true, "disabled" =>                     // line 184
(isset($context["isVersion"]) ? $context["isVersion"] : null)));
                } else {
                    // line 187
                    $context["localeUrl"] = \Craft\UrlHelper::getUrl(((((("entries/" .                     // line 188
(isset($context["sectionHandle"]) ? $context["sectionHandle"] : null)) . "/") . $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "request", array()), "getSegment", array(0 => 3), "method")) . "/") . $context["localeId"]), ((                    // line 189
(isset($context["parentIdParam"]) ? $context["parentIdParam"] : null)) ? (array("parentId" => (isset($context["parentIdParam"]) ? $context["parentIdParam"] : null))) : ("")));
                    // line 191
                    echo "<a href=\"";
                    echo twig_escape_filter($this->env, (isset($context["localeUrl"]) ? $context["localeUrl"] : null), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, (isset($context["localeName"]) ? $context["localeName"] : null), "html", null, true);
                    echo "</a>
\t\t\t\t\t\t\t\t\t<div class=\"status ";
                    // line 192
                    echo ((twig_in_filter($context["localeId"], (isset($context["enabledLocales"]) ? $context["enabledLocales"] : null))) ? ("enabled") : ("disabled"));
                    echo "\"></div>";
                }
                // line 194
                echo "</li>
\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['localeId'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 196
            echo "\t\t\t\t\t</ul>
\t\t\t\t";
        }
        // line 198
        echo "
\t\t\t\t";
        // line 199
        if (( !(isset($context["isSingle"]) ? $context["isSingle"] : null) || (isset($context["canPublish"]) ? $context["canPublish"] : null))) {
            // line 200
            echo "\t\t\t\t\t<div id=\"settings\" class=\"pane meta\">

\t\t\t\t\t\t";
            // line 202
            if ( !(isset($context["isSingle"]) ? $context["isSingle"] : null)) {
                // line 203
                echo "\t\t\t\t\t\t\t";
                if ((isset($context["showEntryTypes"]) ? $context["showEntryTypes"] : null)) {
                    // line 204
                    echo "\t\t\t\t\t\t\t\t";
                    echo $context["forms"]->getselectField(array("label" => \Craft\Craft::t("Entry Type"), "id" => "entryType", "name" => "typeId", "value" => $this->getAttribute(                    // line 208
(isset($context["entryType"]) ? $context["entryType"] : null), "id", array()), "options" =>                     // line 209
(isset($context["entryTypeOptions"]) ? $context["entryTypeOptions"] : null)));
                    // line 210
                    echo "
\t\t\t\t\t\t\t";
                }
                // line 212
                echo "
\t\t\t\t\t\t\t";
                // line 213
                echo $context["forms"]->gettextField(array("label" => \Craft\Craft::t("Slug"), "locale" => $this->getAttribute(                // line 215
(isset($context["entry"]) ? $context["entry"] : null), "locale", array()), "id" => "slug", "name" => "slug", "value" => $this->getAttribute(                // line 218
(isset($context["entry"]) ? $context["entry"] : null), "slug", array()), "placeholder" => \Craft\Craft::t("Enter slug"), "errors" => (( !                // line 220
(isset($context["isVersion"]) ? $context["isVersion"] : null)) ? (twig_array_merge($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getErrors", array(0 => "slug"), "method"), $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "getErrors", array(0 => "uri"), "method"))) : ("")), "disabled" =>                 // line 221
(isset($context["isVersion"]) ? $context["isVersion"] : null)));
                // line 222
                echo "

\t\t\t\t\t\t\t";
                // line 224
                if (array_key_exists("parentOptionCriteria", $context)) {
                    // line 225
                    echo "\t\t\t\t\t\t\t\t";
                    echo $context["forms"]->getelementSelectField(array("label" => \Craft\Craft::t("Parent"), "id" => "parentId", "name" => "parentId", "elementType" =>                     // line 229
(isset($context["elementType"]) ? $context["elementType"] : null), "selectionLabel" => \Craft\Craft::t("Choose"), "sources" => array(0 => ("section:" . $this->getAttribute(                    // line 231
(isset($context["section"]) ? $context["section"] : null), "id", array()))), "criteria" =>                     // line 232
(isset($context["parentOptionCriteria"]) ? $context["parentOptionCriteria"] : null), "limit" => 1, "elements" => (((                    // line 234
array_key_exists("parent", $context) && (isset($context["parent"]) ? $context["parent"] : null))) ? (array(0 => (isset($context["parent"]) ? $context["parent"] : null))) : (""))));
                    // line 235
                    echo "
\t\t\t\t\t\t\t";
                }
                // line 237
                echo "
\t\t\t\t\t\t\t";
                // line 238
                if ((((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) == (isset($context["CraftPro"]) ? $context["CraftPro"] : null)) && $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => ("editPeerEntries" . (isset($context["permissionSuffix"]) ? $context["permissionSuffix"] : null))), "method"))) {
                    // line 239
                    echo "\t\t\t\t\t\t\t\t";
                    echo $context["forms"]->getelementSelectField(array("label" => \Craft\Craft::t("Author"), "id" => "author", "name" => "author", "elementType" =>                     // line 243
(isset($context["userElementType"]) ? $context["userElementType"] : null), "selectionLabel" => \Craft\Craft::t("Choose"), "criteria" =>                     // line 245
(isset($context["authorOptionCriteria"]) ? $context["authorOptionCriteria"] : null), "limit" => 1, "elements" => (((                    // line 247
array_key_exists("author", $context) && (isset($context["author"]) ? $context["author"] : null))) ? (array(0 => (isset($context["author"]) ? $context["author"] : null))) : (""))));
                    // line 248
                    echo "
\t\t\t\t\t\t\t";
                }
                // line 250
                echo "
\t\t\t\t\t\t\t";
                // line 251
                echo $context["forms"]->getdateTimeField(array("label" => \Craft\Craft::t("Post Date"), "id" => "postDate", "name" => "postDate", "value" => (($this->getAttribute(                // line 255
(isset($context["entry"]) ? $context["entry"] : null), "postDate", array())) ? ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "postDate", array())) : (null)), "errors" => $this->getAttribute(                // line 256
(isset($context["entry"]) ? $context["entry"] : null), "getErrors", array(0 => "postDate"), "method"), "disabled" =>                 // line 257
(isset($context["isVersion"]) ? $context["isVersion"] : null)));
                // line 258
                echo "

\t\t\t\t\t\t\t";
                // line 260
                echo $context["forms"]->getdateTimeField(array("label" => \Craft\Craft::t("Expiry Date"), "id" => "expiryDate", "name" => "expiryDate", "value" => (($this->getAttribute(                // line 264
(isset($context["entry"]) ? $context["entry"] : null), "expiryDate", array())) ? ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "expiryDate", array())) : (null)), "errors" => $this->getAttribute(                // line 265
(isset($context["entry"]) ? $context["entry"] : null), "getErrors", array(0 => "expiryDate"), "method"), "disabled" =>                 // line 266
(isset($context["isVersion"]) ? $context["isVersion"] : null)));
                // line 267
                echo "
\t\t\t\t\t\t";
            }
            // line 269
            echo "
\t\t\t\t\t\t";
            // line 270
            if (((isset($context["canPublish"]) ? $context["canPublish"] : null) || ( !(isset($context["isVersion"]) ? $context["isVersion"] : null) && (isset($context["canDeleteEntry"]) ? $context["canDeleteEntry"] : null)))) {
                // line 271
                echo "
\t\t\t\t\t\t\t";
                // line 272
                ob_start();
                // line 273
                echo "\t\t\t\t\t\t\t\t";
                if ((isset($context["canPublish"]) ? $context["canPublish"] : null)) {
                    // line 274
                    echo "\t\t\t\t\t\t\t\t\t<div class=\"left\">
\t\t\t\t\t\t\t\t\t\t";
                    // line 275
                    echo $context["forms"]->getlightswitch(array("id" => "enabled", "name" => "enabled", "on" => $this->getAttribute(                    // line 278
(isset($context["entry"]) ? $context["entry"] : null), "enabled", array()), "disabled" =>                     // line 279
(isset($context["isVersion"]) ? $context["isVersion"] : null)));
                    // line 280
                    echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t";
                }
                // line 283
                echo "
\t\t\t\t\t\t\t\t";
                // line 284
                if ((( !(isset($context["isSingle"]) ? $context["isSingle"] : null) &&  !(isset($context["isVersion"]) ? $context["isVersion"] : null)) && (isset($context["canDeleteEntry"]) ? $context["canDeleteEntry"] : null))) {
                    // line 285
                    echo "\t\t\t\t\t\t\t\t\t<div class=\"right\">
\t\t\t\t\t\t\t\t\t\t<input type=\"button\" class=\"btn small formsubmit\" value=\"";
                    // line 286
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Delete"), "html", null, true);
                    echo "\" data-action=\"entries/deleteEntry\"
\t\t\t\t\t\t\t\t\t\t\tdata-confirm=\"";
                    // line 287
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Are you sure you want to delete this entry?"), "html", null, true);
                    echo "\"
\t\t\t\t\t\t\t\t\t\t\tdata-redirect=\"entries\">
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t";
                }
                // line 291
                echo "\t\t\t\t\t\t\t";
                $context["statusInput"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                // line 292
                echo "
\t\t\t\t\t\t\t";
                // line 293
                echo $context["forms"]->getfield(array("label" => ((                // line 294
(isset($context["canPublish"]) ? $context["canPublish"] : null)) ? (\Craft\Craft::t("Enabled")) : ("")), "id" => "enabled"),                 // line 296
(isset($context["statusInput"]) ? $context["statusInput"] : null));
                echo "
\t\t\t\t\t\t";
            }
            // line 298
            echo "
\t\t\t\t\t</div><!--/pane-->

\t\t\t\t\t";
            // line 301
            if ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "id", array())) {
                // line 302
                echo "\t\t\t\t\t\t<div class=\"pane lightpane meta\">
\t\t\t\t\t\t\t<div class=\"data\">
\t\t\t\t\t\t\t\t<h5 class=\"heading\">";
                // line 304
                echo twig_escape_filter($this->env, \Craft\Craft::t("Date Created"), "html", null, true);
                echo "</h5>
\t\t\t\t\t\t\t\t<div class=\"value\">";
                // line 305
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "dateCreated", array()), "localeDate", array(), "method"), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "dateCreated", array()), "localeTime", array(), "method"), "html", null, true);
                echo "</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"data\">
\t\t\t\t\t\t\t\t<h5 class=\"heading\">";
                // line 308
                echo twig_escape_filter($this->env, \Craft\Craft::t("Date Updated"), "html", null, true);
                echo "</h5>
\t\t\t\t\t\t\t\t<div class=\"value\">";
                // line 309
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "dateUpdated", array()), "localeDate", array(), "method"), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "dateUpdated", array()), "localeTime", array(), "method"), "html", null, true);
                echo "</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t";
                // line 311
                if ($this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "revisionNotes", array())) {
                    // line 312
                    echo "\t\t\t\t\t\t\t\t<div class=\"data\">
\t\t\t\t\t\t\t\t\t<h5 class=\"heading\">";
                    // line 313
                    echo twig_escape_filter($this->env, \Craft\Craft::t("Version Notes"), "html", null, true);
                    echo "</h5>
\t\t\t\t\t\t\t\t\t<div class=\"value\">";
                    // line 314
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["entry"]) ? $context["entry"] : null), "revisionNotes", array()), "html", null, true);
                    echo "</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t";
                }
                // line 317
                echo "\t\t\t\t\t\t</div>
\t\t\t\t\t";
            }
            // line 319
            echo "
\t\t\t\t";
        }
        // line 321
        echo "
\t\t\t\t";
        // line 323
        echo "\t\t\t\t";
        echo \Craft\craft()->templates->invokeHook("cp.entries.edit.right-pane", $context);

        // line 324
        echo "
\t\t\t\t";
        // line 325
        if (((( !        // line 326
(isset($context["isDraft"]) ? $context["isDraft"] : null) &&  !(isset($context["isVersion"]) ? $context["isVersion"] : null)) && (isset($context["canSave"]) ? $context["canSave"] : null)) && $this->getAttribute(        // line 327
(isset($context["section"]) ? $context["section"] : null), "enableVersioning", array()))) {
            // line 329
            echo "\t\t\t\t\t<hr>
\t\t\t\t\t<input type=\"text\" name=\"revisionNotes\" class=\"fullwidth textline\" placeholder=\"";
            // line 330
            echo twig_escape_filter($this->env, \Craft\Craft::t("Notes about your changes"), "html", null, true);
            echo "\" autocomplete=\"off\">
\t\t\t\t";
        }
        // line 332
        echo "
\t\t\t</div><!--/item-->
\t\t</div><!--/grid-->
";
    }

    public function getTemplateName()
    {
        return "entries/_edit";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  677 => 332,  672 => 330,  669 => 329,  667 => 327,  666 => 326,  665 => 325,  662 => 324,  658 => 323,  655 => 321,  651 => 319,  647 => 317,  641 => 314,  637 => 313,  634 => 312,  632 => 311,  625 => 309,  621 => 308,  613 => 305,  609 => 304,  605 => 302,  603 => 301,  598 => 298,  593 => 296,  592 => 294,  591 => 293,  588 => 292,  585 => 291,  578 => 287,  574 => 286,  571 => 285,  569 => 284,  566 => 283,  561 => 280,  559 => 279,  558 => 278,  557 => 275,  554 => 274,  551 => 273,  549 => 272,  546 => 271,  544 => 270,  541 => 269,  537 => 267,  535 => 266,  534 => 265,  533 => 264,  532 => 260,  528 => 258,  526 => 257,  525 => 256,  524 => 255,  523 => 251,  520 => 250,  516 => 248,  514 => 247,  513 => 245,  512 => 243,  510 => 239,  508 => 238,  505 => 237,  501 => 235,  499 => 234,  498 => 232,  497 => 231,  496 => 229,  494 => 225,  492 => 224,  488 => 222,  486 => 221,  485 => 220,  484 => 218,  483 => 215,  482 => 213,  479 => 212,  475 => 210,  473 => 209,  472 => 208,  470 => 204,  467 => 203,  465 => 202,  461 => 200,  459 => 199,  456 => 198,  452 => 196,  445 => 194,  441 => 192,  434 => 191,  432 => 189,  431 => 188,  430 => 187,  427 => 184,  426 => 182,  425 => 180,  421 => 179,  419 => 178,  413 => 177,  410 => 176,  405 => 175,  403 => 174,  400 => 173,  398 => 172,  395 => 171,  392 => 170,  389 => 169,  387 => 168,  380 => 163,  378 => 161,  376 => 160,  374 => 159,  368 => 155,  362 => 153,  359 => 152,  352 => 151,  346 => 150,  341 => 149,  338 => 148,  335 => 147,  327 => 141,  322 => 139,  318 => 137,  311 => 132,  303 => 130,  301 => 129,  294 => 127,  291 => 126,  278 => 124,  276 => 123,  273 => 122,  270 => 121,  267 => 120,  264 => 119,  261 => 118,  258 => 117,  255 => 116,  253 => 115,  247 => 112,  243 => 111,  239 => 110,  231 => 105,  225 => 102,  221 => 100,  219 => 99,  216 => 98,  210 => 95,  204 => 92,  200 => 91,  196 => 89,  194 => 87,  193 => 86,  191 => 85,  188 => 83,  186 => 82,  182 => 80,  178 => 78,  171 => 74,  167 => 73,  163 => 72,  158 => 69,  156 => 68,  153 => 67,  149 => 65,  147 => 64,  144 => 63,  137 => 59,  133 => 58,  128 => 55,  126 => 54,  122 => 52,  120 => 51,  117 => 50,  115 => 48,  114 => 47,  113 => 46,  111 => 45,  108 => 43,  106 => 41,  105 => 40,  104 => 39,  102 => 38,  97 => 35,  91 => 32,  85 => 31,  81 => 29,  78 => 28,  75 => 27,  70 => 8,  67 => 7,  65 => 6,  60 => 5,  57 => 4,  53 => 1,  49 => 339,  47 => 338,  44 => 24,  42 => 20,  41 => 19,  40 => 18,  39 => 17,  37 => 16,  35 => 14,  33 => 13,  31 => 12,  29 => 11,  27 => 2,  11 => 1,);
    }
}
/* {% extends "_layouts/cp" %}*/
/* {% import "_includes/forms" as forms %}*/
/* */
/* {% block pageTitle %}*/
/* 	{{ parent() }}*/
/* 	{% if entry.id %}*/
/* 		{% include "entries/_revisions" %}*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
/* {% set sectionHandle = section.handle %}*/
/* {% set isSingle = section.type == 'single' %}*/
/* {% set isVersion = entry.getClassHandle() == 'EntryVersion' %}*/
/* {% set isDraft = entry.id and entry.getClassHandle() == 'EntryDraft' %}*/
/* */
/* {% set canPublish = currentUser.can('publishEntries'~permissionSuffix) %}*/
/* {% set canSave = (*/
/* 	(entry.id or currentUser.can('createEntries'~permissionSuffix)) and*/
/* 	(not entry.id or not entry.enabled or canPublish) and*/
/* 	(isSingle or entry.authorId == currentUser.id or currentUser.can('publishPeerEntries'~permissionSuffix))*/
/* ) %}*/
/* */
/* */
/* {% hook "cp.entries.edit" %}*/
/* */
/* */
/* {% block saveButton %}*/
/* 	{% if isDraft %}*/
/* */
/* 		<input type="hidden" name="action" value="entryRevisions/saveDraft">*/
/* 		<input type="hidden" name="redirect" value="{{ baseCpEditUrl }}/drafts/{{ entry.draftId }}">*/
/* 		<input type="hidden" name="draftId" value="{{ entry.draftId }}">*/
/* */
/* 		<div class="btngroup">*/
/* 			<input type="submit" class="btn submit" value="{{ 'Save draft'|t }}">*/
/* */
/* 			{# Are they allowed to publish this draft? #}*/
/* 			{% set canPublishDraft = (*/
/* 				canPublish and*/
/* 				(isSingle or entry.authorId == currentUser.id or currentUser.can('publishPeerEntries'~permissionSuffix)) and*/
/* 				(entry.creatorId == currentUser.id or currentUser.can('publishPeerEntryDrafts'~permissionSuffix))*/
/* 			) %}*/
/* */
/* 			{# Are they allowed to publish this draft? #}*/
/* 			{% set canDeleteDraft = (*/
/* 				canPublish and*/
/* 				(isSingle or entry.authorId == currentUser.id or currentUser.can('publishPeerEntries'~permissionSuffix)) and*/
/* 				(entry.creatorId == currentUser.id or currentUser.can('publishPeerEntryDrafts'~permissionSuffix))*/
/* 			) %}*/
/* */
/* 			{% if canPublishDraft or canDeleteDraft %}*/
/* 				<div class="btn submit menubtn"></div>*/
/* 				<div class="menu">*/
/* 					{% if canPublishDraft %}*/
/* 						<ul>*/
/* 							<li><a class="formsubmit"*/
/* 							       data-action="entryRevisions/publishDraft"*/
/* 							       data-redirect="{{ entry.getCpEditUrl() }}">*/
/* 								{{ "Publish draft"|t }}*/
/* 							</a></li>*/
/* 						</ul>*/
/* 					{% endif %}*/
/* */
/* 					{% if canPublishDraft and canDeleteDraft %}*/
/* 						<hr>*/
/* 					{% endif %}*/
/* */
/* 					{% if canDeleteDraft %}*/
/* 						<ul>*/
/* 							<li><a class="formsubmit"*/
/* 							       data-action="entryRevisions/deleteDraft"*/
/* 							       data-confirm="{{ 'Are you sure you want to delete this draft?'|t }}"*/
/* 				   			       data-redirect="{{ entry.getCpEditUrl() }}">*/
/* 								{{ 'Delete draft'|t }}*/
/* 							</a></li>*/
/* 						</ul>*/
/* 					{% endif %}*/
/* 				</div>*/
/* 			{% endif %}*/
/* 		</div>*/
/* */
/* 	{% elseif isVersion %}*/
/* */
/* 		{# Are they allowed to publish changes? #}*/
/* 		{% if*/
/* 			canPublish and*/
/* 			(isSingle or entry.authorId == currentUser.id or currentUser.can('publishPeerEntries'~permissionSuffix))*/
/* 		%}*/
/* */
/* 			<input type="hidden" name="action" value="entryRevisions/revertEntryToVersion">*/
/* 			<input type="hidden" name="redirect" value="{{ entry.getCpEditUrl() }}">*/
/* 			<input type="hidden" name="versionId" value="{{ entry.versionId }}">*/
/* */
/* 			<div class="secondary-buttons">*/
/* 				<input type="button" class="btn submit formsubmit" value="{{ 'Revert entry to this version'|t }}">*/
/* 			</div>*/
/* 		{% endif %}*/
/* */
/* 	{% elseif canSave %}*/
/* */
/* 		<input type="hidden" name="action" value="entries/saveEntry">*/
/* 		<input type="hidden" name="redirect" value="entries/{{ sectionHandle }}">*/
/* */
/* 		<div class="btngroup">*/
/* 			<input type="submit" class="btn submit" value="{{ 'Save'|t }}">*/
/* */
/* 			<div class="btn submit menubtn"></div>*/
/* 			<div class="menu">*/
/* 				<ul>*/
/* 					<li><a class="formsubmit" data-redirect="{{ continueEditingUrl }}">*/
/* 						{{ "Save and continue editing"|t }}*/
/* 						{{ forms.optionShortcutLabel('S') }}*/
/* 					</a></li>*/
/* */
/* 					{% set nextEntryParams = [] %}*/
/* 					{% if showEntryTypes %}*/
/* 						{% set nextEntryParams = nextEntryParams|merge(['typeId={type.id}']) %}*/
/* 					{% endif %}*/
/* 					{% if section.type == 'structure' %}*/
/* 						{% set nextEntryParams = nextEntryParams|merge(['parentId={parent.id}']) %}*/
/* 					{% endif %}*/
/* */
/* 					{% if not isSingle %}*/
/* 						<li><a class="formsubmit" data-redirect="entries/{{ sectionHandle }}/new{% if nextEntryParams %}?{{ nextEntryParams|join('&') }}{% endif %}">{{ "Save and add another"|t }}</a></li>*/
/* 					{% endif %}*/
/* */
/* 					<li><a class="formsubmit" data-action="entryRevisions/saveDraft" data-redirect="{{ baseCpEditUrl }}/drafts/{draftId}">{{ 'Save as a draft'|t }}</a></li>*/
/* */
/* 					{% if not isSingle and entry.id %}*/
/* 						<li><a class="formsubmit" data-param="entryId" data-value="" data-redirect="{{ continueEditingUrl }}">{{ "Save as a new entry"|t }}</a></li>*/
/* 					{% endif %}*/
/* 				</ul>*/
/* 			</div>*/
/* 		</div>*/
/* */
/* 	{% else %}*/
/* */
/* 		<input type="hidden" name="action" value="entryRevisions/saveDraft">*/
/* 		<input type="hidden" name="redirect" value="{{ baseCpEditUrl }}/drafts/{draftId}">*/
/* */
/* 		<input type="submit" class="btn submit first" value="{{ 'Save as a draft'|t }}">*/
/* */
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
/* */
/* {% block main %}*/
/* 		{% if not isVersion %}*/
/* 			<input type="hidden" name="sectionId" value="{{ section.id }}">*/
/* 			{% if entry.id %}<input type="hidden" name="entryId" value="{{ entry.id }}">{% endif %}*/
/* 			{% if craft.isLocalized() %}<input type="hidden" name="locale" value="{{ entry.locale }}">{% endif %}*/
/* 		{% else %}*/
/* 			<input type="hidden" name="versionId" value="{{ entry.versionId }}">*/
/* 		{% endif %}*/
/* */
/* 		<div class="grid first" data-max-cols="3">*/
/* 			<div class="item" data-position="left" data-colspan="2">*/
/* 				<div id="fields" class="pane">*/
/* 					{% include "_includes/tabs" %}*/
/* 					{% include "entries/_fields" with {*/
/* 						static: isVersion*/
/* 					} %}*/
/* 				</div>*/
/* 			</div><!--/item-->*/
/* */
/* 			<div class="item" data-position="right">*/
/* */
/* 				{% if showPreviewBtn %}*/
/* 					{% include "_includes/previewbtns" %}*/
/* 				{% endif %}*/
/* */
/* 				{% if craft.isLocalized() and section.getLocales() | length > 1 %}*/
/* 					<ul id="locales" class="pane">*/
/* 						{% set parentIdParam = craft.request.getParam('parentId.0') ?: craft.request.getParam('parentId') %}*/
/* 						{% for localeId in localeIds %}*/
/* 							{% set localeName = craft.i18n.getLocaleById(localeId).name %}*/
/* 							<li{% if localeId == entry.locale %} class="sel"{% endif %}>*/
/* 								{%- if localeId == entry.locale -%}*/
/* 									{{ localeName }}*/
/* 									{{ forms.lightswitch({*/
/* 										name: 'localeEnabled',*/
/* 										on:   entry.localeEnabled,*/
/* 										small: true,*/
/* 										disabled: isVersion*/
/* 									}) }}*/
/* 								{%- else -%}*/
/* 									{% set localeUrl = url(*/
/* 										'entries/'~sectionHandle~'/'~craft.request.getSegment(3)~'/'~localeId,*/
/* 										(parentIdParam ? { parentId: parentIdParam })*/
/* 									) -%}*/
/* 									<a href="{{ localeUrl }}">{{ localeName }}</a>*/
/* 									<div class="status {{ localeId in enabledLocales ? 'enabled' : 'disabled' }}"></div>*/
/* 								{%- endif -%}*/
/* 							</li>*/
/* 						{% endfor %}*/
/* 					</ul>*/
/* 				{% endif %}*/
/* */
/* 				{% if not isSingle or canPublish %}*/
/* 					<div id="settings" class="pane meta">*/
/* */
/* 						{% if not isSingle %}*/
/* 							{% if showEntryTypes %}*/
/* 								{{ forms.selectField({*/
/* 									label: "Entry Type"|t,*/
/* 									id: 'entryType',*/
/* 									name: 'typeId',*/
/* 									value: entryType.id,*/
/* 									options: entryTypeOptions*/
/* 								}) }}*/
/* 							{% endif %}*/
/* */
/* 							{{ forms.textField({*/
/* 								label: "Slug"|t,*/
/* 								locale: entry.locale,*/
/* 								id: 'slug',*/
/* 								name: 'slug',*/
/* 								value: entry.slug,*/
/* 								placeholder: "Enter slug"|t,*/
/* 								errors: (not isVersion ? entry.getErrors('slug')|merge(entry.getErrors('uri'))),*/
/* 								disabled: isVersion*/
/* 							}) }}*/
/* */
/* 							{% if parentOptionCriteria is defined %}*/
/* 								{{ forms.elementSelectField({*/
/* 									label: "Parent"|t,*/
/* 									id: 'parentId',*/
/* 									name: 'parentId',*/
/* 									elementType: elementType,*/
/* 									selectionLabel: "Choose"|t,*/
/* 									sources: ['section:'~section.id],*/
/* 									criteria: parentOptionCriteria,*/
/* 									limit: 1,*/
/* 									elements: (parent is defined and parent ? [parent])*/
/* 								}) }}*/
/* 							{% endif %}*/
/* */
/* 							{% if CraftEdition == CraftPro and currentUser.can('editPeerEntries'~permissionSuffix) %}*/
/* 								{{ forms.elementSelectField({*/
/* 									label: "Author"|t,*/
/* 									id: 'author',*/
/* 									name: 'author',*/
/* 									elementType: userElementType,*/
/* 									selectionLabel: "Choose"|t,*/
/* 									criteria: authorOptionCriteria,*/
/* 									limit: 1,*/
/* 									elements: (author is defined and author ? [author])*/
/* 								}) }}*/
/* 							{% endif %}*/
/* */
/* 							{{ forms.dateTimeField({*/
/* 								label: "Post Date"|t,*/
/* 								id: 'postDate',*/
/* 								name: 'postDate',*/
/* 								value: (entry.postDate ? entry.postDate : null),*/
/* 								errors: entry.getErrors('postDate'),*/
/* 								disabled: isVersion*/
/* 							}) }}*/
/* */
/* 							{{ forms.dateTimeField({*/
/* 								label: "Expiry Date"|t,*/
/* 								id: 'expiryDate',*/
/* 								name: 'expiryDate',*/
/* 								value: (entry.expiryDate ? entry.expiryDate : null),*/
/* 								errors: entry.getErrors('expiryDate'),*/
/* 								disabled: isVersion*/
/* 							}) }}*/
/* 						{% endif %}*/
/* */
/* 						{% if canPublish or (not isVersion and canDeleteEntry) %}*/
/* */
/* 							{% set statusInput %}*/
/* 								{% if canPublish %}*/
/* 									<div class="left">*/
/* 										{{ forms.lightswitch({*/
/* 											id: 'enabled',*/
/* 											name: 'enabled',*/
/* 											on: entry.enabled,*/
/* 											disabled: isVersion*/
/* 										}) }}*/
/* 									</div>*/
/* 								{% endif %}*/
/* */
/* 								{% if not isSingle and not isVersion and canDeleteEntry %}*/
/* 									<div class="right">*/
/* 										<input type="button" class="btn small formsubmit" value="{{ 'Delete'|t }}" data-action="entries/deleteEntry"*/
/* 											data-confirm="{{ 'Are you sure you want to delete this entry?'|t }}"*/
/* 											data-redirect="entries">*/
/* 									</div>*/
/* 								{% endif %}*/
/* 							{% endset %}*/
/* */
/* 							{{ forms.field({*/
/* 								label: (canPublish ? "Enabled"|t),*/
/* 								id: 'enabled'*/
/* 							}, statusInput) }}*/
/* 						{% endif %}*/
/* */
/* 					</div><!--/pane-->*/
/* */
/* 					{% if entry.id %}*/
/* 						<div class="pane lightpane meta">*/
/* 							<div class="data">*/
/* 								<h5 class="heading">{{ "Date Created"|t }}</h5>*/
/* 								<div class="value">{{ entry.dateCreated.localeDate() }} {{ entry.dateCreated.localeTime() }}</div>*/
/* 							</div>*/
/* 							<div class="data">*/
/* 								<h5 class="heading">{{ "Date Updated"|t }}</h5>*/
/* 								<div class="value">{{ entry.dateUpdated.localeDate() }} {{ entry.dateUpdated.localeTime() }}</div>*/
/* 							</div>*/
/* 							{% if entry.revisionNotes %}*/
/* 								<div class="data">*/
/* 									<h5 class="heading">{{ "Version Notes"|t }}</h5>*/
/* 									<div class="value">{{ entry.revisionNotes }}</div>*/
/* 								</div>*/
/* 							{% endif %}*/
/* 						</div>*/
/* 					{% endif %}*/
/* */
/* 				{% endif %}*/
/* */
/* 				{# Give plugins a chance to add other panes here #}*/
/* 				{% hook "cp.entries.edit.right-pane" %}*/
/* */
/* 				{% if (*/
/* 					not isDraft and not isVersion and canSave and*/
/* 					section.enableVersioning*/
/* 				) %}*/
/* 					<hr>*/
/* 					<input type="text" name="revisionNotes" class="fullwidth textline" placeholder="{{ 'Notes about your changes'|t }}" autocomplete="off">*/
/* 				{% endif %}*/
/* */
/* 			</div><!--/item-->*/
/* 		</div><!--/grid-->*/
/* {% endblock %}*/
/* */
/* */
/* {% if not entry.slug %}*/
/* 	{% includejs "window.slugGenerator = new Craft.SlugGenerator('#title', '#slug');" %}*/
/* {% endif %}*/
/* */
