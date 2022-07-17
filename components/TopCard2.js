import React from 'react'
import { nFormatter } from '../libs/helpers'

const bgImageEffectClass = [
  'hue-rotate-180',
  'saturate-200',
  'hue-rotate-60',
  'sepia',
  'hue-rotate-90',
  '-hue-rotate-60'
]

class TopCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImageEffects: bgImageEffectClass[0],
      currentCount: 0
    };
  }

  static defaultProps = {
    width: '250rem',
    imgSrc: 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=',
    name: 'Title',
    idx: '1',
    follower: '100',
    isSongs: false,
    artists: ['Artist 1', 'Artist 2'],
    loadingState: true
  };

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000)
  }
  
  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.intervalId)
  }
  
  timer() {
    let nextCount = this.state.currentCount + 1
    this.setState({
      currentCount: nextCount,
    })
    this.setState({
      bgImageEffects: bgImageEffectClass[this.state.currentCount]
    })

    if(this.state.currentCount >= bgImageEffectClass.length) { 
      this.setState({
        currentCount: 0, bgImageEffects: bgImageEffectClass[0]
      })
    }
  }


  render() {
    let { 
      imgSrc, 
      width,
      name,
      idx,
      follower,
      isSongs,
      artists,
      loadingState
    } = this.props
    return (
      <div className={`${loadingState ? 'animate-pulse' : ''}`}>
        <div className='relative pt-5'>
          <div className='flex justify-center content-center'>
            <img src={imgSrc}
              className={`z-10 shadow-xl shadow-purple-500/50 hover:shadow-indigo-500/50 bg-gray-900`}
              width={width} 
              height={width}
            />
            <img src={imgSrc}
              className={`z-0 absolute lg:right-20 right-1 bottom-5 blur-sm ${this.state.bgImageEffects}`} 
              width={width} 
              height={width}
              style={{
                transition: 'filter 1s ease-in-out',
              }}
            />
          </div>
        </div>
        <div className={`lg:text-3xl text-2xl pt-7 font-bold text-center justify-center content-center tracking-wide`}>
          {idx}. {name ?? 'Loading...'}
          {
            isSongs ?
            <p className='text-base pt-3 font-normal'>{ artists ? artists.map(el => el.name).join(', ') : ''}</p> :
            <p className='text-base pt-3 font-normal'>{follower ? nFormatter(follower, 0) :  0} Followers</p>
          }
        </div>
      </div>
    );
  }
}

export default TopCard2   