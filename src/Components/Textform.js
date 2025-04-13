import { element } from 'prop-types';
import React from 'react'
import { useState } from "react";

export default function Textform(props) {
    //var word='';
    // var count=0;
    const [text , setText] = useState('Sample text');
    const [word, setWord] = useState('');
    const [count, setCount] = useState(0);
    const OnTextChange = (event)=>{
        setText(event.target.value)
        
    }
    const ToUpperCase=()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Converted to upper case');
    }
    const ToLowerCase=()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','Converted to lower case');
    }
    const OnWordChange=(event)=>{
        setWord(event.target.value);
        setCount(0);
    }
    const ClearText = ()=>{
        setText('');
        props.showAlert('warning','Text cleared');
    }
    const FindOccurences=()=>{
       
        
        const arr =text.split(' ');
        console.log(arr);
         console.log(word);
        arr.forEach(element => {
            if(element===word)
            {
                console.log('inside if');
                // var newCount = count + 1;
                setCount(prevCount => prevCount + 1);
                // console.log(prevCount);
            }
        });
       return count;
    }
    const totalWords = ()=>{
            var i =0;
            text.split(' ').forEach(element =>{
                console.log('outside if'); 
                if(element.trim() !== '')
                {
                    i++;
                    console.log(i);
                    
                }
            });
            console.log(i); 
            return i;

    }
    console.log(text.split(' '));
    return (
        
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={OnTextChange} id="textarea1" style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'black':'white'}}  rows="4"></textarea>
               
            </div>
            <button className="btn btn-primary mx-1 " onClick={ToUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={ToLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={ClearText}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={FindOccurences}>Find occurences</button>
            <input id="wordToFind" onChange={OnWordChange}/>

            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                {/* <p>{text.split(' ').length} words and {text.length} characters</p> */}
                <p>{totalWords()} words and {text.length} characters</p>
                
                <p>Time to read {text.split(' ').length * 0.008} minutes</p>
                <h3>Preview</h3>
                {/* <p>{text}</p> */}
                <p>Number of ocuurences of {word} : {count} </p>
            </div>
        </>
        
    );
   
}