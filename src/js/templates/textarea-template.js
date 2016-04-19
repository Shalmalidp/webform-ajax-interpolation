// Refactoring and moving to individual files

function textarea(resobj){
  return`
     <div class="formElement" id="${resobj.id}">
      <textarea placeHolder= "${resobj.label}"></textarea>
      <i class="fa ${resobj.icon}"></i>   
    </div>
    `;

};


export default textarea;