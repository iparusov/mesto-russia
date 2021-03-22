const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
        setInputListeners(inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass, formElement)
    });
}

const setInputListeners = (inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach(inputElement => 
        {inputElement.addEventListener('input', () => {
            checkInput(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    })
}

const checkInput = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.validity.valid) {
        hideInputError(inputElement, inputErrorClass, errorClass, errorElement)
    } else {
        showInputError(inputElement, inputErrorClass, errorClass, errorElement);
    }
}

const showInputError = (inputElement, inputErrorClass, errorClass, errorElement) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
}

const hideInputError = (inputElement, inputErrorClass, errorClass, errorElement) => {
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}); 




