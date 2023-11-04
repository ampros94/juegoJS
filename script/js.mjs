
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("input");
  const listElement = document.getElementById("list-group");
  const buttonPlay = document.getElementById("button-play");
  

  const names = [];
  

//   function updateList() {
//       listElement.innerHTML = ""; 
//       console.log(names)
//       names.forEach((name, index) => {
//           const listItem = document.createElement("li");
//           listItem.textContent = name;
//           console.log(listItem)
          
          
          
//           listElement.appendChild(listItem);
//       });
//   }
function updateList() {
    listElement.innerHTML = ""; 
    console.log(names)
    names.forEach((name, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            names.shift(); 
            updateList();}) 
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);    
        console.log(listItem)
        
        
        
        listElement.appendChild(listItem);
    });
}

  document.getElementById("addPlayer").addEventListener("click", function () {
      const playerName = inputElement.value;
      if (playerName.trim() !== "") {
          console.log("nombre agregado",playerName)
          names.push(playerName);
          inputElement.value = ""; 
          updateList();
      }
  });
  // nombre de jugadores
  // const namesShow = JSON.parse(localStorage.getItem('names')) || [];	

  // names.forEach(playerName => {
  //   const li = document.createElement('li');
  //   li.textContent = playerName;
  //   namesList.appendChild(li);
  // } );

  
  buttonPlay.addEventListener("click", function () {
      
      console.log("JUGAR button clicked");
        console.log(names);
      localStorage.setItem("players",JSON.stringify(names));
      updateList()
        window.location.href = "./../pages/page2.html";
  });
});