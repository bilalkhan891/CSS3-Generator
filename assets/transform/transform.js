document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

// Get Elements
const inputs = ["#scale", "#rotate", "#translateX", "#translateY", "#skewX", "#skewY"].map(item=>{
  return document.querySelector(item);
});
const tContainer = document.querySelector("#targetContainer");
console.log(tContainer);

// Get Elements Values
let scl   = "",
    rtt   = "",
    trX   = "",
    trY   = "",
    skX   = "",
    skY   = "";

// loop through each input to add Event Listener
inputs.forEach(input=>{
  input.addEventListener("change", (e)=>{
    render();
  });
});

// Update all Values on change
function updateValues(){
  scl    = document.querySelector("#scale").value,
  rtt    = document.querySelector("#rotate").value,
  trX    = document.querySelector("#translateX").value,
  trY    = document.querySelector("#translateY").value,
  skX    = document.querySelector("#skewX").value,
  skY    = document.querySelector("#skewY").value;
}


// updating UI
let render = function(){
  updateValues();
  let style = { 
    transform: `scale(${scl}) rotate(${rtt}deg) translate(${trX}px, ${trY}px) skew(${skX}deg, ${skY}deg)`
  }; 
  console.log(style.transform);
  tContainer.style.transform = style.transfrom;
  Object.assign(tContainer.style, style);

  document.querySelector("#cssContainer .cssCode")
    .innerHTML = `-moz-transform: ${style.transform};<br>
                  -webkit-transform: ${style.transform};<br>
                  -o-transform: ${style.transform};<br>
                  -ms-transform: ${style.transform};<br>
                  transform: ${style.transform};`;
};

render();