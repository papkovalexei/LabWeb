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
    }
    thead.appendChild(tr);
    var tbody = document.createElement("tbody");
    table.setAttribute("id", "tabletodo");

    table.appendChild(thead);
    table.appendChild(tbody);
    body.appendChild(table);

    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage[i]);
        var table = document.getElementById("tabletodo");

        var tr = document.createElement("tr");
        var helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Название");
        helpTd.appendChild(document.createTextNode(data["nameTask"]));
        tr.appendChild(helpTd);
        helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Описание");
        helpTd.appendChild(document.createTextNode(data["desc"]));
        tr.appendChild(helpTd);
        helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Исполнитель");
        helpTd.appendChild(document.createTextNode(data["who"]));
        tr.appendChild(helpTd);

        table.appendChild(tr);
    }
}

function clean() {
    localStorage.clear();
}

function submitFunc() {
    var elements = document.getElementById("todoform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length - 1; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    var table = document.getElementById("tabletodo");

    if (obj.nameTask == 0 || obj.desc == 0 || obj.who == 0) {
        alert("Не все поля заполнены");
    } else {
        table = document.getElementById("tabletodo");

        var tr = document.createElement("tr");
        var helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Название");
        helpTd.appendChild(document.createTextNode(obj.nameTask));
        tr.appendChild(helpTd);
        helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Описание");
        helpTd.appendChild(document.createTextNode(obj.desc));
        tr.appendChild(helpTd);
        helpTd = document.createElement("td");
        helpTd.setAttribute("data-label", "Исполнитель");
        helpTd.appendChild(document.createTextNode(obj.who));
        tr.appendChild(helpTd);

        table.appendChild(tr);

        localStorage.setItem(localStorage.length, JSON.stringify(obj));

        document.getElementById("nameTask").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("who").value = "";
    }
    return false;
}