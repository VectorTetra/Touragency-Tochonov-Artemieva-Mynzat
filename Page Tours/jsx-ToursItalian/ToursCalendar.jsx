function ToursCalendar(props) {
    React.useEffect(() => 
     {
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


    return (
        <div className="containerAll">
            <button className="prev">
                <img src={props.data.buttons[0].imgSrcLeft} alt={props.data.buttons[0].imgAltLeft} />
            </button>

            <div className="table-container">
                <div className="scrollable">
                    <table>
                        <tbody>
                            <tr className="month">
                                {props.data.months.map((month, index) => (
                                    <td key={index}>{month}</td>
                                ))}
                            </tr>
                            <tr className="day">
                                {props.data.days.map((day, dayindex) => (                                      
                                    <td className="td" key={dayindex}>
                                    <div className="horizontal-content">{day}</div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button className="next">
                <img src={props.data.buttons[1].imgSrcRight} alt={props.data.buttons[1].imgAltRight} />
            </button>
        </div>
    );
}