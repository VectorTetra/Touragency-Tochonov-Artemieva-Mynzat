//скрипт для прокручивания календаря с текущего месяца
    document.addEventListener('DOMContentLoaded', function () {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const scrollable = document.querySelector('.scrollable');

        const scrollWidth = scrollable.scrollWidth;
        const visibleWidth = scrollable.clientWidth;
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Получаем текущий месяц (от 0 до 11)

        // Определяем, на какой позиции должен находиться текущий месяц
        let currentMonthPosition = (currentMonth - 1) * 220; // Предполагаем, что каждый месяц имеет ширину 180px

        // Прокручиваем таблицу к текущему месяцу
        scrollable.scrollTo({
            left: currentMonthPosition,
            behavior: 'smooth'
        });

        // Прокрутка влево
        prevButton.addEventListener('click', function () {
            scrollable.scrollLeft -= visibleWidth; // Прокручиваем на ширину видимой области
            if (scrollable.scrollLeft < 0) {
                scrollable.scrollLeft = 0; // Не позволяет прокрутиться за пределы начала таблицы
            }
        });

        // Прокрутка вправо
        nextButton.addEventListener('click', function () {
            scrollable.scrollLeft += visibleWidth; // Прокручиваем на ширину видимой области
            if (scrollable.scrollLeft > scrollWidth - visibleWidth) {
                scrollable.scrollLeft = scrollWidth - visibleWidth; // Не позволяет прокрутиться за пределы конца таблицы
            }
        });
    });


//Скрипты для обработки загрузки цены тура через AJAX
function loadPage(pageName) {
    var xhttp = new XMLHttpRequest();
    console.log('External');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;

            var links = document.querySelectorAll('.topnav a');
            links.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('id').indexOf(pageName) != -1) {
                    link.classList.add('active');
                }
            });

            if (pageName === "PriceTour") {
                initializeExternalScripts();
            } else if (pageName === "PhotoItalian") {
                initializePhotoScripts();
            }
        }
    };

    if (pageName === "PriceTour") {
        xhttp.open("GET", "PriceTour.html", true);
    } else if (pageName === "PhotoItalian") {
        xhttp.open("GET", "PhotoItalian.html", true);
    }
    xhttp.send();
}

// document.getElementById("priceButton").addEventListener("click", function () {
//     loadPage("PriceTour");
// });

document.getElementById("photoButton").addEventListener("click", function () {
    loadPage("PhotoItalian");
});



    function initializeExternalScripts() {
        // Создаем новый элемент <script>
        var scriptElement = document.createElement('script');
        // Устанавливаем атрибут src, указывающий путь к вашему внешнему файлу со скриптами
        scriptElement.src = './scriptPrice.js';
        // Устанавливаем атрибут async для асинхронной загрузки скрипта (опционально)
        scriptElement.async = true;
        // Добавляем созданный элемент <script> в конец тела документа
        document.body.appendChild(scriptElement);
    }

    function initializePhotoScripts() {
        // Создаем новый элемент <script>
        var scriptElement = document.createElement('script');
        // Устанавливаем атрибут src, указывающий путь к вашему внешнему файлу со скриптами
        scriptElement.src = './scriptPhoto.js';
        // Устанавливаем атрибут async для асинхронной загрузки скрипта (опционально)
        scriptElement.async = true;
        // Добавляем созданный элемент <script> в конец тела документа
        document.body.appendChild(scriptElement);
    }

    
/* //Скрипт, чтобы выводилась в календаре по умолчанию текущая дата
   
    var inputDate = document.getElementById('departure-date');

    // Получаем текущую дату
    var currentDate = new Date();

    // Форматируем текущую дату в нужный формат DD-MM-YYYY
    var currentDay = String(currentDate.getDate()).padStart(2, '0');
    var currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    var currentYear = currentDate.getFullYear();
    var formattedCurrentDate = currentDay + '-' + currentMonth + '-' + currentYear;

    // Устанавливаем отформатированную текущую дату в элемент input
    inputDate.value = formattedCurrentDate;

    // Обрабатываем событие изменения значения
    inputDate.addEventListener('change', function () {
        // Получаем выбранную дату из элемента input
        var selectedDate = new Date(inputDate.value);

        // Форматируем выбранную дату в нужный формат DD-MM-YYYY
        var day = String(selectedDate.getDate()).padStart(2, '0');
        var month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var year = selectedDate.getFullYear();
        var formattedDate = day + '-' + month + '-' + year;

        // Устанавливаем отформатированную дату обратно в элемент input
        inputDate.value = formattedDate;
    }); */
 
    
/* 
    //Скрипт записи взрослых и детей

    var adultsCounter = document.getElementById('adults-counter');
    var childInfoContainer = document.getElementById('child-info-container');

    // Добавляем обработчики событий для кнопок + и -
    document.getElementById('increase-adults').addEventListener('click', function () {
        var currentCount = parseInt(adultsCounter.textContent);
        adultsCounter.textContent = currentCount + 1;
        updateSelectedAdults();
    });

    document.getElementById('decrease-adults').addEventListener('click', function () {
        var currentCount = parseInt(adultsCounter.textContent);
        if (currentCount > 1) {
            adultsCounter.textContent = currentCount - 1;
            updateSelectedAdults();
        }
    });

    function updateSelectedAdults() {
        var selectedAdults = parseInt(adultsCounter.textContent);
        var selectedChildren = document.querySelectorAll('.child-info').length; // Получаем количество детей
        var adultsText = selectedAdults + ' Дорослих';
        var childrenText = selectedChildren > 0 ? ', ' + selectedChildren + ' Дітей' : ''; // Создаем текст для количества детей
        document.getElementById('selected-adults').textContent = adultsText + childrenText; // Обновляем строку с информацией о взрослых и детях
    }

    document.getElementById('apply-adults').addEventListener('click', function () {
        applyAdults(); // Вызываем функцию применения количества взрослых
    });

    function applyAdults() {
        var selectedAdults = parseInt(adultsCounter.textContent);
        document.getElementById('selected-adults').textContent = selectedAdults + ' Дорослих';
    }

    // Функция для отображения или скрытия выпадающего списка взрослых и детей
    function toggleChildDropdown() {
        var childDropdown = document.getElementById('child-dropdown');
        if (childDropdown.style.display === 'none') {
            childDropdown.style.display = 'block';
        } else {
            childDropdown.style.display = 'none';
        }
    }

    // Функция для добавления информации о ребенке
    function addChild(age) {
        // Создаем элементы для отображения информации о ребенке
        var childInfo = document.createElement('div');
        childInfo.classList.add('child-info');

        // Создаем текстовый элемент для возраста ребенка
        var ageText = document.createElement('span');
        ageText.textContent = 'Дитина ' + age + ' років ';
        childInfo.appendChild(ageText);

        // Создаем кнопку "Удалить"
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function () {
            removeChild(deleteButton);
        };
        childInfo.appendChild(deleteButton);

        // Добавляем информацию о ребенке в контейнер
        childInfoContainer.appendChild(childInfo);
        updateSelectedAdults();


        // Скрываем выпадающий список детей после выбора возраста
        /* var childDropdown = document.getElementById('child-dropdown');
        childDropdown.style.display = 'none'; 

    }

    // Функция для удаления информации о ребенке
    function removeChild(button) {
        // Находим родительский элемент кнопки (информацию о ребенке)
        var childInfo = button.parentElement;

        // Удаляем информацию о ребенке из контейнера
        childInfoContainer.removeChild(childInfo);
        updateSelectedAdults();
    }
// }


 */