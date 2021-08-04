import React from 'react'
import './Defination.css'
const Defination = ({word,wordMeanings,category,lightTheme}) => {
    // console.log(wordMeanings)
    return (
        <div className={lightTheme?'defination b-light':'defination b-dark'}>

{
    wordMeanings[0] && word && category==='en' &&(
        <audio
        src={wordMeanings[0].phonetics[0] && wordMeanings[0].phonetics[0].audio}
        controls
        style={{borderRadius:'10px',width:'100%',height:'10%'}}
        >
            Your browser doesn't support Audio player
        </audio>

    )
}

            {word===""?<h3 className='hints'>Start Typing to search</h3>:

            wordMeanings.map((mean)=>mean.meanings.map((item)=>
             item.definitions.map((def)=>(
                 
                 <div className={lightTheme?'singleMeaning f-dark':'singleMeaning f-light'} key={def.definition}> 
                 <h4   className='title' >{def.definition}</h4>
                 <hr/>
                 {
                     def.example &&(
                         <p className='example'>
                             <b>Example:</b>{def.example}
                             </p>
                     )
                 }
                 {
                     def.synonyms &&(
                        
                         <p className='syn' >
                             <span className='syn-h'>Synonoms: </span>{def.synonyms.map((s)=>(
                            
                             <span key={s}>{`${s},`}</span>))}
                         </p>
                     )
                 }
                   </div>
             ))
            )) 
           
            }
        </div>
    )
}

export default Defination
