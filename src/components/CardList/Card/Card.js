import React from 'react';
import classes from './Card.module.css';
import TextField from '../../UI/TextField/TextField';

const card = ({ item }) => {
    return (
        <div className={classes.Card}>
            <div>
                <TextField text="Name" type="Label" />
                <TextField text="Username" type="Label" />
                <TextField text="Email" type="Label" />
            </div>
            <div>
                <TextField text={item.name} />
                <TextField text={item.email} />
                <TextField text={item.username} />
            </div>
        </div>
    );
};

export default card;
