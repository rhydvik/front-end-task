import React from 'react';


const Pyramid = React.createClass({

    getInitialState() {
      return{
        value:'',
        pyramid:[" "],
        valid:false
      }
    },

    insertValue(e){
      this.setState({value:e.target.value})
      var re = /^\d+$/;
      var validNumber = re.test(e.target.value);
      if(validNumber){
        this.setState({
        valid:true
        })
      }
    },

    handleSubmit(event){
      event.preventDefault()
    },

    // Validate an generate pyramid

    generatePyramid(){
      if(this.state.valid){
      var arrayOfpyramid = [];
        var totalNumberofRows = this.state.value;
        console.log(totalNumberofRows);
        var output="";
          for (var i = 1; i <= totalNumberofRows; i++) {
            for (var j = 1; j <= (i*2-1); j++) {
              output+=i + "  ";
            }
            arrayOfpyramid.push(output);
            output="";
          }
          this.setState({pyramid:arrayOfpyramid,valid:false,value:''})
      }else{
        alert("enter a number");
      }
    },

    render() {
    return (

      <div className="pageContainer">
        <div className="inputContainer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.insertValue} value={this.state.value}></input><br/><br/>
            <button onClick={this.generatePyramid}>Generate pyramid</button>
          </form>
      </div>
      <div className="pyramidContainer">
        {this.state.pyramid.map((item,i)=>(
          <span key={i}>
            {console.log(item)}  {item}<br/>
          </span>
        ))}
      </div>

      </div>
    );
  },
});



export default Pyramid;
