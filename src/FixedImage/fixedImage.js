import React, { Component } from 'react';


class FixedImage  extends Component {
    //Setup constructor and assing initial values
   constructor(props) {
        super(props);
        this.state = {dimensions: {},transform:0,fixedElemet:false};
        this.onImgLoad = this.onImgLoad.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    //get dynamic width of image
    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    }

    //handle on scroll event
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        console.log(scrollTop);
        this.setState({transform: scrollTop});
        if(this.state.transform>this.state.dimensions.height){
          this.setState({fixedElement:true})
        }else if(this.state.transform < this.state.dimensions.height){
          this.setState({fixedElement:false})
        }
      }

    render(){
        return (
              <div>
                <img className="image" onLoad={this.onImgLoad} src={require('./1.png')}/>
                <div  className="divHeight">
                  <div className={this.state.fixedElement ===true ? "fixedDiv":"floatingDiv"}></div>
                </div>
                <div  className="divHeight"></div>
                <div  className="divHeight"></div>
              </div>
        );
      }
}


export default FixedImage;
