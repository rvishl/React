const render = data => {
    const list = data.data;
    const parent = document.getElementById("list");
    parent.innerHTML = "";
    list.forEach(element => {
        const new_li = document.createElement("li");
        new_li.innerText = `${element.first_name} ${element.last_name}`;
        parent.appendChild(new_li);
    });
}

const btn = document.getElementById('btn_id');
btn.addEventListener("click", _ => {

    fetch("https://reqres.in/api/users")
    .then(r => r.json())
    .then(data => render(data));

});