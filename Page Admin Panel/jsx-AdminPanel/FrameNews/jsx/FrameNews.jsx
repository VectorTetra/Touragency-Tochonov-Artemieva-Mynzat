function FrameNews(props) {
    const [news, setNews] = React.useState([]);
    const [dtoId, setDtoId] = React.useState(0);
    const [dtoCaption, setDtoCaption] = React.useState("");
    const [dtoText, setDtoText] = React.useState("");
    const [dtoImage, setDtoImage] = React.useState([]);
    const [dtoDate, setDtoDate] = React.useState(new Date());
    const [dtoIsVisible, setDtoIsVisible] = React.useState(false);
    const [dtoIsImportant, setDtoIsImportant] = React.useState(false);

    const Get200Last = () => {
        $.ajax({
            url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'Get200Last' },
            statusCode: {
                200: function (data) {
                    setNews(data);
                    console.log(data);
                },
                204: function () {
                    setNews([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }
    const GetById = (id) => {
        $.ajax({
            url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetById', Id: id },
            statusCode: {
                200: function (data) {
                    setNews(data);
                },
                204: function () {
                    setNews([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }
    const GetByCompositeSearch = (Caption, Text, DateStart, DateEnd, IsVisible, IsImportant) => {
        $.ajax({
            url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: {
                SearchParameter: 'GetByCompositeSearch',
                Caption: Caption,
                Text: Text,
                PublishDateTimeDiapazonStart: DateStart,
                PublishDateTimeDiapazonEnd: DateEnd,
                IsVisible: IsVisible,
                IsImportant: IsImportant
            },
            statusCode: {
                200: function (data) {
                    setNews(data);
                },
                204: function () {
                    setNews([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }
    const PostNews = async (Caption, Text, IsVisible, IsImportant) => {
        var files = document.getElementById("newsPhotoInput").files;
        let newsPhotoUrl = null;
        if (files.length > 0) {
            const formData = new FormData();
            formData.append('FormFile', files[0]);
            await $.ajax({
                url: 'https://26.162.95.213:7100/api/News/UploadNewsImage', // Замініть на ваш URL API
                method: 'POST',
                contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
                processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                data: formData,
                statusCode: {
                    200: function (data) {
                        newsPhotoUrl = data;
                        newsPhotoUrl = "https://26.162.95.213:7100" + newsPhotoUrl;
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
        }
        let request = JSON.stringify({
            Id: 0,
            Caption: Caption,
            Text: Text,
            PhotoUrl: newsPhotoUrl,
            PublishDateTime: new Date(),
            IsVisible: IsVisible,
            IsImportant: IsImportant
        });
        await $.ajax({
            url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
            method: 'POST',
            contentType: "application/json",
            data: request,
            success: function (data) {
                Get200Last();
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }
    const PutNews = async (Caption, Text, IsVisible, IsImportant) => {
        var files = document.getElementById("newsPhotoInput").files;
        let newsPhotoUrl = null;
        if (files.length > 0) {
            const formData = new FormData();
            formData.append('newsId', dtoId);
            formData.append('FormFile', files[0]);
            await $.ajax({
                url: 'https://26.162.95.213:7100/api/News/UploadNewsImage', // Замініть на ваш URL API
                method: 'PUT',
                contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
                processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                data: formData,
                statusCode: {
                    200: function (data) {
                        newsPhotoUrl = data;
                        newsPhotoUrl = "https://26.162.95.213:7100" + newsPhotoUrl;
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
        }
        let request = JSON.stringify({
            Id: dtoId,
            Caption: Caption,
            Text: Text,
            PhotoUrl: newsPhotoUrl !== null ? newsPhotoUrl : (dtoImage ? dtoImage[0] : null),
            PublishDateTime: dtoDate,
            IsVisible: IsVisible,
            IsImportant: IsImportant
        });
        await $.ajax({
            url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
            method: 'PUT',
            contentType: "application/json",
            data: request,
            success: function (data) {
                Get200Last();
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }

    React.useEffect(() => {
        Get200Last();
    }, []);

    window.FrameNewsContext = React.createContext({
        dtoId: dtoId,
        dtoCaption: dtoCaption,
        dtoText: dtoText,
        dtoImage: dtoImage,
        dtoDate: dtoDate,
        dtoIsVisible: dtoIsVisible,
        dtoIsImportant: dtoIsImportant,
        news: news,
        setNews: setNews,
        setDtoId: setDtoId,
        setDtoCaption: setDtoCaption,
        setDtoText: setDtoText,
        setDtoImage: setDtoImage,
        setDtoDate: setDtoDate,
        setDtoIsVisible: setDtoIsVisible,
        setDtoIsImportant: setDtoIsImportant,
        Get200Last: Get200Last,
        GetById: GetById,
        GetByCompositeSearch: GetByCompositeSearch,
        PostNews: PostNews,
        PutNews: PutNews
    });
    return (
        <window.FrameNewsContext.Provider value={{
            dtoId: dtoId,
            dtoCaption: dtoCaption,
            dtoText: dtoText,
            dtoImage: dtoImage,
            dtoDate: dtoDate,
            dtoIsVisible: dtoIsVisible,
            dtoIsImportant: dtoIsImportant,
            news: news,
            setNews: setNews,
            setDtoId: setDtoId,
            setDtoCaption: setDtoCaption,
            setDtoText: setDtoText,
            setDtoImage: setDtoImage,
            setDtoDate: setDtoDate,
            setDtoIsVisible: setDtoIsVisible,
            setDtoIsImportant: setDtoIsImportant,
            Get200Last: Get200Last,
            GetById: GetById,
            GetByCompositeSearch: GetByCompositeSearch,
            PostNews: PostNews,
            PutNews: PutNews
        }}>
            <div id="frameNews">
                <NewsEditForm></NewsEditForm>
                <NewsSearchBar></NewsSearchBar>
                <NewsList articles={news}></NewsList>
            </div>
        </window.FrameNewsContext.Provider>
    )
}
