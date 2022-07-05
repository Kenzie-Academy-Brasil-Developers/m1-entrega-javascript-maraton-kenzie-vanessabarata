function positions(array) {

    if ("Daniel" != array[0]) {
        if (array.indexOf("Daniel") == 1) {
            array[1] = array[0]
            array[0] = "Daniel"  

        }

        if (array.indexOf("Daniel") == 2) {
            array[2] = array[1]
            array[1] = "Daniel"
        }
    } else {
        return "Daniel é o vencedor"
    }
    return `${array} Este é o pódio`
}

console.log(positions(["Daniel","Rafael", "Manoel"]))