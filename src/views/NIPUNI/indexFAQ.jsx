import React ,{Component} from 'react'
import './faq.css'
import {Link} from 'react-router-dom'


export default class  Faq extends Component{

    render(){
        return(

            <div>

                {/* <div className="col-md-12 topBox"> */}

                <form>
                    <div className="col-md-12">
                            <h1>How can we help you?</h1><br/>
                        </div>
                        <div className="col-md-9">
                            <div className="col-md-9 topBox" >
                                <input  type="text" class="form-control" placeholder="Type keywords to find answers"/><br/>
                            </div> 
                            <div className="col-md-3">
                                    <button className="btn btn-info searchButton"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                        
                        <div className="col-md-12">
                            <h3 style={{color:"#9ef442"}}>You can also browse the topics below to find what you are looking for.......</h3>
                        </div>
                    </div>
                </form>
                {/* </div> */}
                {/*  */}
                <div className="nipuni">
                <div className="col-md-12">
                    <div className="col-md-12 box">
                        <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;General&nbsp;&nbsp;&nbsp;</mark></h2>
                        <div>
                            
                        </div>
                       
                       
                        <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                    </div>

                    <div className="col-md-12 box">
                        <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;Subtitles&nbsp;&nbsp;</mark></h2>
                        <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                    </div>

                    <div className="col-md-12 box">
                        <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;&nbsp;Video&nbsp;&nbsp;&nbsp;&nbsp;</mark></h2>
                        <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                    </div>

                    <div className="col-md-12 box">
                        <h2><mark style={{backgroundColor:"Black",color:"yellow"}}>&nbsp;&nbsp;&nbsp;&nbsp;Audio&nbsp;&nbsp;&nbsp;&nbsp;</mark></h2>
                        <button className="btn btn-danger showMoreButton"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                    </div>
                </div>
               
              
            </div>


            </div>
        )
    }

}
