 
// Get Elements
const inputs = ["#thickness", "#outLine", "#colorCode", "#offset"].map(item=>{
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
  tk    = document.querySelector("#thickness").value,
  ol    = document.querySelector("#outLine").value,
  os    = document.querySelector("#offset").value, 
  clr   = document.querySelector("#colorCode").value;
}


// updating UI
let render = function(){
  updateValues();
  let style = { 
    outline: `${tk}px ${ol.toLowerCase()} ${clr}`,
    outlineOffset: (os !== NaN )? `${os}px`: '0px',
  };
  Object.assign(tContainer.style, style);


  document.querySelector("#cssContainer .cssCode").innerHTML = `outline: ${style.outline};<br>
                                                                outline-offset: ${style.outlineOffset};`;
};

render();