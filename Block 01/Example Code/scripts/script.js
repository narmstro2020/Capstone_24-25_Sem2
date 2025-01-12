function createList() {
    let list = document.getElementById("list");

    list.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        let inner = list.innerHTML;
        inner += `<li>Item #${i}</li>`;
        list.innerHTML = inner;
    }
}

function clearList(){
    document.getElementById("list").innerHTML = '';
}

const element = document.getElementById("button");
element.style.backgroundColor = "Blue";
element.style.color = "white";
element.onmouseover = createList;
element.onmouseout = clearList;
