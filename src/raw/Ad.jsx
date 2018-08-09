import React ,{Component} from 'react'

export default class  Ad extends Component{

    render(){
        return(
            <div style={{backgroundColor:"white", height : "800px", width: "10%"}}>
                <h1>{this.props.titles}</h1>
                <h1>{console.log("hello")}</h1>
            </div>
        );
    }

}