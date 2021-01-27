import React from 'react';
import './style.scss';

export const Button = (props) => <button {...props} className={`Button ${props.className}`}>{props.children || props.title}</button>
