//Задание 1
//Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch(). Результат должен быть выведен в консоль. Функция вызывается по нажатию кнопки "Задание 1".

function makeOne() {
    fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Создайте функцию makeTwo, которая выполняет GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive. Результат запроса - поле htmlCode вставьте в элемент с id result2.

function makeTwo() {
    fetch("https://emojihub.yurace.pro/api/random/group/face-positive")
        .then((response) => response.json())
        .then((data) => {
            htmlCode = data.htmlCode;
            let paragraph = document.createElement("p");
            paragraph.innerHTML = htmlCode;
            document.getElementById("result2").append(paragraph);
        })
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeThree() {
    fetch("https://www.boredapi.com/api/activity")
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Создайте функцию makeFour, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль полученную активность в формате 'Activity: описание активности'.

function makeFour() {
    fetch("https://www.boredapi.com/api/activity")
        .then((response) => response.json())
        .then((data) => {
            let activity = data.activity;
            console.log(`Activity: ${activity}`);
        })
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Создайте функцию makeFive, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль количество участников для активности.

function makeFive() {
    fetch("https://www.boredapi.com/api/activity")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.participants);
        })
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-5").addEventListener("click", makeFive); //добавьте слушатель события

//Задание 6
//Создайте функцию makeSix, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль свойства из полученного объекта, такие как activity, type, price и accessibility.

function makeSix() {
    fetch("https://www.boredapi.com/api/activity")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.activity, data.type, data.price, data.accessibility);
        })
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Создайте функцию makeSeven, которая делает запрос на адрес https://api.agify.io/. Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeSeven() {
    fetch("https://api.agify.io/")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

    //Ваш код
}

document.querySelector(".b-7").addEventListener("click", makeSeven); //добавьте слушатель события

//Задание 8
//Создайте функцию makeEight, которая отправляет GET-запрос на адрес https://api.agify.io/ с параметром ?name=alice.

function makeEight() {
    fetch("https://api.agify.io/?name=alice")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    //Ваш код
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Создайте функцию makeNine, которая отправит запрос на адрес `https://api.agify.io/?name=vadim` и выведет полученные данные в элемент с id result9.
//Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeNine() {
    fetch("https://api.agify.io/?name=vadim")
        .then((response) => response.json())
        .then((data) => {
            const resultElement = document.getElementById("result9");
            resultElement.textContent = JSON.stringify(data);
            //Ваш код
        })
        .catch((error) => {
            console.error("Ошибка:", error);
        });
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Создайте функцию makeTen, которая делает запрос на адрес https://dog.ceo/api/breeds/image/random. Полученное изображение выведите после элемента с id "result10".

function makeTen() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            let result = document.querySelector("#result10");
            let img = document.createElement("img");
            img.src = data.message;
            result.append(img);
        })
        .catch((error) => {
            console.error("Ошибка:", error);
        });
    //Ваш код
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Создайте функцию makeEleven, которая делает запрос на адрес "https://api.ipify.org?format=json". Полученный результат выведите в элемент с id "result11".

function makeEleven() {
    fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
            let ip = data.ip;
            document.querySelector("#result11").textContent = ip;
            //Ваш код
        })
        .catch((error) => {
            console.error("Ошибка:", error);
        });
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая будет получать IP-адрес из поля ввода находить его гео-позицию.

function makeTwelve() {
    const myInput = document.getElementById("ipAddress");
    const ipAddress = myInput.value;
    fetch(`http://ip-api.com/json/${ipAddress}`)
        .then((res) => res.json())
        .then((data) => {
            data = JSON.stringify(data);
            document.querySelector("#result12").textContent = data;
        })
        .catch((error) => console.error("Ошибка:", error));
    //Ваш код
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

//Задание 13
//Создайте функцию makeThree, которая делает запрос на адрес 	fetch('https://official-joke-api.appspot.com/random_joke'). Выведите в консоль ответ с сервера, чтобы посмотреть, какие поля есть в ответе.

function makeThirteen() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
}

document.querySelector(".b-13").addEventListener("click", makeThirteen); //добавьте слушатель события

//Задание 14
//Создайте функцию makeFourteen, которая делает запрос на адрес https://official-joke-api.appspot.com/random_joke с помощью функции fetch() . Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.

function makeFourteen() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            const result = document.getElementById("result14");
            result.innerHTML = `<p>${data.setup}</p> <p>${data.punchline}</p>`;
            //Ваш код
        })
        .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-14").addEventListener("click", makeFourteen);

//Задание 15
//Создайте функцию makeFifteen, которая выполняет POST-запрос по адресу https://randomuser.me/api/, используя функцию fetch(). Выведите ответ от сервера в консоль.

function makeFifteen() {
    const postData = {
        title: "Новый заголовок",
        body: "Текст поста",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
        //Ваш код
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-15").addEventListener("click", makeFifteen);
//добавьте слушатель события

//Задание 16
//Создайте функцию makeSixteen, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeSixteen() {
    const postData = {
        title: "Новый заголовок",
        body: "Текст поста",
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
}

document.querySelector(".b-16").addEventListener("click", makeSixteen);

//Задание 17
//Создайте функцию makeSeventeen, которая должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Полученный ответ с сервера должен быть выведен в консоль.

const makeSeventeen = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
};

document.querySelector(".b-17").addEventListener("click", makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch(). ыведите ответ с сервера в консоль.

function makeEighteen() {
    const postData = {
        title: "Новый заголовок",
        body: "Текст поста",
    };
    fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err)); //Ваш код
}

document.querySelector(".b-18").addEventListener("click", makeEighteen);

//Задание 19
//Создайте функцию makeNineteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeNineteen() {
    const postData = {
        name: "Кот Учёный",
        username: "kitty",
        email: "kitty@example.com",
        phone: "123-456-7890",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
}

document.querySelector(".b-19").addEventListener("click", makeNineteen);

//Задание 20
//Создайте функцию makeTwenty, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwenty() {
    const postData = {
        name: "Золотая рыбка",
        email: "goldfish@example.com",
        body: "Гав-гав!",
        postId: 1,
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
}

document.querySelector(".b-20").addEventListener("click", makeTwenty);

//Задание 21
//Создайте функцию makeTwentyOne, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwentyOne() {
    const postData = {
        name: "Золотая рыбка",
        email: "goldfish@example.com",
        body: "Гав-гав!",
        postId: 1,
    };
    fetch("https://jsonplaceholder.typicode.com/comments/1", {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    //Ваш код
}

document.querySelector(".b-21").addEventListener("click", makeTwentyOne);

//Задание 22
//Создайте функцию makePromiseAllOne, которая должна делать два GET-запроса на адреса: https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1. Используйте `.then()` для обработки результатов.
//Выведите оба ответа с сервера в консоль.

function makePromiseAllOne() {
    const getPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());

    const getComment = fetch("https://jsonplaceholder.typicode.com/comments/1").then((res) => res.json());

    Promise.all([getPost, getComment]).then((data) => console.log(data));
}

document.querySelector(".b-22").addEventListener("click", makePromiseAllOne);

//Задание 23
//Создайте функцию makePromiseAllTwo, которая должна делать три GET-запроса на адреса: https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1.
//Используйте `async/ ` для обработки результатов. Выведите все ответы с сервера в консоль.

async function makePromiseAllTwo() {
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data1 = await response1.json();
        console.log(data1);

        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data2 = await response2.json();
        console.log(data2);

        const response3 = await fetch("https://jsonplaceholder.typicode.com/comments/1");
        const data3 = await response3.json();
        console.log(data3);

        //Ваш код
    } catch (error) {
        console.error("Ошибка при выполнении запросов:", error);
    }
}

document.querySelector(".b-23").addEventListener("click", makePromiseAllTwo);

//Задание 24
//Какое имя выведется в консоль?

const makeTwentyFour = () => {
    let name = "Вася";
    function sayHi() {
        console.log(name);
    }

    setTimeout(function () {
        let name = "Петя";
        sayHi();
    }, 1000);
};

document.querySelector(".b-24").addEventListener("click", makeTwentyFour);

//Задание 25
//В каком порядке числа выведутся в консоль?

function makeTwentyFive() {
    console.log(1);

    //Cтавим таймер на 0 миллисекунд
    setTimeout(function () {
        console.log(2);
    }, 0);

    console.log(3);
}

document.querySelector(".b-25").addEventListener("click", makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 5 секунд" через 5 секунд. Вызывается функция по кнопке Задание 26.

function makeTwentySix() {
    setTimeout(function () {
        console.log("Прошло 5 секунд");
    }, 5000);
    //Ваш код
}

document.querySelector(".b-26").addEventListener("click", makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 2 секунды" через 2 секунды. Вызывается функция по кнопке Задание 27.

function makeTwentySeven() {
    setTimeout(function () {
        console.log("Прошло 2 секунд");
    }, 2000);
    //Ваш код
}

document.querySelector(".b-27").addEventListener("click", makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая использует `setInterval` для отображения в консоли сообщения "Прошло 3 секунды" каждые 3 секунды.

function makeTwentyEight() {
    setInterval(function () {
        console.log("Прошло 3 секунд");
    }, 3000);
    //Ваш код
}

document.querySelector(".b-28").addEventListener("click", makeTwentyEight);

//Задание 29
//Создайте функцию makeTwentyNine, которая использует `setInterval` для отображения в консоли сообщения "Прошло 2 секунды" каждые 2 секунды.

function makeTwentyNine() {
    setInterval(function () {
        console.log("Прошло 2 секунд");
    }, 2000);
    //Ваш код
}

document.querySelector(".b-29").addEventListener("click", makeTwentyNine);

//Задание 30
//Создайте функцию makeThirty, которая использует `setInterval` для отображения в консоли сообщения "Прошло 5 секунд" каждые 5 секунд.

function makeThirty() {
    setInterval(function () {
        console.log("Прошло 5 секунд");
    }, 5000);
    //Ваш код
}

document.querySelector(".b-30").addEventListener("click", makeThirty);
