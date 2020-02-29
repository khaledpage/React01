let sortArray = [43, 56, 34, 87, 23, 8, 6, 65, , 47, 96, 89, 0, 4, 3, 34];
function sortArr(array) {
  for (let i = 0; i < array.length; i++) {
    for (let index = i + 1; index < array.length; index++) {
        if (array[i] > array[index]) {
            switchArr(i , index, array)
        }
    }
  }
}
function switchArr(x, y, array) {
    let tmp = array[x];
    array[x]=array[y];
    array[y]= tmp
}
sortArr(sortArray)
console.log(sortArray)