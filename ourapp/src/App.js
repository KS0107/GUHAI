import logo from './logo.svg';
import Safe from './Safe';
import Navbar from './Navbar';
import Home from './Home';
import Card2 from './Card2';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className='App'>
        <Card2
          title='Who are we?'
          image='./images/questionmark.jpg'
          body='We are your last hope. In this day and age you need someone to guide you. We are that someone. Let us aid you on where to go to ensure your safety.'
        />
        <Card2
          title='How we survived?'
          image='./images/wasteland.jpg'
          body="We are only here because of our big brains. In a world like this, you're gonna need big brains."
        />
      </div>
    </>
  );
}

export default App;
