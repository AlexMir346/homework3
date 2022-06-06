// Homework
const styles = ['Джаз', 'Блюз'];

document.write('<h1>Lesson 3</h1>');

document.write('<hr>');
document.write('<h2>Homework</h2>');

document.write(
  '<li>' + 'Початковий масив = styles = ' + '[' + styles.join(', ') + ']</li>' + '<br>',
);

document.write('<li >' + 'Додаємо Рок-н-ролл в кінець масиву:' + '</li>' + '<br>');

styles.push('Рок-н-ролл');
document.write('<li >' + 'Отримуємо новий массив: [' + styles.join(' ') + ']</li>' + '<br>');

styles.splice(styles.length / 2, 1, 'Класика');

document.write('<li>' + 'Заміняємо середній єлемент на Класика: ' + '</li>' + '<br>');

document.write('<li>' + 'Оримуємо змінений масив: [' + styles.join(' ') + ']</li>' + '<br>');

styles.unshift('Реп', 'Реггі');
document.write('<li>' + 'Додаємо в початок масива Реп та Реггі: ' + '</li>' + '<br>');

document.write('<li>' + 'Змінений масив [' + styles.join(', ') + ']</li>');

document.write('<hr>');

// Classwork
document.write('<h2>Classwork</h2>');

document.write('<ol>');
//#1
const array = ['a', 'b', 'c'];
const newArray = array.concat(1, 2, 3);
document.write(
  '<li>' +
    'Даны два массива: [a, b, c] и [1, 2, 3]. Объедините их вместе: <p>Ответ - [' +
    newArray.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#2
const array1 = ['a', 'b', 'c'];
array1.push(1, 2, 3);
document.write(
  '<li>' +
    'Дан массив [a, b, c]. Добавьте ему в конец элементы 1, 2, 3: <p>Ответ -  [' +
    array1.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#3
const array2 = [1, 2, 3];
const newArray2 = array2.reverse();
document.write(
  '<li>' +
    'Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]: <p>Ответ - [' +
    newArray2.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#4
const array3 = [1, 2, 3];
const newArray3 = array3.concat(4, 5, 6);
document.write(
  '<li>' +
    'Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6: <p>Ответ - [' +
    newArray3.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#5
const array4 = [1, 2, 3];
const newArray4 = array4.unshift(4, 5, 6);
document.write(
  '<li>' +
    'Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6: <p>Ответ - [' +
    array4.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#6
const string = ['js', 'css', 'jq'];

document.write(
  '<li>' +
    'Дан массив ["js", "css", "jq"]. Выведите на экран первый элемент: <p>Ответ - [' +
    string[0] +
    ']</li></p>' +
    '<br>',
);

//#7
const array5 = [1, 2, 3, 4, 5];
const newArray5 = array5.slice(0, 3);
document.write(
  '<li>' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]: <p>Ответ - [' +
    newArray5.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#8
const array6 = [1, 2, 3, 4, 5];
const newArray6 = array6.splice(1, 2);
document.write(
  '<li>' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]: <p>Ответ - [' +
    array6.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#9
const array7 = [1, 2, 3, 4, 5];
const newArray7 = array7.splice(2, 0, 10);
document.write(
  '<li>' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 2, 10, 3, 4, 5]: <p>Ответ - [' +
    array7.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#10
const sort = [3, 4, 1, 2, 7];
const newSort = sort.sort();
document.write(
  '<li>' +
    'Дан массив [3, 4, 1, 2, 7]. Отсортируйте его: <p>Ответ - [' +
    newSort.join(' ') +
    ']</li></p>' +
    '<br>',
);
//#11
const helloWorld = ['Привет, ', 'Мир', '!'];
document.write(
  '<li>' +
    'Дан массив с элементами "Привет ", "мир" и "!" Необходимо вывести на экран фразу Привет, мир! <p>Ответ - [' +
    helloWorld.join('') +
    ']</li></p>' +
    '<br>',
);

//#12
const helloWorld2 = ['Привет ', 'мир', '!'];
const newHelloWorld2 = helloWorld2.shift();
const byeWorld = helloWorld2.unshift('Пока, ');
document.write(
  '<li>' +
    'Дан массив ["Привет", "мир", "!"]. Необходимо записать в нулевой элемент этого массива слово Пока, (то есть вместо слова "Привет",  будет "Пока",.  <p>Ответ - [' +
    helloWorld2.join('') +
    ']</li></p>' +
    '<br>',
);
//#13
const firstArray = [1, 2, 3, 4, 5];
const secondArray = new Array(1, 2, 3, 4, 5);
document.write(
  '<li>' +
    'Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.' +
    '<p>Первый способ - [' +
    firstArray +
    ']<br>' +
    'Второй способ - [' +
    secondArray +
    ']</li></p>' +
    '<br>',
);

//#14
const arr = {
  ru: ['голубой', 'красный', 'зеленый'],
  en: ['blue', 'red', 'green'],
};
document.write(
  '<li>' +
    'Дан многомерный массив arr. Выведите с его помощью слово "голубой" "blue" . <p>Ответ - ' +
    'ru = [' +
    arr['ru'][0] +
    ']<br>' +
    'en = [' +
    arr['en'][0] +
    ']</li></p><br>',
);
//#15
const letters = ['a', 'b', 'c', 'd'];
const sliceLetters1 = letters.slice(0, 2);
const sliceLetters2 = letters.slice(2);

document.write(
  '<li>' +
    'Создайте массив arr = [a, b, c, d] и с его помощью выведите на экран строку a+b, c+d . <p>Ответ - ' +
    sliceLetters1.join(' +  ') +
    ', ' +
    sliceLetters2.join(' + ') +
    '</li></p><br>',
);

//#16
var numbers = parseInt(prompt('Введите чило элементов массива'));
arrNumbers = [];
for (i = 0; i < numbers; i++) {
  arrNumbers[i] = i;
}
document.write(
  '<li>' +
    'Запросите у пользователя количество элементов массива. Исходя из данных которые ввел пользователь создайте массив на то количество элементов которое передал пользователь. в кажlом индексе массива храните чило которе будет показывать номер элемента массива. <p>Ответ - [' +
    arrNumbers.join(', ') +
    ']</li></p>' +
    '<br>',
);

//#17

const evenNum = arrNumbers.filter(function (z) {
  return z % 2;
});

const oddNum = arrNumbers.filter(function (z) {
  return z % 2 == 0;
});
document.write(
  '<li>' +
    'Сделайте так, чтобы из массива который вы создали выше вывелись все нечетные числа в параграфе, а четные в спане с красным фоном. <p>Ответ c нечетными - [' +
    evenNum.join(', ') +
    ']</li></p>' +
    '<br>' +
    'Ответ c нечетными - ' +
    '<span style="background-color:red"> [' +
    oddNum.join(', ') +
    ']</span>',
  '</li>',
  '<br>',
);

//#18
const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let str1 = vegetables.toString();
let str2 = vegetables.join();

document.write(
  '<li>' +
    'Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. <p>Решение - [' +
    str2,
  ']</p>',
  '</li>',
);
document.write('</ol>');
