const button = document.querySelector("#new_button");
const img_input = document.querySelector("#file");
const img_area = document.querySelector("#img_area")

img_input.addEventListener("change",(event)=>{
  const file = event.target.files;
  
  

  for(let i = 0; i<file.length; i++){
    const fileReader = new FileReader();
    
    fileReader.onload = (event)=>{
      let str = "<img style='width : 300px; height : 300px' src='" + event.target.result + "'>"
      img_area.insertAdjacentHTML("beforeend",str);
    }
    fileReader.readAsDataURL(file[i]);
  }
})


//submit 누를때
button.addEventListener("click",(event)=>{
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  if(title.length == 0 || body.length == 0){
    alert("빈칸이 있습니다.");
    return
  }

  const param = {
    title : title,
    body : body
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