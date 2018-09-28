import React,{Component} from 'react'
import './moviePage.css';

export default class moviePage extends Component{

    render(){
        return(
            <div className="nipunam">
                <div className="col-md-3">
                   <img src={require('./15.jpg')} alt="" className="downloadImage"/>
                   
                </div>
                <div className="col-md-5">
                    <div className="headerText">
                        <span>Deadpool 2</span>
                        <h4>2018</h4>
                        <h4>Action / Adventure / Fantacy / Sci-Fi </h4>
                    </div>
                    
                    <div className=" allStar">
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars starChecked"></span>
                        <span class="fa fa-star Stars"></span>
                    </div>
                    

                    <div>
                        <span className="fa fa-eye views"></span> <span style = {{fontSize:"15px"}}>12,200</span>
                    </div>
                    
                    

                    

                    
                </div>
                <div className="col-md-3">
                        
                        <h4>Similar Downloads</h4>
                        <img src={require('./11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                </div>
                <div className="col-md-12 screenshotRaw" >
                    <div className="col-md-4">
                        <iframe width="100%" height="240" src="https://youtube.com/embed/D86RtevtfrA">
                        </iframe>
                    </div>
                    <div className="col-md-4 ">
                    <img src={require('./deadpool-scrn-1.jpg')} className="screenshotOne"/>
                    </div>

                    <div className="col-md-4">
                    <img src={require('./deadpool-scrn-2.jpg')} className="screenshotTwo"/>
                    </div>

                    <div className="movieDescription col-md-12" >
                        After losing the love of his life, 4th wall-breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds) must protect Russel (Julian Dennison) must assemble a team of mutants and
                         protect Russel from Cable (Josh Brolin), a no-nonsense, dangerous cyborg from the future and Deadpool must learn the most important lesson of all, to be part of a family again.
                            <br/>
                        After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning 
                        to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the Yakuza, and a pack of sexually aggressive 
                        canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title
                         of World's Best Lover.
                    </div>
                    <div className="col-md-12">
                    <button className="btn btn-success downloadButton center-block"> <i className="fa fa-download"></i> Dowload Subtitles</button>
                    </div>
                    <br/>

                </div>
            </div>
        );
    }
}