function add() {
    const taskInput = document.getElementById('task')
    const dateInput = document.getElementById('date-task')
    const task = taskInput.value.trim();
    const date = dateInput.value;

    if (task != '' || date != '') {
        let list = document.getElementById("list-task")
        var li = document.createElement('li')
        li.innerHTML = `<span>${task}</span> <span>${date}</span>
    <button onclick="bought(this)">purchased</button>
    <button onclick="remove(this)">remove</button>`

        saveTask(task, date)

        list.appendChild(li)

        taskInput.value = '';
        dateInput.value = '';

    } else {
        alert("enter something")
    }
}

function bought(button) {
    button.parentNode.querySelector('button').classList.toggle('purchased');
}

function remove(button) {
    button.parentNode.remove();
    console.log(button)
    loadTask()
    
}

function saveTask(task, date) {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push({ task: task, date: date, visible: true });
    localStorage.setItem('activities', JSON.stringify(activities));
}

function loadTask() {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    const list = document.getElementById('list-task')
    list.innerHTML = ''

    activities.forEach(function (MyTask) {
        let li = document.createElement('li')
        li.innerHTML = `<span>${MyTask.task}</span> <span>${MyTask.date}</span>
        <button onclick="bought(this)">purchased</button>
        <button onclick="remove(this)">remove</button>`

        list.appendChild(li)
    });
}



