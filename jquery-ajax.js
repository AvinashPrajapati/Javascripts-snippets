function update() {
        $('#chat-messages').load(location.href + ' #chat-messages');
    }


    $("#savebtn").click(function () {
        let title = $("#id_title").val();
        let body = $("#id_body").val();
        let csrf = $("input[name = csrfmiddlewaretoken]").val();
        let data = {
            title: title,
            body: body,
            csrfmiddlewaretoken: csrf
        }
        console.log(data);
        $.ajax({
            type: 'post',
            url: '{{request.path}}',
            dataType: 'json',
            data: data,
            success: function (recieved) {
                let msg = recieved;
                console.log(msg);
                if (msg.message == 'success') {
                    setTimeout(update(), 800);
                } else {
                    console.log("error");
                }
            }

        });

    });
