import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
   
    <div  style={{ }}>

        <div className="col-md-12 navbar-inverse" style={{padding:"20px 0px 0px 0px",backgroundColor:"#2E2E2E"}}>

          <div style={{padding:"0px 0px 50px 0px"}} >
            <div className="col-md-9"> 
                <h3>Zoom.lk</h3>
                <p>zoom.lk is facilitate to download subtitles, videos and audios in speed with high quality.</p>
            </div>
          </div>

          <div className="col-md-12" style={{backgroundColor:"#212121"}}>
              <div className="text-center text-md-right" style={{color: "lightgray",paddingTop:"20px"}}>
                <p>Copyright © 2010-2012 Zoom.lk (Enn Networks™)
                    Powered by vBulletin™ 
                    Copyright © 2018 vBulletin Solutions, Inc. All rights reserved.</p>
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a style={{fontSize:"1.5em"}}>
                    <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a style={{fontSize:"1.5em"}}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a style={{fontSize:"1.5em"}}>
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a style={{fontSize:"1.5em"}}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>

            </div>
          </div>
        </div>
    </div>
    );
  }
}