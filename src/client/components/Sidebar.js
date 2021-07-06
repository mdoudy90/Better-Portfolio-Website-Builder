const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        {children}
      </div>
    </div>
  )
}

export default Sidebar;
