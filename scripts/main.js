import { CarsRUs } from "./CarsAreUs.js"

const mainContainer = document.querySelector("#allContent")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}


renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})