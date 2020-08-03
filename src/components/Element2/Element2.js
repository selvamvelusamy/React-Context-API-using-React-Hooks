import React, { useContext } from "react";

import { MyContext } from "../../Contexts/MyContext/MyContext";

const Element2 = (props) => {
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
			<button onClick={addHandler}>Element2 add</button>
			<button onClick={removeHandler}>Element2 subract</button>
		</>
	);
};

export default Element2;
