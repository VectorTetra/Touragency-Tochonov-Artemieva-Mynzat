
function QuestionsAnswers(props) {
    return (
         props.questionsandanswers.map(
            (item, index) => ( 
                <Questions qaData={item} index={index}/>
            )
            )
    
    )
}
