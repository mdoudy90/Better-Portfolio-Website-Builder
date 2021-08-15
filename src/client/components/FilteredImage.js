import { useState } from 'react';
import Image from 'next/image';

const FilteredImage = ({
  image,
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
        onClick={hasLoaded ? onClick : null}
        priority={priority}
        layout={layout}
        width={layout !== 'fill' ? '18.75rem' : null}
        height={layout !== 'fill' ? '18.75rem' : null}
        objectFit='cover'
        quality={100}
        onLoadingComplete={() => setHasLoaded(true)}
      />
    </div>
  )
}

export default FilteredImage;