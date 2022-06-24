setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const setRotation = (ele, ratio) => {
  ele.style.setProperty("--rotation", ratio * 360);
};
const hour = document.querySelector(".dynamic-hour");
const minute = document.querySelector(".dynamic-minute");
const second = document.querySelector(".dynamic-second");
const dynamicNumber = document.querySelector(".dynamic-number");
// const setDynamicNumber=(ele,num)=>{
//     ele.
// }
function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(hourHand, hourRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(secondHand, secondRatio);
  dynamicNumber.innerHTML = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
}
setClock();
