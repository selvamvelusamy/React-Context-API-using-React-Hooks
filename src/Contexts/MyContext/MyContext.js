import React, { useState } from "react";

export const MyContext = React.createContext({ data: 0, setData: () => {} });

const ContextProvider = (props) => {

	const [data, setData] = useState(0);
	const setDataHandler = (value) => {
		setData(value);
	}

	return (
		<MyContext.Provider value={{ data: data, setData: setDataHandler }}>{props.children}</MyContext.Provider>
	);
};

export default ContextProvider;
