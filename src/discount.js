function specialSets(set) {
    switch (set) {
        case "orange":
        case "pink":
        case "green":
            return .05
            
    }
    return 0
}

function discountFoodSet(foods) {
    for (let food in foods) {
        if (foods[food] >= 2 && specialSets(food) > 0) 
            return specialSets(food)
    }
    return 0
}

function membership(hasMember=false) {
    return hasMember ? .1 : 0
}

module.exports = {
    discountFoodSet,
    membership
}