import React, { Component } from 'react';

import FirstPage from './components/first';
import SecondPage from './components/second';
import ThirdPage from './components/third';
import Navigation from './components/navigation';
import StatusBar from './components/statusbar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageIndex: 0,
      childComponent: [
        {componentName: 'FirstPage', data: {}},
        {componentName: 'SecondPage', data: {}},
        {componentName: 'ThirdPage', data: {}}
      ]
    }
    this.pageClicked = this.pageClicked.bind(this);
  }
  render() {
    return (      
          <div className="wrapper">
              <div className="image-holder">
                <img src="images/form-wizard.png" alt="" />
              </div>
              <form action="">
                <div className="form-header">
                  <a href="#">#Academic Programs</a>
                    <h3>Register for the course online</h3>
                </div>
                <div id="wizard" role="application" className="wizard clearfix">
                    <div className="steps clearfix">
                        <StatusBar pageIndex={this.state.pageIndex} />
                    </div>
                    <div className="content clearfix">
                        {this.showComponent()}                        
                    </div>
                    <div className="actions clearfix">
                        <Navigation                             
                            pageIndex={this.state.pageIndex}
                            pageClicked={this.pageClicked}
                        />
                    </div>   
                </div>
              </form>
            </div>
    );
  }

  pageClicked(pageIndex){
    console.log(pageIndex)
    this.setState({
        pageIndex
    })
  }

  showComponent(){
    let ComponentName = this.state.childComponent[this.state.pageIndex].componentName;
    //let co = "<{} />"
    //console.log(< ComponentName />);
    //return <ComponentName />
    if(ComponentName === 'FirstPage'){
        return <FirstPage />
    }
    if(ComponentName === 'SecondPage'){
      return <SecondPage />
    }
    if(ComponentName === 'ThirdPage'){
      return <ThirdPage />
    }
  }
}

export default App;
