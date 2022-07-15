import ReactPlayer from 'react-player/youtube';

const ProductVideo = () => (
  <div style={{ padding: "0 10%", margin: "50px 0 20px 0", display: "flex", justifyContent: "center" }}>
    <video style={{ margin: 'auto' }} width="800px" loop autoPlay muted >
      <source src="/videos/petroleum-product-video.mp4" type="video/mp4" />
    </video>
  </div>
)

export default ProductVideo