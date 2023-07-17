let taskList=[]
const addItemrefHeader=document.querySelector("header input");
const modaladdItemRef=document.querySelector(".modal > input");
const renderItemRef=document.querySelector(".task-div ul");
const modalRef=document.querySelector(".modal");
addItemrefHeader.addEventListener("click", function(e){    
    togglemodal(modalRef);
});
modaladdItemRef.addEventListener("click", function(e){
    let tempObj={"id":taskList.length+1,
"Task Name":document.getElementById("taskName").value,
"Task Priority":document.getElementById("taskPriority").value,
"Task Description":document.getElementById("taskDesc").value}
taskList.push(tempObj);
renderTaskDetails(tempObj);
    console.log(tempObj);
})
function renderTaskDetails(TaskDetails)
{
let renderEle=document.createElement("li");
renderEle.classList.add(TaskDetails["Task Priority"]);
renderEle.innerText="Task Name :"+TaskDetails['Task Name']+"\n Task Priority :"+TaskDetails['Task Priority']+"\n Task Description : "+TaskDetails['Task Description'];
renderItemRef.appendChild(renderEle);
}
function togglemodal(modalef) {
    if ([...modalef.classList].includes("hide")){
        modalef.classList.remove("hide");
    }
    else
    {
        modalef.classList.add("hide");
    }
}
