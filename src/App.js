import React, {useState, useEffect} from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
          ) : (
            jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
            )
      }
    </div>
  );
}

export default App;


// TODO
// 1. study design - DONE
// 2. job board component - DONE
// 3. get data from json
// 4. pass down the date to the jbc
// 5. styling
// 6. filtering
// 7.filter data