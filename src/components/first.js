import React, { Component } from 'react';


class FirstPage extends Component{
    render(){
        return(
            <div>                
                    <h4 id="wizard-h-0" tabIndex="-1" className="title"></h4>
                    <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" className="body" aria-hidden="true" style={{}}>
                        <div className="form-row" style={{marginBottom: "26px"}}>
                            <label for="">
                                Is this course for UF Online?
                            </label>
                            <div className="form-holder">
                                <select name="" id="" className="form-control">
                                    <option value="no" className="option">No</option>
                                    <option value="yes" className="option">Yes</option>
                                </select>
                                <i className="zmdi zmdi-caret-down"></i>
                            </div>
                        </div>
                        <div className="form-row">
                            <label for="">
                                Preferred System:
                            </label>
                            <div className="form-holder">
                                <select name="" id="" className="form-control">
                                    <option value="canvas" className="option">Canvas</option>
                                    <option value="svg" className="option">Svg</option>
                                </select>
                                <i className="zmdi zmdi-caret-down"></i>
                            </div>
                        </div>
                        <div className="form-row">
                            <label for="">
                                College / Department:
                            </label>
                            <div className="form-holder">
                                <select name="" id="" className="form-control">
                                    <option value="florida" className="option">University of Florida</option>
                                    <option value="havard" className="option">University of Havard</option>
                                    <option value="oxford" className="option">University of Oxford</option>
                                </select>
                                <i className="zmdi zmdi-caret-down"></i>
                            </div>
                        </div>
                        <div className="form-row">
                            <label for="">
                                Term:
                            </label>
                            <div className="form-holder">
                                <select name="" id="" className="form-control">
                                    <option value="" selected="" disabled="">Select Term</option>
                                    <option value="term 1" className="option">Term 1</option>
                                    <option value="term 2" className="option">Term 2</option>
                                    <option value="term 3" className="option">Term 3</option>
                                </select>
                                <i className="zmdi zmdi-caret-down"></i>
                            </div>
                        </div>
                        <div className="form-row">
                            <label for="">
                                Instructor Username:
                            </label>
                            <div className="form-holder">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </section>                
            </div>
        )
    }
}
export default FirstPage;