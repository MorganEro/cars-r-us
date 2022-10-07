import { tiresHtml } from "./wheels.js";
import { interiorsHtml } from "./interiors.js";
import { paintsHtml } from "./paints.js";
import { technologiesHtml } from "./technologies.js";
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${paintsHtml()}
            </section>            
            <section class="choices__interiors options">
                ${interiorsHtml()}
            </section>            
            <section class="choices__wheels options">
                ${tiresHtml()}
            </section>           
            <section class="choices__technologies options">
                ${technologiesHtml()}
            </section> 
        </article>
        
        <article>
            <button id="orderButton">Place Car Order</button>
        <article>

        <article class="CustomOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        
        <article>
    `
}