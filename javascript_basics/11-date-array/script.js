/*
Дан массива строк  [‘10-02-2022’, ‘тест’, ‘11/12/2023’, ‘00/13/2022’, ‘41/12/2023’];

Необходимо написать функцию, которая бы удаляла бы из массива все строки, которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида:

[‘10-02-2022’, ‘12-11-2023’]
*/

function getDataFromArray(array){
  const newArray = array.map(item => isDate(item)).filter(item => item !== null);
  return newArray;
}

function isDate(data) {
  let dayCheack, monthCheack, yearCheack;
  let [day, month, year] = [0, 0, 0];
  const datWithDash = data.split('-');
  const datWithSlash = data.split('/');
  if (datWithDash.length === 3) {
    day = datWithDash[0];
    month = datWithDash[1];
    year = datWithDash[2];
  }
  if (datWithSlash.length === 3) {
    day = datWithSlash[0];
    month = datWithSlash[1];
    year = datWithSlash[2];
  }

  if (year.length === 4 && year > 0) { yearCheack = true; }
  else {
    return null;
  }
  if (yearCheack && month.length === 2 && month > 0 && month <= 12){
    monthCheack = true;
  } 
  else {
    return null;
  }
  if (monthCheack && day.length === 2){
    dayCheack = true;
  }
  else {return null;}

  const yearIsLeap = parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0 || parseInt(year) % 400 === 0;
  if (parseInt(month) === 2 && parseInt(day) > 28 + (yearIsLeap ? 1 : 0)) { return null; }
  if (parseInt(day) > 30 && [4, 6, 9, 11].includes(parseInt(month))) { return null; }
  if (parseInt(day) > 31 && [1, 3, 5, 7, 8, 10, 12].includes(parseInt(month))) { return null; }
  
  return [day, month, year].join('-');

}

const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023']
console.log(getDataFromArray(array))