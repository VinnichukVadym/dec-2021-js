// -Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
    let number1 = +prompt('Ведіть число');
    let number2 = +prompt('Ведіть число');
    if (number1 > number2 ){
        console.log(number1);
    }else if (number1 < number2){
        console.log(number2)
    }else if (number1 === number2){
        console.log(number1)
    }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
//   Користувач вводить номер квартири просто в змінні або через prompt('') .
//   Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

    let apartment = prompt('Ведіть номер квартири від 1 до 90');
        if (apartment >= 1 && apartment <= 20){
            alert('Квартира в першому підїзді')
        }
        else if (apartment >= 21 && apartment <= 48){
            alert('Квартира в другому підїзді')
        }
        else if (apartment >= 49 && apartment <= 90){
            alert('Квартира в третьому підїзді')
        }
        else {
            alert('Не коректний номер квартири')
        }

// - Ми маємо змінну number в яку користувач задає числове значення,
//   якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

    let number = +prompt('Ведіть число') === 10 ? 'ВІРНО' : 'НЕВІРНО';
       console.log(number);

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

    let x =[];
    x = typeof x;
    if (x === typeof NaN ){
        console.log(1);
    }
    else if (x === typeof''){
        console.log(2)
    }
    else if (x === typeof true || x === typeof {} || x === typeof  []) {
        console.log(3)
    } else {
        console.log('Не вірні дані')
    }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22
//     вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

    let temperature = +prompt('Ведіть температуру');
    if (temperature >= 10 && temperature <=22){
        console.log('ми йдемо ВЧИТИСЯ')
    }
    else {
        console.log('сидимо вдома і вчимося ОНЛАЙН');
    }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і
// якщо число не підходить тоді вивести Повідомлення - що число не вірне ... .

let loto = +prompt('Ведіть число від 1 до 5');
    switch(loto){
        case 1 :
            alert('Ви виграли Автомобіль');
            break;
        case 2 :
            alert('Ви виграли Мотоцикл') ;
            break;
        case 3 :
            alert('Ви виграли Ноутбук');
            break;
        case 4 :
            alert('Ви виграли Планшет');
            break;
        case 5 :
            alert('Ви НЕ виграли, спробуйте ще');
            break;
        default:
            alert('число не вірне')
    }



