const database = {
    orderBuilder: {},
    paints: [{
        id: 1,
        color:"Silver",
        price: 500
    },
    {
        id: 2,
        color:"Midnight Blue",
        price: 600
    },{
        id: 3,
        color:"Firebrick Red",
        price: 550
    },{
        id: 4,
        color: "Spring Green",
        price: 675
    }], 
    interiors:[
        {
            id: 1,
            fabric: "Beige Fabric",
            price: 600
        }, {
            id: 2,
            fabric: "Charcoal Fabric",
            price: 600 
        }, {
            id: 3,
            fabric: "White Leather",
            price: 900
        }, {
            id: 4,
            fabric: "Black Leather",
            price: 900
    }], 
    technologies:[
        {
            id: 1,
            package: "Basic Package",
            price: 1000
        }, {
            id: 2,
            package: "Navigation Package",
            price: 1500
        }, {
            id: 3,
            package: "Visibility Package",
            price: 2000
        }, {
            id: 4,
            package: "Ultra Package",
            price: 3000
    }], 
    tires:[
        {
            id: 1,
            wheels: "17-inch Pair Radial",
            price: 500
        }, {
            id: 2,
            wheels: "17-inch Pair Radial Black",
            price: 600
        }, {
            id: 3,
            wheels: "18-inch Spoke Silver",
            price: 800
        }, {
            id: 4,
            wheels: "18-inch Spoke Black",
            price: 1000
    }], 
    customOrders:[
        {
            id: 1,
            paintId: 3,
            technologyId: 2,
            interiorId: 3,
            tireId: 2,
            timestamp: 1614659931693
        }
    ]
}
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getTires = () => {
    return database.tires.map(tire => ({...tire}))
}
export const getOrders = () => {
    return database.customOrders.map(orders => ({...orders}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.tireId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}



// this functions sole purpose is to take the temporary choices in orderBuilder and make them permanent
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp =Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))

}