let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

