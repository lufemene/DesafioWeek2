function add() {
    const taskInput = document.getElementById('task')
    const dateInput = document.getElementById('date-task')
    const task = taskInput.value.trim();
    const date = dateInput.value;

    if (task != '' && date != '') {
        let list = document.getElementById("list-task")
        var li = document.createElement('li')
        li.innerHTML = `<span> <b>Task:</b> ${task} <br> <br> <b>Date:</b> ${date} </span>
        <button onclick="bought(this)">done</button>
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
    let index = Array.from(button.parentNode.parentNode.children).indexOf(button.parentNode)
    let activities = JSON.parse(localStorage.getItem('activities')) || []
    activities[index].completed = !activities[index].completed; 
    localStorage.setItem('activities', JSON.stringify(activities));
    button.parentNode.querySelector('button').classList.toggle('purchased');
}

function remove(index) {
    let activities = JSON.parse(localStorage.getItem('activities')) || []
    activities.splice(index, 1)
    localStorage.setItem('activities', JSON.stringify(activities));
    loadTask();
}

function saveTask(task, date) {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push({ task: task, date: date, completed: false });
    localStorage.setItem('activities', JSON.stringify(activities));
}

function loadTask() {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    const list = document.getElementById('list-task')
    list.innerHTML = ''

    activities.forEach(function (MyTask, index) {
        let li = document.createElement('li')
        li.innerHTML = `
        <span> <b>Task:</b> ${MyTask.task} <br> <br> <b>Date:</b> ${MyTask.date} </span>
        <button onclick="bought(this)" ${MyTask.completed ? 'class="purchased"' : ''} >done</button>
        <button onclick="remove(${index})">remove</button>
        `

        list.appendChild(li)
    });
}


