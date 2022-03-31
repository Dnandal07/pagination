var a = [];
var obj = {};
var global;
var search="";
function page(arr) {
    var d = arr.length / 10;
    $(".pg").empty();
    $(".pg").append(`<li class="page-item pre" onclick="pre()"><a class="page-link" href="#">Previous</a></li>`);
    for (var i = 0; i < d; i++) {
        $(".pg").append(`<li class="page-item"><a class="page-link" onclick="shown(${i + 1})" href="#">${i + 1}</a></li>`);
    }
    $(".pg").append(`<li class="page-item nxtclass" onclick="next()"><a class="page-link" href="#">Next</a></li>`);
    show(1,arr);
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
});

function show(i,arr) {
    global = i;
    if (global == 1) {
        $(".pre").addClass('disabled');
    }
    else {
        $(".pre").removeClass('disabled');
    }
    var d = arr.length / 10;
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
        if (arr[s] != null) {
            $(".data").append(`<tr id="${arr[s]}">
        <td> ${arr[s].firstname} </td>
        <td> ${arr[s].lastname} </td>
        </tr>`);
        }
    }
}

function shown(i){
    if(search==""){
        arr=a;
    }else{
        arr=filterArr;
    }
    show(i,arr);
}

function pre() {
    if (global > 1) {
        shown(global - 1);
    } else
        shown(1);
}

function next() {
    var d = a.length / 10;
    if (global < d) {
        shown(global+1);
    } else {
        d = Math.ceil(d);
        shown(d);
    }
}

var filterArr=[];
$("#sfname").on("keyup", function() {
    var value2 = $(this).val();
    filterArr=a.filter(function(value,index) {
        if((value.firstname).indexOf(value2.toLowerCase())>-1){
          return value;
        }
        if((value.firstname).indexOf(value2.toUpperCase())>-1){
            return value;
          }
   });
   if(filterArr.length>0){
       search="a";
   }else{
       search="";
   }
   page(filterArr);
});

function compareSort(x, y) {
    var x = x.toLowerCase();
    y = y.toLowerCase();
    return (x < y) ? -1 : (x > y) ? 1 : 0;
}

function compareReverse(x, y) {
    var x = x.toLowerCase();
    y = y.toLowerCase();
    return (x > y) ? -1 : (x < y) ? 1 : 0;
}

function sort_fname(){
    a.sort(function(x, y) {
        return compareSort(x.firstname, y.firstname);
})
    shown(1,a);
}

function reverse_fname(){
    a.reverse(function(x, y) {
        return compareReverse(x.firstname, y.firstname);
})
    shown(1,a);
}

function sort_lname(){
    a.sort(function(x, y) {
        return compareSort(x.lastname, y.lastname);
})
    shown(1,a);
}

function reverse_lname(){
    a.reverse(function(x, y) {
        return compareReverse(x.lastname, y.lastname);
})
    shown(1,a);
}
