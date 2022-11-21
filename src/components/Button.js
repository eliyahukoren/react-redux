import React from "react";

const Button = ({ onClick, dangerAction, children } ) => {
	return (
		<button 
			className={`btn ${ dangerAction ? 'btn-danger' : null}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
