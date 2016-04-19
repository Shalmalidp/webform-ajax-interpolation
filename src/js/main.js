import $ from 'jquery';

var url = "http://json-data.herokuapp.com/forms"
var cont = $(".container");

var dataReq = $.getJSON(url);
dataReq.then(function(res){
  //console.log(res);
  buildForm(res);
});

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

function textarea(resobj){
  return`
     <div class="formElement" id="${resobj.id}">
      <textarea placeHolder= "${resobj.label}"></textarea>
      <i class="fa ${resobj.icon}"></i>   
    </div>
    `;

};

 function input(resobj){
   return `
    <div class="formElement" id="${resobj.id}">
      <input type="${resobj.type}" placeHolder="${resobj.label}">
      <i class="fa ${resobj.icon}"></i>
</div>
`;
 };
var pageData;

function buildForm(dataArr){
  dataArr.forEach(function(element){
    //console.log("element", element);
    if(element.type ==="textarea"){
      pageData = textarea(element);
      cont.append(pageData);
    }else if(element.type ==="text" || element.type ==="email" || element.type ==="tel" ){
      pageData = input(element);
      cont.append(pageData);
    }
    else{
      pageData = selectopt(element);
      cont.append(pageData);
    }

    //pageData = input(element);
    
  })
}

