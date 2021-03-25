import React from 'react';

const SearchBox=({searchfield,searchchange})=>{
	return(
      <div className='pa2 ma1' >
      <input className='ba pa3  bg-lightest-blue '
      type="search" placeholder="search robots"  onChange={searchchange}/>
      

      </div>
       
		);}
export default SearchBox;