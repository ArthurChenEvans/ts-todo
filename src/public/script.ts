const taskInput: HTMLInputElement = document.querySelector('#task-input')!;
const addTaskButton: HTMLButtonElement = document.querySelector('#add-task_button')!;

/* Ensures button and input is always disabled and reset upon reload */
addTaskButton.setAttribute('disabled', '');
taskInput.value = '';

const toggleDisabled = function (inputElement: HTMLInputElement, buttonElement: HTMLButtonElement): void {
    if (isInputFilled(inputElement)) {
        buttonElement.removeAttribute('disabled');
    } else {
        buttonElement.setAttribute('disabled', '');
    }
}

const isInputFilled = function(element: HTMLInputElement): boolean {
    console.log(`Am I filled? ${!!element.value}`);
    return !!element.value;
}

taskInput.addEventListener('input', () => toggleDisabled(taskInput, addTaskButton));