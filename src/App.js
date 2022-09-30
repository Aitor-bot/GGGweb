import './App.css';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import FireBody from './Components/FireBody/FireBody';
import Menu from './Components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <FireBody></FireBody>
      <Menu></Menu>
      <AudioPlayer></AudioPlayer>
    </div>
  );
}

export default App;
