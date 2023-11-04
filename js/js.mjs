// function E(id) {
//   return document.getElementById(id);
// }

// const input = E("input");
// const addPlayer = E("addPlayer");
// const listGroup = E("list-group");
// const list = E("list");

// let players = ["julio", "lopera", "yeni"];

// addPlayer.addEventListener("click", () => {
//   let player = input.value;
//   input.value = "";
//   input.focus();
//   if (player) {
//     players.push(player);
//     list.style.display = "block";

//   }
// });

// function showPlayers() {
//   for (let index = 0; index < players.length; index++) {
//     console.log(players[index]);
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("input");
  const listElement = document.getElementById("list-group");
  const buttonPlay = document.getElementById("button-play");

  const names = [];

  function updateList() {
    listElement.innerHTML = "";
    console.log(names);
    names.forEach((name, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = name;
      console.log(listItem);

      listElement.appendChild(listItem);
    });
  }

  // document.getElementById("addPlayer").addEventListener("click", function () {
  //   const playerName = inputElement.value;
  //   if (playerName.trim() !== "") {
  //     console.log("nombre agregado", playerName);
  //     names.push(playerName);
  //     inputElement.value = "";
  //     updateList();
  //   }
  // });

  buttonPlay.addEventListener("click", function () {
    console.log("JUGAR button clicked");
    names.shift();
    updateList();
  });
});
const playersString = localStorage.getItem("players");
let players = JSON.parse(playersString);
// animacion
const buttonShoot = document.getElementById("button-shoot");
const shoot = document.getElementById("shoot");

buttonShoot.addEventListener("click", () => {
  shoot.animate(
    [
      { transform: "translateY(25%)" },
      { transform: "translateY(-25%)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(-75%)" },
      { transform: "translateY(-100%)" },
    ],
    { duration: 100, direction: "normal", easing: "linear" }
  );
  players.pop();
  if(players.length === 0){
    window.location.href = "./../pages/page3.html";
  }
});
