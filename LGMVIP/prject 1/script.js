let input = document.querySelector("input");
let add = document.querySelector("button");
let taskdiv = document.querySelector(".taskdiv");
add.addEventListener("click",check =()=>{
          if(input.value == "") {
                  alert("No Task Present");
          } else {
                    createElement(input.value);
          }
          input.value = "";
});
function createElement(val) {
          let newTask = document.createElement("div");
          let div = document.createElement("div");
          let p = document.createElement("p");
          p.innerText = val;
          let icon1 = document.createElement("i");
          let icon2 = document.createElement("i");
          icon1.setAttribute("id","i1");
          icon2.setAttribute("id","i2");
          newTask.className = "task";
          div.className = "txt";
          icon1.className = "fa-solid fa-check";
          icon2.className = "fa-regular fa-circle-xmark";
          div.appendChild(p);
          newTask.appendChild(div);
          newTask.appendChild(icon1);
          newTask.appendChild(icon2);
          taskdiv.appendChild(newTask);
          icon1.addEventListener("click",()=>{
                p.style.textDecorationLine = "line-through";
                taskdiv.appendChild(newTask);
                icon1.remove();
          })
          icon2.addEventListener("click", () => {
                taskdiv.removeChild(newTask);
            });
};
window.addEventListener("keypress",(e)=>{
        if(e.key == "Enter") {
                check();
        }
})