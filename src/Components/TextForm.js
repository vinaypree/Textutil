import React,{useState} from 'react'
//hooks helps in class features without making class in functional components

export default function TextForm(props) {
    const handleUpClick = ()=>{   //event listening function
        console.log("clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("successfully upgraded to Upper Case","success");
        
    }
    const handleLoClick = ()=>{   //event listening function
        // console.log("clicked"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("successfully upgraded to Lower Case","success");
    }
    
    const handleOnChange = (e)=>{          //event listening function
        console.log("clicked")
        setText(e.target.value)
        
        
        
      
        
    }
    const handleClearClick = (e)=>{          //event listening function
        // console.log("clicked")
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
        
        
      
        
    }
    const handleCopyClick = (e)=>{          //event listening function
        // console.log("clicked")
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");

        
        
      
        
    }

    const handleExtraSpace = (e)=>{          //event listening function
        // console.log("clicked")
        
     let newText =   text.split(/[ ]+/); //remove the array of spaces between words
     setText(newText.join(" ")); // then join that remove psaces arary with single space 
        props.showAlert("Successfully Handled extra Spaces","success");
        
      
        
    }
    
  

    const [text,setText] = useState('')
    //here default value of text is equal to 'Enter text here' 
    //using setext function we will update it
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white':'grey', color: props.mode === 'dark'?'white':'black'}} id="myBox"  rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-2"onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2"onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary mx-2"onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2"onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Text summary </h2>
        <p>  <b>{text.split(" ").length-1} </b>Words and <b>{text.length}</b> character</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes  To Read </p>       
        <h2>Preview</h2>
        <p> <b>{text} </b> </p>

    </div>
       </>
  )
}
       
             
            
        
        

        
