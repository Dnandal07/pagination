var a = [];
var obj = {};
var global;
function page() {
    var d = a.length / 10;
    $(".pg").empty();
    $(".pg").append(`<li class="page-item pre" onclick="pre()"><a class="page-link" href="#">Previous</a></li>`);
    for (var i = 0; i < d; i++) {
        $(".pg").append(`<li class="page-item"><a class="page-link" onclick="show(${i + 1})" href="#">${i + 1}</a></li>`);
    }
    $(".pg").append(`<li class="page-item nxtclass" onclick="next()"><a class="page-link" href="#">Next</a></li>`);
}

$("#add").click(function () {
    if ($("#fname").val() != '' && $("#lname").val() != '') {
        obj.firstname = $("#fname").val();
        obj.lastname = $("#lname").val();
        a.push(obj);
        obj = {};
        $("#fname").val('');
        $("#lname").val('');
        page(a);
    }
    else {
        alert("Fill All Details");
    }
    show(1);
});

function show(i) {
    global = i;
    if (global == 1) {
        $(".pre").addClass('disabled');
    }
    else {
        $(".pre").removeClass('disabled');
    }
    var d = a.length / 10;
    d = Math.ceil(d);
    if (global == d) {
        $(".nxtclass").addClass('disabled');
    }
    else {
        $(".nxtclass").removeClass('disabled');
    }
    $(".data").empty();
    var l = i * 10;
    var s = l - 10;
    for (s; s < l; s++) {
        if (a[s] != null) {
            $(".data").append(`<tr id="${a[s]}">
        <td> ${a[s].firstname} </td>
        <td> ${a[s].lastname} </td>
        </tr>`);
        }
    }
}

function pre() {
    if (global > 1) {
        show(global - 1);
    } else
        show(1);
}

function next() {
    var d = a.length / 10;
    if (global < d) {
        show(global+1);
    } else {
        d = Math.ceil(d);
        show(d);
    }
}

$("#sfname").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });