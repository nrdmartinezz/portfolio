import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'ddsekdku7' } });

  let img = cld
    .image(props.image)
    .format('auto')
    .quality('auto');

  // Only apply height if provided
  if (props.width && props.height) {
    img = img.resize(auto().gravity(autoGravity()).width(props.width).height(props.height));
  } else if (props.width) {
    img = img.resize(auto().gravity(autoGravity()).width(props.width));
  }

  if (props.imgClass) {
    return (
      <div className={props.imgClass}>
        <AdvancedImage cldImg={img} />
      </div>
    );
  } else {
    return <AdvancedImage cldImg={img} loading="lazy" />;
  }
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  imgClass: PropTypes.string,
};

export default Image;