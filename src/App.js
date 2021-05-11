import QuoteBox from "./components/QuoteBox";
import {Container} from "react-bootstrap";
import {useState} from "react";



function App() {


    



    let random =(max)=>{
        return Math.floor(Math.random() * max)
    }


    const colorArray = [ "red", "blue", "orange", "magenta", "purple", "crimson"]

    let color = colorArray[random(colorArray.length)]



    const [newQuote, setQuote] = useState( { })

    const getQuote = ()=>{




        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                console.log(data[random(data.length)])
                setQuote(data[random(data.length)])
            })
            .catch(() => {
                console.log("There is an error")
            })

    }


    let quote = newQuote.text
    let author = newQuote.author

    const  onClick = ()=>{
        getQuote()
    }



  return (
      <Container fluid style={{paddingRight:0, paddingLeft:0}}>
        <div className="App" style={ {backgroundColor: color }}>
            <QuoteBox
                color={color}
                random = {random}
                quote = {quote}
                author = {author}
                onClick={onClick}
                />
        </div>
</Container>
  );
}

export default App;
