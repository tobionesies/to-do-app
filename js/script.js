let main = document.getElementsByTagName('main');
let addBtn = document.getElementById('add-new-task-btn');
let resetBtn = document.getElementById('reset-btn');
let newTask = document.getElementById('add-task-text-input');
let toDoSection = document.querySelector('#toDo-section');
let doneSection = document.querySelector('#done-section');
let addResetSection = document.getElementById('add-reset-section');


addBtn.addEventListener('click', function (e) {
    let buttonClickHandeler = new ButtonClickHandeler();

    e.preventDefault();

    if (newTask.value.trim() === '') {
        inputValidator.isEmptyString(newTask);
    } else {
        if(document.getElementById('error-message') != null) {
            document.getElementById('error-message').remove();
        }

        // CREATE TASK
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let inputGroup = document.createElement('div');
        let inputGroupAppend = document.createElement('div');
        let input = document.createElement('input');
        let editBtn = document.createElement('button');
        let doneBtn = document.createElement('button');
        let removeBtn = document.createElement('button');

        if (document.querySelector('#toDo-section ul') == null) {
            toDoSection.append(ul);
            ul.id = 'to-do-ul';
        }

        ul.appendChild(li);
        li.appendChild(inputGroup);
        inputGroup.appendChild(input);
        inputGroup.appendChild(inputGroupAppend);
        inputGroupAppend.appendChild(editBtn);
        inputGroupAppend.appendChild(doneBtn);
        inputGroupAppend.appendChild(removeBtn);

        inputGroup.className = 'input-group';
        inputGroupAppend.className = 'input-group-append';

        input.value = newTask.value;
        input.type = 'text';
        input.disabled = true;

        editBtn.className = 'task-edit-btn';
        editBtn.type = 'button';
        editBtn.className = 'btn btn-warning'
        editBtn.innerText = 'Ändra';

        doneBtn.className = 'task-done-btn';
        doneBtn.type = 'button';
        doneBtn.id = 'done-btn';
        doneBtn.className = 'btn btn-success'
        doneBtn.innerText = 'Färdig';

        removeBtn.className = 'task-remove-btn';
        removeBtn.type = 'button'
        removeBtn.className = 'btn btn-outline-danger'
        removeBtn.innerText = 'Radera';

        document.getElementById('to-do-ul').append(li);

        newTask.value = '';

        document.getElementById('edit-test-btn').addEventListener('click', function (e) {
            console.log('TEST EDIT');
            ButtonClickHandeler.edit(e.target);
        });
        document.getElementById('done-test-btn').addEventListener('click', function (e) {
            console.log('TEST DONE');
            ButtonClickHandeler.done(e.target);
        });
        document.getElementById('remove-test-btn').addEventListener('click', function (e) {
            console.log('TEST REMOVE');
            console.log(e.target);
            buttonClickHandeler.removeButton(e.target);
        });
    }


    // let ButtonClickHandeler = new ButtonClickHandeler();

    // // LIST BUTTON EVENTS

    const buttons = {

        //EDIT
        edit: function (button) {
            button.addEventListener('click', function (e) {
                let fieldDisabled = e.target.parentNode.previousSibling.disabled;

                if (fieldDisabled == true) {
                    this.parentNode.previousSibling.disabled = false;
                    this.innerText = 'Spara';
                }

                if (fieldDisabled != true) {
                    if (e.target.parentNode.previousSibling.value != "") {
                        if (document.getElementById('error-message') != null) {
                            document.getElementById('error-message').remove();
                        }
                        this.parentNode.previousSibling.disabled = true;
                        this.innerText = 'Ändra';
                    } else {
                        checkEmptyString();
                    }
                }
            })
        },

        //DONE
        done: function (button) {
            button.addEventListener('click', function (e) {

                li = e.target.parentNode.parentNode.parentNode;

                if (document.querySelector('#done-section ul') == null) {
                    doneSection.append(ul);
                    ul.id = 'done-ul';
                }

                document.getElementById('done-ul').append(li);
                console.log(e.target);
                e.target.remove();
            });
        },

        //REMOVE
        remove: function (button) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.parentNode.remove();
            });
        }

    }

    buttons.edit(editBtn);
    buttons.done(doneBtn);
    buttons.remove(removeBtn);
});


//RESET BUTTON
resetBtn.addEventListener('click', () => {
    newTask.value = '';
    let listElements = document.querySelectorAll('li');

    for (li of listElements) {
        li.remove();
    }

    if (resetBtn.nextSibling != null) {
        resetBtn.nextSibling.remove();
    }
});


