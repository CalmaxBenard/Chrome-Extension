let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

// localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
// console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    clearFunction()
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // let lead = JSON.parse(localStorage.getItem("myLeads"))
    // leadsFromLocalStorage.push(lead)
    
    
    renderLeads()
    // console.log(localStorage.getItem("myLeads"))

    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++){
        listItems += `
        <li> 
            <a href='${myLeads[i]}' target ='_blank'> 
                ${myLeads[i]}
            </a>
        </li>`
        // console.log(listItems)
        // const li = document.createElement("li")
        // li.innerHTML = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

function clearFunction() {
    inputEl.value = "";
}

