import { getInteriors, setInterior} from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const interiorsHtml = () => {
    let html = "<h2>Interior</h2>"
    html += '<select id ="interior">'
    html += '<option value="0">Select a interior material</option>'
    //this creates an array of list items
    const interiorsArray = interiors.map(
        (interior) => {
            return `
                <option value="${interior.id}">${interior.fabric}</option>`     
        }
    )
    //this joins all the list items into a single string separating each element with ""
    html += interiorsArray.join("")
    html += "</select>"
    return html
}