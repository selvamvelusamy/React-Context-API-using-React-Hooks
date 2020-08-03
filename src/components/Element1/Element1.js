import React, { useContext } from "react";

import { MyContext } from "../../Contexts/MyContext/MyContext";

const Element1 = (props) => {
	const myContext = useContext(MyContext);

	const addHandler = () => {
		myContext.setData(++myContext.data);
	};

	const removeHandler = () => {
		myContext.setData(--myContext.data);
	};
	return (
		<>
			<p>{myContext.data}</p>
			<button onClick={addHandler}>Element1 add</button>
			<button onClick={removeHandler}>Element1 subract</button>
		</>
	);
};

export default Element1;
