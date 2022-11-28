let inputValidator = new InputValidator();

class ButtonClickHandeler {
    editButton = function (button) {
        let fieldDisabled = button.parentNode.previousSibling.disabled;

        if (fieldDisabled == true) {
            button.parentNode.previousSibling.disabled = false;
            button.innerText = 'Spara';
        }

        if (fieldDisabled != true) {
            if (e.target.parentNode.previousSibling.value != "") {
                if (document.getElementById('error-message') != null) {
                    document.getElementById('error-message').remove();
                }
                button.parentNode.previousSibling.disabled = true;
                button.innerText = 'Ändra';
            } else {
                checkEmptyString();
                inputValidator.elementExists('error-message');
            }
        }
    }

    //DONE
    doneButton = function (button) {

        // li = button.parentNode.parentNode.parentNode;
        li = button;

        if (document.querySelector('#done-section ul') == null) {
            doneSection.append(ul);
            ul.id = 'done-ul';
        }
        button.remove();
        return document.getElementById('done-ul').append(li);
    }

    //REMOVE
    removeButton = function (button) {
            // return button.parentNode.parentNode.parentNode.remove();
            button.remove();
    }
    resetButton = function () {

        newTask.value = '';
        let listElements = document.querySelectorAll('li');

        for (li of listElements) {
            li.remove();
        }

        if (resetBtn.nextSibling != null) {
            resetBtn.nextSibling.remove();
        }
    }
}