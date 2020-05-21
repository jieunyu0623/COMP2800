$(document).ready(function () {
    var api_url = 'https://www.zoho.com/calendar/api/v1'
    var auth = 'https://accounts.zoho.com/oauth/v2/auth'
    var client_id = '1000.777P0YANPJB15P8L94539FMRZ2TKKH'
    var client_secret = 'ebfccc0cc4cf5710fc60ef702628be67f2f8322406'
    var redirect_uri = 'https://comp2800-164b5.web.app'
    $.ajax({
        url: auth + "?client_id=" + client_id + "&response_type=code&scope=AaaServer.profile.READ%2CAaaServer.profile.UPDATE&redirect_uri=" + redirect_uri,
        type: "GET",
        success: function(result) {
            console.log(result);
        },
        error: function(error) {
            console.log(error);
        }
    })
})



