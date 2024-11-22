const playerForm = document.querySelector("#submitForm"); //select form
const playersContainer = document.querySelector("#players"); //select ul

playerForm.addEventListener("submit", function (e) {
  //add event listener to submit
  e.preventDefault(); //prevent default behavior

  const firstInput = playerForm.elements.player; //catch what was the first input
  const secondInput = playerForm.elements.team; //catch what was the second input
  addPlayer(firstInput.value, secondInput.value); //method with the inputs

  firstInput.value = ""; //set empty
  secondInput.value = ""; //set empty
});

const addPlayer = (player, team) => {
  const newPlayer = document.createElement("li"); //create a new li
  const bTag = document.createElement("b"); //create a bold tag

  bTag.append(player); //append bold tag for the first method input(first input)
  newPlayer.append(bTag); //append bold tag after li
  newPlayer.append(`- ${team}`); //append a string after li
  playersContainer.append(newPlayer); //append all li elements after ul
};

// <form>  for event submit
//     <ul>
//          <li>
//             <b></b>
//              string
//          </li>
//     </ul>
//</form>
