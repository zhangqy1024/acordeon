var contentAcordeon = document.getElementById("content-acordeon"),
    acordeon=document.getElementsByClassName("acordeon"),
    acordeonBodys=contentAcordeon.querySelectorAll(".acordeon-body"),
    subAcordeonBodys=document.getElementsByClassName("sub-acordeon-body");


function openMenu(element){
    let parent  = element.target.parentElement,
        lastChild = parent.lastElementChild;//acordeon body

    /*console.log(element.target);
    console.log(parent);
    console.log(lastChild);*/
    
    /*first list*/
    if(lastChild.className=="acordeon-body"){
        lastChild.className="acordeon-body show";
        element.target.firstElementChild.className="down-arrow";
        if(parent.previousElementSibling!=null){
            parent.previousElementSibling.lastElementChild.className="acordeon-body";
            parent.previousElementSibling.lastElementChild.previousElementSibling.firstElementChild.className="right-arrow";
        }else{
            parent.nextElementSibling.nextElementSibling.lastElementChild.className="acordeon-body";
        }
        if(parent.nextElementSibling!=null){
            parent.nextElementSibling.lastElementChild.className="acordeon-body";
            parent.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.className="right-arrow";
        }else{
            parent.previousElementSibling.previousElementSibling.lastElementChild.className="acordeon-body";
        }
        
    }else if(lastChild.className=="acordeon-body show"){
        lastChild.className="acordeon-body";
        element.target.firstElementChild.className="right-arrow";
    };
    /*second list*/
    if(lastChild.className=="sub-acordeon-body"){
        lastChild.className="sub-acordeon-body show";
        element.target.firstElementChild.className="down-arrow";
        if(lastChild==parent.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.lastElementChild){
            parent.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.className="sub-acordeon-body";
            parent.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.className="right-arrow";
            parent.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.className="sub-acordeon-body show";
        }else if(lastChild==parent.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild){
            parent.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.className="sub-acordeon-body show";
            parent.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.className="sub-acordeon-body";
            parent.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.className="right-arrow";
        }
    }else if(lastChild.className=="sub-acordeon-body show"){
        lastChild.className="sub-acordeon-body";
        element.target.firstElementChild.className="right-arrow";
    }
}


contentAcordeon.addEventListener("click",openMenu);