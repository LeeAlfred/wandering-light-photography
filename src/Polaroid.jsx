import React from 'react';
import Gallery from './Gallery';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
    thumbnails: {showThumbnails: false,},
    buttons: {showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
      showDownloadButton: false, },
    settings:{
      disableWheelControls: true,
  
    }
  }

function Polaroid (props) {
    return <div className= 'polaroid'>
        <SRLWrapper options ={options}>
            <Gallery img= {props.img} />
        </SRLWrapper>
    </div>
}

export default Polaroid;

