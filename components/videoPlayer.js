import React from 'react';
import { Card } from 'antd';

const VideoCard = () => {
  return (
    <Card title="Video Player">
      <video controls width="100%">
        <source src="https://player.vimeo.com/progressive_redirect/playback/796225085/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=83fcbfabcf85fcbf86f7bf194fada0495ab3b5e326896b504800f5848a62bfa8" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

export default VideoCard;
