function PriceTourMenu(props) {

    //     const [selectedAdults, setSelectedAdults] = useState(1); // Используем состояние для отслеживания выбранного количества взрослых
    //     const [showChildDropdown, setShowChildDropdown] = useState(false); // Используем состояние для отслеживания отображения выпадающего списка детей

    React.useEffect(() =>
    //Скрипт для получения текущей даты и календаря на укр. языке
    {
        const today = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(today.getFullYear() + 1);
        let arrivalDates = props.plannedTours.map(item => item.arrivalDate.split('T')[0]);
        //console.log("arrivalDates", arrivalDates); 
        function isDateEnabled(date) {
            const formattedDate = date.toISOString().split('T')[0];
            return arrivalDates.includes(formattedDate);
        }

        var picker = new Pikaday({
            field: document.getElementById('departure-date'),
            format: 'DD-MM-YYYY', // Формат даты
            minDate: today, // Минимальная дата (текущая дата)
            maxDate: nextYear, // Максимальная дата
            numberOfMonths: 3, // Количество отображаемых месяцев
            i18n: {
                previousMonth: 'Попередній місяць',
                nextMonth: 'Наступний місяць',
                months: [
                    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
                    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
                ],
                weekdays: [
                    'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота'
                ],
                weekdaysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
            },
            disableDayFn: function (date) {
                return !isDateEnabled(date);
            }
        });

        picker.el.addEventListener('mouseover', function () {
            setTimeout(() => {
                const allDays = picker.el.querySelectorAll('.pika-day');
                allDays.forEach(day => {
                    const date = new Date(day.getAttribute('data-pika-year'), day.getAttribute('data-pika-month'), day.textContent);
                    if (isDateEnabled(date)) {
                        day.classList.add('enabled-date');
                    }
                });
            }, 0);
        });
        //Скрипт, чтобы выводилась в календаре по умолчанию текущая дата

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
        })


        //         //Скрипт записи взрослых и детей

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

        //         document.getElementById('apply-adults').addEventListener('click', function () {
        //             applyAdults(); // Вызываем функцию применения количества взрослых
        //         });

        //         function applyAdults() {
        //             var selectedAdults = parseInt(adultsCounter.textContent);
        //             document.getElementById('selected-adults').textContent = selectedAdults + ' Дорослих';
        //         }

        // Функция для отображения или скрытия выпадающего списка взрослых и детей
        document.getElementById('toggleChildDropdown').addEventListener('click', function () {
            var childDropdown = document.getElementById('child-dropdown');
            if (childDropdown.style.display === 'none') {
                childDropdown.style.display = 'block';
            } else {
                childDropdown.style.display = 'none';
            }
        });

        // Функция для добавления информации о ребенке
        var childAgeElements = document.getElementsByClassName('childAge');

        // Проходимся по каждому элементу и назначаем обработчик событий
        for (var i = 0; i < childAgeElements.length; i++) {
            childAgeElements[i].addEventListener('click', function (event) {
                var age = parseInt(event.target.id);
                console.log('Добавлен ребенок возрастом:', age);
                // Создаем элементы для отображения информации о ребенке
                var childInfo = document.createElement('div');
                childInfo.classList.add('child-info');


                // function addChild(age) {
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
                childDropdown.style.display = 'none'; */

            })
        };

        // Функция для удаления информации о ребенке
        function removeChild(button) {
            // Находим родительский элемент кнопки (информацию о ребенке)
            var childInfo = button.parentElement;

            // Удаляем информацию о ребенке из контейнера
            childInfoContainer.removeChild(childInfo);
            updateSelectedAdults();
        }
    }, []);


    return (
        <div className="menu">
            <table>
                <thead>
                    <tr>
                        <th>{props.data.departureTitle}</th>
                        <th>{props.data.accommodationTitle}</th>
                        <th rowspan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" className="pika-day" id="departure-date" name="departure-date" required />
                        </td>
                        <td>
                            <div className="dropdown" >
                                <span id="selected-adults">1 {props.data.CounterLabel}</span>
                                <div className="dropdown-content" id="adults-dropdown">
                                    <div>
                                        {props.data.AddAdults}
                                        <button id="decrease-adults"><strong>-</strong></button>
                                        <span id="adults-counter">1</span>
                                        <button id="increase-adults"><strong>+</strong></button>
                                    </div>
                                    <div id="child-info-container">
                                        {/* Блок для отображения информации о детях */}
                                    </div>
                                    <div>
                                        <button className="btn" id="toggleChildDropdown">{props.data.addChildButtonLabel}</button>
                                        <div className="dropdown-content2" id="child-dropdown" style={{ display: 'none' }}>
                                            {props.data.childDropdownContent.map(item => (
                                                <a href="#" id={item.age} className="childAge">{item.label}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <button>{props.data.priceButtonLabel}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
