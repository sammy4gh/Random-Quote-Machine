import React from 'react';
import Quote from "./Quote";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const QuoteBox= ({color,  onClick, quote, author}) =>{
    return (

        <div id="quote-box"  >
            <Card className="quotes-card">
                <Quote
                    color={color}
                    quote={quote}
                    author={author}

                />
                <Footer
                    color={color}
                    onClick={onClick}
                    quote={quote}
                    author={author}
                />
            </Card>
        </div>
    );
}

export default QuoteBox;