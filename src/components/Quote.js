import React from 'react';
import {Card} from "react-bootstrap";

const Quote = ({color, quote, author}) => {



    return (

        <div>
            <Card.Body  className="text-center" style={{color:color}}>
            <blockquote className={"blockquote mb-0"} id="text"
            >
                {quote}
            </blockquote>
            <div className="blockquote-footer mt-4" style={{color:color}} id="author">
                {author}
            </div>
        </Card.Body>
        </div>
    );
}

export default Quote;