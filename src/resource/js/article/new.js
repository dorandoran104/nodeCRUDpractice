const button = document.querySelector("#new_button")

button.addEventListener("click",(event)=>{
  event.preventDefault();

  const param = {
    title : document.querySelector("#title").value,
    body : document.querySelector("#body").value
  }

  fetch("new",{
    method : 'post',
    headers : {
      "Content-type" : "application/json"
    },
    body : JSON.stringify(param)
  })
  .then((response)=> response.json())
  .then((response)=>{
    if(response.success){
      location.replace(response.id);
    }
    else{
      alert("error");
    }
  })
})