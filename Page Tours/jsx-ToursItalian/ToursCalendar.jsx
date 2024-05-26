// function ToursCalendar(props) {
//     const calendarContainerRef = React.useRef(null);
//     const [position, setPosition] = React.useState({ x: 265, y: 470 });
//     function debounce(func, wait) {
//         let timeout;
//         return function (...args) {
//             clearTimeout(timeout);
//             timeout = setTimeout(() => func.apply(this, args), wait);
//         };
//     }
//     React.useEffect(() => {
//         const today = new Date();
//         const nextYear = new Date();
//         nextYear.setFullYear(today.getFullYear() + 1);
//         let arrivalDates = props.plannedTours.map(item => item.arrivalDate.split('T')[0]);

//         function isDateEnabled(date) {
//             const formattedDate = date.toISOString().split('T')[0];
//             return arrivalDates.includes(formattedDate);
//         }

//         var picker = new Pikaday({
//             field: calendarContainerRef.current,
//             format: 'DD-MM-YYYY', // Формат даты
//             minDate: today, // Минимальная дата (текущая дата)
//             maxDate: nextYear, // Максимальная дата
//             numberOfMonths: 3, // Количество отображаемых месяцев
//             i18n: {
//                 previousMonth: 'Попередній місяць',
//                 nextMonth: 'Наступний місяць',
//                 months: [
//                     'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
//                     'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
//                 ],
//                 weekdays: [
//                     'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота'
//                 ],
//                 weekdaysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
//             },
//             disableDayFn: function (date) {
//                 return !isDateEnabled(date);
//             }
//         });

//         picker.el.addEventListener('mouseover', function () {
//             setTimeout(() => {
//                 const allDays = picker.el.querySelectorAll('.pika-day');
//                 allDays.forEach(day => {
//                     const date = new Date(day.getAttribute('data-pika-year'), day.getAttribute('data-pika-month'), day.textContent);
//                     if (isDateEnabled(date)) {
//                         day.classList.add('enabled-date');
//                     }
//                 });
//             }, 0);
//         });

//         picker.show();
//         const pickerElement = document.querySelector('.pika-single');

//         // Якщо елемент знайдено, встановлюємо йому стилі
//         if (pickerElement) {
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             const flagContainer = document.querySelector('.flagContainer');
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             //const flagContainer =  document.querySelector('.flagContainer');
//             pickerElement.style.left = position.x + "px"; // Закріплюємо положення зліва на автоматично
//             pickerElement.style.top = position.y + "px"; // Закріплюємо положення зверху на автоматично
//             pickerElement.classList.remove('is-bound');
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             // pickerElement.style.width = pos; // Задаємо ширину
//             // pickerElement.style.height = '230px'; // Задаємо ширину
//             // pickerElement.style.overflowX = 'hidden'; // Забороняємо горизонтальну прокрутку
//             // pickerElement.style.overflowY = 'hidden'; // Дозволяємо вертикальну прокрутку
//         }
//         //document.querySelector('.enabled-date').addEventListener('click', function (e) {})
//     }, [props.plannedTours]);
//     React.useEffect(() => {
//         const pickerElement = document.querySelector('.pika-single');
//         console.log(pickerElement);
//         // Якщо елемент знайдено, встановлюємо йому стилі
//         if (pickerElement) {
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             //const flagContainer =  document.querySelector('.flagContainer');
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             //const flagContainer =  document.querySelector('.flagContainer');
//             pickerElement.style.left = position.x + "px"; // Закріплюємо положення зліва на автоматично
//             pickerElement.style.top = position.y + "px"; // Закріплюємо положення зверху на автоматично
//             //pickerElement.style.position = "absolute"; // Закріплюємо положення зверху на автоматично
//             pickerElement.classList.remove('is-bound');
//             //pickerElement.style.position = 'static'; // Змінюємо положення на static
//             // pickerElement.style.width = pos; // Задаємо ширину
//             // pickerElement.style.height = '230px'; // Задаємо ширину
//             // pickerElement.style.overflowX = 'hidden'; // Забороняємо горизонтальну прокрутку
//             // pickerElement.style.overflowY = 'hidden'; // Дозволяємо вертикальну прокрутку
//         }
//     }, [position]);

//     const handleResize = debounce(() => {
//         const rect = calendarContainerRef.current.getBoundingClientRect();
//         setPosition({ x: rect.left +265 });
//         const pickerElement = document.querySelector('.pika-single');
//     }, 100);
//     window.addEventListener('resize', handleResize);
//     return (
//         <div>
//             <div ref={calendarContainerRef} style={{ minHeight: "230px", width: "auto", display: "flex", justifyContent: "center" }} ></div>
//         </div>
//     );
// }



function ToursCalendar(props) {
    const calendarContainerRef = React.useRef(null);

    React.useEffect(() => {
        console.log("props.plannedTours", props.plannedTours);
        const today = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(today.getFullYear() + 1);

        props.plannedTours.map(item => {
            let newDate = new Date(item.arrivalDate);
            newDate.setUTCHours(0, 0, 0, 0);
            item.arrivalDate = newDate.toISOString();
        });

        function isDateEnabled(date) {
            const formattedDate = date.toISOString().split('T')[0];
            const tourWithDate = props.plannedTours.find(item => item.arrivalDate.split('T')[0] === formattedDate);
            return tourWithDate && tourWithDate.freeSeats > 5;
        }
        function isDateHaveZeroFreeSeats(date) {
            const formattedDate = date.toISOString().split('T')[0];
            const tourWithDate = props.plannedTours.find(item => item.arrivalDate.split('T')[0] === formattedDate);
            return tourWithDate && tourWithDate.freeSeats === 0;
        }
        function isDateLimitedFreeSeats(date) {
            const formattedDate = date.toISOString().split('T')[0];
            const tourWithDate = props.plannedTours.find(item => item.arrivalDate.split('T')[0] === formattedDate);
            return tourWithDate && (tourWithDate.freeSeats > 0 && tourWithDate.freeSeats <= 5);
        }

        if (calendarContainerRef.current) {
            flatpickr(calendarContainerRef.current, {
                dateFormat: 'd-m-Y',
                minDate: today,
                maxDate: nextYear,
                disable: [
                    function (date) {
                        return !isDateEnabled(date);
                    }
                ],
                locale: {
                    weekdays: {
                        shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                        longhand: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота']
                    },
                    months: {
                        shorthand: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
                        longhand: [
                            'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
                            'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
                        ]
                    }
                },
                onDayCreate: function (dObj, dStr, fp, dayElem) {
                    const date = new Date(dayElem.dateObj);
                    if (isDateEnabled(date)) {
                        dayElem.classList.add('enabled-date');
                    }
                    else if (isDateHaveZeroFreeSeats(date)) {
                        dayElem.classList.add('zero-free-seats');

                    }
                    else if (isDateLimitedFreeSeats(date)) {
                        dayElem.classList.add('limited-free-seats');

                    } else {
                        dayElem.classList.add('disabled-date');
                    }
                },
                inline: true,
                showMonths: 3
            });

            // Додаємо класи для стилізації Flatpickr
            const pickerElement = calendarContainerRef.current.querySelector('.flatpickr-calendar');
            if (pickerElement) {
                pickerElement.style.width = '100%';
            }
        }
    }, [props.plannedTours]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                <div ref={calendarContainerRef} style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
                    <input type="text" id="calendarInput" style={{ display: 'none' }} /> {/* Приховуємо поле вводу, якщо не потрібно */}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0 20px 0" }}>
                <div>
                    <span className="calendar-legend-item enabled-date">00</span> - Доступні дати
                </div>
                <div>
                    <span className="calendar-legend-item limited-free-seats">00</span> - Закінчуються вільні місця
                </div>
                <div>
                    <span className="calendar-legend-item zero-free-seats">00</span> - Вільних місць немає
                </div>
            </div>
        </div>
    );
}
