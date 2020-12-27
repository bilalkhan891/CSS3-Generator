
const bs = document.querySelector("#boxShadow"),
      tf = document.querySelector("#transform"),
      ts = document.querySelector("#textShadow"),
      ol = document.querySelector("#outLine");

bs.addEventListener("click", (e)=>{
  window.location = "/boxShadow.html";
});
tf.addEventListener("click", (e)=> {
  window.location = "/transform.html";
});
ts.addEventListener("click", (e)=> {
  window.location = "/textShadow.html";
});
ol.addEventListener("click", (e)=> {
  window.location = "/outLine.html";
});