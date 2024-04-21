function PeopleSubTabEditForm(props) 
{
		const [id, setId] = React.useState(0); // This will be updated programmatically
		const [firstName, setFirstName] = React.useState('');
		const [lastName, setLastName] = React.useState('');
		const [middleName, setMiddleName] = React.useState('');
	  
		const handleInputChange = (event) => {
		  switch (event.target.name) {
			case 'id':
			  setId(event.target.value);
			  break;
			case 'firstName':
			  setFirstName(event.target.value);
			  break;
			case 'lastName':
			  setLastName(event.target.value);
			  break;
			case 'middleName':
			  setMiddleName(event.target.value);
			  break;
			default:
			  break;
		  }
		}
	  
		const handleSubmit = (event) => {
		  event.preventDefault();
		  // Handle the form submission here
		}
	  
		const handleReset = () => {
		  setFirstName('');
		  setLastName('');
		  setMiddleName('');
		  setId(0);
		}
	  
		return (
		  <form onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '5px' }}>
			<div className="personEditFormRow">
			  <label htmlFor="idInput">ID:</label>
			  <input type="text" className="personEditFormInput" name="idInput" value={id} readOnly />
			</div>
			<div className="personEditFormRow">
			  <label htmlFor="firstNameInput">Ім'я:</label>
			  <input type="text" className="personEditFormInput" name="firstName" value={firstName} onChange={handleInputChange} required />
			</div>
			<div className="personEditFormRow">
			  <label htmlFor="lastNameInput">Прізвище:</label>
			  <input type="text" className="personEditFormInput" name="lastName" value={lastName} onChange={handleInputChange} required />
			</div>
			<div className="personEditFormRow">
			  <label htmlFor="middleNameInput">По-батькові:</label>
			  <input type="text" className="personEditFormInput" name="middleName" value={middleName} onChange={handleInputChange} />
			</div>
			<div className="personEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
			  <button type="submit" className="form-savebutton">Зберегти</button>
			  <button type="button" onClick={handleReset} className="form-clearbutton">Очистити</button>
			</div>
		  </form>
		);	  
}