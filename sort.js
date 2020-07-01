function reverseElements(parent){
 for (var i=1; i < parent.childNodes.length; i++){
     parent.insertBefore(parent.childNodes[i], parent.firstChild)
 }
}

function sort(data_name){
    var alphaOrderedDivs = $('.data-parent').sort(function(a,b){
        return  String.prototype.localeCompare.call($(a).data(data_name).toLowerCase(), $(b).data(data_name).toLowerCase());
        
    });
    return alphaOrderedDivs;
}



$(document).on("click", ".heading", function(){
    var data_type = $(this).data("type")
    var sorted = sort(data_type);
    var container = $("#scrollable-data")
    container.detach().empty().append(sorted)
    $("#table-container").append(container)
    $(".arrow").hide()
    if ($(this).data("sort") == "desc"){
        $(this).data("sort", "asc")
        $(this).parent().children(".arrow").eq(0).show()
        reverseElements(document.getElementById("scrollable-data"))
    }
    else{
        $(this).data("sort", "desc")
        $(this).parent().children(".arrow").eq(1).show()
    }
    var bg_count = 0
    $(".data-parent").each(function(){
        if ($(this).is(":visible")){
        if (bg_count % 2 == 0){
            $(this).css("background-color", "#fdf")
        }
        else{
            $(this).css("background-color", "#ffffff")
                }
        bg_count ++
            }
    })
})







document.getElementById("search-input").addEventListener("input", function(e){
    var bg_count = 0
    $(".data-parent").each(function(){
        var input = $("#search-input").val().toLowerCase()
        
        if ($(this).data("title").toLowerCase().includes(input) || $(this).data("artist").toLowerCase().includes(input) || $(this).data("genre").toLowerCase().includes(input) || $(this).data("duration").toLowerCase().includes(input)){
            $(this).show()
            if (bg_count % 2 == 0){
                $(this).css("background-color", "#fdf")
            }
            else{
                $(this).css("background-color", "#ffffff")
                    }
            bg_count ++
        }
        else{
            $(this).hide()
        }
    })
})

$(document).on("click", "#search-button", function(){
    $("#search-form").height($("#table-heading").height())
    $("#search-form").show()
    $("#search-input").focus()
})

function showAll(){
    $("#search-form").hide()
    $(".data-parent").each(function(){
        $(this).show()
        $(this).removeAttr("style")
        $("#search-input").val("")
    })
}

$(document).on("click", "#close-search", function(){
 showAll()
})

$(document).on("click", "#start-search", function(){
    $("#search-form").hide()
})

$(function(){
    $("#search-form").submit(function(e){
e.preventDefault();
$("#search-form").hide()
    })
})



$(document).keyup(function(e){
    if (e.keyCode == 27 && $("#search-form").is(":visible")){
        showAll()
    }
})