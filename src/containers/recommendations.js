import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPin, addNotification} from '../actions/index';
import {bindActionCreators} from 'redux';
import Recos from '../../assets/recommendations';
import Quotes from '../../assets/quotes';
import Slider from 'react-slick';

class Recommendations extends Component {

  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }

  savePin(idx){
    if((this.props.board.board.filter(obj => {return obj.id === Recos.recommendations[idx].id})).length) {
      this.props.addNotification('Oops! Looks like a duplicate', 'info');
    }
    else {
      this.props.addPin(Recos.recommendations[idx]);
    }
  }

  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
  }


  renderRecommendations(eachReco, idx){
    const NO_IMG = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
    const id = eachReco.id;
    const title = eachReco.volumeInfo.title;
    const authors = eachReco.volumeInfo.authors ? 
      eachReco.volumeInfo.authors.reduce((author1, author2) => {
        return author1 + ', ' + author2;
      }) : 'Unknown Author';
    const description = eachReco.searchInfo ? eachReco.searchInfo.textSnippet : "No Description found";
    const thumbnail = eachReco.volumeInfo.imageLinks ? eachReco.volumeInfo.imageLinks.thumbnail : NO_IMG;
    const webreaderlink = eachReco.accessInfo.webReaderLink ? eachReco.accessInfo.webReaderLink : '//:0';
    const indx = idx;

    return (
      <div className="card" key={id}>
       <button className="btn btn-secondary pinbutton" value={indx} onClick={event => this.savePin(event.target.value)}><i className="fa fa-thumb-tack"></i> Save</button>
        <img className="card-img-top" src={thumbnail} />
          <div className="card-block">
            <h5 className="card-title">{title}</h5>
            <h6>{authors}</h6>
            <p className="card-text">
              <small>
                {description}
              </small>
            </p>
            <a href={webreaderlink} target="_blank"><button className="btn btn-secondary viewbutton">View</button></a>
          </div>
      </div>
    )
  }

  render() {
    const slideSettings = {
      infinite: true,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
    }

    return (
      <div>
        <div id="featurebanner">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="sticker">
                  Read
                </div>
              </div>
              <div className="col-sm-8 carousel">
                <Slider {...slideSettings}>
                  <div><img src="../../assets/images/pexels-photo-30982.jpg" /></div>
                  <div><img src="../../assets/images/light-dark-bed-lamp.jpg" /></div>
                  <div><img src="../../assets/images/person-woman-hand-relaxing.jpg" /></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div id="quotes">
          <div className="container" data-type="background" data-speed="4">
            <div className="row">
              <div className="col-sm-8 offset-sm-2">
                <h1>{Quotes.quotes[Math.floor(Math.random()*Quotes.quotes.length)]}</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="recommendations">
          <h2>Need a recommendation?</h2>
          <div className="card-columns">
              {Recos.recommendations.map(this.renderRecommendations, this)}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addPin, addNotification}, dispatch);
}

function mapStateToProps (state) {
  return {board: state.board}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Recommendations)