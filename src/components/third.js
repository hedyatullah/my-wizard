import React, { Component } from 'react';

class ThirdPage extends Component{
    render(){
        return(
            <div>
                <h4 id="wizard-h-2" tabindex="-1" className="title"></h4>
                <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-h-2" className="body" aria-hidden="true" style={{}}>
                    <div className="form-row">
                        <label for="">
                            Course ID:
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control" placeholder="Ex. abc 12345 or abc 1234L" />
                        </div>
                    </div>
                    <div className="form-row">
                        <label for="">
                            Course Title:
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control" placeholder="Ex. Intro to physic" />
                        </div>
                    </div>
                    <div className="form-row">
                        <label for="">
                            Section(s):
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control" placeholder="Ex. 3679 or 33fa, 4295" />
                        </div>
                    </div>
                    <div className="form-row" style={{marginBottom: "38px"}}>
                        <label for="">
                            Select Teacher:
                        </label>
                        <div className="form-holder">
                            <select name="" id="" className="form-control">
                                <option value="frances meyer" className="option">Frances Meyer</option>
                                <option value="johan lucas" className="option">Johan Lucas</option>
                                <option value="merry linn" className="option">Merry Linn</option>
                            </select>
                            <i className="zmdi zmdi-caret-down"></i>
                        </div>
                    </div>
                    <div className="checkbox-circle" style={{marginBbottom: "48px"}}>
                        <label>
                            <input type="checkbox" checked="" />I agree all statement in Terms &amp; Conditions
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </section>
            </div>
        )
    }
}
export default ThirdPage;