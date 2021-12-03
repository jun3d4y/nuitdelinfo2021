import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Text extends React.Component {

  render() {
    return(
      <textarea id="myTextarea" className={` ${this.props.marginClass} ${this.props.fontClass}`} rows="1" cols="20"></textarea>
    );
  }
}

class Card extends React.Component {

  render() {
    return(
      <div className={`background-image card rounded shadow ${this.props.animation}`} style={{backgroundImage: `url(${this.props.image})`}}>
        <div className={`animation`} style={{backgroundImage: `url(${this.props.animationImage})`}}>

        </div>
        <Text marginClass={this.props.marginClass} fontClass={this.props.fontClass}/>
      </div>)
    ;
  }
}

class Option extends React.Component {
  render() {
    return(
      <div class="background-image text-black option shadow mt-2 rounded" onClick={this.props.onClick} style={{backgroundImage: `url(${this.props.image}), url(${this.props.animationImage})`}}>
        {this.props.fontClass &&
        <div className={`${this.props.fontClass} previewFont center-flex`}>Lorem Ipsum</div>
        }
      </div>
    );
  }
}

class Menu extends React.Component {

  render() {
    return(
      <div className={`rounded shadow padded ${this.props.menuType}`}>
        {this.props.options.map(option => (
          <Option onClick={() => this.props.onClick(option.id)} selected={option.selected} image={option.image} fontClass={option.fontClass} animationImage={option.animationImage} />
        ))}
      </div>
    );
  }
}

class Generator extends React.Component {
  constructor(props) {
    super(props);

    var optionsTemplate = [
      {
        id: 1,
        selected: true,
        marginClass: 'margin-1',
        image: 'fond1.jpg',
      },
      {
        id: 2,
        selected: true,
        marginClass: 'margin-2',
        image: 'fond2.jpg',
      },
      {
        id: 3,
        selected: true,
        marginClass: 'margin-3',
        image: 'fond3.jpg',
      },
      {
        id: 4,
        selected: true,
        marginClass: 'margin-1',
        image: 'fond4.jpg',
      },
      {
        id: 5,
        selected: true,
        marginClass: 'margin-5',
        image: 'fond5.jpg',
      },
    ];

    var optionsAnimation = [
      {
        'id': 1,
        selected: true,
        animationImage: 'cadeau.png',
      },
      {
        'id': 2,
        selected: true,
        animationImage: 'coeur.png',
      },
      {
        'id': 3,
        selected: true,
        animationImage: 'etoiles.png',
      },
      {
        'id': 3,
        selected: true,
        animationImage: 'feuilles.png',
      },
      {
        'id': 4,
        selected: true,
        animationImage: 'flocon.png',
      },
      {
        'id': 5,
        selected: true,
        animationImage: 'nuages.png',
      },
      {
        'id': 6,
        selected: true,
        animationImage: null,
      },
    ];

    var optionsFont = [
      {
        id: 1,
        selected:true,
        fontClass: 'comforter',
      },
      {
        id: 2,
        selected:true,
        fontClass: 'roboto',
      },
      {
        id: 3,
        selected:true,
        fontClass: 'gwendolyn',
      },
      {
        id: 4,
        selected:true,
        fontClass: 'dancing',
      },
      {
        id: 5,
        selected:true,
        fontClass: 'pacifico',
      },
      {
        id: 6,
        selected:true,
        fontClass: 'montserrat',
      }
    ];

    this.state = {
      marginClass: null,
      image: null,
      animationImage: null,
      fontClass: null,
      optionsTemplate: optionsTemplate,
      optionsAnimation: optionsAnimation,
      optionsFont: optionsFont,
    }
  }

  handleClickTemplate(id) {
    this.state.optionsTemplate.forEach((option, index) => {
      if (option.id === id) {
        this.setState({
          marginClass: option.marginClass,
          image: option.image,
        })
      }
    })
  }

  handleClickAnimation(id) {
    this.state.optionsAnimation.forEach((option, index) => {
      if (option.id === id) {
        this.setState({
          animationImage: option.animationImage,
        })
      }
    })
  }

  handleClickFont(id) {
    this.state.optionsFont.forEach((option, index) => {
      if (option.id === id) {
        this.setState({
          fontClass: option.fontClass,
        })
      }
    })
  }

  send(state) {
    this.state.text = document.getElementById("myTextarea").value;
    window.location.href = "/viewer?marginClass=" + state.marginClass + "&image=" + state.image + "&animationImage=" + state.animationImage + "&fontClass=" + state.fontClass + "&marginClass=" + state.marginClass + "&text=" + btoa(state.text);
  }

  render() {

    return(
      <div className="container-fluid">
        <div className="row upper-row">
          <div className="col-2 padded">
            <Menu onClick={(id) => this.handleClickAnimation(id)} menuType="menu-v" options={this.state.optionsAnimation} />
          </div>
          <div className="col-8 padded">
            <Card marginClass={this.state.marginClass} image={this.state.image} animationClass={this.state.animationClass} animationImage={this.state.animationImage} fontClass={this.state.fontClass} />
          </div>
          <div className="col-2 padded">
            <Menu onClick={(id) => this.handleClickFont(id)} menuType="menu-v" options={this.state.optionsFont} />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <Menu onClick={(id) => this.handleClickTemplate(id)} menuType="menu-h" options={this.state.optionsTemplate} />
          </div>
          <div className="col-2">
            <div className="h-100 rounded shadow padded center-flex" onClick={() => this.send(this.state)}>
              ENVOYER
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Generator;

//========================Render Page
ReactDOM.render(
  <Generator />,
  document.getElementById('root'),
);
