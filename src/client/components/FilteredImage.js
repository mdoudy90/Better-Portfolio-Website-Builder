import { useState } from 'react';
import Image from 'next/image';

const FilteredImage = ({
  image,
  placeholder,
  priority = false,
  onClick,
  layout = 'fill',
  className = ''
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <div className={`${className} filtered-image ${hasLoaded ? 'filtered-image--loaded' : ''}`}>
      <Image
        alt=''
        src={image}
        onClick={onClick}
        priority={priority}
        layout={layout}
        width={layout !== 'fill' ? '300px' : null}
        height={layout !== 'fill' ? '300px' : null}
        objectFit='cover'
        quality={100}
        placeholder={placeholder ? 'blur' : 'empty'}
        blurDataURL={placeholder || null}
        onLoadingComplete={() => setHasLoaded(true)}
      />
    </div>
  )
}

export default FilteredImage;