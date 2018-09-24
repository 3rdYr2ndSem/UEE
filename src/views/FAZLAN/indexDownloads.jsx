import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './downloads.css'

export default class Downloads  extends Component{

    render(){
        return(
            <div className="fazlan">
                <div className="col-md-9">
                    <div className="col-md-12 box">
                        <h3>Subtitles</h3>
                        <Link to="/SubtitleTVseries"><div className="btn btn-default ButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Video</h3>
                        <Link to="/VideoTVSeries"><div className="btn btn-default ButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-12 box">
                        <h3>Audio</h3>
                        <Link to="/AudioOriginal"><div className="btn btn-default doubleButtonDefault">Original</div></Link>
                        <Link to="/AudioRemix"><div className="btn btn-default doubleButtonDefault">Remix</div></Link>
                    </div>
                </div>
               
               {/* recent, popular */}
                    <div className="col-md-3 box boxAd">

                </div>
            </div>
        );
    }

}