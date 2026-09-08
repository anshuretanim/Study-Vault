const totalResources = document.getElementById("totalResources");
const completedResources = document.getElementById("completedResources");
const pendingResources = document.getElementById("pendingResources");
const subjectFilter = document.getElementById("subjectFilter");
const statusFilter = document.getElementById("statusFilter");

subjectFilter.addEventListener("change", loadResources);
statusFilter.addEventListener("change", loadResources);

async function loadResources() {
  const response = await fetch("/api/resources");
  const resources = await response.json();
  let countT = 0;
  let countF = 0;
  let countL = 0;
  function countLength(name) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].subject === name) {
        countL++;
      }
    }
    return countL;
  }

  function countTrue(name) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].completed === true && resources[i].subject === name) {
        countT++;
      }
    }
    return countT;
  }

  function countFalse(name) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].completed === false && resources[i].subject === name) {
        countF++;
      }
    }
    return countF;
  }

  let allTotal = countLength(subjectFilter.value);
  let allCompleted = countTrue(subjectFilter.value);
  let allPending = countFalse(subjectFilter.value);


    totalResources.innerText = allTotal;
    completedResources.innerText = allCompleted;
    pendingResources.innerText = allPending;
  
}
loadResources();
