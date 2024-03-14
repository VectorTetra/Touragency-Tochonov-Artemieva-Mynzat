import React, {createContext} from 'react';

export default AdminPanelTabContext= React.createContext({
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	})