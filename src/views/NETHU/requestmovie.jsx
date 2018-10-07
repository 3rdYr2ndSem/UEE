import React, {Component } from 'react';

import {Link} from 'react-router-dom'
export default class requestmovie extends Component{

    render(){
        return(
<div className="row">
    <div className="col-md-6">
            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Movie Name</label>
                                    <input type="text" className="form-control" placeholder="Movie Name" />
                                     </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Details</label>
                                   
                                    <textarea name="comment" className="form-control" rows="4" cols="50" placeholder="Details" ></textarea>
                                </div>
                                <div className="row row-padding">
                                        <button type="submit" className="btn btn-custom2">Submit</button>
                                    
                                </div>
                            </form>
                            </div>
</div>

        );
    }
}
