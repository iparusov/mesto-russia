let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileEmployment = document.querySelector(".profile__employment");
let popupName = document.querySelector(".form__input_name");
let popupEmployment = document.querySelector(".form__input_employment");
let saveButton = document.querySelector("form__submit");

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
popup.addEventListener("submit", formSubmitHandler); 

function closePopup () {
    popup.classList.remove("popup_opened");
}

function openPopup () {
    popupName.value = profileName.textContent;
    popupEmployment.value = profileEmployment.textContent;
    popup.classList.add("popup_opened");
}    

function formSubmitHandler(evt) {
    evt.preventDefault ();
    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;
    closePopup ();
}




