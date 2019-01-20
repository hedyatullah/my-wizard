import React, { Component } from 'react';

class SecondPage extends Component{
    render(){
        return(
            <div>
                <h4 id="wizard-h-1" tabindex="-1" className="title current"></h4>
                <section id="wizard-p-1" role="tabpanel" aria-labelledby="wizard-h-1" className="body current" aria-hidden="false" style={{}}>
                    <div className="form-row">
                        <label for="">
                            Date of Birth:
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control datepicker-here" data-language="en" data-date-format="dd - mm - yyyy" id="dp1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <label for="">
                            Country of Birth:
                        </label>
                        <div className="form-holder">
                            <select name="" id="" className="form-control">
                                <option value="united states" className="option">United States</option>
                                <option value="united kingdom" className="option">United Kingdom</option>
                                <option value="viet nam" className="option">Viet Nam</option>
                            </select>
                            <i className="zmdi zmdi-caret-down"></i>
                        </div>
                    </div>
                    <div className="form-row">
                        <label for="">
                            Your Email:
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row" style={{marginBbottom: "3.4vh"}}>
                        <label for="">
                            Phone Number:
                        </label>
                        <div className="form-holder">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row" style={{marginBottom: "50px"}}>
                        <label for="">
                            Gender:
                        </label>
                        <div className="form-holder">
                            <div className="checkbox-circle">
                                <label className="male">
                                    <input type="radio" name="gender" value="male" /> Male<br />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="female">
                                    <input type="radio" name="gender" value="female" /> Female<br />
                                        <span className="checkmark"></span>
                                    </label>
                                <label>
                                    <input type="radio" name="gender" value="transgender" />Transgender<br />
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>    
                    </div>          
              </section>              
            </div>
        )
    }
}
export default SecondPage;
