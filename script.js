const linkHead = document.querySelector(".linkHead");
const linkBodyHead = document.querySelector(".linkBodyHead")

linkHead.addEventListener("mouseenter", ()=>{
    linkBodyHead.style.textDecoration = "underline";
});
linkHead.addEventListener("mouseleave", ()=>{
    linkBodyHead.style.textDecoration = "none";
});

linkBodyHead.addEventListener("mouseenter", ()=>{
    linkBodyHead.style.textDecoration = "underline";
});
linkBodyHead.addEventListener("mouseleave", ()=>{
    linkBodyHead.style.textDecoration = "none";
});