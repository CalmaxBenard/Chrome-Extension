let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    clearFunction()
    renderLeads()
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

