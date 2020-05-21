$(document).ready(function () {
    var api_url = 'https://www.zoho.com/calendar/api/v1'
    var auth = 'https://accounts.zoho.com/oauth/v2/auth'
    var client_id = '1000.8T025AE1A678IV0KM31TXHEEO3CM4H'
    var client_secret = '49bf38d022248d1742d577612b7593c6795faa013f'
    var redirect_uri = 'https://comp2800-164b5.web.app'
    $.ajax({
        url: auth + "?client_id=" + client_id + "&response_type=token&scope=AaaServer.profile.READ&redirect_uri=" + redirect_uri,
        type: "GET",
        contentType: "application/json",
        success: function(result) {
            console.log(result);
        },
        error: function(error) {
            console.log(error);
        }
    })
})



