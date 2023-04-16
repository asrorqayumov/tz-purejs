import countries from "./countries.json" assert { type: "json" };

let modalWrapper = document.getElementById("modal__wrapper");
let openBtn = document.getElementById("btn__open");
let btnClose = document.getElementById("btn__close");
let select = document.getElementById("country__select");
let input = document.getElementById("country__input");
let nameCountry = document.querySelector(".modal__text");
let form = document.querySelector(".modal__form");

let html;

countries.forEach((country) => {
  html += `
    <option value='${country.name}' class="bg-none">
    ${country.name}
    </option>
    `;
  select.innerHTML = html;
});

openBtn.addEventListener("click", (e) => {
  modalWrapper.style.display = "flex";
  document.body.classList.add("layer");
});

btnClose.addEventListener("click", (e) => {
  modalWrapper.style.display = "none";
  document.body.classList.remove("layer");
});

nameCountry.innerHTML = select.value;

countries.filter((country) => {
  country.name === select.value ? (input.value = +country.dial_code) : "";
});

select.addEventListener("change", (e) => {
  nameCountry.innerHTML = e.target.value;

  countries.filter((country) => {
    country.name === e.target.value ? (input.value = +country.dial_code) : "";
  });
});

input.addEventListener("change", (e) => {
  let DIAL_CODE3 = e.target.value.slice(0, 3);
  let DIAL_CODE2 = e.target.value.slice(0, 2);
  countries.forEach((country) => {
    if (+country.dial_code == DIAL_CODE3) {
      nameCountry.innerHTML = country.name;
      select.value = country.name;
    } else if (+country.dial_code == DIAL_CODE2) {
      nameCountry.innerHTML = country.name;
      select.value = country.name;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modalWrapper.style.display = "none";
  document.body.classList.remove("layer");
});
