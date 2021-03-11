let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".popup__close");
let addButton = document.querySelector(".profile__button-add");
let popup = document.querySelector(".popup");
let popupAdd = document.querySelector(".popup-add")
let profileName = document.querySelector(".profile__name");
let profileEmployment = document.querySelector(".profile__employment");
let popupName = document.querySelector(".form__input_name");
let popupEmployment = document.querySelector(".form__input_employment");
let form = document.querySelector("form");
let templateElement = document.querySelector(".template");
let elements = document.querySelector(".elements");
let closeButtonAdd = popupAdd.querySelector(".popup__close");
let formAdd = popupAdd.querySelector("form");
let popupAddName = popupAdd.querySelector(".form__input_name");
let popupAddImage = popupAdd.querySelector(".form__input_employment");

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


editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
closeButtonAdd.addEventListener("click", closePopupAdd);
addButton.addEventListener("click", openPopupAdd)
form.addEventListener("submit", formSubmitHandler); 
formAdd.addEventListener("submit", addElement); 

function closePopup () {
    popup.classList.remove("popup_opened");
}

function closePopupAdd () {
    popupAdd.classList.remove("popup_opened");
}

function openPopup () {
    popupName.value = profileName.textContent;
    popupEmployment.value = profileEmployment.textContent;
    popup.classList.add("popup_opened");
}

function openPopupAdd () {
  popupAddName.value = "";
  popupAddImage.value = "";
  popupAdd.classList.add("popup_opened");

}    

function formSubmitHandler(evt) {
    evt.preventDefault ();
    profileName.textContent = popupName.value;
    profileEmployment.textContent = popupEmployment.value;
    closePopup ();
}

//Простите за срач в коде. JS дается ооочень не легко. Бояюсь не успеть к дедлайну. Буду премного благодарен, если подскажите как избежать дублирования объявления переменных 
//в функциях, у меня без дублирования не получилось. 

popupImage = document.querySelector(".popup-image");
popupPhoto = document.querySelector(".popup-image__image");
popupTitle = document.querySelector(".popup-image__title");
closeButtonPhoto = popupImage.querySelector(".popup__close");
closeButtonPhoto.addEventListener("click", closePopupImage);

initialCards.forEach(function (item) {
    const newElement = templateElement.content.cloneNode(true);
    const titleElement = newElement.querySelector(".element__title");
    const imageElement = newElement.querySelector(".element__image");
    addListeners(newElement);
    titleElement.textContent = item.name;
    imageElement.src = item.link;
    elements.prepend(newElement);
    return newElement;  
});

function addElement (evt) {
  evt.preventDefault ();
  const newElement = templateElement.content.cloneNode(true);
  const titleElement = newElement.querySelector(".element__title");
  const imageElement = newElement.querySelector(".element__image");
  titleElement.textContent = popupAddName.value;
  addListeners(newElement);
  imageElement.src = popupAddImage.value;
  elements.prepend(newElement);
  closePopupAdd ();
  return newElement;  
}

function addListeners(newElement) {
    likeButton = newElement.querySelector(".element__button-like");
    likeButton.addEventListener('click', likeElement);
    deleteButton = newElement.querySelector(".element__button-delete")
    deleteButton.addEventListener("click", deleteElement);
    elementPhoto = newElement.querySelector(".element__image");
    elementPhoto.addEventListener("click", openPopupImage);
}

function likeElement(evt) {
    evt.target.classList.toggle("element__button-like_liked")
}

function deleteElement(evt) {
    evt.target.closest(".element").remove();
    console.log("deleted")
}

function openPopupImage (evt) {
    popupImage.classList.add("popup_opened");
    const titleElement = document.querySelector(".element__title");
    const imageElement = document.querySelector(".element__image");
    popupPhoto.src = evt.target.src;
    popupTitle.textContent = evt.target.nextElementSibling.nextElementSibling.firstElementChild.textContent;
}

function closePopupImage () {
    popupImage.classList.remove("popup_opened");
}













