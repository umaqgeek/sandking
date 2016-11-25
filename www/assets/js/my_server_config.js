
//var URL_SERVER = 'https://localhost/dinarpal_v2/apps_invoiceqr/index.php/';
var URL_SERVER = 'http://192.168.1.16/dinarpal_v2/apps_invoiceqr/index.php/';
//var URL_SERVER = 'https://www.dinarpal.com/apps_invoiceqr/index.php/';

//var BASE_URL_SERVER = 'https://localhost/dinarpal_v2/apps_invoiceqr/';
var BASE_URL_SERVER = 'http://192.168.1.16/dinarpal_v2/apps_invoiceqr/';
//var BASE_URL_SERVER = 'https://www.dinarpal.com/apps_invoiceqr/';

$(this).mousemove(function (e) {
    $("#alert_msg_box").removeClass("alert alert-success").html("");
    $("#alert_msg_box").removeClass("alert alert-info").html("");
    $("#alert_msg_box").removeClass("alert alert-warning").html("");
    $("#alert_msg_box").removeClass("alert alert-danger").html("");
});
$(this).keypress(function (e) {
    $("#alert_msg_box").removeClass("alert alert-success").html("");
    $("#alert_msg_box").removeClass("alert alert-info").html("");
    $("#alert_msg_box").removeClass("alert alert-warning").html("");
    $("#alert_msg_box").removeClass("alert alert-danger").html("");
});

function msg_alert_clr() {
    $("#alert_msg_box").removeClass("alert alert-success").html("");
    $("#alert_msg_box").removeClass("alert alert-info").html("");
    $("#alert_msg_box").removeClass("alert alert-warning").html("");
    $("#alert_msg_box").removeClass("alert alert-danger").html("");
}

function msg_alert(msg, type) {
    var type_alert = "alert alert-info";
    switch (type) {
        case '1':
        case 1:
            type_alert = "alert alert-success";
            break;
        case '2':
        case 2:
            type_alert = "alert alert-info";
            break;
        case '3':
        case 3:
            type_alert = "alert alert-warning";
            break;
        case '4':
        case 4:
            type_alert = "alert alert-danger";
            break;
    }
    $("#alert_msg_box").addClass(type_alert).html("<center>" + msg + "</center>");
}

function get_pecah(data) {
    return data.split("|");
}
