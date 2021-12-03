import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string'
import './index.css';

class Text extends React.Component {
  render() {
    return(
      <p className={` ${this.props.marginClass} ${this.props.fontClass}`}>{this.props.text}</p>
    );
  }
}

class Card extends React.Component {

  render() {
    return(
      <div className={`background-image card rounded shadow ${this.props.animation}`} style={{backgroundImage: `url(${this.props.image})`}}>
        <div className={`animation`} style={{backgroundImage: `url(${this.props.animationImage})`}}>

        </div>
        <Text marginClass={this.props.marginClass} fontClass={this.props.fontClass} text={this.props.text} />
      </div>)
    ;
  }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);

    const query =queryString.parse(window.location.href);

    this.state = {
      marginClass: query.marginClass,
      image: query.image,
      animationImage: query.animationImage,
      fontClass: query.fontClass,
      text: query.text,
    };
  }

  render() {

    return(
      <div className="container-fluid">
        <div className="row upper-row">
          <div className="col-2">
          </div>
          <div className="col-8 padded">
            <Card marginClass={this.state.marginClass} image={this.state.image} animationClass={this.state.animationClass} animationImage={this.state.animationImage} fontClass={this.state.fontClass} text={this.state.text} />
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    );
  }
}

export default Viewer;

//========================Render Page
ReactDOM.render(
  <Viewer />,
  document.getElementById('root'),
);
