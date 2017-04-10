/*
 * Treeview 1.4.1 - jQuery plugin to hide and show branches of a tree
 * 
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 *
 * Copyright (c) 2007 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.treeview.js 5759 2008-07-01 07:50:28Z joern.zaefferer $
 *
 */

;(function($) {

    // TODO rewrite as a widget, removing all the extra plugins
    $.extend($.fn, {
        swapClass: function(c1, c2) {
            var c1Elements = this.filter('.' + c1);
            this.filter('.' + c2).removeClass(c2).addClass(c1);
            c1Elements.removeClass(c1).addClass(c2);
            return this;
        },
        replaceClass: function(c1, c2) {
            return this.filter('.' + c1).removeClass(c1).addClass(c2).end();
        },
        hoverClass: function(className) {
            className = className || "hover";
            return this.hover(function() {
                $(this).addClass(className);
            }, function() {
                $(this).removeClass(className);
            });
        },
        heightToggle: function(animated, callback) {
            animated ?
                this.animate({ height: "toggle" }, animated, callback) :
                this.each(function(){
                    jQuery(this)[ jQuery(this).is(":hidden") ? "show" : "hide" ]();
                    if(callback)
                        callback.apply(this, arguments);
                });
        },
        heightHide: function(animated, callback) {
            if (animated) {
                this.animate({ height: "hide" }, animated, callback);
            } else {
                this.hide();
                if (callback)
                    this.each(callback);
            }
        },
        prepareBranches: function(settings) {
            if (!settings.prerendered) {
                // mark last tree items
                this.filter(":last-child:not(ul)").addClass(CLASSES.last);
                // collapse whole tree, or only those marked as closed, anyway except those marked as open
                this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide();
            }
            // return all items with sublists
            return this.filter(":has(>ul)");
        },
        applyHover: function () {
            // TODO use event delegation
            this.find("span[PageNumber!=\"-1\"]").hoverClass();
        },

        applyAction: function (settings) {
            function clearSelection(elements) {
                elements.removeClass("selected");
            }

            function clickHandler (eventarg) {
                if ($(this).attr("PageNumber") != "-1")
                {
                    clearSelection(eventarg.data.nodeCollection);
                    $(this).addClass("selected");
                    if (eventarg.data.actionClick) {
                        //eventarg.data.actionClick.call({"target":this});
                        eventarg.data.actionClick(this);
                    }
                }
            }
            this.click({"actionClick":settings.clickAction, "nodeCollection": this},clickHandler);
        },
        
        applyClasses: function(settings, toggler) {
            
            if (!settings.prerendered) {
                // handle closed ones first
                //this.filter(":has(>ul:hidden)")
                //        .addClass(CLASSES.expandable)
                //        .replaceClass(CLASSES.last, CLASSES.lastExpandable);

                // handle open ones
                //this.not(":has(>ul:hidden)")
                //        .addClass(CLASSES.collapsable)
                //        .replaceClass(CLASSES.last, CLASSES.lastCollapsable);

                this.addClass(CLASSES.collapsable)
                        .replaceClass(CLASSES.last, CLASSES.lastCollapsable);

                // create hitarea if not present
                var hitarea = this.find("div." + CLASSES.hitarea);
                if (!hitarea.length)
                    hitarea = this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea);
                hitarea.removeClass().addClass(CLASSES.hitarea).each(function() {
                    var classes = "";
                    $.each($(this).parent().attr("class").split(" "), function() {
                        classes += this + "-hitarea ";
                    });
                    $(this).addClass( classes );
                })
            }
            
            // apply event to hitarea
            this.find("div." + CLASSES.hitarea).click( toggler );
        },
        treeview: function(settings) {
            
            settings = $.extend({}, settings);
            
            if ( settings.toggle ) {
                var callback = settings.toggle;
                settings.toggle = function() {
                    return callback.apply($(this).parent()[0], arguments);
                };
            }

            // handle toggle event
            function toggler() {
                $(this)
                    .parent()
                    // swap classes for hitarea
                    .find(">.hitarea")
                        .swapClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
                        .swapClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
                    .end()
                    // swap classes for parent li
                    .swapClass( CLASSES.collapsable, CLASSES.expandable )
                    .swapClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
                    // find child lists
                    .find( ">ul" )
                    // toggle them
                    .heightToggle( settings.animated, settings.toggle );
                if ( settings.unique ) {
                    $(this).parent()
                        .siblings()
                        // swap classes for hitarea
                        .find(">.hitarea")
                            .replaceClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
                            .replaceClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
                        .end()
                        .replaceClass( CLASSES.collapsable, CLASSES.expandable )
                        .replaceClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
                        .find( ">ul" )
                        .heightHide( settings.animated, settings.toggle );
                }
            }

            this.addClass("treeview");

            // prepare branches and find all tree items with child lists
            var nodeElement = this.find("li");
            nodeElement.find("span").applyAction(settings);

            nodeElement.applyHover(toggler);

            var branches = nodeElement.prepareBranches(settings);

            branches.applyClasses(settings, toggler);


            return this;
        }
    });
    
    // classes used by the plugin
    // need to be styled via external stylesheet, see first example
    $.treeview = {};
    var CLASSES = ($.treeview.classes = {
        open: "open",
        closed: "closed",
        expandable: "expandable",
        expandableHitarea: "expandable-hitarea",
        lastExpandableHitarea: "lastExpandable-hitarea",
        collapsable: "collapsable",
        collapsableHitarea: "collapsable-hitarea",
        lastCollapsableHitarea: "lastCollapsable-hitarea",
        lastCollapsable: "lastCollapsable",
        lastExpandable: "lastExpandable",
        last: "last",
        hitarea: "hitarea"
    });
    
})(jQuery);