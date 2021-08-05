function addUser(){
    var userName=document.getElementById("name").value;
    localStorage.setItem("name",userName);
    
    window.location="pizza.html";
    }
