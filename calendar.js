$(document).ready(function () {
    $.ajax({
        url: "https://www.zoho.com/calendar/api/v1",
        type: "GET",
        success: function(result) {
            console.log(result);
        },
        error: function(error) {
            console.log(error);
        }
    })
})

const api_url = '​https://calendar.zoho.com/api/v1/calendars/ebfccc0cc4cf5710fc60ef702628be67f2f8322406'
const response = await fetch(api_url);
const json = await response.json();
console.log(json);


