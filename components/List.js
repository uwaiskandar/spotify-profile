import React from 'react'
class TopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isArtists: true
    };
  }

  static defaultProps = {
    items: [],
    loadingState: true
  };

  render() {
    let {
      items,
      loadingState,
    } = this.props
    
    return (
      <table className="table-fixed w-full">
        <tbody className='px-5'>
          {
            items.map((item, idx) => {
              return <tr key={idx} className="text-sm font-medium">
                <td width={60} className="pl-5">{idx+this.props.startIdx}</td>
                <td width={70} className='py-3 content-center'>
                  <img 
                    src={this.props.isArtists ? item.images[2].url : item.album.images[2].url } 
                    width={50} 
                    height={50}
                    className="rounded-full border-2 border-cyan-500 shadow-lg shadow-pink-500/50"/>
                </td>
                <td className='py-3 text-slate-200 px-2'>
                  {item.name}
                  {
                    item.artists ?
                    <p className='text-cyan-500 text-xs py-1'>
                    { item.artists.map(artist => artist.name).join(', ') }
                    </p>
                    : ''
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