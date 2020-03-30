function groupAnimals(animals) {
    for (let i = 0; i < animals.length; i++) {
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                let temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }
    }

    let result = [];
    for (let i = 0; i < animals.length; i++) {
        let flag = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j][0][0] == animals[i][0]) {
                result[j].push(animals[i])
                flag = true
            }
        }
        if (!flag) {
            result.push([animals[i]])
        }
    }
    return result

}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]