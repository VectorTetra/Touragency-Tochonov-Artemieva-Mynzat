function FeedbackForm(props) {
    let context = React.useContext(window.FrameFeedbackContext);
    const [SelectedTourId, setSelectedTourId] = React.useState(0);
    const [SelectedReviewId, setSelectedReviewId] = React.useState(0);
    const [SelectedClientId, setSelectedClientId] = React.useState(0);
    const [SelectedRating, setSelectedRating] = React.useState(5);
    const [SelectedLikes, setSelectedLikes] = React.useState(0);
    const [SelectedReviewCaption, setSelectedReviewCaption] = React.useState('');
    const [SelectedReviewText, setSelectedReviewText] = React.useState('');
    const [SelectedReviewDate, setSelectedReviewDate] = React.useState(new Date());
    const handleReset = (e) => {
        e.preventDefault();
        context.setDtoId(0);
        context.setDtoTourId(0);
        context.setDtoClientId(props.jsonUserData.isClient ? props.jsonUserData.clientId : 0);
        context.setDtoRating(5);
        context.setDtoLikes(0);
        context.setDtoReviewCaption("");
        context.setDtoReviewText("");
        context.setDtoReviewDate(new Date());
        context.setDtoReviewImages([]);
        context.setDtoReviewImageIds([]);
    };
    React.useEffect(() => {
        setSelectedClientId(context.DtoClientId);
    }, [context.DtoClientId]);
    React.useEffect(() => {
        setSelectedTourId(context.DtoTourId);
    }, [context.DtoTourId]);
    React.useEffect(() => {
        setSelectedRating(context.DtoRating);
    }, [context.DtoRating]);
    React.useEffect(() => {
        setSelectedLikes(context.DtoLikes);
    }, [context.DtoLikes]);
    React.useEffect(() => {
        setSelectedReviewCaption(context.DtoReviewCaption);
    }, [context.DtoReviewCaption]);
    React.useEffect(() => {
        setSelectedReviewText(context.DtoReviewText);
    }, [context.DtoReviewText]);
    React.useEffect(() => {
        setSelectedReviewDate(context.DtoReviewDate);
    }, [context.DtoReviewDate]);
    React.useEffect(() => {
        setSelectedReviewId(context.DtoId);
    }, [context.DtoId]);

    const handleInput = (e) => {
        switch (e.target.name) {
            case "TourId":
                setSelectedTourId(e.target.value);
                break;
            case "ClientId":
                setSelectedClientId(e.target.value);
                break;
            case "Rating":
                setSelectedRating(e.target.value);
                break;
            case "Likes":
                setSelectedLikes(e.target.value);
                break;
            case "ReviewCaption":
                setSelectedReviewCaption(e.target.value);
                break;
            case "ReviewText":
                setSelectedReviewText(e.target.value);
                break;
            case "ReviewDate":
                setSelectedReviewDate(e.target.value);
                break;
            case "ReviewId":
                setSelectedReviewId(e.target.value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(context.DtoId === 0){
            await context.PostReview(SelectedTourId,SelectedRating, SelectedReviewCaption, SelectedReviewText);
        }
        else{
            await context.PutReview(SelectedTourId,SelectedRating, SelectedReviewCaption, SelectedReviewText);
        }
        context.Get200Last();
        handleReset(e);
    };
    return (
        <div className="formfeedback">
            <div class="toggle-labelfeedback">Залишити відгук</div>
            {/* <input type="checkbox" id="toggle" class="toggle-checkbox" /> */}
            <div className="">
                <form name="FeedbackEditForm" id="FeedbackEditForm" style={{ border: '2px solid navy', borderRadius: '5px', marginTop: '15px' }}>
                    <input type="hidden" name="" value={SelectedReviewId} />
                    <input type="hidden" name="" value={SelectedClientId} />
                    <input type="hidden" name="" value={SelectedReviewDate} />
                    <input type="hidden" name="" value={SelectedLikes} />
                    <div className="EditFormRow">
                        <span class="caption">Виберіть тур</span>
                        <select className="EditFormInput" style={{ fontSize: "3.5vmin" }} name="TourId" value={SelectedTourId} onChange={handleInput}>
                            <option value="0" disabled hidden selected>Вибрати тур</option>
                            {props.tours.map(item => <option value={item.id}>{item.tourName} ({new Date(item.arrivalDate).toLocaleDateString('uk-UA')} - {new Date(item.departureDate).toLocaleDateString('uk-UA')})</option>)}
                        </select>
                    </div>
                    <div className="EditFormColumn">
                        <div className="EditFormRow" style={{ flex: "1" }}>
                            <div>Заголовок відгуку</div>
                            <input className="EditFormInput" name="ReviewCaption" value={SelectedReviewCaption} onChange={handleInput} id="" required />
                        </div>
                        <div className="EditFormRow">
                            <div>Оцінка (1 - 5)</div>
                            <input className="EditFormInput" type="number" min={1} max={5} name="Rating" id="" value={SelectedRating} onChange={handleInput}/>
                        </div>
                    </div>
                    <div className="EditFormRow">
                        <div>Відгук</div>
                        <textarea className="EditFormInput" style={{ resize: "vertical", display: "flex" }} value={SelectedReviewText} name="ReviewText" id="" required onChange={handleInput}/>
                    </div>
                    <FeedbackFormPhotoInput />
                    <div className="EditFormRowButtons" style={{ margin: '' }}>
                        <button id="userFormSubmit" className="form-savebutton" onClick={handleSubmit}>Зберегти</button>
                        <button id="userFormReset" className="form-clearbutton" onClick={handleReset}>Очистити</button>
                    </div>
                </form>
            </div></div>
    );
};