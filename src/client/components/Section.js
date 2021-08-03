import React, { forwardRef } from 'react'

const Section = forwardRef(({ heading, children }, ref) => (
  <div className="section" ref={ref}>
    <div className="section__heading">
      <h2>{heading}</h2>
      <div className="section__heading--line"/>
    </div>
    <div className="section__contents">
      {children}
    </div>
  </div>
))

export default Section;
