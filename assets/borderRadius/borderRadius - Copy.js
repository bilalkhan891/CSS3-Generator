

// Get Elements
const inputs = [ "#borderType", "#brLeft", "#brBottom", "#brRight", "#brTop", "#brAll"].map(item=>{
  return document.querySelector(item);
});
const tContainer = document.querySelector("#targetContainer");

// Get Elements Values
let
   // bt = "";
    bl   = "",
    bb   = "",
    br   = "",
    bt   = "";
    ba = "";
    brType = "";
    //ba = bl+bb+br+bt;

// loop through each input to add Event Listener
inputs.forEach(input=>{
  input.addEventListener("change", (e)=>{
    render();
  });
});

// Update all Values on change
function updateValues(){

  brType    = document.querySelector("#borderType").value,
  
  bl    = document.querySelector("#brLeft").value,
  bb    = document.querySelector("#brBottom").value,
  br    = document.querySelector("#brRight").value,
  bt    = document.querySelector("#brTop").value;
  ba    =  document.querySelector("#brAll").value;
 // console.log('HEllo'.bt);
 
}
function checkType(){
  let typeofClas1;
  let typeofClas2;
  single_feild =  document.getElementsByClassName('single-feild');
  all_fields =  document.getElementsByClassName('all-fields').style = 'none !important';
  type1 = all_fields.style = 'none !important';
  type2 = single_feild.style = 'none !important';
 //console.log(typeofClas2);
  (brType !== 'all') ? 
  type1: type2;
console.log(type2);
  
}
checkType();
//console.log(checkType('Hello'));


// updating UI
let render = function(){
  updateValues();
  let style = { 
    borderRadius: (brType !== 'all') ? ` ${bt}px ${br}px ${bb}px  ${bl}px `: `${ba}px`
    

    //borderRadius : `${bt}px ${br}px ${bb}px  ${bl}px`
  };
  Object.assign(tContainer.style, style);

  document.querySelector("#cssContainer .cssCode").innerHTML = `-webkit-border-radius: ${style.borderRadius};<br>border-radius: ${style.borderRadius};`;
};

render();