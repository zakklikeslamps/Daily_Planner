//Object of hour slots
var slots = {
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
}

//Keeps script from loading until the page has fully loaded. 
$(document).ready(function () {

    //Current Date via moment.JS
    const currentDay = moment().format("MMMM Do YYYY");
    console.log(currentDay);

    $("#currentDay").append(currentDay);
    const present = parseInt(moment().format("HH"));
    console.log(present)

    //Current Hour
    //var currentHour = $("#currentDay");
    //currentHour.content(currentHour);
    //^Affecting date in header


    //At another student's suggestion, added a border for aesthetic & visual aide. 
    //$("div").css("border", "3px solid blue"); (why not working?)

    $("#btn8").click(function () {
        var content = $("#8AM").val();
        slots[8] = content
        localStorage.setItem(8, JSON.stringify(content));
    });

    $("#btn9").click(function () {
        var content = $("#9AM").val();
        slots[9] = content
        localStorage.setItem(9, JSON.stringify(content));
    });

    $("#btn10").click(function () {
        var content = $("#10AM").val();
        slots[10] = content
        localStorage.setItem(10, JSON.stringify(content));
    });

    $("#btn11").click(function () {
        var content = $("#11AM").val();
        slots[11] = content
        localStorage.setItem(11, JSON.stringify(content));
    });

    $("#btn12").click(function () {
        var content = $("#12PM").val();
        slots[12] = content
        localStorage.setItem(12, JSON.stringify(content));
    });

    $("#btn1").click(function () {
        var content = $("#1PM").val();
        slots[1] = content
        localStorage.setItem(1, JSON.stringify(content));
    });

    $("#btn2").click(function () {
        var content = $("#2PM").val();
        slots[2] = content
        localStorage.setItem(2, JSON.stringify(content));
    });

    $("#btn3").click(function () {
        var content = $("#3PM").val();
        slots[3] = content
        localStorage.setItem(3, JSON.stringify(content));
    });

    $("#btn4").click(function () {
        var content = $("#4PM").val();
        slots[4] = content
        localStorage.setItem(4, JSON.stringify(content));
    });

    $("#btn5").click(function () {
        var content = $("#5PM").val();
        slots[5] = content
        localStorage.setItem(5, JSON.stringify(content));
    });


    //
    var storedData = JSON.parse(window.localStorage.getItem(8))
    $('8AM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(9))
    $('9AM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(10))
    $('10AM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(11))
    $('11AM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(12))
    $('12PM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(1))
    $('1PM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(2))
    $('2PM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(3))
    $('3PM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(4))
    $('4PM').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(5))
    $('5PM').val(storedData);

    //Adds current moment in time (to the second) for moment.JS, then converts UTC to local time
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    var utc = moment.utc(date).toDate();
    var localTime = moment(utc).local().format('YYYY-MM-DD HH:mm:ss');
    var now = moment().hour();

    //// if it is a past hour we want a grey background 

    for (i = 9; i < 18; i++) {
        var timeCheck = "#area" + i
        console.log(timeCheck)
    
        $(timeCheck).css("background-color", "grey")
    }
    //// if it is a future  hour we want a green background 
    for (i = 9; i < 18; i++) {
        var timeCheck = "#area" + i
        console.log(timeCheck)
        if (i > presentHour) {
            $(timeCheck).css("background-color", "green")
        }
    }


    $("textarea").each(function () {
        var time = parseInt($(this).attr("name"));
        if (time < present) {
            $(this).addClass("past");
        }

        else if (time === present) {
            $(this).addClass("present")
        }

        else {
            $(this).addClass("future")
        }
    })


    //save button
    /*$("button").on("click", function () {

        var hour = $(this).parent().attr("id")
        var value = $(this).siblings("textArea").val().trim()
        localStorage = setItem(hour, value);

        //Redundant block//
        /*localStorage.setItem("8:00", text8AM.val())
        localStorage.setItem("9:00", text9AM.val())
        localStorage.setItem("10:00", text10AM.val())
        localStorage.setItem("11:00", text11AM.val())
        localStorage.setItem("12:00", text12AM.val())
        localStorage.setItem("13:00", text1PM.val())
        localStorage.setItem("14:00", text2PM.val())
        localStorage.setItem("15:00", text3PM.val())
        localStorage.setItem("16:00", text4PM.val())
        localStorage.setItem("17:00", text5PM.val())
        localStorage.setItem("18:00", text6PM.val())
        localStorage.setItem("19:00", text7PM.val())
    })

    Displaying content
    slots.forEach(function (hour) {
        $('#${hour} .description').val(localStorage.getItem(hour));
    })
    //Redundant block//
    $("#8").val(localStorage.getItem("8:00"));
    $("#9").val(localStorage.getItem("9:00"));
    $("#10").val(localStorage.getItem("10:00"));
    $("#11").val(localStorage.getItem("11:00"));
    $("#12").val(localStorage.getItem("12:00"));
    $("#1").val(localStorage.getItem("13:00"));
    $("#2").val(localStorage.getItem("14:00"));
    $("#3").val(localStorage.getItem("15:00"));
    $("#4").val(localStorage.getItem("16:00"));
    $("#5").val(localStorage.getItem("17:00"));
    $("#6").val(localStorage.getItem("18:00"));
    $("#7").val(localStorage.getItem("19:00"));*/

})