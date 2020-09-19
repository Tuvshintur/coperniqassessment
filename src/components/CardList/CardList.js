import React from 'react';
import Card from './Card/Card';
import classes from './CardList.module.css';

const cardList = ({ list }) => {
    return (
        <div className={classes.CardList}>
            {list.map((item, idx) => (
                <Card key={idx} item={item} />
            ))}
        </div>
    );
};

export default cardList;
