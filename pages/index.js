let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileEmployment = document.querySelector(".profile__employment");
let popupName = document.querySelector(".popup__name");
let popupEmployment = document.querySelector(".popup__employment");
let saveButton = document.querySelector(".popup__submit");

function closePopup () {
    popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", function () {
    popupName.value = profileName.textContent;
    popupEmployment.value = profileEmployment.textContent;
    popup.classList.add("popup_opened");
});
closeButton.addEventListener("click", closePopup);

saveButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;
    closePopup ();
})

