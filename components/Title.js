import React from 'react'

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  static defaultProps = {
    bgColor: 'bg-gradient-to-r from-violet-500 to-pink-500',
  };

  render() {
    let { bgColor } = this.props
    return (
      <div className=''>
        <div className={`py-1 ${bgColor}`}
          style={
            { width: '50%'}
          }
        >
        </div>
        <div className='px-10 pt-3 pb-2'>
          <h1 className='text-4xl font-bold tracking-wide'>
            {this.props.title}
          </h1>
        </div>
      </div>
    );
  }
}

export default Title   