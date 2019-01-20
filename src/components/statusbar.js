import React, { Component } from 'react';

class StatusBar extends Component{
    render(){
        let pageIndex = this.props.pageIndex;
        let firstPage = 'false';
        let secondPage = 'false';
        let thirdPage = 'false';
        let firstli = '';
        let secondli = '';
        let thirdli = '';
        let ulclass = '';

        if(pageIndex == 0){
            firstPage = 'true'; 
            firstli ='first current'; 
            secondli = 'done';
            thirdli = 'last';      
            ulclass = '';
        }
        else if(pageIndex == 1){
            secondPage = 'true';   
            firstli ='first done'; 
            secondli = 'current';
            thirdli = 'last';
            ulclass = 'step-2';
        }
        else if(pageIndex == 2){
            thirdPage = 'true';
            firstli ='first done'; 
            secondli = 'done';
            thirdli = 'last current';
            ulclass = 'step-3';
        }                   

        return(            
                <ul role="tablist" className={ulclass}>
                    <li role="tab" aria-disabled="false" className={firstli} aria-selected={firstPage}>
                        <a id="wizard-t-0" href="#wizard-h-0" aria-controls="wizard-p-0">
                            <span className="current-info audible">current step: </span>
                            <span className="number">1.</span>
                        </a>
                    </li>
                    <li role="tab" aria-disabled="false" className={secondli} aria-selected={secondPage}>
                        <a id="wizard-t-1" href="#wizard-h-1" aria-controls="wizard-p-1">
                            <span className="number">2.</span> 
                        </a>
                    </li>
                    <li role="tab" aria-disabled="false" className={thirdli} aria-selected={thirdPage}>
                        <a id="wizard-t-2" href="#wizard-h-2" aria-controls="wizard-p-2">                            
                            <span className="number">3.</span> 
                        </a>
                    </li>
                </ul>            
        )
    }
}
export default StatusBar;