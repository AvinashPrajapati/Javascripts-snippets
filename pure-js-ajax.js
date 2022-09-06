let btn = document.querySelector('#savebtn');
btn.addEventListener('click', my_function);
function my_function() {
    let title = document.getElementById('id_title').value;
    let body = document.getElementById('id_body').value;
    let xhttp = new XMLHttpRequest();
    const url = "{{request.path}}";
    xhttp.open("POST", url, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let response = this.responseText;
            let value = JSON.parse(response);
            console.log(value['message']);
            if (value['message'] == 'success') {
                $('#chat-messages').load(location.href + ' #chat-messages');    //here i used jquery to just rfresh the div.
            }
        }
    }
    xhttp.setRequestHeader("X-CSRFToken", "{{csrf_token}}");
    const formdata = new FormData()
    formdata.append('title', title);
    formdata.append('body', body)
    xhttp.send(formdata);
};
