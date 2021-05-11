import React from 'react';
import {Button} from "react-bootstrap";
import PropTypes from "prop-types"

const NewQuote = ({color, onClick}) => {



    return (
        <div className="new-quote" id="new-quote">
            <Button
                onClick={onClick}
                className="btn"
                style={{color: color, borderColor:color, backgroundColor:"#fff"}}>
                New Quote
            </Button>
        </div>
    );
}
NewQuote.propTypes = {
    color: PropTypes.string,

}

export default NewQuote;
