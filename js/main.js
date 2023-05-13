const d = new Date();
let year = d.getFullYear();
document.getElementById('footer').innerHTML = `&#169; Copyright ${year} Oksana Furman`;

var allTasks = JSON.parse(tasks);

function printTasks(){
    let box = document.getElementById('box');
    box.innerHTML = "";
    for (let val of allTasks) {
        let color = "";
        if (val.importance == 0) {
            color = "green";
        } else if (val.importance <= 2) {
            color = "yellow";
        } else if (val.importance <= 4) {
            color = "orange";
        }  else {
            color = "red";
        }

    
    //card with tasks, displayed in the page
    box.innerHTML += `
        <div class="item" style="background-image: url('${val.picture}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
            <div class="inner">
                <h5 class="card-title m-2">${val.title}</h5>
                <i class="bi bi-exclamation-triangle"></i> <button class="btn btnImportance" style="background-color: ${color};">${val.importance}</button>
                <div class="details">
                    <p class="card-text"><i class="bi bi-calendar-day"></i> ${val.deadline}</p>
                    <p class="card-text">${val.description}</p>
                    <div class="btnDiv">
                        <button class="btn btn-success btnDone m-1">Done</button>
                        <button class="btn btn-danger btnDelete m-1">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;

    // box.innerHTML += `
    //     <div class="item m-auto my-3">
    //         <div class="card" style="width: 18rem;">
    //             <img src="${val.picture}" class="card-img-top" alt="${val.title}">
    //             <div class="card-body">
    //                 <h5 class="card-title">${val.title}</h5>
    //                 <i class="bi bi-exclamation-triangle"></i> <button class="btn btnImportance" style="background-color: ${color};">${val.importance}</button>
    //                 <p class="card-text"><i class="bi bi-calendar-day"></i> ${val.deadline}</p>
    //                 <p class="card-text">${val.description}</p>
    //                 <button class="btn btn-success btnDone">Done</button>
    //                 <button class="btn btn-danger btnDelete">Delete</button>
    //             </div>
    //         </div>
    //     </div>`;
    }

    // button changes importance level(number and color)
    let btnsImportance = document.getElementsByClassName('btnImportance');
    for (let i = 0; i < btnsImportance.length; i++) {
        btnsImportance[i].addEventListener("click", function() {
            allTasks[i].importance++;
            if (allTasks[i].importance > 5) {
                allTasks[i].importance = 0;
            }
            document.getElementsByClassName('btnImportance')[i].innerHTML = allTasks[i].importance;
            let color = "";
            if (parseInt(document.getElementsByClassName("btnImportance")[i].innerHTML) == 0) {
                color = "green";
            } else if (parseInt(document.getElementsByClassName("btnImportance")[i].innerHTML) <= 2) {
                color = "yellow";
            } else if (parseInt(document.getElementsByClassName("btnImportance")[i].innerHTML) <= 4) {
                color = "orange";
            } else {
                color = "red";
            }
            document.getElementsByClassName("btnImportance")[i].style.backgroundColor = color;
        })  
    }

    let cardArray = document.getElementsByClassName('item');
    let btnsDone = document.getElementsByClassName('btnDone');
    let inner = document.getElementsByClassName('inner');
    for (let i = 0; i < btnsDone.length; i++) {
        btnsDone[i].addEventListener("click", function() {
            cardArray[i].style.filter = "grayscale(100%)";
            btnsDone[i].style.display = "none";
            inner[i].style.transform = "rotateY(360deg)";
            inner[i].style.transition = "transform 0.8s";
        })
    }
    
    let btnsDelete = document.getElementsByClassName('btnDelete');
    for (let i = 0; i < btnsDelete.length; i++) {
        btnsDelete[i].addEventListener("click", function() {
            cardArray[i].style.display = "none";
        })
    }
    
}
    let btnSortDown = document.getElementById('btnSortDown');
    
    btnSortDown.addEventListener("click", function(){
        allTasks.sort((a, b) => b.importance - a.importance);
        btnSortDown.style.display = "none";
        btnSortUp.style.display = "inline";
        printTasks();
    });
    let btnSortUp = document.getElementById('btnSortUp');
    btnSortUp.addEventListener("click", function(){
        allTasks.sort((a, b) => a.importance - b.importance);
        btnSortUp.style.display = "none";
        btnSortDown.style.display = "inline";
        printTasks();
    });
    

printTasks();