let addForm=document.getElementById("addForm")
let items=document.getElementById("items")
let filter=document.getElementById("filter")

addForm.addEventListener("submit",addItem);
items.addEventListener("click",deleteItem)
filter.addEventListener("keyup",filterItem)

function deleteItem(e){
    if(confirm("Are you sure want to delete")){
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement
        items.removeChild(li)
    }
    }
   
}


function addItem(x){
x.preventDefault();
let item=document.getElementById("item").value
if(item==""){
    alert("Please fill something ")
    return;
}
let li=document.createElement("li")
li.className="list-group-item"
let btn=document.createElement("button");
btn.appendChild(document.createTextNode("x"))
btn.className="btn btn-danger btn-sm float-right delete"
console.log(btn)
li.appendChild(document.createTextNode(item))
items.appendChild(li)
li.appendChild(btn)
document.getElementById("item").value="";
}
function filterItem(e){
    let text=e.target.value.toLowerCase()
    let lii=items.getElementsByTagName("li")
   let liiArray=Array.from(lii)
   liiArray.forEach(sami=>{
       let itemName=sami.firstChild.textContent
       if(itemName.toLowerCase().indexOf(text)!=-1){
        sami.style.display="block"
       }else{
           sami.style.display="none"
    }
    })
}
