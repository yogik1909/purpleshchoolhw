
function cleanArray(arr, removeFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!removeFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Пример: удаляем все числа больше 5
const removeGreaterThan5 = (n) => n > 5;
console.log(cleanArray([3, 6, 9, 2], removeGreaterThan5)); // [3, 2]
