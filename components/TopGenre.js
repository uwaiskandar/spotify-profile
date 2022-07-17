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
          <div className='pb-5 pt-7 px-4 grid grid-cols-2 lg:grid-cols-3 gap-2'>
            {
              genres.map((item, idx) => {
                return <div key={idx} className='font-semibold text-sm lg:text-sm text-left bg-black/50 px-5 py-5 rounded-xl'>
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