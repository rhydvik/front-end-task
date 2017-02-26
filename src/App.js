import React, { Component } from 'react';
import Pyramid from './Prymid/pyramid.js';
import FixedImage from './FixedImage/fixedImage.js';
import Validate from './Validate/Validate.js';
import './App.css';


const App = React.createClass({
    //SetUp Initial states
      getInitialState(){
        return{
          showValidate:false,
          showPyramid:false,
          showFixedImage:false,
          hideQuestionBox:false,
        }
      },

      //Back Button handler
      goBack(){
        this.setState({showPyramid:false,hideQuestionBox:false,showValidate:false,showFixedImage:false})
      },


      //toggle components
      showComponent(value){
        if(value=='prymid'){
          this.setState({showPyramid:true,hideQuestionBox:true})
        }else if(value==='webpage'){
          this.setState({showFixedImage:true,hideQuestionBox:true})
        }else{
          this.setState({showValidate:true,hideQuestionBox:true})
        }
      },

      render() {
        return (
          <div className="App">
            <div className={this.state.hideQuestionBox===true?"hidden":""}>
              <div className="QuestionBox" onClick={()=>this.showComponent("prymid")}>
                <span>
                  Q1. Javascript Program to generate Prymid.<br/><br/>
                <button>See Answer</button>
                </span>
              </div>

              <div className="QuestionBox" onClick={()=>this.showComponent("webpage")}>
                <span>
                  Q2. Make a simple web page, with a div has position relative....<br/><br/>
                <button>See Answer</button>
                </span>
              </div>

              <div className="QuestionBox" onClick={()=>this.showComponent("validate")} >
                <span>
                  Q1. Validate a string and check alphanumeric character at center.<br/><br/>
                <button>See Answer</button>
                </span>
              </div>
            </div>
            {/*Handle Components and toggle them*/}
            {this.state.showPyramid      === true? <Pyramid/>:""}
            {this.state.showValidate        === true? <Validate/>:""}
            {this.state.showFixedImage  === true? <FixedImage/>:""}
            <br/><br/>

            {this.state.hideQuestionBox===false?"":
              <button onClick={this.goBack}> Go Back</button>
            }
          </div>
        );
      }
    })

export default App;
