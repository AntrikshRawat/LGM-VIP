export function createStudent() {
          let submit = document.querySelector("button");
          let iname = document.querySelector("#name");
          let iweb = document.querySelector("#website");
          let iemail = document.querySelector("#email");
          let igen = document.querySelector("#gender");
          let img = document.querySelector("#image");
          let iskills = document.querySelectorAll(".skls");
          let students = document.querySelector(".students");
          submit.addEventListener("click",(e)=>{
                    e.preventDefault();
                    if(iname.value === ""||iweb.value === ""||iemail.value === ""||igen.value === "") {
                              alert("complete form...");
                    } else{
                    let newStudent = document.createElement("div");
                    let newAvatar = document.createElement("div");
                    let newInfo = document.createElement("div");
                    let p1 = document.createElement("p");
                    let p2 = document.createElement("a");
                    let p3 = document.createElement("p");
                    let p4 = document.createElement("p");
                    let p5 = document.createElement("p");

                    newStudent.className = "student";
                    newAvatar.className = "avatar";
                    newInfo.className = "info";
                    p1.className = "name";
                    p2.className = "web";
                    p3.className = "em";
                    p4.className = "gen";
                    p5.className = "skl";

                    p1.innerText = iname.value;
                    p2.innerText = iweb.value;
                    p2.href = iweb.value;
                    p3.innerText = iemail.value;
                    p4.innerText = igen.value;
                    iskills.forEach((ele)=>{
                              if(ele.checked === true) {
                             p5.innerText += `${ ele.value }`;
                             ele.checked = false;                 
                              }
                    });
                    let file = img.files[0];
                    if(file) {
                              let imgurl = URL.createObjectURL(file);
                              newAvatar.style.backgroundImage = `url("${imgurl}")`;
                    }

                    newInfo.appendChild(p1);
                    newInfo.appendChild(p2);
                    newInfo.appendChild(p3);
                    newInfo.appendChild(p4);
                    newInfo.appendChild(p5);
                    newStudent.appendChild(newAvatar);
                    newStudent.appendChild(newInfo);
                    // students.appendChild(newStudent);
                    students.insertBefore(newStudent,students.firstChild);

                    iname.value = "";
                    iweb.value = "";
                    iemail.value = "";
                    igen.value = "";
          }   
          })
}