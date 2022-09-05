function onClickDrop1(){ 
    // navdiv=document.getElementById("dropdown2").classList.toggle("show");
    const navdiv1=document.getElementById("dropdown1");
    const navdiv2=document.getElementById("dropdown2");
    const navdiv3=document.getElementById("dropdown3");
    if(navdiv1.style.display==="none"){
        navdiv1.style.display="block";
        navdiv2.style.display="none";
        navdiv3.style.display="none";
        document.body.style.overflow="hidden";
    }
    else {
        navdiv1.style.display="none";
        document.body.style.overflow="scroll";
    }
    
    
   
}
   
function onClickDrop2(){ 
    // navdiv=document.getElementById("dropdown2").classList.toggle("show");
    const navdiv1=document.getElementById("dropdown1");
    const navdiv2=document.getElementById("dropdown2");
    const navdiv3=document.getElementById("dropdown3");
    if(navdiv2.style.display==="none"){
        navdiv2.style.display="block";
        navdiv1.style.display="none";
        navdiv3.style.display="none";
        document.body.style.overflow="hidden";
    }
    else {
        navdiv2.style.display="none";
        document.body.style.overflow="scroll";
    }
   
   
}
function onClickDrop3(){ 
    // navdiv=document.getElementById("dropdown1").classList.toggle("show");
    const navdiv1=document.getElementById("dropdown1");
    const navdiv2=document.getElementById("dropdown2");
    const navdiv3=document.getElementById("dropdown3");
    if(navdiv3.style.display==="none"){
        navdiv3.style.display="block";
        navdiv1.style.display="none";
        navdiv2.style.display="none";
        document.body.style.overflow="hidden";
    }
    else {
        navdiv3.style.display="none";
        document.body.style.overflow="scroll";
    }
  
   
}
