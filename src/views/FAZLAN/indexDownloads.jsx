import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './downloads.css'

export default class Downloads  extends Component{

    render(){
        return(
            <div className="fazlanIndex">
                <div className="col-md-9">
                    <div className="col-md-12 box">
                        <h3>Subtitles</h3>
                        <Link to="/AudioOriginal"><div className="btn btn-default doubleButtonDefault">Movies</div></Link>
                        <Link to="/AudioRemix"><div className="btn btn-default doubleButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Video</h3>
                        <Link to="/AudioOriginal"><div className="btn btn-default doubleButtonDefault">Songs</div></Link>
                        <Link to="/AudioRemix"><div className="btn btn-default doubleButtonDefault">TV Series Songs</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Audio</h3>
                        <Link to="/AudioOriginal"><div className="btn btn-default doubleButtonDefault">Original</div></Link>
                        <Link to="/AudioRemix"><div className="btn btn-default doubleButtonDefault">Remix</div></Link>
                    </div>
                </div>
               
               {/* recent, popular */}
               <div className="col-md-3">
               
                    <h3>Latest Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>

                <h3>Most Popular Downloads</h3>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>

                </div>
                       
            </div>
        );
    }

}