const linkHead = document.getElementsByClassName("linkHead");
const linkBodyHead = document.getElementsByClassName("linkBodyHead")

for (let i = 0; i < linkHead.length; i++) {
    linkHead[i].addEventListener("mouseenter", ()=>{
        linkBodyHead[i].style.textDecoration = "underline";
    });
    linkHead[i].addEventListener("mouseleave", ()=>{
        linkBodyHead[i].style.textDecoration = "none";
    });
    
    linkBodyHead[i].addEventListener("mouseenter", ()=>{
        linkBodyHead[i].style.textDecoration = "underline";
    });
    linkBodyHead[i].addEventListener("mouseleave", ()=>{
        linkBodyHead[i].style.textDecoration = "none";
    });
}