<?php

/* _layouts/cp */
class __TwigTemplate_f2b17afd257a12158215a556042fee28d4e668231a43a5bcfe0e9bd08e1be8a5 extends Craft\BaseTemplate
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("_layouts/basecp", "_layouts/cp", 1);
        $this->blocks = array(
            'saveButton' => array($this, 'block_saveButton'),
            'body' => array($this, 'block_body'),
            'pageHeader' => array($this, 'block_pageHeader'),
            'pageTitle' => array($this, 'block_pageTitle'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_layouts/basecp";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $_js = "css/cp.css";
        \Craft\craft()->templates->includecssresource($_js, true);
        // line 4
        \Craft\craft()->templates->includeTranslations(
        	"(blank)",
        	"1 update available",
        	"Actions",
        	"An unknown error occurred.",
        	"Any changes will be lost if you leave this page.",
        	"Are you sure you want to delete “{name}”?",
        	"Are you sure you want to transfer your license to this domain?",
        	"Buy {name}",
        	"Cancel",
        	"Choose a user",
        	"Choose which table columns should be visible for this source, and in which order.",
        	"Close",
        	"Close Live Preview",
        	"Continue",
        	"Couldn’t delete “{name}”.",
        	"Couldn’t save new order.",
        	"Create",
        	"day",
        	"days",
        	"Delete folder",
        	"Delete heading",
        	"Delete it",
        	"Delete user",
        	"Delete users",
        	"Delete",
        	"Display as thumbnails",
        	"Display in a table",
        	"Done",
        	"Enter the name of the folder",
        	"Enter your password to continue.",
        	"Enter your password to log back in.",
        	"Failed task",
        	"Failed",
        	"Handle",
        	"Heading",
        	"Hide sidebar",
        	"hour",
        	"hours",
        	"Incorrect password.",
        	"Instructions",
        	"Keep me logged in",
        	"License transferred.",
        	"Log out now",
        	"Login",
        	"minute",
        	"minutes",
        	"More",
        	"Move",
        	"Name",
        	"New category",
        	"New child",
        	"New entry",
        	"New heading",
        	"New order saved.",
        	"New position saved.",
        	"New subfolder",
        	"New {group} category",
        	"New {section} entry",
        	"Options",
        	"Password",
        	"Pay {price}",
        	"Pending",
        	"Really delete folder “{folder}”?",
        	"Remove",
        	"Rename folder",
        	"Reorder",
        	"Save",
        	"Score",
        	"Search in subfolders",
        	"second",
        	"seconds",
        	"Select transform",
        	"Select",
        	"Settings",
        	"Show sidebar",
        	"Show/hide children",
        	"Sort by {attribute}",
        	"Source settings saved",
        	"Structure",
        	"Submit",
        	"Table Columns",
        	"This can be left blank if you just want an unlabeled separator.",
        	"Transfer it to:",
        	"Try again",
        	"Upload failed for {filename}",
        	"Upload files",
        	"week",
        	"weeks",
        	"What do you want to do with their content?",
        	"What do you want to do?",
        	"Your session has ended.",
        	"Your session will expire in {time}.",
        	"{ctrl}C to copy.",
        	"{num} updates available",
        	"“{name}” deleted."
        );
        // line 103
        $context["task"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "tasks", array()), "getRunningTask", array(), "method");
        // line 104
        if ((isset($context["task"]) ? $context["task"] : null)) {
            // line 105
            $_js = (("Craft.cp.setRunningTaskInfo(" . $this->env->getExtension('craft')->jsonEncodeFilter($this->getAttribute((isset($context["task"]) ? $context["task"] : null), "getInfo", array(), "method"))) . ");");
            \Craft\craft()->templates->includejs($_js);
            // line 106
            $_js = "Craft.cp.trackTaskProgress();";
            \Craft\craft()->templates->includejs($_js);
        } elseif ($this->getAttribute($this->getAttribute(        // line 107
(isset($context["craft"]) ? $context["craft"] : null), "tasks", array()), "areTasksPending", array(), "method")) {
            // line 108
            $_js = "Craft.cp.runPendingTasks();";
            \Craft\craft()->templates->includejs($_js);
        } elseif ($this->getAttribute($this->getAttribute(        // line 109
(isset($context["craft"]) ? $context["craft"] : null), "tasks", array()), "haveTasksFailed", array(), "method")) {
            // line 110
            $_js = "Craft.cp.setRunningTaskInfo({ status: \"error\" });";
            \Craft\craft()->templates->includejs($_js);
        }
        // line 114
        $context["forceConfirmUnload"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "session", array()), "hasFlash", array(0 => "error"), "method");
        // line 115
        $context["fullPageForm"] = (array_key_exists("fullPageForm", $context) && (isset($context["fullPageForm"]) ? $context["fullPageForm"] : null));
        // line 117
        if (((isset($context["fullPageForm"]) ? $context["fullPageForm"] : null) &&  !array_key_exists("extraPageHeaderHtml", $context))) {
            // line 118
            ob_start();
            // line 119
            ob_start();
            // line 120
            echo "\t\t\t";
            $this->displayBlock('saveButton', $context, $blocks);
            // line 123
            echo "\t\t";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
            $context["extraPageHeaderHtml"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        }
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 120
    public function block_saveButton($context, array $blocks = array())
    {
        // line 121
        echo "\t\t\t\t<input type=\"submit\" class=\"btn submit\" value=\"";
        echo twig_escape_filter($this->env, \Craft\Craft::t("Save"), "html", null, true);
        echo "\">
\t\t\t";
    }

    // line 128
    public function block_body($context, array $blocks = array())
    {
        // line 129
        echo "\t<header id=\"global-sidebar\">

\t\t";
        // line 131
        if (($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "admin", array()) && $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "config", array()), "devMode", array()))) {
            // line 132
            echo "\t\t\t<div id=\"devmode\" title=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Craft CMS is running in Dev Mode."), "html", null, true);
            echo "\"></div>
\t\t";
        }
        // line 134
        echo "
\t\t<div class=\"topbar\">

\t\t\t<a class=\"site-name";
        // line 137
        if ((((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) >= (isset($context["CraftClient"]) ? $context["CraftClient"] : null)) && $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "rebrand", array()), "isIconUploaded", array()))) {
            echo " has-icon";
        }
        echo "\" href=\"";
        echo twig_escape_filter($this->env, (isset($context["siteUrl"]) ? $context["siteUrl"] : null), "html", null, true);
        echo "\" title=\"";
        echo twig_escape_filter($this->env, \Craft\Craft::t("Site Homepage"), "html", null, true);
        echo "\" target=\"_blank\">

\t\t\t\t";
        // line 139
        if (((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) >= (isset($context["CraftClient"]) ? $context["CraftClient"] : null))) {
            // line 140
            echo "\t\t\t\t\t";
            if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "rebrand", array()), "isIconUploaded", array())) {
                // line 141
                echo "\t\t\t\t\t\t<div id=\"site-icon\" class=\"photo-container\">
\t\t\t\t\t\t\t<img src=\"";
                // line 142
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "rebrand", array()), "icon", array()), "url", array()), "html", null, true);
                echo "\" alt=\"\">
\t\t\t\t\t\t</div>
\t\t\t\t\t";
            }
            // line 145
            echo "\t\t\t\t";
        }
        // line 146
        echo "
\t\t\t\t<h2>";
        // line 147
        echo twig_escape_filter($this->env, \Craft\Craft::t((isset($context["siteName"]) ? $context["siteName"] : null)), "html", null, true);
        echo "</h2>
\t\t\t</a>

\t\t\t";
        // line 150
        if ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => "performUpdates"), "method")) {
            // line 151
            echo "\t\t\t\t";
            if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "isUpdateInfoCached", array(), "method")) {
                // line 152
                echo "\t\t\t\t\t";
                $context["totalUpdates"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getTotalAvailableUpdates", array(), "method");
                // line 153
                echo "\t\t\t\t\t";
                if ((isset($context["totalUpdates"]) ? $context["totalUpdates"] : null)) {
                    // line 154
                    echo "\t\t\t\t\t\t";
                    if (((isset($context["totalUpdates"]) ? $context["totalUpdates"] : null) == 1)) {
                        // line 155
                        echo "\t\t\t\t\t\t\t";
                        $context["updateText"] = \Craft\Craft::t("1 update available");
                        // line 156
                        echo "\t\t\t\t\t\t";
                    } else {
                        // line 157
                        echo "\t\t\t\t\t\t\t";
                        $context["updateText"] = \Craft\Craft::t("{num} updates available", array("num" => (isset($context["totalUpdates"]) ? $context["totalUpdates"] : null)));
                        // line 158
                        echo "\t\t\t\t\t\t";
                    }
                    // line 159
                    echo "\t\t\t\t\t\t<a class=\"updates";
                    if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "isCriticalUpdateAvailable", array(), "method")) {
                        echo " critical";
                    }
                    echo "\" href=\"";
                    echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("updates"), "html", null, true);
                    echo "\" title=\"";
                    echo twig_escape_filter($this->env, (isset($context["updateText"]) ? $context["updateText"] : null), "html", null, true);
                    echo "\">
\t\t\t\t\t\t\t<span data-icon=\"newstamp\">
\t\t\t\t\t\t\t\t<span>";
                    // line 161
                    echo twig_escape_filter($this->env, (isset($context["totalUpdates"]) ? $context["totalUpdates"] : null), "html", null, true);
                    echo "</span>
\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t";
                }
                // line 165
                echo "\t\t\t\t";
            } else {
                // line 166
                echo "\t\t\t\t\t";
                $_js = "Craft.cp.checkForUpdates();";
                \Craft\craft()->templates->includejs($_js);
                // line 167
                echo "\t\t\t\t";
            }
            // line 168
            echo "\t\t\t";
        }
        // line 169
        echo "\t\t</div>

\t\t<nav>
\t\t\t<ul id=\"nav\">

\t\t\t\t";
        // line 174
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "cp", array()), "nav", array(), "method"));
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
        foreach ($context['_seq'] as $context["handle"] => $context["item"]) {
            // line 175
            echo "
\t\t\t\t\t";
            // line 176
            $context["hasSubnav"] = (array_key_exists("subnav", $context) && (isset($context["subnav"]) ? $context["subnav"] : null));
            // line 177
            echo "
\t\t\t\t\t<li id=\"nav-";
            // line 178
            echo twig_escape_filter($this->env, $context["handle"], "html", null, true);
            echo "\"";
            if (($this->getAttribute($context["item"], "sel", array()) && (isset($context["hasSubnav"]) ? $context["hasSubnav"] : null))) {
                echo " class=\"has-subnav\"";
            }
            echo ">
\t\t\t\t\t\t<a";
            // line 179
            if ($this->getAttribute($context["item"], "sel", array())) {
                echo " class=\"sel\"";
            }
            echo " href=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true);
            echo "\">
\t\t\t\t\t\t\t<span class=\"icon\">";
            // line 181
            if ($this->getAttribute($context["item"], "icon", array(), "any", true, true)) {
                // line 182
                echo "<span data-icon=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "icon", array()), "html", null, true);
                echo "\"></span>";
            } elseif (($this->getAttribute(            // line 183
$context["item"], "iconSvg", array(), "any", true, true) && $this->getAttribute($context["item"], "iconSvg", array()))) {
                // line 184
                echo $this->getAttribute($context["item"], "iconSvg", array());
            } else {
                // line 186
                $this->loadTemplate("_includes/defaulticon.svg", "_layouts/cp", 186)->display(array_merge($context, array("label" => $this->getAttribute($context["item"], "label", array()))));
            }
            // line 188
            echo "</span>

\t\t\t\t\t\t\t<span class=\"label\">";
            // line 191
            echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "label", array()), "html", null, true);
            // line 192
            echo "</span>";
            // line 194
            if (($this->getAttribute($context["item"], "badge", array(), "any", true, true) && $this->getAttribute($context["item"], "badge", array()))) {
                // line 195
                echo "<span class=\"badge\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "badge", array()), "html", null, true);
                echo "</span>";
            }
            // line 197
            echo "</a>

\t\t\t\t\t\t";
            // line 199
            if (($this->getAttribute($context["item"], "sel", array()) && (isset($context["hasSubnav"]) ? $context["hasSubnav"] : null))) {
                // line 200
                echo "\t\t\t\t            <ul class=\"subnav\">
\t\t\t\t                ";
                // line 201
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["subnav"]) ? $context["subnav"] : null));
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
                foreach ($context['_seq'] as $context["itemId"] => $context["item"]) {
                    // line 202
                    echo "\t\t\t\t                    ";
                    $context["itemIsSelected"] = ((                    // line 203
array_key_exists("selectedSubnavItem", $context) && ((isset($context["selectedSubnavItem"]) ? $context["selectedSubnavItem"] : null) == $context["itemId"])) || ( !                    // line 204
array_key_exists("selectedSubnavItem", $context) && $this->getAttribute($context["loop"], "first", array())));
                    // line 207
                    echo "<li>
\t\t\t\t                    \t<a href=\"";
                    // line 208
                    echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl($this->getAttribute($context["item"], "url", array())), "html", null, true);
                    echo "\"";
                    if ((isset($context["itemIsSelected"]) ? $context["itemIsSelected"] : null)) {
                        echo " class=\"sel\"";
                    }
                    echo ">";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "label", array()), "html", null, true);
                    echo "</a>
\t\t\t\t                    </li>

\t\t\t\t                ";
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
                unset($context['_seq'], $context['_iterated'], $context['itemId'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 212
                echo "\t\t\t\t            </ul>
\t\t\t\t\t\t";
            }
            // line 214
            echo "
\t\t\t\t\t</li>
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
        unset($context['_seq'], $context['_iterated'], $context['handle'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 217
        echo "
\t\t\t\t";
        // line 220
        echo "\t\t\t</ul>
\t\t</nav>

\t\t<div class=\"bottombar\">
\t\t\t<a id=\"account-info\" class=\"menubtn\" title=\"";
        // line 224
        echo twig_escape_filter($this->env, \Craft\Craft::t("My Account"), "html", null, true);
        echo "\" role=\"button\" data-menu-anchor=\"#account-menu-anchor\">
\t\t\t\t<div id=\"user-photo\" class=\"photo-container\">
\t\t\t\t\t<img width=\"32\" sizes=\"32px\" srcset=\"";
        // line 226
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "getThumbUrl", array(0 => 32), "method"), "html", null, true);
        echo " 32w, ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "getThumbUrl", array(0 => 64), "method"), "html", null, true);
        echo " 64w\" alt=\"";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "getName", array(), "method"), "html", null, true);
        echo "\">
\t\t\t\t</div>
\t\t\t\t<div class=\"username\">
\t\t\t\t\t";
        // line 229
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "name", array()), "html", null, true);
        echo "
\t\t\t\t\t";
        // line 230
        if ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "admin", array())) {
            echo "<div class=\"light\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("admin"), "html", null, true);
            echo "</div>";
        }
        // line 231
        echo "\t\t\t\t</div>
\t\t\t\t<div id=\"account-menu-anchor\"></div>
\t\t\t</a>
\t\t\t<div class=\"menu\" data-align=\"left\">
\t\t\t\t<ul>
\t\t\t\t\t<li><a href=\"";
        // line 236
        echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("myaccount"), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, \Craft\Craft::t("My Account"), "html", null, true);
        echo "</a></li>
\t\t\t\t\t";
        // line 237
        if ((((isset($context["CraftEdition"]) ? $context["CraftEdition"] : null) == (isset($context["CraftClient"]) ? $context["CraftClient"] : null)) && $this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "admin", array()))) {
            // line 238
            echo "\t\t\t\t\t\t<li><a href=\"";
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("clientaccount"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Client’s Account"), "html", null, true);
            echo "</a></li>
\t\t\t\t\t";
        }
        // line 240
        echo "\t\t\t\t\t<li><a href=\"";
        echo twig_escape_filter($this->env, (isset($context["logoutUrl"]) ? $context["logoutUrl"] : null), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, \Craft\Craft::t("Sign out"), "html", null, true);
        echo "</a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>

\t</header>

\t";
        // line 247
        if ((isset($context["fullPageForm"]) ? $context["fullPageForm"] : null)) {
            // line 248
            echo "\t\t<form id=\"container\" method=\"post\" accept-charset=\"UTF-8\" data-saveshortcut";
            if (array_key_exists("saveShortcutRedirect", $context)) {
                echo " data-saveshortcut-redirect=\"";
                echo twig_escape_filter($this->env, (isset($context["saveShortcutRedirect"]) ? $context["saveShortcutRedirect"] : null), "html", null, true);
                echo "\"";
            }
            echo " data-confirm-unload>
\t\t\t";
            // line 249
            echo twig_escape_filter($this->env, $this->env->getExtension('craft')->getCsrfInputFunction(), "html", null, true);
            echo "
\t";
        } else {
            // line 251
            echo "\t\t<div id=\"container\">
\t";
        }
        // line 253
        echo "
\t\t<div id=\"notifications-wrapper\">
\t\t\t<div id=\"notifications\">
\t\t\t\t";
        // line 256
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(array(0 => "notice", 1 => "error"));
        foreach ($context['_seq'] as $context["_key"] => $context["type"]) {
            // line 257
            echo "\t\t\t\t\t";
            $context["message"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "session", array()), "getFlash", array(0 => $context["type"]), "method");
            // line 258
            echo "\t\t\t\t\t";
            if ((isset($context["message"]) ? $context["message"] : null)) {
                // line 259
                echo "\t\t\t\t\t\t<div class=\"notification ";
                echo twig_escape_filter($this->env, $context["type"], "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, (isset($context["message"]) ? $context["message"] : null), "html", null, true);
                echo "</div>
\t\t\t\t\t";
            }
            // line 261
            echo "\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['type'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 262
        echo "\t\t\t</div>
\t\t</div>

\t\t";
        // line 265
        if ($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "cp", array()), "areAlertsCached", array(), "method")) {
            // line 266
            echo "\t\t\t";
            $context["alerts"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "cp", array()), "getAlerts", array(), "method");
            // line 267
            echo "\t\t\t";
            if ((isset($context["alerts"]) ? $context["alerts"] : null)) {
                // line 268
                echo "\t\t\t\t<ul id=\"alerts\">
\t\t\t\t\t";
                // line 269
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "cp", array()), "getAlerts", array(), "method"));
                foreach ($context['_seq'] as $context["_key"] => $context["alert"]) {
                    // line 270
                    echo "\t\t\t\t\t\t<li>";
                    echo $context["alert"];
                    echo "</li>
\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['alert'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 272
                echo "\t\t\t\t</ul>
\t\t\t";
            }
            // line 274
            echo "\t\t";
        } else {
            // line 275
            echo "\t\t\t";
            $_js = "Craft.cp.fetchAlerts();";
            \Craft\craft()->templates->includejs($_js);
            // line 276
            echo "\t\t";
        }
        // line 277
        echo "
\t\t<div class=\"topbar\">";
        // line 279
        ob_start();
        // line 280
        echo "\t\t\t\t";
        if ((array_key_exists("crumbs", $context) && (isset($context["crumbs"]) ? $context["crumbs"] : null))) {
            // line 281
            echo "\t\t\t\t\t<nav id=\"crumbs\">
\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t";
            // line 283
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["crumbs"]) ? $context["crumbs"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["crumb"]) {
                // line 284
                echo "\t\t\t\t\t\t\t\t<li><a href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["crumb"], "url", array()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["crumb"], "label", array()), "html", null, true);
                echo "</a></li>
\t\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['crumb'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 286
            echo "\t\t\t\t\t\t</ul>
\t\t\t\t\t</nav>
\t\t\t\t";
        }
        // line 289
        echo "\t\t\t";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        // line 290
        echo "</div>


\t\t<header id=\"page-header\">
\t\t\t";
        // line 294
        $this->displayBlock('pageHeader', $context, $blocks);
        // line 311
        echo "\t\t</header>

\t\t";
        // line 314
        echo "\t\t";
        $context["main"] = trim($this->renderBlock("main", $context, $blocks));
        // line 315
        echo "\t\t";
        $context["hasCustomLayout"] =  !twig_test_empty((isset($context["main"]) ? $context["main"] : null));
        // line 316
        echo "
\t\t<main id=\"main\" role=\"main\"";
        // line 317
        if ( !(isset($context["hasCustomLayout"]) ? $context["hasCustomLayout"] : null)) {
            echo " class=\"single-pane\"";
        }
        echo ">
\t\t\t<div class=\"padded\">
\t\t\t\t";
        // line 319
        if ((isset($context["hasCustomLayout"]) ? $context["hasCustomLayout"] : null)) {
            // line 320
            echo "\t\t\t\t\t";
            echo (isset($context["main"]) ? $context["main"] : null);
            echo "
\t\t\t\t";
        } else {
            // line 322
            echo "\t\t\t\t\t";
            $context["sidebar"] = ((array_key_exists("sidebar", $context)) ? ((isset($context["sidebar"]) ? $context["sidebar"] : null)) : (trim($this->renderBlock("sidebar", $context, $blocks))));
            // line 323
            echo "\t\t\t\t\t";
            $context["hasSidebar"] =  !twig_test_empty((isset($context["sidebar"]) ? $context["sidebar"] : null));
            // line 324
            echo "
\t\t\t\t\t<div class=\"pane\">
\t\t\t\t\t\t";
            // line 326
            if ((array_key_exists("tabs", $context) && (isset($context["tabs"]) ? $context["tabs"] : null))) {
                // line 327
                echo "\t\t\t\t\t\t\t";
                $this->loadTemplate("_includes/tabs", "_layouts/cp", 327)->display($context);
                // line 328
                echo "\t\t\t\t\t\t";
            }
            // line 329
            echo "
\t\t\t\t\t\t<div id=\"content\" class=\"content";
            // line 330
            if ((isset($context["hasSidebar"]) ? $context["hasSidebar"] : null)) {
                echo " has-sidebar";
            }
            echo "\">
\t\t\t\t\t\t\t";
            // line 331
            if ((isset($context["hasSidebar"]) ? $context["hasSidebar"] : null)) {
                // line 332
                echo "\t\t\t\t\t\t\t\t<div id=\"sidebar\" class=\"sidebar\">
\t\t\t\t\t\t\t\t\t";
                // line 333
                echo (isset($context["sidebar"]) ? $context["sidebar"] : null);
                echo "
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t";
            }
            // line 336
            echo "
\t\t\t\t\t\t\t<div class=\"body\">
\t\t\t\t\t\t\t\t";
            // line 338
            $this->displayBlock('content', $context, $blocks);
            // line 341
            echo "\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 345
        echo "\t\t\t</div>
\t\t</main>

\t\t";
        // line 348
        if ((array_key_exists("docsUrl", $context) &&  !twig_test_empty((isset($context["docsUrl"]) ? $context["docsUrl"] : null)))) {
            // line 349
            echo "\t\t\t<div id=\"help-footer\">
\t\t\t\t<a id=\"help\" class=\"help\" title=\"";
            // line 350
            echo twig_escape_filter($this->env, \Craft\Craft::t("Help"), "html", null, true);
            echo "\" href=\"";
            echo twig_escape_filter($this->env, (isset($context["docsUrl"]) ? $context["docsUrl"] : null), "html", null, true);
            echo "\" target=\"_blank\"></a>
\t\t\t</div>
\t\t";
        }
        // line 353
        echo "
\t\t<div id=\"footer\">";
        // line 356
        ob_start();
        // line 357
        echo "\t\t\t\t";
        $context["canUpgradeEdition"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "canUpgradeEdition", array(), "method");
        // line 358
        echo "\t\t\t\t";
        $context["licensedEdition"] = $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getLicensedEdition", array(), "method");
        // line 359
        echo "\t\t\t\t";
        $context["isTrial"] = ( !((isset($context["licensedEdition"]) ? $context["licensedEdition"] : null) === null) &&  !((isset($context["licensedEdition"]) ? $context["licensedEdition"] : null) === (isset($context["CraftEdition"]) ? $context["CraftEdition"] : null)));
        // line 360
        echo "
\t\t\t\t<div id=\"edition\" ";
        // line 361
        if ((isset($context["canUpgradeEdition"]) ? $context["canUpgradeEdition"] : null)) {
            echo "class=\"hot\" title=\"";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Manage your Craft CMS edition"), "html", null, true);
            echo "\"";
        } else {
            echo "class=\"edition\"";
        }
        echo ">
\t\t\t\t\t<div id=\"edition-logo\">
\t\t\t\t\t\t<div class=\"edition-name\">";
        // line 363
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getEditionName", array(), "method"), "html", null, true);
        echo "</div>
\t\t\t\t\t\t";
        // line 364
        if ((isset($context["isTrial"]) ? $context["isTrial"] : null)) {
            // line 365
            echo "\t\t\t\t\t\t\t<div class=\"edition-trial\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Trial"), "html", null, true);
            echo "</div>
\t\t\t\t\t\t";
        }
        // line 367
        echo "\t\t\t\t\t</div>
\t\t\t\t\t";
        // line 368
        if ((isset($context["canUpgradeEdition"]) ? $context["canUpgradeEdition"] : null)) {
            // line 369
            echo "\t\t\t\t\t\t<div class=\"icon settings\"></div>
\t\t\t\t\t";
        }
        // line 371
        echo "\t\t\t\t</div>
\t\t\t";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        // line 374
        echo "<ul>
\t\t\t\t<li>Craft CMS ";
        // line 375
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getVersion", array(), "method"), "html", null, true);
        echo ".";
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "getBuild", array(), "method"), "html", null, true);
        echo "</li>
\t\t\t\t<li>© Pixel &amp; Tonic</li>
\t\t\t\t";
        // line 377
        if ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "can", array(0 => "performUpdates"), "method")) {
            // line 378
            echo "\t\t\t\t\t<li><a id=\"footer-updates\" href=\"";
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("updates"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, (((($this->getAttribute($this->getAttribute((isset($context["craft"]) ? $context["craft"] : null), "app", array()), "isUpdateInfoCached", array(), "method") && array_key_exists("totalUpdates", $context)) && (isset($context["totalUpdates"]) ? $context["totalUpdates"] : null))) ? ((isset($context["updateText"]) ? $context["updateText"] : null)) : (\Craft\Craft::t("Check for updates"))), "html", null, true);
            echo "</a></li>
\t\t\t\t";
        }
        // line 380
        echo "\t\t\t\t";
        if ($this->getAttribute((isset($context["currentUser"]) ? $context["currentUser"] : null), "admin", array())) {
            // line 381
            echo "\t\t\t\t\t<li><a href=\"";
            echo twig_escape_filter($this->env, \Craft\UrlHelper::getUrl("utils/serverinfo"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, \Craft\Craft::t("Server Info"), "html", null, true);
            echo "</a></li>
\t\t\t\t";
        }
        // line 383
        echo "\t\t\t</ul>
\t\t</div>

\t";
        // line 386
        if ( !(isset($context["fullPageForm"]) ? $context["fullPageForm"] : null)) {
            // line 387
            echo "\t\t</div>
\t";
        } else {
            // line 389
            echo "\t\t</form>
\t";
        }
    }

    // line 294
    public function block_pageHeader($context, array $blocks = array())
    {
        // line 295
        echo "
\t\t\t\t<div id=\"page-title\">
\t\t\t\t\t";
        // line 297
        $this->displayBlock('pageTitle', $context, $blocks);
        // line 302
        echo "\t\t\t\t</div>

\t\t\t\t";
        // line 304
        if (array_key_exists("extraPageHeaderHtml", $context)) {
            // line 305
            echo "\t\t\t\t\t<div id=\"extra-headers\">
\t\t\t\t\t\t";
            // line 306
            echo (isset($context["extraPageHeaderHtml"]) ? $context["extraPageHeaderHtml"] : null);
            echo "
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 309
        echo "
\t\t\t";
    }

    // line 297
    public function block_pageTitle($context, array $blocks = array())
    {
        // line 298
        echo "\t\t\t\t\t\t";
        if ((array_key_exists("title", $context) && (isset($context["title"]) ? $context["title"] : null))) {
            // line 299
            echo "\t\t\t\t\t\t\t<h1>";
            echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
            echo "</h1>
\t\t\t\t\t\t";
        }
        // line 301
        echo "\t\t\t\t\t";
    }

    // line 338
    public function block_content($context, array $blocks = array())
    {
        // line 339
        echo "\t\t\t\t\t\t\t\t\t";
        echo twig_escape_filter($this->env, ((array_key_exists("content", $context)) ? ((isset($context["content"]) ? $context["content"] : null)) : ("")), "html", null, true);
        echo "
\t\t\t\t\t\t\t\t";
    }

    public function getTemplateName()
    {
        return "_layouts/cp";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  903 => 339,  900 => 338,  896 => 301,  890 => 299,  887 => 298,  884 => 297,  879 => 309,  873 => 306,  870 => 305,  868 => 304,  864 => 302,  862 => 297,  858 => 295,  855 => 294,  849 => 389,  845 => 387,  843 => 386,  838 => 383,  830 => 381,  827 => 380,  819 => 378,  817 => 377,  810 => 375,  807 => 374,  803 => 371,  799 => 369,  797 => 368,  794 => 367,  788 => 365,  786 => 364,  782 => 363,  771 => 361,  768 => 360,  765 => 359,  762 => 358,  759 => 357,  757 => 356,  754 => 353,  746 => 350,  743 => 349,  741 => 348,  736 => 345,  730 => 341,  728 => 338,  724 => 336,  718 => 333,  715 => 332,  713 => 331,  707 => 330,  704 => 329,  701 => 328,  698 => 327,  696 => 326,  692 => 324,  689 => 323,  686 => 322,  680 => 320,  678 => 319,  671 => 317,  668 => 316,  665 => 315,  662 => 314,  658 => 311,  656 => 294,  650 => 290,  647 => 289,  642 => 286,  631 => 284,  627 => 283,  623 => 281,  620 => 280,  618 => 279,  615 => 277,  612 => 276,  608 => 275,  605 => 274,  601 => 272,  592 => 270,  588 => 269,  585 => 268,  582 => 267,  579 => 266,  577 => 265,  572 => 262,  566 => 261,  558 => 259,  555 => 258,  552 => 257,  548 => 256,  543 => 253,  539 => 251,  534 => 249,  525 => 248,  523 => 247,  510 => 240,  502 => 238,  500 => 237,  494 => 236,  487 => 231,  481 => 230,  477 => 229,  467 => 226,  462 => 224,  456 => 220,  453 => 217,  437 => 214,  433 => 212,  409 => 208,  406 => 207,  404 => 204,  403 => 203,  401 => 202,  384 => 201,  381 => 200,  379 => 199,  375 => 197,  370 => 195,  368 => 194,  366 => 192,  364 => 191,  360 => 188,  357 => 186,  354 => 184,  352 => 183,  348 => 182,  346 => 181,  338 => 179,  330 => 178,  327 => 177,  325 => 176,  322 => 175,  305 => 174,  298 => 169,  295 => 168,  292 => 167,  288 => 166,  285 => 165,  278 => 161,  266 => 159,  263 => 158,  260 => 157,  257 => 156,  254 => 155,  251 => 154,  248 => 153,  245 => 152,  242 => 151,  240 => 150,  234 => 147,  231 => 146,  228 => 145,  222 => 142,  219 => 141,  216 => 140,  214 => 139,  203 => 137,  198 => 134,  192 => 132,  190 => 131,  186 => 129,  183 => 128,  176 => 121,  173 => 120,  169 => 1,  164 => 123,  161 => 120,  159 => 119,  157 => 118,  155 => 117,  153 => 115,  151 => 114,  147 => 110,  145 => 109,  142 => 108,  140 => 107,  137 => 106,  134 => 105,  132 => 104,  130 => 103,  32 => 4,  29 => 3,  11 => 1,);
    }
}
/* {% extends "_layouts/basecp" %}*/
/* */
/* {% includecssresource "css/cp.css" first %}*/
/* {% includeTranslations*/
/* 	"(blank)",*/
/* 	"1 update available",*/
/* 	"Actions",*/
/* 	"An unknown error occurred.",*/
/* 	"Any changes will be lost if you leave this page.",*/
/* 	"Are you sure you want to delete “{name}”?",*/
/* 	"Are you sure you want to transfer your license to this domain?",*/
/* 	"Buy {name}",*/
/* 	"Cancel",*/
/* 	"Choose a user",*/
/* 	"Choose which table columns should be visible for this source, and in which order.",*/
/* 	"Close",*/
/* 	"Close Live Preview",*/
/* 	"Continue",*/
/* 	"Couldn’t delete “{name}”.",*/
/* 	"Couldn’t save new order.",*/
/* 	"Create",*/
/* 	"day",*/
/* 	"days",*/
/* 	"Delete folder",*/
/* 	"Delete heading",*/
/* 	"Delete it",*/
/* 	"Delete user",*/
/* 	"Delete users",*/
/* 	"Delete",*/
/* 	"Display as thumbnails",*/
/* 	"Display in a table",*/
/* 	"Done",*/
/* 	"Enter the name of the folder",*/
/* 	"Enter your password to continue.",*/
/* 	"Enter your password to log back in.",*/
/* 	"Failed task",*/
/* 	"Failed",*/
/* 	"Handle",*/
/* 	"Heading",*/
/* 	"Hide sidebar",*/
/* 	"hour",*/
/* 	"hours",*/
/* 	"Incorrect password.",*/
/* 	"Instructions",*/
/* 	"Keep me logged in",*/
/* 	"License transferred.",*/
/* 	"Log out now",*/
/* 	"Login",*/
/* 	"minute",*/
/* 	"minutes",*/
/* 	"More",*/
/* 	"Move",*/
/* 	"Name",*/
/* 	"New category",*/
/* 	"New child",*/
/* 	"New entry",*/
/* 	"New heading",*/
/* 	"New order saved.",*/
/* 	"New position saved.",*/
/* 	"New subfolder",*/
/* 	"New {group} category",*/
/* 	"New {section} entry",*/
/* 	"Options",*/
/* 	"Password",*/
/* 	"Pay {price}",*/
/* 	"Pending",*/
/* 	"Really delete folder “{folder}”?",*/
/* 	"Remove",*/
/* 	"Rename folder",*/
/* 	"Reorder",*/
/* 	"Save",*/
/* 	"Score",*/
/* 	"Search in subfolders",*/
/* 	"second",*/
/* 	"seconds",*/
/* 	"Select transform",*/
/* 	"Select",*/
/* 	"Settings",*/
/* 	"Show sidebar",*/
/* 	"Show/hide children",*/
/* 	"Sort by {attribute}",*/
/* 	"Source settings saved",*/
/* 	"Structure",*/
/* 	"Submit",*/
/* 	"Table Columns",*/
/* 	"This can be left blank if you just want an unlabeled separator.",*/
/* 	"Transfer it to:",*/
/* 	"Try again",*/
/* 	"Upload failed for {filename}",*/
/* 	"Upload files",*/
/* 	"week",*/
/* 	"weeks",*/
/* 	"What do you want to do with their content?",*/
/* 	"What do you want to do?",*/
/* 	"Your session has ended.",*/
/* 	"Your session will expire in {time}.",*/
/* 	"{ctrl}C to copy.",*/
/* 	"{num} updates available",*/
/* 	"“{name}” deleted."*/
/* %}*/
/* */
/* */
/* {% set task = craft.tasks.getRunningTask() %}*/
/* {% if task %}*/
/* 	{% includejs 'Craft.cp.setRunningTaskInfo('~task.getInfo()|json_encode|raw~');' %}*/
/* 	{% includejs 'Craft.cp.trackTaskProgress();' %}*/
/* {% elseif craft.tasks.areTasksPending() %}*/
/* 	{% includejs 'Craft.cp.runPendingTasks();' %}*/
/* {% elseif craft.tasks.haveTasksFailed() %}*/
/* 	{% includejs 'Craft.cp.setRunningTaskInfo({ status: "error" });' %}*/
/* {% endif %}*/
/* */
/* */
/* {% set forceConfirmUnload = craft.session.hasFlash('error') %}*/
/* {% set fullPageForm = (fullPageForm is defined and fullPageForm) %}*/
/* */
/* {% if fullPageForm and extraPageHeaderHtml is not defined %}*/
/* 	{% set extraPageHeaderHtml %}*/
/* 		{%- spaceless %}*/
/* 			{% block saveButton %}*/
/* 				<input type="submit" class="btn submit" value="{{ 'Save'|t }}">*/
/* 			{% endblock %}*/
/* 		{% endspaceless -%}*/
/* 	{% endset %}*/
/* {% endif %}*/
/* */
/* */
/* {% block body %}*/
/* 	<header id="global-sidebar">*/
/* */
/* 		{% if currentUser.admin and craft.config.devMode %}*/
/* 			<div id="devmode" title="{{ 'Craft CMS is running in Dev Mode.'|t }}"></div>*/
/* 		{% endif %}*/
/* */
/* 		<div class="topbar">*/
/* */
/* 			<a class="site-name{% if CraftEdition >= CraftClient and craft.rebrand.isIconUploaded %} has-icon{% endif %}" href="{{ siteUrl }}" title="{{ 'Site Homepage'|t }}" target="_blank">*/
/* */
/* 				{% if CraftEdition >= CraftClient %}*/
/* 					{% if craft.rebrand.isIconUploaded %}*/
/* 						<div id="site-icon" class="photo-container">*/
/* 							<img src="{{ craft.rebrand.icon.url }}" alt="">*/
/* 						</div>*/
/* 					{% endif %}*/
/* 				{% endif %}*/
/* */
/* 				<h2>{{ siteName|t }}</h2>*/
/* 			</a>*/
/* */
/* 			{% if currentUser.can('performUpdates') %}*/
/* 				{% if craft.app.isUpdateInfoCached() %}*/
/* 					{% set totalUpdates = craft.app.getTotalAvailableUpdates() %}*/
/* 					{% if totalUpdates %}*/
/* 						{% if totalUpdates == 1 %}*/
/* 							{% set updateText = "1 update available"|t %}*/
/* 						{% else %}*/
/* 							{% set updateText = "{num} updates available"|t({ num: totalUpdates }) %}*/
/* 						{% endif %}*/
/* 						<a class="updates{% if craft.app.isCriticalUpdateAvailable() %} critical{% endif %}" href="{{ url('updates') }}" title="{{ updateText }}">*/
/* 							<span data-icon="newstamp">*/
/* 								<span>{{ totalUpdates }}</span>*/
/* 							</span>*/
/* 						</a>*/
/* 					{% endif %}*/
/* 				{% else %}*/
/* 					{% includejs 'Craft.cp.checkForUpdates();' %}*/
/* 				{% endif %}*/
/* 			{% endif %}*/
/* 		</div>*/
/* */
/* 		<nav>*/
/* 			<ul id="nav">*/
/* */
/* 				{% for handle, item in craft.cp.nav() %}*/
/* */
/* 					{% set hasSubnav = (subnav is defined and subnav) %}*/
/* */
/* 					<li id="nav-{{ handle }}"{% if item.sel and hasSubnav %} class="has-subnav"{% endif %}>*/
/* 						<a{% if item.sel %} class="sel"{% endif %} href="{{ item.url }}">*/
/* 							<span class="icon">*/
/* 								{%- if item.icon is defined -%}*/
/* 									<span data-icon="{{ item.icon }}"></span>*/
/* 								{%- elseif item.iconSvg is defined and item.iconSvg -%}*/
/* 									{{ item.iconSvg|raw }}*/
/* 								{%- else -%}*/
/* 									{% include "_includes/defaulticon.svg" with { label: item.label } %}*/
/* 								{%- endif -%}*/
/* 							</span>*/
/* */
/* 							<span class="label">*/
/* 								{{- item.label -}}*/
/* 							</span>*/
/* */
/* 							{%- if item.badge is defined and item.badge -%}*/
/* 								<span class="badge">{{ item.badge }}</span>*/
/* 							{%- endif -%}*/
/* 						</a>*/
/* */
/* 						{% if item.sel and hasSubnav  %}*/
/* 				            <ul class="subnav">*/
/* 				                {% for itemId, item in subnav %}*/
/* 				                    {% set itemIsSelected = (*/
/* 				                        (selectedSubnavItem is defined and selectedSubnavItem == itemId) or*/
/* 				                        (selectedSubnavItem is not defined and loop.first)*/
/* 				                    ) -%}*/
/* */
/* 				                    <li>*/
/* 				                    	<a href="{{ url(item.url) }}"{% if itemIsSelected %} class="sel"{% endif %}>{{ item.label }}</a>*/
/* 				                    </li>*/
/* */
/* 				                {% endfor %}*/
/* 				            </ul>*/
/* 						{% endif %}*/
/* */
/* 					</li>*/
/* 				{% endfor %}*/
/* */
/* 				{#*/
/* 				#}*/
/* 			</ul>*/
/* 		</nav>*/
/* */
/* 		<div class="bottombar">*/
/* 			<a id="account-info" class="menubtn" title="{{ 'My Account'|t }}" role="button" data-menu-anchor="#account-menu-anchor">*/
/* 				<div id="user-photo" class="photo-container">*/
/* 					<img width="32" sizes="32px" srcset="{{ currentUser.getThumbUrl(32) }} 32w, {{ currentUser.getThumbUrl(64) }} 64w" alt="{{ currentUser.getName() }}">*/
/* 				</div>*/
/* 				<div class="username">*/
/* 					{{ currentUser.name }}*/
/* 					{% if currentUser.admin %}<div class="light">{{ 'admin'|t }}</div>{% endif %}*/
/* 				</div>*/
/* 				<div id="account-menu-anchor"></div>*/
/* 			</a>*/
/* 			<div class="menu" data-align="left">*/
/* 				<ul>*/
/* 					<li><a href="{{ url('myaccount') }}">{{ "My Account"|t }}</a></li>*/
/* 					{% if CraftEdition == CraftClient and currentUser.admin %}*/
/* 						<li><a href="{{ url('clientaccount') }}">{{ "Client’s Account"|t }}</a></li>*/
/* 					{% endif %}*/
/* 					<li><a href="{{ logoutUrl }}">{{ "Sign out"|t }}</a></li>*/
/* 				</ul>*/
/* 			</div>*/
/* 		</div>*/
/* */
/* 	</header>*/
/* */
/* 	{% if fullPageForm %}*/
/* 		<form id="container" method="post" accept-charset="UTF-8" data-saveshortcut{% if saveShortcutRedirect is defined %} data-saveshortcut-redirect="{{ saveShortcutRedirect }}"{% endif %} data-confirm-unload>*/
/* 			{{ getCsrfInput() }}*/
/* 	{% else %}*/
/* 		<div id="container">*/
/* 	{% endif %}*/
/* */
/* 		<div id="notifications-wrapper">*/
/* 			<div id="notifications">*/
/* 				{% for type in ['notice', 'error'] %}*/
/* 					{% set message = craft.session.getFlash(type) %}*/
/* 					{% if message %}*/
/* 						<div class="notification {{ type }}">{{ message }}</div>*/
/* 					{% endif %}*/
/* 				{% endfor %}*/
/* 			</div>*/
/* 		</div>*/
/* */
/* 		{% if craft.cp.areAlertsCached() %}*/
/* 			{% set alerts = craft.cp.getAlerts() %}*/
/* 			{% if alerts %}*/
/* 				<ul id="alerts">*/
/* 					{% for alert in craft.cp.getAlerts() %}*/
/* 						<li>{{ alert|raw }}</li>*/
/* 					{% endfor %}*/
/* 				</ul>*/
/* 			{% endif %}*/
/* 		{% else %}*/
/* 			{% includejs 'Craft.cp.fetchAlerts();' %}*/
/* 		{% endif %}*/
/* */
/* 		<div class="topbar">*/
/* 			{%- spaceless %}*/
/* 				{% if crumbs is defined and crumbs %}*/
/* 					<nav id="crumbs">*/
/* 						<ul>*/
/* 							{% for crumb in crumbs %}*/
/* 								<li><a href="{{ crumb.url }}">{{ crumb.label }}</a></li>*/
/* 							{% endfor %}*/
/* 						</ul>*/
/* 					</nav>*/
/* 				{% endif %}*/
/* 			{% endspaceless -%}*/
/* 		</div>*/
/* */
/* */
/* 		<header id="page-header">*/
/* 			{% block pageHeader %}*/
/* */
/* 				<div id="page-title">*/
/* 					{% block pageTitle %}*/
/* 						{% if title is defined and title %}*/
/* 							<h1>{{ title }}</h1>*/
/* 						{% endif %}*/
/* 					{% endblock %}*/
/* 				</div>*/
/* */
/* 				{% if extraPageHeaderHtml is defined %}*/
/* 					<div id="extra-headers">*/
/* 						{{ extraPageHeaderHtml|raw }}*/
/* 					</div>*/
/* 				{% endif %}*/
/* */
/* 			{% endblock %}*/
/* 		</header>*/
/* */
/* 		{# Is the template defining its own layout? #}*/
/* 		{% set main = block('main')|trim %}*/
/* 		{% set hasCustomLayout = (main is not empty) %}*/
/* */
/* 		<main id="main" role="main"{% if not hasCustomLayout %} class="single-pane"{% endif %}>*/
/* 			<div class="padded">*/
/* 				{% if hasCustomLayout %}*/
/* 					{{ main|raw }}*/
/* 				{% else %}*/
/* 					{% set sidebar = sidebar is defined ? sidebar : block('sidebar')|trim %}*/
/* 					{% set hasSidebar = (sidebar is not empty) %}*/
/* */
/* 					<div class="pane">*/
/* 						{% if tabs is defined and tabs %}*/
/* 							{% include "_includes/tabs" %}*/
/* 						{% endif %}*/
/* */
/* 						<div id="content" class="content{% if hasSidebar %} has-sidebar{% endif %}">*/
/* 							{% if hasSidebar %}*/
/* 								<div id="sidebar" class="sidebar">*/
/* 									{{ sidebar|raw }}*/
/* 								</div>*/
/* 							{% endif %}*/
/* */
/* 							<div class="body">*/
/* 								{% block content %}*/
/* 									{{ content is defined ? content }}*/
/* 								{% endblock %}*/
/* 							</div>*/
/* 						</div>*/
/* 					</div>*/
/* 				{% endif %}*/
/* 			</div>*/
/* 		</main>*/
/* */
/* 		{% if docsUrl is defined and docsUrl is not empty %}*/
/* 			<div id="help-footer">*/
/* 				<a id="help" class="help" title="{{ 'Help'|t }}" href="{{ docsUrl }}" target="_blank"></a>*/
/* 			</div>*/
/* 		{% endif %}*/
/* */
/* 		<div id="footer">*/
/* */
/* 			{%- spaceless %}*/
/* 				{% set canUpgradeEdition = craft.app.canUpgradeEdition() %}*/
/* 				{% set licensedEdition = craft.app.getLicensedEdition() %}*/
/* 				{% set isTrial = licensedEdition is not sameas(null) and licensedEdition is not sameas(CraftEdition) %}*/
/* */
/* 				<div id="edition" {% if canUpgradeEdition %}class="hot" title="{{ 'Manage your Craft CMS edition'|t }}"{% else %}class="edition"{% endif %}>*/
/* 					<div id="edition-logo">*/
/* 						<div class="edition-name">{{ craft.app.getEditionName() }}</div>*/
/* 						{% if isTrial %}*/
/* 							<div class="edition-trial">{{ "Trial"|t }}</div>*/
/* 						{% endif %}*/
/* 					</div>*/
/* 					{% if canUpgradeEdition %}*/
/* 						<div class="icon settings"></div>*/
/* 					{% endif %}*/
/* 				</div>*/
/* 			{% endspaceless -%}*/
/* */
/* 			<ul>*/
/* 				<li>Craft CMS {{ craft.app.getVersion() }}.{{ craft.app.getBuild() }}</li>*/
/* 				<li>© Pixel &amp; Tonic</li>*/
/* 				{% if currentUser.can('performUpdates') %}*/
/* 					<li><a id="footer-updates" href="{{ url('updates') }}">{{ craft.app.isUpdateInfoCached() and totalUpdates is defined and totalUpdates ? updateText : "Check for updates"|t }}</a></li>*/
/* 				{% endif %}*/
/* 				{% if currentUser.admin %}*/
/* 					<li><a href="{{ url('utils/serverinfo') }}">{{ "Server Info"|t }}</a></li>*/
/* 				{% endif %}*/
/* 			</ul>*/
/* 		</div>*/
/* */
/* 	{% if not fullPageForm %}*/
/* 		</div>*/
/* 	{% else %}*/
/* 		</form>*/
/* 	{% endif %}*/
/* {% endblock %}*/
/* */
