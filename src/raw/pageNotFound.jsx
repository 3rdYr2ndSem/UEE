import React ,{Component} from 'react'

export default class  PageNotFound extends Component{

    render(){
        return(
            <div style={{padding:"20px"}}>
                <div className="container" style={{color:"dark gray",
                                                border:"3px solid black",
                                                backgroundImage: "url("+ require("../images/404.jpg")  +")",
                                                borderRadius:"25px",
                                                height:"350px",
                                                width:"350px auto",
                                                backgroundRepeat:"no-repeat",
                                                backgroundSize:"100% 100%"
                                                }}>
                    <center>
                        {/* <h1 style={{color:"black",fontSize:"4em"}}>ERROR 404 - Page Not Found</h1> */}
                        {/* <img src={require("../images/404.jpg" )} alt="404 error"/> */}
                    </center>
                </div>
            </div>
        );
    }

}