// hide the cookies yall
function hidecookies(id) {
    var element = document.querySelector("#cookies")
    element.remove()
}


// the code I sent you
function onTemp(element) {
    console.log(element.value);
    var tempArray = document.querySelectorAll(".temperature");
    console.log(tempArray)
    if (element.options[element.selectedIndex].value == '° F') {
        for (var i = 0; i < tempArray.length; i++) {
            tempArray[i].innerText = Math.round(tempArray[i].innerText * 9 / 5 + 32);
        }
    }
    else {
        for (var i = 0; i < tempArray.length; i++) {
            tempArray[i].innerText = Math.round((tempArray[i].innerText - 32) * 5 / 9);
        }
    }
}


// the first equation I did, very primative and not practical
// function onTemp(element){
//    if(element.options[element.selectedIndex].value =='° F'){
//     document.querySelector("#red1").innerText = "75°";
//     document.querySelector("#blue1").innerText = "65°";
//     document.querySelector("#red2").innerText = "80°";
//     document.querySelector("#blue2").innerText = "66°";
//     document.querySelector("#red3").innerText = "69°";
//     document.querySelector("#blue3").innerText = "61°";
//     document.querySelector("#red4").innerText = "78°";
//     document.querySelector("#blue4").innerText = "70°";
//    }
//    else if(element.options[element.selectedIndex].value =='° C'){
//     document.querySelector("#red1").innerText = "24°";
//     document.querySelector("#blue1").innerText = "18°";
//     document.querySelector("#red2").innerText = "27°";
//     document.querySelector("#blue2").innerText = "19°";
//     document.querySelector("#red3").innerText = "21°";
//     document.querySelector("#blue3").innerText = "16°";
//     document.querySelector("#red4").innerText = "26°";
//     document.querySelector("#blue4").innerText = "21°";
//    }
// }


