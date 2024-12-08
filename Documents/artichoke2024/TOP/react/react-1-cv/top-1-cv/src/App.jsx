import { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { sculptureList } from './data';


// highest level parent component
function App() {
  // old
  // let index = 0;
  
  // useState -> you are telling your component to REMEMBER
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length-1;

  function handleNextClick() {
    if (index === sculptureList.length-1) {
      setIndex(0);
    }
    else {
      setIndex(index+1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      {/* <TodoInput/>
      <TodoList/> */}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        {index+1} of {sculptureList.length}
      </h3>
      <button onClick={handleNextClick}>next</button>
      <img 
        src={sculpture.url}
        alt={sculpture.alt}
      />

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && 
      <p>
        {sculpture.description}
      </p>
      }
    </>
  )
}

export default App
