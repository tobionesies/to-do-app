class InputValidator {

    //Methods
    getFormatedErrorMessage = function(element) {
        let errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        errorMessage.innerHTML   = `<div class="alert alert-danger" role="alert">
                                            Får ej skapa tomma sysslor
                                        </div>`;

        errorMessage.style.color = 'red';

        return element.parentNode.parentNode.after(errorMessage);
     
    }
    
    isEmptyString = function(inputField) {
        if(inputField.value.trim() === '' && this.elementExists(inputField.parentNode.parentNode.nextSibling.id, 'error-message') === false){
            this.getFormatedErrorMessage(inputField);
        } 
    }

    elementExists = function(elementFound, element) {
        return elementFound === element ? true:false;
    }
    
    attributeExists = function(attributeFound, attribute) {
        return attributeFound === attribute ? true:false;
    }
}