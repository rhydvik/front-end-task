import React, { Component } from 'react';



class Validate extends Component {
  constructor(props) {
  super(props);
  this.state = {value:'',indexElement:'',showError:false,valid:false};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    if(event.target.value===' '){
      alert("Space not allowed");
    }else{
      this.setState({value: event.target.value});
    }


}


handleSubmit(event) {
   var postion = (Math.round(this.state.value.length/2));
   var string = this.state.value.charAt(postion-1);
   var re = /^[a-z0-9]+$/i;
   var validate = re.test(string);
   if(validate){

     this.setState({indexElement:string,value:'',showError:false,valid:true})
   }else{
     this.setState({indexElement:string,showError:true,valid:false})
   }
   this.setState({})
   event.preventDefault();
}



  render() {
    return (
      <div className="pageContainer">
        <div className="inputContainer">
          {console.log(this.state.showError)}
          <form onSubmit={this.handleSubmit}>
            <input className={this.state.showError===true?"highlight":""} type="text" value={this.state.value} onChange={this.handleChange} /><br/>
            {this.state.showError===true?"Not a Valid String":this.state.valid===true?"Valid String" :""}<br/><br/>
            {/*<span className={this.state.showError===false? "hidden":""}>Index element: {this.state.indexElement}<br/></span>*/}
            <input type="submit" value="Submit" />
          </form>
        </div>
    </div>
    );
  }
}

export default Validate;
