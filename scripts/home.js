//i need to create a section that will display over the
//page saying the page is still undergoing production
import { quotes } from "./data/quotes.js";

let quote = quotes[Math.floor(Math.random() * quotes.length)];
let day = new Date().toTimeString().split(" ")[0];
let hour = day[0] + day[1];
let homeHTML = `
    <div
        class=" w-full flex-col text-center flex items-center justify-center h-full"
    >
        <p id='text-field' class="flex flex-col bg-red-600 p-4 rounded-lg font-medium text-xl">
            ${quote.text}<span class='text-sm'> ~ ${quote.author}</span>
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
let windowElement = document.getElementById("window");
//console.log(quote.text, quote.author);

if (hour > 12) {
  windowElement.innerHTML = homeHTML;
}
