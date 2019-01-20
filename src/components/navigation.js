import React, { Component } from 'react';

class Navigation extends Component{   

    render(){
        let pageIndex = this.props.pageIndex;
        let backButton = 'false';
        let continueButton = 'false';
        let submitButton = 'false';
        let submitStyle = {display: "none"};

        if(pageIndex == 0){
            backButton = 'true'   
            submitButton = 'true'         
        }
        if(pageIndex == 1){
            backButton = 'false'
            submitButton = 'true'
        }
        if(pageIndex == 2){
            backButton = 'false'
            submitButton = 'false'
            continueButton = 'true'
            submitStyle = '';
        }

        console.log(this.props.pageIndex)
        return(            
                <ul role="menu" aria-label="Pagination">
                    <li className="disabled" aria-disabled={backButton} >
                        <a href="#previous" role="menuitem">Back</a>
                    </li>
                    <li aria-hidden="false" aria-disabled={continueButton} className="" style={{}} onClick={ ()=> {
                        return this.props.pageClicked(this.props.pageIndex+1)
                    }}>
                        <a href="#next" role="menuitem">Continue</a>                        
                    </li>
                    <li aria-hidden={submitButton} aria-disabled={submitButton} style={{submitStyle}}>
                        <a href="#finish" role="menuitem">Submit</a>
                    </li>
                </ul>
        )
    }
}
export default Navigation;