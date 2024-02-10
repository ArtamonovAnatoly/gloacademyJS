
let title = prompt("как называется ваш проект?");
console.log(title);
let screens = prompt("какие типы экранов нужно разработать?");
let screenPrice = +prompt("сколько будет стоить данная работа?") ;
let rollback = 10 ;
let adaptive = confirm("нужен ли адаптив?") ;
console.log(adaptive);
let service1= prompt("Какой дополнительный вид услуг нужен?");
let servicePrice1= +prompt("Сколько это будет стоить?");
let service2= prompt("Какой дополнительный вид услуг нужен?");
let servicePrice2= +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - Math.round(fullPrice*rollback/100);
console.log(servicePercentPrice);
console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/ долларов/гривен/юани');
screens = screens.toLowerCase;
console.log(fullPrice * (rollback/100));
if(fullPrice < 0) {
  alert('что-то пошло не так');
}  else if (fullPrice >0 && fullPrice <=15000){
    alert('скидка не предусмотрена')
  } else if(fullPrice >15000 && fullPrice <30000){
    alert('ваша скидка 5%');
  } else {
    alert('Ваша скидка 10%');
  }



