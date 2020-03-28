import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const questions =[
    'What has been on your mind lately?',
    'What song reminds you of summertime?',
    'What do you like to watch in rainy weather?',
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
          <h2>{questions[index]}</h2>
          <button className='box-button'
                  onClick={() => setIndex(index + 1 > questions.length - 1 ? 0 : index + 1)}>
          Next
          </button>
        </header>
    :

    <header className={fade ? "App-header hidden" : "App-header"}>
      <h2>How's it hangin', homeslice</h2>
      <p>As we transcend into our best social distant selves, I have been
      Facetiming and video chatting more than ever. A lot of the
      conversations are about COVID-19, our inconveniences, our anxieties and
      how we are coping with them. As we continue to check in with each
      other about those aspects, here are some other questions we can ask
      each other to stay connected. Social distancing does not mean emotional
      distancing.</p>
      <button className='box-button' onClick={() => getStarted()}>
      Let's get connected
    </button>
    </header>}
    </div>
  );
}

export default App;
