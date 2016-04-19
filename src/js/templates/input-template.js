
 function input(resobj){
   return `
    <div class="formElement" id="${resobj.id}">
      <input type="${resobj.type}" placeHolder="${resobj.label}">
      <i class="fa ${resobj.icon}"></i>
</div>
`;
 };

 export default input;