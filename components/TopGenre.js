import React from 'react'

class TopGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  static defaultProps = {
    imgUrl: '',
    content: '',
    textOrientation: 'text-right',
    genres: [
      
    ],
  };

  render() {
    let {
      imgUrl, genres, textOrientation
    } = this.props
    return (
      <div className='pt-10 pb-10 px-5 bg-cover' style={
        {
          backgroundImage: `url("${imgUrl}")`
        }
      }>
          <div className={`text-4xl font-bold ${textOrientation}`}>
            Top<br/>Genres.
          </div>
          <div className='pb-5 pt-7 px-4 grid grid-cols-3 lg:grid-cols-5 gap-2'>
            {
              genres.map((item, idx) => {
                return <div key={idx} className='font-semibold text-xs lg:text-sm text-left hover:text-cyan-300'>
                  #{item}
                </div>
              })
            }
          </div>
      </div>
    );
  }
}

export default TopGenre   