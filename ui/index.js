document.getElementById("add-user-form").addEventListener("submit", (e) => {
  // e.preventDefault();
  const name = document.querySelector("#fname").value;
  const mobile = document.querySelector("#mobile").value;

  createUser(name, mobile)
});

async function createUser(name, mobile) {
  const data = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, mobile }),
  });
  window.location.reload()
}

// iife -> Imediately invoked functions
(async function populateUsers(){
  const response = await fetch('http://localhost:3000/api/users',{
    method: "GET" 
  });
  const users = await response.json()
  
  users.forEach(element => {
    const userList = document.getElementById("users-list");
    const newLiElement = document.createElement("li");
    newLiElement.innerHTML = `ID: ${element._id} || NAME:${element.name} <button id="${element._id}" onclick="deleteElement(event)">Delete User</button>`;
    userList.appendChild(newLiElement)
    // dom update
  });
})()

const deleteElement = async (e)=> {
  await fetch(`http://localhost:3000/api/users/${e.target.id}`,{
    method: "DELETE" 
  });
  window.location.reload()
}