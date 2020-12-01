//Declaring Variables
var form = document.querySelector(".form");
var input = document.querySelector("#input");
var translatedText = document.querySelector("#translated-output");
var buttonColumn = document.querySelector("#button-column");
var translateButton = document.querySelector("#translate-button");

//Function to create element and display error message.
function emptyInput(message) {
  //Creating Dom Element using createElement function
  var errorMessage = document.createElement("h3");

  //Giving class name to the newly created Dom Element.
  errorMessage.className = "heading-3 inline-block quote";

  //Passing message argument as a text for Dom Element.
  errorMessage.innerText = message;

  //As the dom element is child, need to append it to the parent using appendChild Function
  buttonColumn.appendChild(errorMessage);
}

//Validation Function to check if user's input is empty
function validation() {
  //Checking condition if input is empty then run emptyInput function with custom error message
  if (input.value == "") {
    emptyInput("This field is required, Please enter some text!");
  } else {
    //In case of proper input run responseHandler function
    responseHandler();
  }
}

//Fetch API Function
function responseHandler() {
  //API UPL from funtranslation.com using template literals to pass input value as an argument
  var apiURL = `https://api.funtranslations.com/translate/dothraki.json?text=${input.value}`;

  //Fetch API (getting URL and if the status code is 200 then display the data)
  fetch(apiURL).then(function response(response) {
    response
      .json()
      .then(function data(responseData) {
        translatedText.innerText = responseData.contents.translated;
      })

      //In case of error run the .catch function
      .catch(function catchError(error) {
        console.log("Something went wrong", error);
      });
  });
}

//EventListener function for calling main function
translateButton.addEventListener("click", function () {
  validation();
});
