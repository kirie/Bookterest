import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';
import { addPin, addNotification } from '../actions/index';
import Recos from '../../assets/recommendations';
import Quotes from '../../assets/quotes';
import CardDisplay from '../components/card_display';

class Recommendations extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.savePin = this.savePin.bind(this);
  }

  savePin(idx) {
    if ((this.props.board.board.filter((obj) => { return obj.id === Recos.recommendations[idx].id })).length) {
      this.props.addNotification('Oops! Looks like a duplicate', 'info');
    }
    else {
      this.props.addPin(Recos.recommendations[idx]);
    }
  }

  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value);
  }


  render() {
    const slideSettings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

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
                  <div><img role="presentation" src="../../assets/images/pexels-photo-30982.jpg" /></div>
                  <div><img role="presentation" src="../../assets/images/light-dark-bed-lamp.jpg" /></div>
                  <div><img role="presentation" src="../../assets/images/person-woman-hand-relaxing.jpg" /></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div id="quotes">
          <div className="container" data-type="background" data-speed="4">
            <div className="row">
              <div className="col-sm-8 offset-sm-2">
                <h1>{Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)]}</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="recommendations">
          <h2>Need a recommendation?</h2>
          <CardDisplay
            booksToCards={Recos.recommendations}
            funcToCards={this.savePin}
            iconButton="fa fa-thumb-tack"
            textButton="Save"
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPin, addNotification }, dispatch);
}

function mapStateToProps(state) {
  return { board: state.board };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
