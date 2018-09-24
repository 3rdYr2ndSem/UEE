import React,{Component} from 'react'
import './mainDownload.css';

export default class ManiDownload extends Component{

    render(){
        return(
            <div className="fazlanMain">
                <div className="col-md-3">
                   <img src={require('./15.jpg')} alt="" className="downloadImage"/>
                   
                </div>
                <div className="col-md-6">
                    <div className="headerText">
                        <span>Deadpool 2</span>
                    </div>
                    
                   <a href="./Login.jsx" download> <button className="btn btn-success downloadButton" > <i className="fa fa-download"></i> Download</button> </a>
                    
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
                </div>
                <div className="col-md-3">
                        <h3>Related Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                </div>
                <div className="col-md-12">
 
                </div>
            </div>
        );
    }
}