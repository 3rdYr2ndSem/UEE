import React, {Component } from 'react'

export default class Popup extends Component{
    render(){
        return(
            <div id="myModal3" className="modal fade" role="dialog" style={{color:"black"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#333"}}>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title" style={{color:"white"}}>Add Comments</h4>
                        </div>

                        <div className="modal-body">
                        <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Comment</label>
                                    <textarea type="text" className="form-control" id="exampleTextarea" rows="5" placeholder="Write your comment here" />
                                    </div>
                                    <tr>
                                        <div className="form-group col-md-12">
                                           <label for="file">Upload a image:</label>
                                           <input type="file" name="file1"/>
                                        </div>
                                    </tr> 
                                <button type="submit" className="btn btn-vdetails">Submit</button>
                            </form>
                        </div>
                        
                        <div className="modal-footer"style={{backgroundColor:"#333"}} >
                            <button type="button" className="btn btn-vdetails" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            
        );
    }
} 