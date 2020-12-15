import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import React from 'react'

const Player = (props) => {
    const {url} = props
    console.log(url)
return (<AudioPlayer
    src={url}
    // other props here
  />
);
}

export default Player