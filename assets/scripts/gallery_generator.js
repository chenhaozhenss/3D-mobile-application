
$(document).ready(function () {
    var xmlHtttp = new XMLHttpRequest();

    var numberOfColumns = 4;

    var htmlCode = "";

    var response;


    var send = "scripts/php/hook.php";

    xmlHttp.open("GET", send, true);

    xmlHttp.send(null);

    xmlHttp.onreadystatchange = function () {

        if (xmlHttp.readyState ==4) {
            //alert(xmlHtttp.responseText);
            response = xmlHttp.responseText.split("~");
            htmlCode += '<tr>';
            for (var i = 0; i < response.length; i++) {
            htmlCode += '<ad href="assets/gallery/asstes/images' + response[i] + '"data-fancybox data-caption="My X3D model render">';
                htmlCode += '<img class="card-img-top img-thumbnail" scr="assets/gallery/asstes/images' + response[i] + '"/>';
                htmlCode += '</a>';

            }
            document.getElementById('gallery').innerHTML = htmlCode;
        }

    }
});
