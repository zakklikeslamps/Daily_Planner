//Keeps the script from loading until the entire page has loaded
$(document).ready(function () {

    //Setting local date & appending to HTML header
    const currentDay = moment().format("MMMM Do YYYY");
    console.log(currentDay);
    $("#currentDay").append(currentDay);

    const present = parseInt(moment().format("HH"));
    console.log(present)

    var $text8AM = $("#text8AM");
    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");
    var $text6PM = $("#text6PM");
    var $text7PM = $("#text7PM");

    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < present) {
            $(this).addClass("past");
        }


        if (name > present) {
            $(this).addClass("future")
        }

        if (name === present) {
            $(this).addClass("present")
        }



    })


    $("button").on("click", function () {

        //sets items to the local storage
        localStorage.setItem("8:00", ($text8AM.val()))
        localStorage.setItem("9:00", ($text9AM.val()))
        localStorage.setItem("10:00", ($text10AM.val()))
        localStorage.setItem("11:00", ($text11AM.val()))
        localStorage.setItem("12:00", ($text12AM.val()))
        localStorage.setItem("13:00", ($text1PM.val()))
        localStorage.setItem("14:00", ($text2PM.val()))
        localStorage.setItem("15:00", ($text3PM.val()))
        localStorage.setItem("16:00", ($text4PM.val()))
        localStorage.setItem("17:00", ($text5PM.val()))
        localStorage.setItem("18:00", ($text6PM.val()))
        localStorage.setItem("19:00", ($text7PM.val()))
    })

    //Storing content & displaying it on screen; content should (but isn't) remain when page is refreshed
    $("#text8AM").append(localStorage.getItem("8:00"));
    $("#text9AM").append(localStorage.getItem("9:00"));
    $("#text10AM").append(localStorage.getItem("10:00"));
    $("#text11AM").append(localStorage.getItem("11:00"));
    $("#text12AM").append(localStorage.getItem("12:00"));
    $("#text1PM").append(localStorage.getItem("13:00"));
    $("#text2PM").append(localStorage.getItem("14:00"));
    $("#text3PM").append(localStorage.getItem("15:00"));
    $("#text4PM").append(localStorage.getItem("16:00"));
    $("#text5PM").append(localStorage.getItem("17:00"));
    $("#text6PM").append(localStorage.getItem("18:00"));
    $("#text7PM").append(localStorage.getItem("19:00"));


})