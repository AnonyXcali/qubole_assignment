var textContent = document.getElementById("textArea");
var textContentTitle = document.getElementById("titleTextArea");
var createNewNote = document.getElementById("crtNew");
var storeTextContent = "";
var storeTextTitle = "";
var updateBtn = document.getElementById("updTExst");
var noteBoxArea = document.getElementById("noteBox");
var count = 0;
var currentNode ;


updateBtn.disabled = true;



function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function clearAll(){

    textContent.value = "";
    textContentTitle.value ="";
}

function enableNoteButton(){
    var noteBtnEn = document.getElementsByClassName("updateButton");
    
    for(var i=0;i<noteBtnEn.length;i++){
        noteBtnEn[i].disabled = false;
          noteBtnEn[i].style.cssText = "background-color:#11DC42;"
    }
    
}




updateBtn.addEventListener("click",function(){

  var currentTitle = textContentTitle.value;
  var currentText = textContent.value;
  currentNode.children[2].children[0].innerText = currentText;
  currentNode.children[0].children[0].innerText = 
    currentTitle;
enableNoteButton()
  clearAll();
  updateBtn.disabled = true;
        updateBtn.style.cssText ="background-color:grey;"

  
});



createNewNote.addEventListener("click",function(){
    //updateBtn.setAttribute("style","display:none");  
  
    storeTextContent = textContent.value;
    storeTextTitle = textContentTitle.value;
    
    if(storeTextContent.length <= 1){
      alert("Please enter something!");
      return -1;
    }
    
 {
  if (confirm("Add Note?") == true) {
     var new_div = createNode("div");
    new_div.setAttribute("class","notes");
    new_div.setAttribute("id","newBox"+count);
    // new_div.innerHTML = storeTextContent;  
  
    var updtTBox = createNode("button");
    updtTBox.setAttribute("class","updateButton");
    updtTBox.setAttribute("onclick","jsFunction(this)")
    updtTBox.setAttribute("id","updateButton"+count);
    updtTBox.innerHTML = "Update";
    
    var titleBox = createNode("div");
    titleBox.setAttribute("id","title"+count);
    titleBox.setAttribute("class","title");
    
    var titleNode = createNode("p");
    titleNode.setAttribute("id","titleNode"+count);
    titleNode.setAttribute("class","titleNode");
    titleNode.innerHTML =storeTextTitle;
   
    var paraDiv = createNode("div");
    paraDiv.setAttribute("class","contentArea");
    paraDiv.setAttribute("id","contentArea"+count);
    
    var paraPara = createNode("p");
    paraPara.setAttribute("class","paraNode");
    paraPara.setAttribute("id","paraNode"+count);
    paraPara.innerHTML = storeTextContent;

  
    append(titleBox,titleNode);
    append(new_div,titleBox);
    append(new_div,updtTBox);
    append(paraDiv,paraPara);
    append(new_div,paraDiv);
    append(noteBoxArea,new_div);
    count++;
    
  } else {
    return -1;
  }
}
  
    
   
     
 
});



function jsFunction(sender){
        var tr = sender.parentNode;
        var noteBtn = document.getElementsByClassName("updateButton");
      textContent.value = tr.children[2].children[0].innerText;
      textContentTitle.value = tr.children[0].children[0].innerText;
      
      updateBtn.disabled=false;
     updateBtn.style.cssText ="background-color:#11DC42;"
      thatParticularNote(tr);
    for(var i=0;i<noteBtn.length;i++){
        noteBtn[i].disabled = true;
        noteBtn[i].style.cssText = "background-color:grey;"
    }
              
}

function thatParticularNote(noteID){
  currentNode = noteID;
   
}