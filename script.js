let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)

// Get html elements
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

// retrieve leads from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// check if there are leads then render leads.
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++){
        listItems += `
        <li> 
            <a href='${leads[i]}' target ='_blank'> 
                ${leads[i]}
            </a>
        </li>`
        // console.log(listItems)
        // const li = document.createElement("li")
        // li.innerHTML = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    // document.removeChild(document.documentElement)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    clearInputField()
    
    // store myLeads in the localStorage by stringifying the data
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   
    
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))

    
})



function clearInputField() {
    inputEl.value = "";
}

