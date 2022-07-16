import React from 'react'
class TopCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className='top-three relative'>
        <img src={`${this.props.imgSrc}`}
          className='brightness-50  hover:brightness-90' width={this.props.width} height={this.props.width}
        />
        <div className={`absolute bottom-4 right-4 ${this.props.isTop ? 'lg:text-3xl font-bold sm:text-lg' : 'lg:text-lg font-semibold text-xs'}`}>
          {this.props.idx}. {this.props.name}
        </div>
      </div>
    );
  }
}

export default TopCard   