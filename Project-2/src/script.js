/* eslint-disable no-unused-vars */
export function newJs() {
          const URL = "https://reqres.in/api/users?page=1";
          let btn = document.querySelector("button");
          let loader = document.querySelector(".loader");
          let loading = document.querySelector(".loading");
          btn.addEventListener("click", handleClick);
          async function handleClick() {
            btn.disabled = "true";
              loader.style.zIndex = 5;
              loading.style.display = "block";
              try {
                  let rawData = await fetch(URL);
                  let Data = await rawData.json();
                  let Users = Data.data;
                  Users.forEach(User => {
                    createUser(User.avatar,User.first_name,User.last_name,User.email,User.id);
                  });
              } catch (error) {
                  alert("error fetching data");
              } finally {
                  loader.style.zIndex = -5;
                  loading.style.display = "none";
              }
          };
          function createUser(img,fn,ln,em,id) {
                    let info = document.querySelector(".info");
                    let new_User = document.createElement("div");
                    let new_img = document.createElement("div");
                    let new_details = document.createElement("div");
                    let new_fn = document.createElement("p");
                    let new_ln = document.createElement("p");
                    let new_em = document.createElement("p");
                    let new_id = document.createElement("p");

                    new_User.className = "user";
                    new_img.className = "img";
                    new_details.className = "details";

                    new_img.style.backgroundImage = `url(${img})`;

                    new_fn.className = "fn";
                    new_fn.innerText = `First Name: ${fn}`;
                    new_ln.className = "ln";
                    new_ln.innerText = `Last Name: ${ln}`;
                    new_em.className = "em";
                    new_em.innerText = `Email: ${em}`;
                    new_id.className = "id";
                    new_id.innerText = `Id: ${id}`;

                    new_details.appendChild(new_fn);
                    new_details.appendChild(new_ln);
                    new_details.appendChild(new_em);
                    new_details.appendChild(new_id);
                    new_User.appendChild(new_img);
                    new_User.appendChild(new_details);
                    info.appendChild(new_User);
          }
      }
        