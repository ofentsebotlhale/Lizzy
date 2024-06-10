//i need to create a section that will display over the
//page saying the page is still undergoing production
import { name } from "./data/names.js";
import { quote } from "./data/quotes.js";

let day = new Date().toTimeString().split(" ")[0];
let hour = day[0] + day[1];

let homeHTML = `
    <div
        class="flex-col text-center flex items-center justify-center"
    >
        <p id="text-field" class="flex flex-col bg-red-600 p-4 rounded-lg font-medium text-xl">
        </p>
        <img
            class="mt-20 animate-ping"
            width="100"
            src="icons8-love-48.png"
            alt=""
        />
        <img
            class="absolute top-0 right-0 m-10"
            src="icons8-love-48.png"
            alt=""
        />
        <img
            class="absolute top-0 left-0 m-10"
            src="icons8-love-48.png"
            alt=""
        />
        <img
            class="absolute bottom-0 right-0 m-10"
            src="icons8-love-48.png"
            alt=""
        />
        <img
            class="absolute bottom-0 left-0 m-10"
            src="icons8-love-48.png"
            alt=""
        />
    </div>
`;
//document.querySelectorAll("img").forEach((image) => {
//image.addEventListener("click", () => {
//image.classList.toggle("animate-ping");
//});
//});

let windowElement = document.getElementById("window");
windowElement.innerHTML = homeHTML;

let textElement = document.getElementById("text-field");
if (hour < 12) {
   document.body.classList.add("from-beigeOne", "via-beigeTwo", "to-skyBlue");
  textElement.innerHTML = `Good Morning ${name}`;
} else {
  // document.body.classList.add(
  //  "from-sunsetOne",
  //    "via-sunsetTwo",
  //"to-sunsetThree"
  // );
  textElement.innerHTML = `Good Afternoon ${name}`;
}

function quoteGenerator() {
  return (textElement.innerHTML = `${quote.text}<span class='text-sm'> ~ ${quote.author}</span>`);
}

setTimeout(quoteGenerator, 5000);
