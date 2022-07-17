import React from 'react'
import { logout } from '../api/auth';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleLogout(e) {
    // logout
    logout()
  }

  render() {
    let {
      imgUrl,
      name,
      followers,
      loadingState
    } = this.props
    return (
      <div className="py-10 flex">
        <div className={`w-20 h-20 relative shrink-0 bg-gray-700 bg-cover bg-center border-2 border-solid border-gray-0 rounded-full shadow-xl ${loadingState ? 'animate-pulse' : ''}`}
          style={
            {
              backgroundImage: `url(${imgUrl})`
            }
          }>
        </div>
        <div className={`pl-10 `}>
          <h1 className={`text-xl font-bold ${loadingState ? 'animate-pulse' : ''}`}>
            {name ?? 'Loading....'}
          </h1>
          <p className='text-sm'>
            {followers ?? 0} Followers
          </p>
          <button className='rounded-full border border-white px-5 text-xs py-1 my-2 hover:bg-black hover:border-gray-500 hover:text-gray-300'
            onClick={this.handleLogout.bind(this)}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileCard   