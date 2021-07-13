import React, { forwardRef } from 'react'

const Section = forwardRef(({ heading = '', children }, ref) => (
  <div className="section" ref={ref}>
    <h2 className="section__heading">{ heading }</h2>
    <div className="section__contents">
      { children }
    </div>
  </div>
))

export default Section;