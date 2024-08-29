import ReactPlayer from 'react-player'

const Video = props => {
  const { url, others } = props
  return (
    <div className='aspect-video w-full object-cover'>
      <ReactPlayer width={'100%'} height={'100%'} url={url} {...others} />
    </div>
  )
}

export default Video
