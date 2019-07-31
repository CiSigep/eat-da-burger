$(() => {
    $(document).on("click", "[id$='Button']", (e) => {
        var id = $(e.target).attr("data-id");
        var name = $(e.target).attr("data-name");

        $.ajax("/api/burgers/" + id, {type: "PUT", data: {devoured: 1}}).then(() => {
            $("#" + id + "-nd-li").remove();

            var newDevoured = $("<li>").addClass("list-group-item").text(name);
            $("#devouredList").append(newDevoured);
        }).fail((err) => {
            console.log(err);
        });
    });

    $("#burgerSubmit").click((e) => {
        var name = $("#burgerName").val();

        if(name !== ""){
            $("#burgerName").val("");
            $.post("/api/burgers", { name: name }).done((data) => {

                var id = data.id;

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
            });
        }
    })
});