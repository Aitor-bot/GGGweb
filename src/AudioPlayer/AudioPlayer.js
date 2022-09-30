import '../AudioPlayer/AudioPlayer.scss'
import ReactAudioPlayer from 'react-audio-player';
import song from '../assets/ebm.mp3'

function AudioPlayer() {
    return (
        <div className="audioplayer_container">
            <ReactAudioPlayer
                src={song}
                autoPlay
                controls
            />
        </div>
    );
}

export default AudioPlayer;
