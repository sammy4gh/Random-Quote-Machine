import React from 'react'
import Share from "./Share";
import NewQuote from "./NewQuote";
import {Col} from "react-bootstrap";

const Footer = ({color, onClick, quote, author}) => {
    return (
        <div className="footer">
                    <Col>
                        <Share
                        color={color}
                        quote={quote}
                        author={author}
                        />
                    </Col>
                    <Col>
                        <NewQuote
                            color={color}
                            onClick={onClick}

                        />
                    </Col>
        </div>
    );
}

export default Footer;