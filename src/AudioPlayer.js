import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import React from 'react'

const Player = (props) => {
    const {url, displayInfo} = props
return (<AudioPlayer
    src={url}

    onPlay={e => console.log('hi')}
    // onCanPlay={() => displayInfo()}
  />
);
}

export default Player