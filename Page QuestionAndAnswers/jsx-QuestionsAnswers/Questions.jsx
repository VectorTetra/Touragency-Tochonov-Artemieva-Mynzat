
function Questions(props) {

    React.useEffect(() => {
        const handleCheckboxChange = (event) => {
            if (event.target.checked) {
                event.target.nextElementSibling.scrollIntoView({ behavior: "smooth" });
            }
        };
        const checkboxes = document.querySelectorAll('.hide');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleCheckboxChange);
        });
        return () => {
            checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', handleCheckboxChange);
            });
        };
    }, []);

    return (
                props.index===0 ?
                <section>
                    <div className="header">
                        <h1>{props.qaData.caption}</h1>
                    </div>
                </section>
                :
                <section>
                    <div className="row">
            <div className="table">
            <input className="hide" id={props.index} type="checkbox" />
            <label htmlFor={props.index}>{props.qaData.question}</label>
          
                <Answers answer={props.qaData.answer}/>
            
          </div>
          </div>
          </section>
            )
            
}