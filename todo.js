window.onload = function() {
    var body = document.getElementById("containertable");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");

    let headName = ["Название", "Описание", "Исполнитель"];

    for (var i = 0; i < headName.length; i++) {
        console.log(i);
        var thHelp = document.createElement("th");
        thHelp.setAttribute("scope", "col");
        var text = document.createTextNode(headName[i]);
        thHelp.appendChild(text);
        tr.appendChild(thHelp);

        var tdHelp = document.createElement("td");
        tdHelp.setAttribute("data-label", headName[i]);
    }

    thead.appendChild(tr);
    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tabletodo");

    table.appendChild(thead);
    table.appendChild(tbody);
    body.appendChild(table);
    var tableTemplate = document.querySelector("#tabletemplate");

    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage[i]);
        var newC = tableTemplate.content.firstElementChild.cloneNode(true);;
        var rd = newC.getElementsByTagName("td");
        rd[0].textContent = data["nameTask"];
        rd[1].textContent = data["desc"];
        rd[2].textContent = data["who"];
        table.getElementsByTagName("tbody")[0].appendChild(newC);
    }
}

function clean() {
    var table = document.getElementById("tabletodo");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    localStorage.clear();
}

function cleanField() {
    var elements = document.getElementById("todoform").elements;
    elements[0].value = "";
    elements[1].value = "";
    elements[2].value = "";
}

function submitFunc() {
    var elements = document.getElementById("todoform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length - 1; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    var table = document.getElementById("tabletodo");

    table = document.getElementById("tabletodo");
    var tableTemplate = document.querySelector("#tabletemplate");
    var newC = tableTemplate.content.firstElementChild.cloneNode(true);;
    var rd = newC.getElementsByTagName("td");
    rd[0].textContent = obj.nameTask;
    rd[1].textContent = obj.desc;
    rd[2].textContent = obj.who;
    console.log(rd);
    console.log(obj);
    table.appendChild(newC);
    localStorage.setItem(localStorage.length, JSON.stringify(obj));

    document.getElementById("nameTask").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("who").value = "";

    return false;
}