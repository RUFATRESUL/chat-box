let chat=document.querySelector("#chat")
let closeBox=document.querySelector("#chat .close-box")
let miniChat=document.querySelector("#mini-chat")
let chatText=document.querySelector("#chat #chat-text")
let main=document.querySelector("#chat main")

closeBox.addEventListener("click",function(){
    chat.classList.add("d-none")
    
})


miniChat.addEventListener("click",function(){
    chat.classList.remove("d-none")
   
})

chatText.addEventListener("keyup",function(e){
  
  if (e.keyCode===13){
    if (chatText.value.trim()!="") {
      if (chatText.value[0]==chatText.value[0].toUpperCase()) {
        AddChat("support")
      }else{
        AddChat("user")
      }  
      chatText.value=""
    }
   
  }
 
  
})

function AddChat(clName) {
    let dt=new Date()
    main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="message${clName}">
        <p>${chatText.value}</p>
        <p class="clock">${dt.getHours()+":"+getMinutes()}</p>
        </div>
        ` )
        main.scrollTop=main.scrollHeight
}

