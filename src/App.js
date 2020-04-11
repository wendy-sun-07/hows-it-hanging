import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const questions =[
    'What has been on your mind lately?',
    'What song reminds you of summertime?',
    'What do you like to watch in rainy weather?',
    'What expectations of normal have you let go?',
    'What beauty in the world has always amazed you?',
    'What is a memory about nature that you love?',
    'How are you really doing?',
    'What song always makes you feel like moving forward?',
    'What is a little / inconsequential thing you are looking forward to doing again?',
    'In what ways do you feel like you have been growing?',
    'Who has defined you to be the way you are today?',
    'What is a moment that has split your life into "life before this moment" and "life after this moment"?',
    'What are your favorite TV shows from when you are a teenager?',
    'Who is someone you miss right now?',
    'What is your favorite internet moment from your childhood?',
    'If you were to show me a video on Youtube right now, what would it be?',
    'Do certain aspects of life feel heavy to you?',
    'Is being happy the ultimate goal in life? If not, what is it?',
    'What is your favorite ice cream flavor and why?'
  ]

  const [fade, setFade] = useState(false);
  const [shuffledArray, setArray] = useState(questions);
  const [index, setIndex] = useState(0);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  function getStarted() {
    setFade(!fade);
    setArray(shuffle(questions));
  }

  return (
    <div className="App">
      {fade ?
        <header className="App-header">
          <h2>{shuffledArray[index]}</h2>
          <button className='box-button'
                  onClick={() => setIndex(index + 1 > questions.length - 1 ? 0 : index + 1)}>
          Next
          </button>
        </header>
    :

    <header className={fade ? "App-header hidden" : "App-header"}>
      <h2>How's it hangin', homeslice</h2>
      <p>Social distancing does not mean emotional distancing.</p>
      <button className='box-button' onClick={() => getStarted()}>
      Let's get connected
    </button>
    </header>}

    <footer>Made with love by Wendy Sun</footer>
    </div>
  );
}

export default App;
