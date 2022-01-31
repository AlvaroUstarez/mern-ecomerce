import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, chilldren}) => {
    return <Alert variant={variant}>{chilldren}</Alert>;
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;