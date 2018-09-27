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
                        <Link to="/SubtitleTVseries?path=/ Downloads / Subtitles / Movies"><div className="btn btn-default doubleButtonDefault">Movies</div></Link>
                        <Link to="/SubtitleTVseries?path=/ Downloads / Subtitles / TV Series"><div className="btn btn-default doubleButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Video</h3>
                        <Link to="/VideoLsit?path=/ Downloads / Video / Songs"><div className="btn btn-default doubleButtonDefault">Songs</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Audio</h3>
                        <Link to="/OriginalAudioList?path=/ Downloads / Audio / Original"><div className="btn btn-default doubleButtonDefault">Original</div></Link>
                        <Link to="/AudioList?path=/ Downloads / Audio / Remix"><div className="btn btn-default doubleButtonDefault">Remix</div></Link>
                    </div>
                </div>
               
               {/* recent, popular */}
               <div className="col-md-3">
               
                <h3>Latest Downloads</h3>
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
                       
            </div>
        );
    }

}