import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import Form from 'react-bootstrap/Form'


let marked = require("marked");


const initialState = `
This is a paragraph
**this is bolded text**

>Block Quotes!

# Heading
## Heading2

- list item 1
- list item 2
- list item 3

[Visit my website](http://youtube.com)
This is a block of code  
\`\`\`
 let x =1;
 let y =2;
 let z=x+y;
\`\`\`

this is a picture:
![Doraemon](https://i.pinimg.com/originals/c3/fc/98/c3fc9824c3eea50e3b33c7a21fc8c823.jpg)
`;



               
class App extends React.Component{
  state= {
    text:initialState
  }
  handleChange =(e)=>{
    this.setState({
      text:e.target.value
    })
  }


  render(){
    const {text} = this.state;
    
    const markdown = marked(text,{breaks:true});
    
    return (       
      
       <div>
        <h1 className="text-center m-4" >Convert Your Markdown</h1>
            
        
          <div className="row">
            
              <div className = "col-6">
              <h5>Enter your markdown here</h5>
              <textarea className="form-control" id="editor" value = {text}
              onChange = {this.handleChange} />
             </div>
             
             
             <div className = "col-6" >
             <h5 className="text-center">See the result: </h5>
              <div className="preview rounded" id = "preview"
               dangerouslySetInnerHTML={{__html:markdown}}/>

              
              
              </div> 

              
          </div>
            
       </div>
    );
  }
}


export default App;
