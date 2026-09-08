const totalResources = document.getElementById("totalResources");
const completedResources = document.getElementById("completedResources");
const pendingResources = document.getElementById("pendingResources");

async function loadResources(){
    const response = await fetch('/api/resources');
    const resources = await response.json();
let count = 0;
let countF = 0;
function countTrue(){
    for(let i = 0; i<resources.length; i++){
        if(resources[i].completed === true){
            count++;
        }
    }
    return count;
}

function countFalse(){
    for(let i = 0; i<resources.length; i++){
        if(resources[i].completed === false){
            countF++;
        }
    }
    return countF;
}

    let allTotal = resources.length;
    let allCompleted = countTrue();
    let allPending = countFalse();

if(subjectFilter.value === 'all' && statusFilter.value === 'all'){
        totalResources.innerText = allTotal;
    completedResources.innerText = allCompleted;
    pendingResources.innerText = allPending;
}


}





