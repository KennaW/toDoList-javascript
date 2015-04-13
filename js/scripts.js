$(document).ready(function(){
    $("form#add").submit(function(event) {
            event.preventDefault();

            var inputDescription = $('input#task').val();

            var newTask = {description: inputDescription};

            $('ul#tasks').append("<span class='task'><li>" + newTask.description + "</li></span>");

            $("input#task").val('');

            $('.task').last().click(function() {
                $("#tasks-completed").append("<li>" +  newTask.description + "</li>");
                $(this).remove();

            });
    });
});
