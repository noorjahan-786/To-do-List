document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(input.value);
        input.value = '';
    });

    function addTodo(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.addEventListener('click', function() {
            list.removeChild(li);
        });

        li.appendChild(button);
        list.appendChild(li);
    }
});
