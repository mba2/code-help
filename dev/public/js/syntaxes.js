function StartUp(myObject) {
    $(document).ready(myObject.run);
}

var Log = {
    success: [],
    addSuccess: function(response, url) {
        var obj = {};
        obj["response"] = response;
        obj["status"] = "ajax call successfully";
        obj["address"] = url;
        Log.success.push(obj);
    },
    errors: [],
    addError: function(givenStatus, givenError, url) {
        var obj = {};
        obj["status"] = givenStatus;
        obj["description"] = givenError;
        obj["address"] = url;
        Log.errors.push(obj);
    }
};

var Search = {
    query: function(event) {
        event.preventDefault();
        var $form = $("#search_form"), selectedLangs = $form.find("input[name='lang[]']:checked"), values = [], string = $form.find("#search_field").val(), url = "../resources/helpers/search-syntax.php", currentJSON = "";
        selectedLangs.each(function() {
            values.push($(this).val());
        });
        $.ajax({
            url: url,
            type: "post",
            data: {
                lang: values,
                string: string
            },
            success: function(response, status, xhr) {
                Log.addSuccess(response, url);
                Search.loadResult(response);
            },
            error: function(xhr, status, error) {
                Log.addError(status, error, url);
            }
        });
    },
    loadResult: function(givenJSON) {
        currentJSON = JSON.parse(givenJSON);
        if (currentJSON.hasOwnProperty("status")) {
            var status = currentJSON["status"], msg = currentJSON["msg"], $alertArea = $(".alert_area"), $alert = $("<p/>").addClass("my_alert");
            $alert.addClass(function() {
                if (status == "no language selected" || status == "no string passed") {
                    return "error";
                } else {
                    return "warning";
                }
            });
            $alertArea.html($alert.text(msg));
            return false;
        }
        $alertArea = $(".alert_area").empty();
        var lengthJSON = currentJSON.length, $tbody = $(".results_table tbody");
        $tbody.empty();
        for (var i = 0; i < lengthJSON; i++) {
            var $langDesc = $("<td/>").addClass("lang_description").text(currentJSON[i]["languageDesc"]), $syntaxDesc = $("<td/>").addClass("syntax_desc").text(currentJSON[i]["syntaxDesc"]), $syntaxBody = $("<td/>").addClass("syntax_body").text(currentJSON[i]["syntaxBody"]), $syntaxNotes = $("<td/>").addClass("syntax_notes").text(currentJSON[i]["syntaxNotes"]), $row = $("<tr/>").addClass("syntax_row").attr("data-id", currentJSON[i]["syntaxID"]).append($langDesc, $syntaxDesc, $syntaxBody, $syntaxNotes);
            $tbody.append($row);
            console.log(currentJSON[i]);
        }
        $("#show_hide_nav_btn").prop("checked", false);
    }
};

var Navigation = {
    toggleLangs: function(event) {
        var $form = $("#search_form");
        if ($(event.target).attr("id") === "select_all_btn") {
            $form.find(".lang_option_input").prop("checked", true);
        } else {
            $form.find(".lang_option_input").prop("checked", false);
        }
    }
};

var Page = {
    createOverlay: function(event) {
        var $overlay = $("#overlay").length ? $("#overlay") : $("<div id='overlay'>                                                                                       <span class='close_btn'>X</span>                                                                                       <div class='my_modal'></div>                                                                                    </div>");
        $("main").append($overlay);
        $overlay.on("click", Page.removeOverlay);
        $("body").on("keyup", Page.removeOverlay);
    },
    removeOverlay: function(event) {
        var $target = $(event.target);
        if ($target.is("#overlay") || $target.is(".close_btn")) {
            $("main").find("#overlay").remove();
        }
        if (event.which == 27) {
            $("main").find("#overlay").remove();
        }
        $(".overlay").off("click", Page.removeOverlay);
        $("body").off("keyup", Page.removeOverlay);
    },
    contextMenu: {
        open: function() {
            if ($("#context_menu").length) {
                var $contextMenu = $("#context_menu");
                return $contextMenu;
            } else {
                var $contextMenu = $("<div id='context_menu' class='context_menu'>                                                                <span id='open_syntax_menu_context_btn' class='context_menu_btn'>Open</span>                                                                <span id='remove_syntax_menu_context_btn' class='context_menu_btn'>Remove</span>                                                              </div>");
                return $contextMenu;
            }
        },
        close: function() {
            $("#context_menu").remove();
        }
    },
    clicks: {
        run: function() {
            $(document).click(function(event) {
                var $target = $(event.target);
                if (!$target.is(".context_menu_btn")) Page.contextMenu.close();
                console.log($target);
            });
            console.log("All clicks at (document) are handled over here!!");
        }
    }
};

var Syntax = {
    openNewWindow: function() {
        Page.createOverlay();
        var $myModal = $(".my_modal").load("../resources/includes/new-syntax.html");
    },
    newSyntax: {
        example: {
            add: function() {
                var $examplesArea = $("#examples_area"), url = "../resources/includes/example.html";
                $.ajax({
                    url: url,
                    success: function(response, status, xhr) {
                        Log.addSuccess(response, url);
                        $examplesArea.append(response);
                    },
                    error: function(xhr, status, error) {
                        Log.addError(status, error, url);
                        return false;
                    }
                });
            },
            remove: function() {
                $node = $(this), $example = $node.parent().parent().remove();
            },
            save: function() {}
        }
    },
    saveSyntax: {
        new: function(event) {
            event.preventDefault();
            var $node = $(this), $form = $node.parent(), $syntaxLang = $form.find("#syntax_lang_field").val(), $syntaxBody = $form.find("#syntax_body_field").val(), $syntaxDesc = $form.find("#syntax_notes_field").val(), $syntaxNotes = $form.find("#syntax_desc_field").val(), $examplesArea = $("#examples_area"), examples = [], $examples = $examplesArea.find("div.example").each(function() {
                examples.push($(this).find("textarea").val());
            }), url = "../resources/helpers/save-syntax.php", data = {
                syntaxLang: $syntaxLang,
                syntaxBody: $syntaxBody,
                syntaxDesc: $syntaxDesc,
                syntaxNotes: $syntaxNotes,
                examples: examples
            };
            console.log(examples);
            $.ajax({
                url: url,
                data: data,
                type: "post",
                success: function(response) {
                    var $newSyntaxArea = $("#new_syntax_area").empty(), $addNewSyntaxBtn = $("<button id='add_new_syntax_btn' class='add_new_syntax_btn'>Add New Syntax</button>"), $alert = $("</p>").addClass("my_alert");
                    if (response[0] != "{") {
                        $addNewSyntaxBtn.text("Try Again");
                        $alert.addClass("error");
                        $newSyntaxArea.append($alert.text("Sorry, syntax could not be saved on the database"), $addNewSyntaxBtn);
                        var errorMsg = "There's something right before the JSON Object or there's no JSON Object at all";
                        Log.addError("error", errorMsg, url);
                        return false;
                    } else {
                        var currJSON = JSON.parse(response);
                        if (currJSON["status"] === "success") $alert.addClass("warning"); else if (currJSON["status"] === "error") {
                            $addNewSyntaxBtn.text("Try Again");
                            $alert.addClass("error");
                            if (currJSON["addInfo"]) console.log(currJSON["addInfo"]);
                        }
                        $newSyntaxArea.append($alert.text(currJSON["msg"]), $addNewSyntaxBtn);
                    }
                }
            });
        }
    },
    editSyntax: {
        openSyntax: function(event) {
            var $node = $(this);
            $node.addClass("selected_row"), $contextMenu = Page.contextMenu.open();
            $("main").append($contextMenu.css({
                top: event.pageY,
                left: event.pageX
            }));
            return $contextMenu;
        },
        saveSyntax: function(event) {}
    },
    removeSyntax: {
        options: function() {
            var $target = $(event.target);
            if ($target.is(".context_menu_btn")) {
                var $contextMenu = $("#context_menu");
                $contextMenu.empty();
                var $confirmationBox = $("<div id='remove_confirmation_box' class='confirmation_box'>                                                                                                                             <p>Still wanna remove it?</p>                                                                                                                                                         <div>                                                                                                                                                                                   <button id='remove_syntax_menu_context_cancel_btn'  class='confirmation_btn'>Cancel</button>                                                                                          <button id='remove_syntax_menu_context_confirm_btn' class='confirmation_btn'>Remove</button>                                                                                        </div>                                                                                                                                                                              </div>");
                $contextMenu.addClass("confirmation").html($confirmationBox);
                console.log("Context menu REMOVING");
            } else if ($target.is(".syntax_modal_btn")) {}
        },
        confirm: function() {
            var $node = $(this), url = "../resources/helpers/remove-syntax.php", syntaxID = $("main").find(".selected_row").attr("data-id"), data = {
                syntaxID: syntaxID
            };
            $.ajax({
                url: url,
                type: "post",
                data: data,
                success: function(response) {
                    Log.addSuccess(response, url);
                    url = "../resources/helpers/search-syntax.php";
                    data = {
                        lastQuery: true
                    };
                    $.ajax({
                        url: url,
                        type: "post",
                        data: data,
                        success: function(response2) {
                            Search.loadResult(response2);
                            Log.addSuccess(response2, url);
                        }
                    });
                },
                error: function() {}
            });
            console.log("confirm exclusion");
        },
        cancel: function(event) {
            $("#context_menu").removeClass("confirmation").html("<span id='open_syntax_menu_context_btn' class='context_menu_btn'>Open</span>                                                                   <span id='remove_syntax_menu_context_btn' class='context_menu_btn'>Remove</span>");
            console.log("cancel");
        }
    },
    syntaxForms: {
        run: function() {
            var $main = $("main"), $form = $main.find("#new_syntax_form"), addExampleStr = "#add_example_btn", $addExampleBtn = $form.find(addExampleStr), removeExampleStr = ".remove_example_btn", $removeExamplebtn = $form.find(removeExampleStr);
            saveSyntax = "#save_syntax_btn", $saveSyntax = $form.find(saveSyntax);
            addNewSyntax = "#add_new_syntax_btn", $addNewSyntax = $form.find(addNewSyntax);
            $main.on("click", addExampleStr, Syntax.newSyntax.example.add);
            $main.on("click", removeExampleStr, Syntax.newSyntax.example.remove);
            $main.on("click", saveSyntax, Syntax.saveSyntax.new);
            $main.on("click", addNewSyntax, Syntax.openNewWindow);
            console.log("newSyntaxForm is running");
        }
    },
    syntaxResults: {
        run: function() {
            var $main = $("main"), $table = $main.find("table"), $thead = $table.find("thead"), $tbody = $table.find("tbody"), $row = $tbody.find("row");
            $main.on("dblclick", ".syntax_row", Syntax.editSyntax.openSyntax);
            $main.on("click", "#remove_syntax_menu_context_btn, #remove_syntax", Syntax.removeSyntax.options);
            $main.on("click", "#remove_syntax_menu_context_cancel_btn", Syntax.removeSyntax.cancel);
            $main.on("click", "#remove_syntax_menu_context_confirm_btn", Syntax.removeSyntax.confirm);
            console.log("syntaxResults is running");
        }
    }
};

StartUp(Syntax.syntaxForms);

StartUp(Syntax.syntaxResults);

StartUp(Page.clicks);

$(document).ready(function() {
    $("main").on("click", "#submit_search_btn", Search.query);
    $("main").on("click", "#unselect_all_btn,#select_all_btn", Navigation.toggleLangs);
    $("main").on("click", "#new_syntax_btn", Syntax.openNewWindow);
});