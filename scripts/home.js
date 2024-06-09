const greet = () => {
  console.log("Hello");
};

setTimeout(greet, 3000);
let day = new Date().toTimeString().split(" ")[0];
let hour = day[0] + day[1];
let homeHTML = `
    <div
        class="w-full flex-col text-center flex items-center justify-center h-full"
    >
        <p class="bg-red-800 p-4 rounded-lg font-medium text-xl">
            Good Morning Love
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
//alert(hour);

if (hour < 12) {
  windowElement.innerHTML = homeHTML;
} 
