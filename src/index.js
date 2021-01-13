const form = document.querySelector("#create-task-form")
const description = document.querySelector("input#new-task-description")
const tasks = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  form.addEventListener('submit', function(event){
    event.preventDefault()
  
    const taskInput = description.value
  
    const newLi = document.createElement('li')
  
    newLi.textContent = taskInput
  
    tasks.appendChild(newLi)
      
    
  
    form.reset()
  })
  

});




