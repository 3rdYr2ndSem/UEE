import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import queryString from 'query-string' ;
import './downloadList.css'


export default class OriginalAudioList extends Component{

    constructor(props){
        super(props)

        this.state={
            Subtitles:[ 
                        {"name":"Amma ","image":"21.jpg"},
                        {"name":"Purudu Thanikama ","image":"22.jpg"},
                        {"name":"Ithihasagatha Premayak ","image":"23.jpg"}, 
                        {"name":"Kanyawi ","image":"24.jpg"}, 
                        {"name":"Hitha Mage Hadaganna ","image":"25.jpg"} ,
                        {"name":"Himikari ","image":"26.jpg"}, 
                        {"name":"Oba Warade Pataleddi ","image":"27.jpg"}, 
                        {"name":"Me Ape Awasanayayi ","image":"21.jpg"},
                        {"name":"Purudu Thanikama ","image":"22.jpg"},
                        {"name":"Ithihasagatha Premayak ","image":"23.jpg"}, 
                        {"name":"Kanyawi ","image":"24.jpg"},  
                        {"name":"Himikari ","image":"26.jpg"}, 
                        {"name":"Oba Warade Pataleddi ","image":"27.jpg"}, 
                        {"name":"Me Ape Awasanayayi ","image":"21.jpg"},
                    ],
            path:'',
            search : ''
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({path:values.path})
    }

    
    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    render(){
        
        let testName = this.state.Subtitles.filter(
            (listItem)=>{
                return listItem.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )

        return(
            <div className="fazlanList">
                <div className=" ">
                    <div className="col-md-12">
                    <div className="path">
                        <span>{this.state.path}</span>
                    </div>
                        <form action="">
                            <div class="form-group" >
                                <input type="text" className="form-control searchBar" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                            </div>
                        </form> 
                    </div>
          
                    <div className="col-md-9" style={{marginTop:"50px"}}>
                    {
                        testName.map((listItem)=>{
                            //path Changes Here
                            return <Link to={"MainDownload?name="+listItem.name +"&image="+listItem.image}>
                            <div className ="col-md-12 listBox">
                                <img src={require(`./images/video/${listItem.image}`)} className="listImage" alt="" />
                                <div className="listName">{listItem.name}</div>
                            </div>
                        </Link>
                        })
                    }
                    </div>
                    
                    <div className="col-md-3">
                    <h3>Latest Downloads</h3>
                        <img src={require('./images/video/21.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/video/25.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/video/24.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/video/27.jpg')} className="relatedImages relatedImageFour" alt=""/>

                        <h3>Most Popular Downloads</h3>
                        <img src={require('./images/video/26.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/video/22.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/video/23.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/video/24.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>
                   
                </div>
            </div>
         );
        }
    
    }