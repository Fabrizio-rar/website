import './App.css';
import { TypingText } from './components/TypingText';
import { LeavesBlowing } from './components/LeavesBlowing';

const App = () => {
  return (
    <div className='background'>
      <div className='header'>
        <a href='https://github.com/Fabrizio-rar' target="_blank" rel="noreferrer" className='header-link'>GitHub</a>
        <a href='https://www.linkedin.com/in/fabrizio-persichetti-7b9bb8220/' target="_blank" rel="noreferrer" className='header-link'>LinkedIn</a>
      </div>
      <div className='name-card'>
        <LeavesBlowing/>
        <div className='text-flex'>
          <TypingText
            className='w-75'
            name="Hi, I'm Fabrizio"
            description="I'm a developer"
          />
          <div className='w-25'>
            <h2>I enjoy software development.</h2>
            <h2>From backend coding all the way to frontend designing</h2>
            <a href='https://github.com/Fabrizio-rar/website' target="_blank" rel="noreferrer">visit this project on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
