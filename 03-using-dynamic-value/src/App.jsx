const reactDescriptions = ["Fundamental","Crucil","Core"]

function getRandomInt(maxIndex){
  return Math.floor(Math.random() * (maxIndex + 1));
}

function Header(){
  const descriptions = reactDescriptions[getRandomInt(2)];
  
  return(
   <header>
   <h1> React Essentials</h1>

   <p><strong>{descriptions}</strong>React concepts you will need for almost any app you going to buildl.</p>
   </header>
  )
}

function App(){
  return(
    <>
    <Header />
    <main>
      <h3>Time to discuss about outputting Dynamic values</h3>
    </main>
    </>
  )
}
export default App;