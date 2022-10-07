import { getTires, setWheel } from "./database.js";
const tires = getTires()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tire") {
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)

export const tiresHtml = () => {
    let html = "<h2>Tires</h2>"
    html += '<select id ="tire">'
    html += '<option value="0">Select a wheel style</option>'
    //this creates an array of list items
    const tiresArray = tires.map(
        (tire) => {
            return `
                <option value="${tire.id}">${tire.wheels}</option>`     
        }
    )
    //this joins all the list items into a single string separating each element with ""
    html += tiresArray.join("")
    html += "</select>"
    return html
}

