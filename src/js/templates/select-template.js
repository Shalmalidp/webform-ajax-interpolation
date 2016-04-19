function selectopt(resobj){

  var optionsArr = resobj.options;
  var langs="";

  optionsArr.forEach(function(x){
    //langs+= x.label;
  
    // console.log(langs);
   langs+= `<option value ="${ x.value }">${ x.label }</option>`;
  }); 
   console.log(langs); 
  

  return`
     <div class="formElement" id="${resobj.id}">
     <select> 
      <option>Select your Language</option>
      ${langs}
     </select> 
    </div>
  `;
  
  
};

export default selectopt;