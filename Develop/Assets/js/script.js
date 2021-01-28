//Keeps script from loading until the page has fully loaded. 
$(document).ready(function () {

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
        "6": "",
        "7": "",
    }


    //Current Date via moment.JS
    const currentDay = moment().format("MMMM Do YYYY");
    console.log(currentDay);

    $("#currentDay").append(currentDay);
    const present = parseInt(moment().format("HH"));
    console.log(present)

    //At another student's suggestion, added a border for aesthetic & visual aide. 
    $("div").css("border", "3px solid blue");

    $("#btn8").click(function () {
        var content = $("#slot8").val();
        slots[8] = content
        localStorage.setItem(8, JSON.stringify(content));
    });

    $("#btn9").click(function () {
        var content = $("#slot9").val();
        slots[9] = content
        localStorage.setItem(9, JSON.stringify(content));
    });

    $("#btn10").click(function () {
        var content = $("#slot10").val();
        slots[10] = content
        localStorage.setItem(10, JSON.stringify(content));
    });

    $("#btn11").click(function () {
        var content = $("#slot11").val();
        slots[11] = content
        localStorage.setItem(11, JSON.stringify(content));
    });

    $("#btn12").click(function () {
        var content = $("#slot12").val();
        slots[12] = content
        localStorage.setItem(12, JSON.stringify(content));
    });

    $("#btn1").click(function () {
        var content = $("#slot13").val();
        slots[1] = content
        localStorage.setItem(1, JSON.stringify(content));
    });

    $("#btn2").click(function () {
        var content = $("#slot14").val();
        slots[2] = content
        localStorage.setItem(2, JSON.stringify(content));
    });

    $("#btn3").click(function () {
        var content = $("#slot15").val();
        slots[3] = content
        localStorage.setItem(3, JSON.stringify(content));
    });

    $("#btn4").click(function () {
        var content = $("#slot16").val();
        slots[4] = content
        localStorage.setItem(4, JSON.stringify(content));
    });

    $("#btn5").click(function () {
        var content = $("#slot17").val();
        slots[5] = content
        localStorage.setItem(5, JSON.stringify(content));
    });

    $("#bt6").click(function () {
        var content = $("#slot18").val();
        slots[6] = content
        localStorage.setItem(6, JSON.stringify(content));
    });

    $("#bt7").click(function () {
        var content = $("#slot19").val();
        slots[7] = content
        localStorage.setItem(7, JSON.stringify(content));
    });

    //
    var storedData = JSON.parse(window.localStorage.getItem(8))
    $('#slot8').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(9))
    $('#slot9').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(10))
    $('#slot10').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(11))
    $('#slot11').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(12))
    $('#slot12').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(1))
    $('#slot13').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(2))
    $('#slot14').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(3))
    $('#slot15').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(4))
    $('#slot16').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(5))
    $('#slot17').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(6))
    $('#slot18').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(7))
    $('#slot19').val(storedData);

    //Adds current moment in time UTC for moment.JS, then converts UTC to local time
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    let utc = moment.utc(date).toDate();
    const localTime = moment(utc).local().format('YYYY-MM-DD HH:mm:ss');
    let now = moment().hour();

    //forEach loop (can't get to work right)
    /*slots.forEach(function (slots) {
        var timeLog = parseInt($(this).attr("name"));

        if (i > now) {
            $(slots).addClass("future")
        }

        else if (i < now) {
            $(slots).addClass("past")
        }

        else {
            $(slots).addClass("present")
        }

    })*/

    //Color Coordination still not working right: only past hours show as gray.
    //hours past get a grey background 

    for (i = 8; i < 20; i++) {
        var timeLog = "#slot" + i


        $(timeLog).css("background-color", "grey")

    }

    //hours that have yet to come get a green background 
    for (i = 8; i < 20; i++) {
        var timeLog = "#slot" + i

        console.log(timeLog)
        if (i > now)
            $(timeLog).css("background-color", "green");

    }

    //current hour gets a red background 

    if (now === i) {
        $(timeLog).css("background-color", "red");

    }
});
    /*$("textarea").each(function () {
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

