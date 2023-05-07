const d = new Date();
let year = d.getFullYear();
document.getElementById('footer').innerHTML = `&#169; Copyright ${year} Oksana Furman`;

var allTasks = JSON.parse(tasks);

function printTasks(){
    let box = document.getElementById('box');
    box.innerHTML = "";
    for (let val of allTasks) {
        let color = "";
        if (val.importance <=1) {
            color = "green";
        } else if (val.importance <= 3) {
            color = "yellow";
        }  else {
            color = "red";
        }

    
    //card with tasks, displayed in the page
    box.innerHTML += `
        <div class="m-auto my-3">
            <div class="card" style="width: 18rem;">
                <img src="${val.picture}" class="card-img-top" alt="${val.title}">
                <div class="card-body">
                    <h5 class="card-title">${val.title}</h5>
                    <a href="#" class="btn btnImportance" style="background-color: ${color};">${val.importance}</a>
                    <p class="card-text">${val.deadline}</p>
                    <p class="card-text">${val.description}</p>
                    <a href="#" class="btn btn-success btnDone">Done</a>
                    <a href="#" class="btn btn-danger btnDelete">Delete</a>
                </div>
            </div>
        </div>`;
}
}

let btnsImportance = document.getElementsByClassName('btnImportance');
for (let i = 0; i < btnsImportance.length; i++) {
    btnsImportance[i].addEventListener("click", function() {
        allTasks[i].importance++;
        if (allTasks[i].importance > 5) {
            allTasks[i].importance = 0;
        }
        console.log(allTasks[i].importance);
        document.getElementsByClassName('btnImportance')[i].innerHTML = allTasks[i].importance;
        // let color = "";
        // if (parseInt(document.getElementsByClassName("btnImportance")[i].innerHTML) <= 1) {
        //     color = "green";
        // } else if (parseInt(document.getElementsByClassName("btnImportance")[i].innerHTML) <= 3) {
        //     color = "yellow";
        // } else {
        //     color = "red";
        // }
        // document.getElementsByClassName("btnImportance")[i].style.backgroundColor = color;
    })  
}

let btnsDone = document.getElementsByClassName('btnDone');


let btnsDelete = document.getElementsByClassName('btnDelete');

printTasks();