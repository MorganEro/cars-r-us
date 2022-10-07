import { getPaints, setPaint } from "./database.js";
const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const paintsHtml = () => {
    let html = "<h2>Paints</h2>"
    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'
    const paintsArray = paints.map(
        (paint) => {
            return `
                <option value="${paint.id}">${paint.color}</option>`     
        }
    )
    html += paintsArray.join("")
    html += "</select>"
    return html
}
