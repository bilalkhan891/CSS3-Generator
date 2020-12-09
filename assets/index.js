
const bs = document.querySelector("#boxShadow"),
      tf = document.querySelector("#transform"),
      ts = document.querySelector("#textShadow");

bs.addEventListener("click", (e)=>{
window.location = "/boxShadow.html";
});
tf.addEventListener("click", (e)=> {
window.location = "/transform.html";
});
ts.addEventListener("click", (e)=> {
window.location = "/textShadow.html";
});
