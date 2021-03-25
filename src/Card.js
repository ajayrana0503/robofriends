import React from 'react';


const Card=(props)=>{
	const {name,email,id}=props;
	return (
		<div className='tc bg-lightest-blue  black dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='photos'src={`https://robohash.org/${id}?200*200`}/>
		<div>
		<h2 className='f3'>{name}</h2>
         <p className='f3'>{email}</p>
         </div>
         </div>
		);
}

export default Card;