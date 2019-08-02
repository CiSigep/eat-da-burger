$(() => {
    $(document).on("click", "[id$='Button']", (e) => {
        var id = $(e.target).attr("data-id");
        var name = $(e.target).attr("data-name");

        $.ajax("/api/burgers/" + id, {type: "PUT", data: {devoured: 1}}).then(() => {
            $("#" + id + "-nd-li").remove();

            // Move our data into the other list.
            var newDevoured = $("<li>").addClass("list-group-item").text(name);
            $("#devouredList").append(newDevoured);
        }).fail((err) => {
            console.log(err);
        });
    });

    $("#burgerSubmit").click((e) => {
        var name = $("#burgerName").val();
        $("#burgerError").empty(); // Clear out any errors we have. 
        if(name !== ""){
            $("#burgerName").val("");
            $.post("/api/burgers", { name: name }).done((data) => {

                var id = data.id;
                // Create a new list item for our now available burger.
                var newBurger = $("<li>").addClass("list-group-item justify-content-between d-flex align-items-center");
                newBurger.attr("id", id + "-nd-li");
                var buttonSpan = $("<span>");
                var devourButton = $("<button>").addClass("btn btn-primary");
                devourButton.attr("data-name", name);
                devourButton.attr("data-id", id);
                devourButton.attr("id", id + "Button");
                devourButton.text("Devour it!")
                buttonSpan.append(devourButton);

                newBurger.append(name, buttonSpan);

                $("#notDevouredList").append(newBurger);
            }).fail((res) => {
                switch(res.status){ // Display any server errors to the user.
                    case 400:
                        $("#burgerError").text(res.responseJSON.validation);
                        break;
                    case 500:
                        $("#burgerError").text("A server error occured, please try again later.");
                        break;
                    default:
                        $("#burgerError").text("An unknown error occured, please try again later.");
                }
            });
        }
        else
            $("#burgerError").text("Please enter a burger name.");
    });
});