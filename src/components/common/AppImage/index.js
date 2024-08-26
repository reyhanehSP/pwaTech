import Image from 'next/image';

const myLoader = ({src}) => {
    return `${src}`;
};

const AppImage = ({
  alt = "" , 
  blurDataURL = "assets/images/blur.webp",
  placeholder = "blur",
  src = "assets/images/blur.webp",
  ...rest
}) => {
  return (
    <Image
      {...rest}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loader={myLoader}
      src={src}
      alt = {alt}
    />
  );
};

export default AppImage;