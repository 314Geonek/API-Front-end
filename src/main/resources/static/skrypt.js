document.addEventListener('DOMContentLoaded', () => {
    getAllStudents();
});

function getAllStudents() {
    fetch("http://localhost:8080/students")
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject('Coś poszło nie tak!');
                }
                return response.json();
            })
            .then((data) => {
                pokazTabele(data);
            })
            .catch((error) => {
                console.log(error);
            });
}
function pokazTabele(response) {
    var main = document.getElementById('main');
    var content = "<table border='1'> <thead> <tr> <th> Id</th> <th> Imię</th>" +
            "<th>Nazwisko</th><th>Średnia</th></tr></thead><tbody>";
    for (var st in response) {
        var id = response[st].id;
        var name = response[st].name;
        var surname = response[st].surname;
        var average = response[st].avarage;
        content += "<tr><td>" + id + "</td><td>" + name + "</td><td>" + surname +
                "</td><td>" + average + "</td></tr>";
    }
    content += "</tbody></table>";
    main.innerHTML = content;

}


function dodaj() {
    var st = {}; //tworzymy obiekt z polami o wartościach pobranych z pól formularza
    st.name = document.getElementById('name').value;
    st.surname = document.getElementById('surname').value;
    st.avarage = document.getElementById('avarage').value;
    fetch("http://localhost:8080/students", {
        method: "post",
        body: JSON.stringify(st),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
            //   .then(response => response.json())
            .then(response => {
                console.log("Dodano użytkownika:");
                console.log(response);
            }
            ).then(() => {
        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('avarage').value = "";
        window.location.reload();

    });
    ;
}

function usun() {
    var id = document.getElementById('idusun').value;
    fetch("http://localhost:8080/students", {
        method: "delete",
        body: JSON.stringify(id),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
            //  .then(response => response.json())
            .then(response => {
                console.log("Skasowano użytkownika:");
                console.log(response);
            }
            ).then(() => {
        document.getElementById('idusun').value = "";

        window.location.reload();

    });
}


function edytuj() {
    var st = {}; //tworzymy obiekt z polami o wartościach pobranych z pól formularza
    st.id = document.getElementById('idEdit').value;
    st.name = document.getElementById('nameEdit').value;
    st.surname = document.getElementById('surnameEdit').value;
    st.avarage = document.getElementById('avarageEdit').value;
    fetch("http://localhost:8080/students", {
        method: "put",
        body: JSON.stringify(st),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
            //   .then(response => response.json())
            .then(response => {
                console.log("edycja użytkownika:");
                console.log(response);
            }
            ).then(() => {
        document.getElementById('idEdit').value = "";
        document.getElementById('nameEdit').value = "";
        document.getElementById('surnameEdit').value = "";
        document.getElementById('avarageEdit').value = "";
        window.location.reload();

    });

}


