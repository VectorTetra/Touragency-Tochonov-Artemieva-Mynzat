function BackToTopButton(props){
	return (
		<button type="button" className="BackToTopButton" 
		onClick={() => {window.scroll({top:0,behavior:"smooth"})}}>		
		</button>

	)
}