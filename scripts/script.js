$(document).ready(function(){
    //creates tabs 
    $("#projects").tabs();
    // //to make the tabs movable according to our needs
    $("ul").sortable({
        axis:"x",
        containment: "#projects"
    });

    $("ol").sortable({
        axis:"y",
        containment: "#projects"
    });

    //to show the modal 
    add = (e) =>{
        $("#addPopup").show();
    };

    //to add items to the list
    addItem = (e) =>{
        // console.log($("#itemName").val());
        var item= $("#itemName").val();
        var data = $("#projects").tabs("option","active");
        var currentTab=$("#projects ul>li a").eq(data).attr('href');
        //console.log(currentTab);
        var text= "<li><input type='checkbox'>"+item+"<span class='removeItem'>&times;</span></li>"
        //console.log(text);
        $(currentTab).append(text);
        $("#addPopup").hide();

        //to check newly added items
        $('input[type="checkbox"').click(function() {
            if($(this).is(":checked")){
                //console.log("checked");
                $(this).parent().css("background-color","#A9A9A9");
                //console.log($(this).parent());
            }
            else{
                $(this).parent().css("background-color","white");
            }
        });

        //to remove item from list
        $('.removeItem').click(function(){
            //console.log($(this));
            $(this).parent().hide(500);
        });
    }

    //on checking items from the list
    $('input[type="checkbox"').click(function() {
        if($(this).is(":checked")){
            //console.log("checked");
            $(this).parent().css("background-color","#A9A9A9");
            //console.log($(this).parent());
        }
        else{
            $(this).parent().css("background-color","white");
        }
    });

    //remove items from the list
    $('.removeItem').click(function(){
        $(this).parent().hide(500);
    });

    //adding tags
    $("#addTag").click(function(){
        $("#tagPopup").show();
    })

    //onclick of addtag
    createTag = (e) =>{
        console.log($("#tagName").val());
        let tag="<li><a href='#"+$("#tagName").val()+"'>"+$("#tagName").val()+"</li>";
        $("#tags").append(tag);
        $("#tagPopup").hide();
    }


    //using the close button on the modal
    closeModal = (e) =>{
        $("#addPopup").hide();
        $("#tagPopup").hide();
    }


});