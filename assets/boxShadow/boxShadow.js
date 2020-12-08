document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

// Get Elements
const inputs = ["#shadowType", "#hrLength", "#vrLength", "#brStrength", "#spread", "#colorCode"].map(item=>{
  return document.querySelector(item);
});
const tContainer = document.querySelector("#targetContainer");

// Get Elements Values
let st   = "",
    hl   = "",
    vl   = "",
    bs   = "",
    sp   = "",
    clr  = "";

inputs.forEach(input=>{
  input.addEventListener("change", (e)=>{
    render();
  });
});


// Update all Values on change
function updateValues(){
  st    = document.querySelector("#shadowType").value,
  hl    = document.querySelector("#hrLength").value,
  vl    = document.querySelector("#vrLength").value,
  bs    = document.querySelector("#brStrength").value,
  sp    = document.querySelector("#spread").value,
  clr   = document.querySelector("#colorCode").value;
}

let render = function(){
  updateValues();
  let style = { 
    boxShadow: (st !== 'out') ? `inset ${hl}px ${vl}px ${bs}px ${sp}px ${clr}`: `${hl}px ${vl}px ${bs}px ${sp}px ${clr}`
  };
  Object.assign(tContainer.style, style);

  document.querySelector("#cssContainer .cssCode").innerText = "box-shadow: " + style.boxShadow + ";";
};

render();