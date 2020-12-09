 
// Get Elements
const inputs = ["#hrLength", "#vrLength", "#brStrength", "#colorCode"].map(item=>{
  return document.querySelector(item);
});
const tContainer = document.querySelector("#targetContainer");

// Get Elements Values
let hl   = "",
    vl   = "",
    bs   = "", 
    clr  = "";

// loop through each input to add Event Listener
inputs.forEach(input=>{
  input.addEventListener("change", (e)=>{
    render();
  });
});

// Update all Values on change
function updateValues(){ 
  hl    = document.querySelector("#hrLength").value,
  vl    = document.querySelector("#vrLength").value,
  bs    = document.querySelector("#brStrength").value, 
  clr   = document.querySelector("#colorCode").value;
}


// updating UI
let render = function(){
  updateValues();
  let style = { 
    textShadow: `${hl}px ${vl}px ${bs}px ${clr}`,
  };
  Object.assign(tContainer.style, style);


  document.querySelector("#cssContainer .cssCode").innerHTML = `text-shadow: ${style.textShadow};`;
};

render();