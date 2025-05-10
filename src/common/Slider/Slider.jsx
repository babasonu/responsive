import React from 'react'

import ImageSlider from './ImageSlider';
import gallery_1 from "../../assets/gallery-1.png"

const Slider = () => {
    const slides = [
        {
          url: gallery_1,
          title: 'Nature 1',
          description: 'Beautiful nature scene'
        },
        {
          url:gallery_1 ,
          title: 'Nature 2',
          description: 'Another beautiful nature scene'
        },
        {
            url: gallery_1,
            title: 'Nature 2',
            description: 'Another beautiful nature scene'
          },
          {
            url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
            title: 'Nature 2',
            description: 'Another beautiful nature scene'
          },
          {
            url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
            title: 'Nature 2',
            description: 'Another beautiful nature scene'
          },
        {
          url: 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
          title: 'Nature 3',
          description: 'Yet another beautiful nature scene'
        }
      ];
  return (
    <div style={{ height: '500px', width: '1000px', margin: ' 0 auto'  }}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Slider