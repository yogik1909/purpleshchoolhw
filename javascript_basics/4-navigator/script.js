const positionLatitude = 55.7558
const positionLongitude = 37.6173
const destinationLatitude = 59.9343
const destinationLongitude = 30.3351

const R = 6371;
const dLat = (destinationLatitude  - positionLatitude) * Math.PI / 180;
const dLon = (destinationLongitude - positionLongitude) * Math.PI / 180;
const a = 
    Math.sin(dLat / 2) ** 2 +
    Math.cos(positionLatitude * Math.PI / 180) * 
    Math.cos(destinationLatitude * Math.PI / 180) * 
    Math.sin(dLon / 2) ** 2;
const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

console.log(`Дистация между коодинатами (${positionLatitude}, ${positionLongitude}) и (${destinationLatitude}, ${destinationLongitude}) : ${distance} км`);