import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map(ele => {
        return <Card key={ele.id} username={ele.username} id={ele.id} name={ele.name} email={ele.email} />  
    });

    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;