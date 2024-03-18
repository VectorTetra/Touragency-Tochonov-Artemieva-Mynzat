import {createContext} from 'react';
const AdminPanelTabContext = createContext({
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	});
export default AdminPanelTabContext;