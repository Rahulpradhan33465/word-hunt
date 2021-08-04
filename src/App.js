import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core';
import './App.css';
import Header from './Component/Header/Header';
import Defination from './Component/Defination/Defination';
import ColorSwitch from './Component/ColorSwitch/ColorSwitch';
const App = () => {
    const [wordMeanings,setWordMeanings]=useState([]);
    const [word,setWord]=useState("");
    const [category,setCategory]=useState("en");
    const[lightTheme,setLightTheme]=useState(false)
const FetchDictionary= async()=>{


try {
    const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
   setWordMeanings(data.data)
} catch (error) {
    console.log(error)
}
}

//  console.log(wordMeanings)
// console.log(category,word)
useEffect(() => {
    FetchDictionary();
     
}, [word,category])
 
    return (
        <div className={lightTheme?' app light':"app dark"}  >
            <Container maxWidth='md' style={{display:'flex',flexDirection:'column',height:'100vh'}}>
                <div className='change-color'>
                    <ColorSwitch lightTheme={lightTheme} setLightTheme={setLightTheme} />
                </div>
               <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightTheme={lightTheme} />
               {
    wordMeanings?   <Defination wordMeanings={wordMeanings} word={word} category={category} lightTheme={lightTheme}/>:null
}
            </Container>

             
        </div>
    )
}

export default App
