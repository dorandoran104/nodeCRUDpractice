const delete_button = document.querySelector("#delete_button");

delete_button.addEventListener("click",(event)=>{
  event.preventDefault();
  const id = event.target.dataset.id;

  if(confirm('삭제하시겠습니까?')){
    
    fetch(id,{
      method : 'delete',
      headers : {
        "Content-type" : "application/json",
      }
    })
    .then((response)=>response.json())
    .then((response)=>{
      if(response.success) location.replace("/article");
      else alert('에러');
    })
  }
})