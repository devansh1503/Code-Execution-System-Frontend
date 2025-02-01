import { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';
import Result from './components/Result';

function App() {
  const [fetchResult, setFetchResult] = useState(false);
  const [jobId, setJobId] = useState("");
  return (
    <div className="App">
      <div style={{display:'flex'}}>
        <CodeEditor setFetchResult={setFetchResult} setJobId={setJobId}/>
        <Result jobId={jobId} fetchResult={fetchResult} setFetchResult={setFetchResult}/>
      </div>
    </div>
  );
}

export default App;
