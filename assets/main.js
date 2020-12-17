// Copy text to clipboard
if(document.querySelector("#copyCode")) {

  document.querySelector("#copyCode").addEventListener("click", (e)=>{
    
    // Get Code from UI
    let code = document.querySelector(".cssCode").innerText;

    const tempInput = document.createElement("input");

    // assign code to newly created temp input
    tempInput.value = code;
    document.body.appendChild(tempInput);
    
    /* Select the text field */
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    /* Alert the copied text */
    alert("Copied the text: " + code);
  });
}

// Materialize Css Init
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});