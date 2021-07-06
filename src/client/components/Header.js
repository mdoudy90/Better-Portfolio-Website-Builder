const Header = ({ heading = '', subHeading = '', text = '' }) => {
  return (
    <div>
      <p>Hello, my name is</p>
      <h1>{ heading}</h1>
      <h2>{ subHeading }</h2>
      <p>{ text }</p>
      <button>CTA</button>
    </div>
  )
}

export default Header;