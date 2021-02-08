let val;

const today = new Date();
let birthday = new Date('05-131983 11:25:00');
birthday = new Date('May 13 1983');
birthday = new Date('8/13/90');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1984);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);

console.log(val);