import { name } from "./names.js";
const quotes = [
  {
    text: `"Hey mom, I don't how to say this...but I love her, a lot, and I want her to know it."`,
    author: "OB",
  },
  {
    text: "Johnny says hi.",
    author: "Still me",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Papi",
  },
  {
    text: "Remember, everyday is day one of forever.",
    author: "Daddy",
  },
  {
    text: `Hey ${name}, don't forget to smile. You look like an angel when you do.`,
    author: "Yours",
  },
  {
    text: "When I see your face, there’s not a thing that I would change, ’cause you’re amazing – just the way you are.",
    author: "Me",
  },
  {
    text: "Because of you, I can feel myself slowly, but surely, becoming the me I have always dreamed of being.",
    author: "Your lover",
  },
];
export let quote = quotes[Math.floor(Math.random() * quotes.length)];
