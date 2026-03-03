function sortArray(array, sortDirection = "asc") {
    if (sortDirection !== "asc" && sortDirection !== "desc") {
        console.log("Неверная направленность сортировки");
        return;
    }
    let sortBorder;
    for (let i = 0; i < (array.length); i++ ) {
        sortBorder = array.length - i;
        for (let j = 0; j < sortBorder ; j++) {
            if (sortDirection === "asc" ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
                array[j] = array[j + 1] + array[j];
                array[j + 1] = array[j] - array[j + 1];
                array[j] = array[j] - array[j + 1];
            }
        }
    }
}

const array = [1, 3, 2, 5, 4];
sortArray(array);
console.log(array);
const array2 = [1, 3, 2, 5, 4];
sortArray(array2, "desc");
console.log(array2);
