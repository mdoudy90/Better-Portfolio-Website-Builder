const Section = ({ heading = '', children }) => (
  <div className="section">
    <h2 className="section__heading">{ heading }</h2>
    <div className="section__contents">
      { children }
    </div>
  </div>
)

export default Section;