import React from 'react'
class TopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isArtists: true
    };
  }

  render() {
    return (
      <table className="table-fixed w-full">
        <tbody className='px-5'>
          {
            this.props.items.map((item, idx) => {
              return <tr key={idx} className="border-b dark:border-indigo-500 font-medium">
                <td width={60} className="pl-5">{idx+1}</td>
                <td width={100} className='py-2'>
                  <img src={this.props.isArtists ? item.images[2].url : item.album.images[2].url } width={65} className=""></img>
                </td>
                <td>{item.name}</td>
                <td className='text-xs text-lime-200 pr-5' width={100}>
                  {
                    this.props.isArtists ? item.genres.join(', ') : item.artists.map(artist => artist.name).join(', ')
                  }
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
}

export default TopList