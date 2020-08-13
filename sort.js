function reverseElements(parent){
 for (var i=1; i < parent.childNodes.length; i++){ //reverses the order of the children of the given element
     parent.insertBefore(parent.childNodes[i], parent.firstChild)
 }
}

function sort(data_name){
    var alphaOrderedDivs = $('.data-parent').sort(function(a,b){ //custom sort function
        return  String.prototype.localeCompare.call($(a).data(data_name).toLowerCase(), $(b).data(data_name).toLowerCase()); //returns the highest of 2 data values (made lowercase)
        
    });
    return alphaOrderedDivs;
}



$(document).on("click", ".heading", function(){ //when one of the headings is clicked
    var data_type = $(this).data("type") //gets the data that the songs should be sorted by
    var sorted = sort(data_type); 
    var container = $("#scrollable-data")
    container.detach().empty().append(sorted) //empties the container then adds the sorted data
    $("#table-container").append(container) //adds the container back to the main table container
    $(".arrow").hide() //hides all of the arrows
    if ($(this).data("sort") == "desc"){ //this shows the relevant arrow
        $(this).data("sort", "asc")
        $(this).parent().children(".arrow").eq(0).show()
        reverseElements(document.getElementById("scrollable-data")) //reverses the order of the div
    }
    else{ //also shows the relevant arrow
        $(this).data("sort", "desc")
        $(this).parent().children(".arrow").eq(1).show()
    }
    var bg_count = 0
    $(".data-parent").each(function(){ //makes the background color of elements alternate
        if ($(this).is(":visible")){
        if (bg_count % 2 == 0){
            $(this).css("background-color", "var(--light-colour1)")
        }
        else{
            $(this).css("background-color", "#ffffff")
                }
        bg_count ++
            }
    })
})







document.getElementById("search-input").addEventListener("input", function(e){ //fires when something is inputted to the searchbar
    var bg_count = 0
    var input = $("#search-input").val().toLowerCase().trim()
    $(".data-parent").each(function(){
        
        
        if ($(this).data("title").toLowerCase().includes(input) || $(this).data("artist").toLowerCase().includes(input) || $(this).data("genre").toLowerCase().includes(input) || $(this).data("duration").toLowerCase().includes(input)){
            //checks if any of the data contains any the search term
            $(this).show()
            if (bg_count % 2 == 0){
                $(this).css("background-color", "var(--light-colour1)")
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

function showAll(){ //makes all of the data visible and styled correctly
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
    $("#search-form").submit(function(e){ //when enter is pressed
e.preventDefault();
$("#search-form").hide()
    })
})



$(document).keyup(function(e){
    if (e.keyCode == 27 && $("#search-form").is(":visible")){ //clears the search and hides it
        showAll()
    }
})