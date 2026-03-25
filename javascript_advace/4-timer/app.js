const NEW_YEAR = new Date(new Date().getFullYear() + 1, 0, 1);
const oneMinute = 60;
const oneHour = 60 ** 2;
const oneDay = 24 * oneHour;
const oneMonth = 30 * oneDay;

const timer = setInterval(() => {
    const now = new Date();
    const diffperSecond = (NEW_YEAR - now) / 1000;
    const month = Math.floor(diffperSecond / oneMonth);
    const day = Math.floor((diffperSecond - month * oneMonth) / oneDay);
    const hour = Math.floor((diffperSecond - month * oneMonth - day * oneDay) / oneHour);
    const minute = Math.floor((diffperSecond - month * oneMonth - day * oneDay - hour * oneHour) / oneMinute);
    const second = Math.floor(diffperSecond % 60);

    const diffObject = {
        month,
        day,
        hour,
        minute,
        second
    };
    console.log(diffObject);

    const rtf = new Intl.RelativeTimeFormat("ru-RU", {
        numeric: "always", // other values: "auto"
        style: "long", // other values: "short" or "narrow"
      });
    const partsView = [];
    const partsDate = ["month", "day", "hour", "minute", "second"]
    partsDate.forEach(part => {
        const quantOfView = rtf.formatToParts(diffObject[part], part);
        partsView.push(`${quantOfView[1].value} ${quantOfView[2].value}`);
    });
    document.getElementById('timer').innerText = partsView.join(", ");
}, 1000);

