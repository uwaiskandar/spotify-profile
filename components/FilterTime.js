import React from 'react'
import { TIME_RANGE } from '../libs/constants'

class FilterTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      timeRange: TIME_RANGE
    };
  }

  handleFilterChange(e) {
    this.props.onChangeTime(e.target.value);
  }


  static defaultProps = {
    selectedValue: TIME_RANGE[0].value,
    onChangeTime: function(value) {
      console.log('testing filter time', value)
    },
  };

  render() {
    let {
      selectedValue, onClick
    } = this.props
    // border-b-4 border-purple-500
    return (
      <div className='relative pt-2 pl-2 pb-5 text-center'>
        {
          this.state.timeRange.map((time, idx) => {
            return <button key={idx} 
              className={`px-8 py-2 text-xs text-semibold hover:text-white rounded-full hover:bg-black mx-2 ${
                selectedValue === time.value ? 
                'border-2 border-violet-700 bg-gray-900'
                : 'text-slate-400'
              }`}
              onClick={this.handleFilterChange.bind(this)}
              value={time.value}
            >
              {time.title}
            </button>
          })
        }
      </div>
    );
  }
}

export default FilterTime   