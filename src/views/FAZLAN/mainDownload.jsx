import React,{Component} from 'react'
import './mainDownload.css';
import queryString from 'query-string' ;

export default class ManiDownload extends Component{

    constructor(props){
        super(props)

        this.state = {
            image:'',
            name:'',
            comments:[
                {"name":"jhon","image":"41.jpg","comment":"good"},
                {"name":"kasun","image":"42.jpg","comment":"Its wonderful"},
                {"name":"kamal","image":"48.jpg","comment":"its nice and cool"},
                {"name":"Fazlan","image":"43.jpg","comment":"its not good thing"},
                {"name":"Nipuna","image":"49.jpg","comment":"its a romantic one?"},
                {"name":"Ahansa","image":"43.jpg","comment":"hello im susann from london"},
                {"name":"Look","image":"45.jpeg","comment":"its nice and cool"},
                {"name":"Nikc","image":"48.jpg","comment":"its not good thing"},
                {"name":"Andreson","image":"46.jpg","comment":"Cool awsome"},
                {"name":"Nethmi","image":"42.jpg","comment":"wooooooooooooooooooooow"},
                {"name":"kir","image":"48.jpg","comment":"its a romantic one?"},
            ]
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({name:values.item2,name:values.item});
   
    }

    render(){
        return(
            <div className="fazlanMain">
                <div className="col-md-3">
                    <div>
                        <img src={require("./images/movies/15.jpg")} alt="" className="downloadImage"/>
                    </div>
                    <div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Artist</td>
                                    <td>Pradeep Nishantha Herath</td>
                                </tr>
                                <tr>
                                    <td>Music</td>
                                    <td>Pradeep Nishantha Herath</td>
                                </tr>
                                <tr>
                                    <td>Lyrics</td>
                                    <td>Sanath Kannangara</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td>Sam Perera</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td>Tuesday, 18 September 2018 - 13:37</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="headerText">
                        <span>Deadpool 2</span>
                    </div>
                    
                    <button className="btn btn-success downloadButton" > <i className="fa fa-download"></i> Download</button> 
                    
                    <div className=" allStar">
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars"></span>
                    </div>

                    <div>
                        <span className="fa fa-eye views"></span> <span style = {{fontSize:"20px"}}>12,200</span>
                    </div>
                    <div className="torentAD">
                        <span style={{color:"white",fontSize:"20px"}}> Please enable your VPN when downloading torrents</span><br/>
                        <span style={{color:"yellow",fontSize:"20px"}}> Assigned IP address 113.59.213.215, located in <mark className="markerAd">Colombo, SRI LANKA. </mark>Your ISP can monitor you, unless you use a zero log VPN.</span>
                        <center>
                            <button type="submit" className="btn btn-success downloadButtonAd"> <i className="fa fa-download"></i> Get NordVPN</button>
                        </center>
                    </div>
                    <div className="movieDescription">
                        After losing the love of his life, 4th wall-breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds) must protect Russel (Julian Dennison) must assemble a team of mutants and
                         protect Russel from Cable (Josh Brolin), a no-nonsense, dangerous cyborg from the future and Deadpool must learn the most important lesson of all, to be part of a family again.
                       
                    </div>
                    <div className="comments">
                        {
                            this.state.comments.map(comment=>{
                                return <div className ="col-md-12 commentBox">
                                    <img src={require(`./images/human/${comment.image}`)} className="commentBoxImage" alt="image Name" />
                                    <div className="commentBxName">{comment.name}</div>
                                    <div className=" commentBxcomment">{comment.comment}</div>
                            </div>
                            })
                        }   
                    </div>
                </div>
                <div className="col-md-3">
                        <h3>Related Downloads</h3>
                        <img src={require('./images/movies/11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/movies/12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/movies/13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/movies/14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                        <h3>Most Popular Video songs</h3>
                        <img src={require('./images/video/26.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/video/22.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/video/23.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/video/24.jpg')} className="relatedImages relatedImageFour" alt=""/>
                </div>
                <div className="col-md-12">
 
                </div>
            </div>
        );
    }
}