function FeedbackAll(props) {
    const [Reviews, setReviews] = React.useState([]);
    React.useEffect(() => {
        if(props.urlParamNameCountry !== null) {
            $.ajax({
                url: 'https://26.162.95.213:7100/api/Review', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCountryName', CountryName: props.urlParamNameCountry},
                statusCode: {
                    200: function (data) {
                        setReviews(data);
                        console.log(data);
                    },
                    204: function () {
                        setReviews([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error.responseText);
                    alert(error.responseText);
                }
            });
        }
        else if(props.urlParamTourNameId !== null){
            $.ajax({
                url: 'https://26.162.95.213:7100/api/Review', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCompositeSearch', TourNameId: props.urlParamTourNameId},
                statusCode: {
                    200: function (data) {
                        setReviews(data);
                        console.log(data);
                    },
                    204: function () {
                        setReviews([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error.responseText);
                    alert(error.responseText);
                }
            });
        }
        else {
            $.ajax({
                url: 'https://26.162.95.213:7100/api/Review', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'Get200Last' },
                statusCode: {
                    200: function (data) {
                        setReviews(data);
                        console.log(data);
                    },
                    204: function () {
                        setReviews([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error.responseText);
                    alert(error.responseText);
                }
            });
        }
    }, []);
    let obj = null;

    return (
        <div id="feedback">
            {props.feedbacks.map(it => {
                if (it.objType === "NavBar") { obj = <FeedbackNav data={it} />; return obj; }
                if (it.objType === "logo") { obj = <FeedbackLogo data={it} />; return obj; }
                if (it.objType === "InfoRegistration") { obj = <FeedbackInfo data={it} />; return obj; }
                if (it.objType === "userFeedback") { obj = <FeedbackTable reviews={Reviews} data={it}/>; return obj; }
            })}
        </div>
    )
}