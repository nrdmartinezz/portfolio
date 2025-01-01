import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const Image = (props) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'ddsekdku7' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image(props.image)
        .format('auto') // Optimize delivery by resizing and Imagelying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(props.width).height(props.height)); // Transform the image: auto-crop to square aspect_ratio

if(props.imgClass){
  return (<div className={props.imgClass}><AdvancedImage cldImg={img}/></div>);
}else{
  return (<AdvancedImage cldImg={img}/>);
}


};

export default Image