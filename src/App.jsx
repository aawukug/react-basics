import reactLogo from "./assets/react-logo.png"

function Header() {
  return (
    <nav>
      <img className="nav-icon"   src={reactLogo} alt="React Logo" />
      <h2 className="nav-logo_text" >React Facts</h2>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
    
  )
}

function MainContent() {
  return (
    <main className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 200K stars on GitHub.</li>
        <li>Is maintained by Meta.</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </main>
  )
}

function App(){
  return (
    <div>
      <Header/>
      <MainContent/>
    </div>
  )
}

export {App}