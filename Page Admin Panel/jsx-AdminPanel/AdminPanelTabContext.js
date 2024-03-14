import React, {createContext} from 'react';
const AdminPanelTabContext= React.createContext({
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	})
export default AdminPanelTabContext;