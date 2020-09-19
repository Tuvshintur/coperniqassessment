import React from 'react';
import classes from './TextField.module.css';

const textField = ({ text, type }) => {
    let classNames = [classes.TextField];
    if (!type) classNames.push(type);

    return <div className={classNames.join(' ')}>{text}</div>;
};

export default textField;
