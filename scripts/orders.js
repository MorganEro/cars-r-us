import { getInteriors, getPaints, getTechnologies, getTires, getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    const interiors = getInteriors()
    const paints = getPaints()
    const technologies = getTechnologies()
    const tires = getTires()

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundTire = tires.find(
        (tire) => {
            return tire.id === order.tireId
        }
    )
    const totalCost = foundTire.price + foundInterior.price + foundPaint.price + foundTechnology.price
    const costString = totalCost.toLocaleString
    ("en-Us", {
        style: "currency",
        currency: "USD"
    })
    return  `<li>
        ${foundPaint.color} with ${foundTire.wheels}, ${foundInterior.fabric}, and the ${foundTechnology.package} for a total cost of ${costString}
    </li>`

}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    

    let html = "<ul>"
//Why is there no argument passed into buildOrderListItem?
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
