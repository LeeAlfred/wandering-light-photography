import React from 'react';





function Gallery (props){
    return( <div className='photo'>
    <img src={props.img} alt="Photo by Michelle Glover"  />
    
    </div>

    ) 
}


export default Gallery


