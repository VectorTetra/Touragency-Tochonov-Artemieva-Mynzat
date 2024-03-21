function ToursNavPanel(props) {
    React.useEffect(() => {
        function loadPage(pageName) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    /* document.getElementById("content").innerHTML = this.responseText; */
                    ReactDOM.render(
                        <TourProgramm content={this.responseText} />,
                        document.getElementById("content")
                    )

                   var links = document.querySelectorAll('.topnav a');
                    links.forEach(function (link) {
                        link.classList.remove('active');
                        /* console.log('Содержимое элементов "day":', pageName); */
                    if (link.getAttribute('id').indexOf(pageName) != -1) {
                            link.classList.add('active');
                        }
                    });
 
                   /* if (pageName === "PriceTour") {
                        initializeExternalScripts();
                    } else if (pageName === "PhotoItalian") {
                        initializePhotoScripts();
                    } */
                }
            };

            if (pageName === "PriceTour") {
                xhttp.open("GET", "PriceTour.html", true);
            } else if (pageName === "PhotoItalian") {
                xhttp.open("GET", "PhotoItalian.html", true);
            }
            xhttp.send();
        }

       document.getElementById("priceLink").addEventListener("click", function () {
            loadPage("PriceTour");
        });

        document.getElementById("photoLink").addEventListener("click", function () {
            loadPage("PhotoItalian");
        });
 


        /* function initializeExternalScripts() {
            // Создаем новый элемент <script>
            var scriptElement = document.createElement('script');
            // Устанавливаем атрибут src, указывающий путь к вашему внешнему файлу со скриптами
            scriptElement.src = './script/scriptPrice.js';
            // Устанавливаем атрибут async для асинхронной загрузки скрипта (опционально)
            scriptElement.async = true;
            // Добавляем созданный элемент <script> в конец тела документа
            document.body.appendChild(scriptElement);
        } 

        function initializePhotoScripts() {
            // Создаем новый элемент <script>
            var scriptElement = document.createElement('script');
            // Устанавливаем атрибут src, указывающий путь к вашему внешнему файлу со скриптами
            scriptElement.src = './script/scriptPhoto.js';
            // Устанавливаем атрибут async для асинхронной загрузки скрипта (опционально)
            scriptElement.async = true;
            // Добавляем созданный элемент <script> в конец тела документа
            document.body.appendChild(scriptElement);
        }; */
    }, []);


        return (
            <div>
                <hr />
                <div className="topnav">
                    {props.data.link.map(link => (
                        <a key={link.id} id={link.id} className={link.class} href={link.href} onClick={() => props.loadPage(link.id)}>
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        )
}