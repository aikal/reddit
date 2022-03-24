import React, { useEffect, useRef, useState } from "react";

import "./Video.css";

import { PlayArrow, Settings, Fullscreen, VolumeOff, Pause } from "@material-ui/icons";

const Video = (props) => {
    const time = useRef(0);
    const [playing, setPlaying] = useState(false)

    useEffect(()=>{
        const video = document.getElementById("video-player")

        video.addEventListener("timeupdate", (e)=>{
            time.current = (100 / video.duration)*video.currentTime;
            const slider = document.getElementById("video-slider")
            slider.value = time.current
        },[])
    })
    useEffect(()=>{
        const video = document.getElementById("video-player") ;

        if(video){
            if(!playing) video.pause()
            else video.play()
        }
    },[playing])
  return (
    <div id="video-container">
      <video id="video-player" src={props.src} />
      <div id="video-controls">
          <div className="video-control-background"></div>
        <button className="video-button  video-control">
          <img className="video-logo" src="assets/images/reddit_logo.jpg" />
        </button>
        <button  onClick={(e)=> setPlaying(value => !value)} className="video-button  video-control">
          {playing?<Pause />: <PlayArrow />}
        </button>
        <span className="video-control">{0}</span>
        <input id="video-slider" className=" video-control" type="range"></input>
        <span className=" video-control">{props.duration}</span>
        <button className="video-button video-control">
          <Settings />
        </button>
        <button className="video-button video-control">
          <Fullscreen />
        </button>
        <button className="video-button video-button-always-present">
          <VolumeOff />
        </button>
      </div>
    </div>
  );
};

export default Video;
