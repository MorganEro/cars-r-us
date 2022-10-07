import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const technologiesHtml = () => {
    let html = "<h2>Technologies</>"
    html += '<select id ="technology">'
    html += '<option value="0">Select a technology package</option>'
    //this creates an array of list items
    const technologiesArray = technologies.map(
        (technology) => {
            return `
                <option value="${technology.id}">${technology.package}</option>`     
        }
    )
    //this joins all the list items into a single string separating each element with ""
    html += technologiesArray.join("")
    html += "</select>"
    return html
}
