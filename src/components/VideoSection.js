import './VideoSection.css';
import videoSrc from '../assets/video-1.mp4'; // ajuste o caminho conforme necessário

export default function VideoSection() {
  return (
    <section className="video-section">
      <video
        className="video-bg"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
