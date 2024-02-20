function add() {
    var ingredientInput = document.getElementById('list')
    var ingredient = ingredientInput.value.trim();

    if (ingredient != '') {
        var sla = document.getElementById("list-ingredient")
        var li = document.createElement('li')
        li.innerHTML = `<span>${ingredient}</span>
    <button onclick=bought()>purchased</button>
    <button onclick=remove()>remove</button>`

        sla.appendChild(li)

    } else {
        alert("enter something")
    }
}