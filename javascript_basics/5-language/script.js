//Получение языка из браузера
const language = navigator.language;


switch (language) {
    case "en-US":
    case "en":
        console.log("Nice to meet you!");
        break;
    case "ru-RU":
    case "ru":
        console.log("Рад познакомиться!");
        break;
    case "de-DE":
    case "de":
        console.log("Schön dich kennenzulernen!");
        break;
    case "fr-FR":
    case "fr":
        console.log("Ravi de vous rencontrer!");
        break;
    case "es-ES":
    case "es":
        console.log("Encantado de conocerte!");
        break;
    case "it-IT":
    case "it":
        console.log("Mi piace conoscerti!");
        break;
    default:
        console.log("I don't know your language");
        break;
}