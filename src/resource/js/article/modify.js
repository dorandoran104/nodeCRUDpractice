const modify_button = document.querySelector("#modify_button");


modify_button.addEventListener("click",(event)=>{
  const id = document.querySelector("#id").value;
  const param = {
    title : document.querySelector("#title").value,
    body : document.querySelector("#body").value
  }
  
  fetch("../"+id,{
    method : 'put',
    headers : {
      "Content-type" : "application/json",
    },
    body : JSON.stringify(param)
  })
  .then((response)=>response.json())
  .then((response)=>{
    if(response.success){
      location.replace("../"+id);
    }
    else{
      alert("에러");
    }
  })
})
