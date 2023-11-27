let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}