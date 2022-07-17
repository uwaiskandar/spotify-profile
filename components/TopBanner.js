import React from 'react'

class TopBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  static defaultProps = {
    imgUrl: '',
    content: '',
    textOrientation: 'text-right'
  };

  render() {
    let {
      imgUrl, content, textOrientation
    } = this.props
    return (
      <div className='pt-10 pb-10 px-5 w-full bg-cover' style={
        {
          backgroundImage: `url("${imgUrl}")`
        }
      }>
          <div href="#" className={`text-4xl font-bold ${textOrientation}`}
          dangerouslySetInnerHTML={{__html: content}}>
          
          </div>
      </div>
    );
  }
}

export default TopBanner   