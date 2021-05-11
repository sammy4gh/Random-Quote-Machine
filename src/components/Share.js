import React from 'react';
import {FaTwitter} from "react-icons/fa";

const Share = ({color,quote, author}) => {
    return (


        <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote}`}
            id="tweet-quote"
            className="button"
            target="_blank"
            style={{color:color, paddingLeft:"1em"}}
        >
            <FaTwitter className="logo" id={"tweet-quote"}/>
        </a>


    );
}

export default Share;