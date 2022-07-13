import ReactPlayer from 'react-player/youtube';

const HeroVideo = () => (
  <div>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=qPNiIeKMHyg"
      width="100vw"
      height="100vh"
      playing={true}
      muted={true}
      loop={true}
      config={{ youtube: { playerVars: { disablekb: 1, showinfo: 1 } } }}
      controls={false}
    />
  </div>
)

export default HeroVideo