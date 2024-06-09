let day = new Date().toTimeString().split(" ")[0];
let hour = day[0] + day[1];
let homeHTML = ``;
let windowElement = document.getElementById("window").innerHTML;
//alert(hour);

//if (hour < 12) {
//windowElement.innerHTML = homeHTML;
//} else {
//  windowElement = ``;
//}
