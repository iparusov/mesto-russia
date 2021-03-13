const editButton = document.querySelector(".profile__button-edit");
const closeButton = document.querySelector(".popup__close");
const addButton = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup-add")
const profileName = document.querySelector(".profile__name");
const profileEmployment = document.querySelector(".profile__employment");
const popupName = document.querySelector(".form__input_name");
const popupEmployment = document.querySelector(".form__input_employment");
const form = document.querySelector("form");
const templateElement = document.querySelector(".template");
const elements = document.querySelector(".elements");
const closeButtonAdd = popupAdd.querySelector(".popup__close");
const formAdd = popupAdd.querySelector(".form");
const popupAddName = popupAdd.querySelector(".form__input_name");
const popupAddImage = popupAdd.querySelector(".form__input_employment");
const popupImage = document.querySelector(".popup-image");
const popupPhoto = document.querySelector(".popup-image__image");
const popupTitle = document.querySelector(".popup-image__title");
const closeButtonPhoto = popupImage.querySelector(".popup__close");
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 


function closePopup (popup) {
    popup.classList.remove("popup_opened");
}

function openPopup (popup) {
    popup.classList.add("popup_opened");
}

function changeProfileEditPopupValues () {
    popupName.value = profileName.textContent;
    popupEmployment.value = profileEmployment.textContent;
}

function changePopupImageValues (evt) {
    popupPhoto.src = evt.target.src;
    popupTitle.textContent = evt.target.alt;
    popupPhoto.alt = evt.target.alt;
}

function formSubmitHandler(evt) {
    evt.preventDefault ();
    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;
    closePopup (popup);
}

initialCards.forEach(function (item) {
    addCard (elements, createCard(item));
});

//Не знаю это ли Вы имели ввиду, но я попытался

function addElement (evt) {
    evt.preventDefault ();
    addCard (elements, createCard({name: popupAddName.value, link: popupAddImage.value}));
    closePopup (popupAdd);
    formAdd.reset();
}  

function addCard (container, cardElement) {
    container.prepend(cardElement);
}

function createCard (item) {
    const newElement = templateElement.content.cloneNode(true);
    const titleElement = newElement.querySelector(".element__title");
    const imageElement = newElement.querySelector(".element__image");
    addListeners(newElement);
    titleElement.textContent = item.name;
    imageElement.src = item.link;
    imageElement.alt = item.name;
    return newElement;  
}

function addListeners(newElement) {
    const likeButton = newElement.querySelector(".element__button-like");
    likeButton.addEventListener('click', likeElement);
    const deleteButton = newElement.querySelector(".element__button-delete")
    deleteButton.addEventListener("click", deleteElement);
    const elementPhoto = newElement.querySelector(".element__image");
    elementPhoto.addEventListener("click", (evt) => {
        changePopupImageValues(evt);
        openPopup(popupImage)
    });
}

function likeElement(evt) {
    evt.target.classList.toggle("element__button-like_liked")
}

function deleteElement(evt) {
    evt.target.closest(".element").remove();
    console.log("deleted")
}


editButton.addEventListener("click", () => { 
  changeProfileEditPopupValues ()
  openPopup(popup);
});
closeButton.addEventListener("click", () => { closePopup(popup) });
closeButtonAdd.addEventListener("click", function () {closePopup(popupAdd)});
addButton.addEventListener("click", () => {openPopup(popupAdd)});
form.addEventListener("submit", formSubmitHandler); 
formAdd.addEventListener("submit", addElement); 
closeButtonPhoto.addEventListener("click", () => {closePopup(popupImage)});














