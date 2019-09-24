import React from 'react';

//This is our card component.
const Card = ({ name, email, id /*this is destructuring*/}) => {
    /*const { name, email, id } => props;
    This will work thesame as using the destructuring above but will have to add props to the name, email and id properties*/
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  id='image' alt='robots' src={`https://robohash.org/${name}`} />
           <div>
            <h2>{name}</h2>
            <p>{email}</p>
           </div>
        </div>
    );
}

export default Card;