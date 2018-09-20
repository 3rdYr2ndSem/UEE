import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './downloads.css'

export default class Downloads  extends Component{

    render(){
        return(
            <div>
                <div className="col-md-9">
                    <div className="col-md-3 box">
                        <h3>Subtitles</h3>
                        <Link to="/"><div className="btn btn-default ButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-3 box">
                        <h3>Video</h3>
                        <Link to="/"><div className="btn btn-default ButtonDefault">TV Series</div></Link>
                    </div>
                    <div className="col-md-3 box">
                        <h3>Audio</h3>
                        <Link to="/"><div className="btn btn-default doubleButtonDefault">TV Series</div></Link>
                        <Link to="/"><div className="btn btn-default doubleButtonDefault">TV Series</div></Link>
                    </div>
                </div>
               
               {/* recent, popular */}
                <div className="col-md-3 box boxAd">

                </div>
            </div>
        );
    }

}