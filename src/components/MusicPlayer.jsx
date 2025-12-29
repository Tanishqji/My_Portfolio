import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { PlayArrow, Pause } from '@mui/icons-material';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  box-shadow: 0 0 20px ${({ theme }) => theme.primary}, inset 0 0 10px #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 4px solid #fff;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px ${({ theme }) => theme.primary}, inset 0 0 15px #fff;
  }
`;

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // Placeholder URL - User needs to provide a valid Ben 10 theme URL
    const audioRef = useRef(new Audio('https://ia800504.us.archive.org/3/items/Ben10ThemeSong/Ben%2010%20Theme%20Song.mp3'));

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <PlayerContainer onClick={togglePlay}>
            {isPlaying ? <Pause style={{ color: 'black', fontSize: '30px' }} /> : <PlayArrow style={{ color: 'black', fontSize: '30px' }} />}
        </PlayerContainer>
    );
};

export default MusicPlayer;
