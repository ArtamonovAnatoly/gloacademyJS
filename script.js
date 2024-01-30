
let title = 'калькулятор стоимости лендинга';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 500 ;
let rollback = 10 ;
let fullPrice = 30000;
let adaptive = true;
console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/ долларов/гривен/юани');
screens = screens.toLowerCase;
console.log(fullPrice * (rollback/100));


