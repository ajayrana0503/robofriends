import React from 'react';

const Scroll=(props)=>{
	return(
		<div  style={{overflow:'auto',border:'none',height:'800px'}}>
		{props.children}
		</div>
       
		);
};
export default Scroll;