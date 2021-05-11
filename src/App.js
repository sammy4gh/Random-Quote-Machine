import QuoteBox from "./components/QuoteBox";
import {Container} from "react-bootstrap";
import {useState} from "react";



function App() {


    const quotes=
    [
          {   "id": 1,
              "author": "Eddard Stark",
              "quote": "Winter is coming"
          },
          {   "id": 2,
              "author": "Tyrion Lannister",
              "quote": "You need to take your enemy’s side if you’re going to see things the way they do"
          },
          {   "id": 3,
              "author": "Sansa Stark",
              "quote": "The lone wolf dies but the pack survives"
          },
          {   "id": 4,
              "author": "Varys",
              "quote": "Power resides where men believe it resides. It’s a trick, a shadow on the wall." +
                  " And, a very small man can cast a very large shadow"
          },
          {   "id": 5,
              "author": "Arya Stark",
              "quote": "Fear cuts deeper than swords"
          },
      ]



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
                /*quotes={quotes}*/
                onClick={onClick}
                />
        </div>
</Container>
  );
}

export default App;
