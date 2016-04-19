import $ from 'jquery';

// importing refactored templates

import inputTemplate from './templates/input-template';
import selectTemplate from './templates/select-template';
import textareaTemplate from './templates/textarea-template';

var url = "http://json-data.herokuapp.com/forms"
var cont = $(".container");

var dataReq = $.getJSON(url);
dataReq.then(function(res){
  //console.log(res);
  buildForm(res);
});





var pageData;

function buildForm(dataArr){
  dataArr.forEach(function(element){
    //console.log("element", element);
    if(element.type ==="textarea"){
      pageData = textareaTemplate(element);
      cont.append(pageData);
    }else if(element.type ==="text" || element.type ==="email" || element.type ==="tel" ){
      pageData = inputTemplate(element);
      cont.append(pageData);
    }
    else{
      pageData = selectTemplate(element);
      cont.append(pageData);
    }

    //pageData = input(element);
    
  })
}

