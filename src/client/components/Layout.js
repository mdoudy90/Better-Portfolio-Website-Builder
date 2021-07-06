const Layout = ({ children }) => {

  return (
    <div className="layout">
      <div className="layout__content">
        {children}
      </div>
    </div>
  )
}

export default Layout;
