import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './downloadList.css'
import queryString from 'query-string' ;

export default class SubtitlesTvSeries extends Component{

    constructor(props){
        super(props)

        this.state={
            Subtitles:[{"name":"Deadpool","image":"1.jpg"},
                       {"name":"solo","image":"12.jpg"},
                       {"name":"Avengers","image":"13.jpg"}, 
                       {"name":"starwars","image":"14.jpg"}, 
                       {"name":"one","image":"15.jpg"} ,
                       {"name":"Avengers","image":"13.jpg"}, 
                       {"name":"starwars","image":"14.jpg"}, 
                       {"name":"Deadpool","image":"1.jpg"},
                       {"name":"solo","image":"12.jpg"},
                       {"name":"Deadpool","image":"1.jpg"},
                       {"name":"solo","image":"12.jpg"},
                       {"name":"Avengers","image":"13.jpg"}, 
                       {"name":"starwars","image":"14.jpg"}, 
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
                            return <Link to="/MoviePage">
                                <div className ="col-md-12 listBox">
                                    <img src={require(`./images/movies/${listItem.image}`)} className="listImage" alt="" />
                                    <div className="listName">{listItem.name}</div>
                                </div>
                            </Link>
                        })
                    }
                    </div>
                    
                    <div className="col-md-3">
                        <h3>Latest Downloads</h3>
                        <img src={require('./images/movies/11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/movies/12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/movies/13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/movies/14.jpg')} className="relatedImages relatedImageFour" alt=""/>

                        <h3>Most Popular Downloads</h3>
                        <img src={require('./images/movies/11.jpg')} className="relatedImages relatedImageone " alt=""/>
                        <img src={require('./images/movies/12.jpg')} className="relatedImages relatedImageTwo" alt=""/>
                        <img src={require('./images/movies/13.jpg')} className="relatedImages relatedImageTree" alt=""/>
                        <img src={require('./images/movies/14.jpg')} className="relatedImages relatedImageFour" alt=""/>
                     </div>
                   
                </div>
            </div>
        );
    }

}