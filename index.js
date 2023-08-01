
document.getElementById("btn1").addEventListener("click", function () {
    console.log(this);
    elm = document.getElementById("d1").toggleAttribute("hidden");
    if (elm == true) {
        this.innerText = "show";
    }
    else {
        this.innerText = "Delete";
    }
});


//////////////////////////////////////////////////////////////////////

document.getElementById("d2").addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("new_style");
});


/////////////////////////////////////////////////////////////////////////

document.querySelector("#btn2").addEventListener("click", function () {
    comp_name = prompt("enter company name");
    cont = prompt("enter name of contacted person");
    country = prompt("enter country name");

    if (comp_name == "") {
        alert("company name is mandatory");
    }

    else {

        if (comp_name == "") {
            comp_name = "null";
        }

        if (cont == "") {
            cont = "null";
        }

        if (country == "") {
            country = "null";
        }

        div = document.createElement("tr");
        document.querySelector("tbody").appendChild(div).innerHTML = `<td> ${comp_name}</td><td> ${cont}</td><td>${country}</td>`;
    }
    len = document.querySelectorAll("tr").length;
    console.log(len);
    if (len > 1) {
        document.getElementById("btn3").removeAttribute("hidden");
    }

});


document.querySelector("#btn3").addEventListener("click", function () {
    row = prompt("enter row number which you want to delete");
    len = document.querySelectorAll("tr").length;
    if (row == "" || row == null) {
        alert("please enter row number");
        return;
    }

    if (row > len - 1) {
        alert("this row doesn't exist");
    }
    else if (row == 0) {
        alert("this row is heading, can not be deleted")
    }
    else {
        document.querySelectorAll("tr")[row].remove();
        if (len == 2) {
            this.setAttribute("hidden", "true");
        }
    }
});




