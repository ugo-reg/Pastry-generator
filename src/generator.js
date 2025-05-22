function food(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 1,
    });
  }
  


function cook(event){
 event.preventDefault();

 let recipe=document.querySelector("#recipe");
 recipe.innerHTML= "cooking your recipe🍜🥢...."

   
let apiKey = "3ee9046f22cb8dtcf3aa949o097a3347";
let context = "be polite and provide a short simple recipe";
let prompt = "can you give me a recipe?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(food);

}

let form = document.querySelector("#form");
form.addEventListener("submit", cook);