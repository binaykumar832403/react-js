function Header(){
  return(
    <>
    <h1>This is Header</h1>
    </>
  )
}
function Navigation(){
  return(
  <>
  <nav>
  <ul>
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
    </ul>
  </nav>
  </>
  )
}
function Footer(){
  return(
  <>
  <h3>This is Footer</h3>
  <footer>&copyrights</footer>
  </>
  )
}
function Main(){
  return(
    <>
    <h2>This is main content</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ipsam voluptatum aut dolor, odio voluptate exercitationem quam praesentium expedita, fugiat eaque maxime neque nobis aliquam earum quos animi non vel?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quas assumenda molestias dignissimos vitae cupiditate, doloremque in nobis modi atque.</p>
    </>
  )

}
function App(){
  return(
  <>
  <Header/>
  <Navigation/>
  <Main/>
  <Footer/>
  </>
  )
}
export default App;