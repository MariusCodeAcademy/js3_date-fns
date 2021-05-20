const subDays = require("date-fns/subDays");
const format = require("date-fns/format");
const now = new Date();

console.log(" now", now);

const rez = subDays(now, 1);
// console.log(
//   " Vakar dienos dabartinis momentas yra ",
//   rez.toLocaleDateString(),
//   rez.toLocaleTimeString()
// );

const formatedDate = format(rez, "yyyy-LLLL-do, EEEE, HH:mm:ss");

console.log(" formatedDate", formatedDate);
