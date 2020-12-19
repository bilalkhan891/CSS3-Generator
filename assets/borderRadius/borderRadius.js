

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

document.getElementById("borderType").addEventListener("change", myFunction);
function myFunction() {
  // var x = document.getElementById("fname");
  // x.value = x.value.toUpperCase();
  //brType !== 'all' : ''
  if(brType == 'all'){
    let all_fields;
    single_feild = document.querySelector(".seperte-fields").style.display  = "none";
    all_fields = document.querySelector(".all-fields").style.display  = "block";
    //all-fields = document.querySelector(".all-fields").style.display  = "block";
    //alert(single_feild);
  }else{
    all_fields = document.querySelector(".all-fields").style.display  = "none";
    single_feild = document.querySelector(".seperte-fields").style.display  = "block";
  }
  //alert('hello');
}
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

// function checkType(){
//   // let single_feild = "",
//   //     //  all_fields = "";
//   //     //  type1 = "",
//   //     //  type2 = "";


  


//   //      single_feild = document.querySelector(".seperte-fields").style.display  = "none";
//   //      //all_fields = document.querySelector(".all-fields").style.display  = "none";
  

//   // (brType !== 'all') ?   single_feild : all_fields;
// //console.log(single_feild);

  
// }
// checkType();
// console.log(checkType('Hello'));


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