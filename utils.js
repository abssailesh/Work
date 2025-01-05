function search(items,selectorFunction) {
    let result = [];
    for (let item of items) {
        if (selectorFunction(item)) { // Check if item is a match
            result.push(item);
        }
    }
    return result;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function bubbleSort(books,index) {
    let size = books.length;
    do {
        var sorted = true;
        for (let i = 0; i < size - 1; i++) {
            if (books[i][index] > books[i + 1][index]) {
                swap(books,i,i+1);
                sorted = false;
            }
        }
        size--;
    } while (!sorted);

    return books;
}


function inRange(key,min,max){
    return book => book[key] >= min && book[key] <= max;
}

try {
    module.exports = {
        search,
        bubbleSort,
        inRange,
    }
} catch (e) {

}
