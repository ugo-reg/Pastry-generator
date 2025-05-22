function food(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 1,
      cursor:"",
    });
  }
  


function cook(event){
 event.preventDefault();

 let recipe=document.querySelector("#recipe");
 recipe.innerHTML= "cooking your recipe🍜🥢...."

let instructionInput=document.querySelector("#user-instruction");
let apiKey = "3ee9046f22cb8dtcf3aa949o097a3347";
let context = " user instructions are: you are a great chef, who is widely travelled and love to cook different cuisines from various countries, your mission is to generate easy to make cuisines in easy to understand words and basic HTML. make sure you follow the users instructions. sign the recipe with `Enjoy your meal with 💕 Ugochi😉`inside a <strong> center aligned remove the word `html` written on top ";
let prompt = `generate short simple recipe about ${instructionInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(food);

}

let form = document.querySelector("#form");
form.addEventListener("submit", cook);