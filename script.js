$("#btnAdd").on("click",function()
{
    if(!!$("#enter").val()){

        $(".taskBox").append("<div class='task2'>" + 
         $("#enter").val() +
        "<button class='done'> Done </button>  <button class='delete'>Delete</button>" +
         "</div>" 
       
      
        
        
        
        );
        $("#enter").val("");
    }else{
        console.error("The Value is not found");
    }
 
  
  

});

$(document).on("click",".done",function(){
   $(this).parent(".task2").toggleClass("taskDone");
});

$(document).on("click",".delete",function(){
    $(this).parent(".task2").remove();
 });

// console.log($(this).parent(".task2"));