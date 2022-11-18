let inputValidator = new InputValidator();

class ButtonClickHandeler {
    edit = function (button) {
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
    done = function (button) {

        li = button.parentNode.parentNode.parentNode;

        if (document.querySelector('#done-section ul') == null) {
            doneSection.append(ul);
            ul.id = 'done-ul';
        }
        this.remove(button);
        return document.getElementById('done-ul').append(li);
    }

    //REMOVE
    remove = function (button) {
            return button.parentNode.parentNode.parentNode.remove();
    }
    reset = function () {

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