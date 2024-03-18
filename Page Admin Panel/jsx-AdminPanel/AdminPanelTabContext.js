import {createContext} from 'react';
const emptyTabContext = {
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	};
export const AdminPanelTabContext = React.createContext(emptyTabContext);