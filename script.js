// hide the cookies yall
function hidecookies(id) {
    var element = document.querySelector("#cookies")
    element.remove()
}

// change temp


// function onselect(){
// 	var index = document.getElementById("tempselect").selectedIndex;
//     switch(index) {
//     	case 0:
//         	document.getElementById("red1").innerHTML = '75°';
//             break;
//         case 1:
//         	document.getElementById("p").innerHTML = 'You Currently Have "GREEN" Selected!';
//             break;
//       	case 2:
//         	document.getElementById("p").innerHTML = 'You Currently Have "BLUE" Selected!';
//             break;
        	
//     }
// }

function ontemp(element){
   if(element.options[element.selectedIndex].value =='° F'){
    document.querySelector("#red1").innerText = "75°";
    document.querySelector("#blue1").innerText = "65°";
    document.querySelector("#red2").innerText = "80°";
    document.querySelector("#blue2").innerText = "66°";
    document.querySelector("#red3").innerText = "69°";
    document.querySelector("#blue3").innerText = "61°";
    document.querySelector("#red4").innerText = "78°";
    document.querySelector("#blue4").innerText = "70°";
   }
   else if(element.options[element.selectedIndex].value =='° C'){
    document.querySelector("#red1").innerText = "24°";
    document.querySelector("#blue1").innerText = "18°";
    document.querySelector("#red2").innerText = "27°";
    document.querySelector("#blue2").innerText = "19°";
    document.querySelector("#red3").innerText = "21°";
    document.querySelector("#blue3").innerText = "16°";
    document.querySelector("#red4").innerText = "26°";
    document.querySelector("#blue4").innerText = "21°";
   }
}
// function ontempc(){
//     document.querySelector("#red1").innerHTML = "24°";
//     document.querySelector("#blue1").innerHTML = "18°";
//     document.querySelector("#red2").innerHTML = "27°";
//     document.querySelector("#blue2").innerHTML = "19°";
//     document.querySelector("#red3").innerHTML = "21°";
//     document.querySelector("#blue3").innerHTML = "16°";
//     document.querySelector("#red4").innerHTML = "26°";
//     document.querySelector("#blue4").innerHTML = "21°";
// }