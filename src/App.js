import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		setJobs(data);
	}, []);

	const filterFunction = ({role, level, tools, languages}) => {
		if (filters.length === 0) {
			return true;
		}

		const tags = [role, level];

		if (tools) {
			tags.push(...tools);
		}

		if (languages) {
			tags.push(...languages);
		}

		return tags.some((tag) => filters.includes(tag));
	};

	const handleTagClick = (tag) => {
		if (filters.includes(tag)) return;
		setFilters([...filters, tag]);
	};

	const handleFilterClick = (passedFilter) => {
		setFilters(filters.filter((f) => f !== passedFilter));
	};

	const clearFilters = () => {
		setFilters([]);
	};

	const filteredJobs = jobs.filter(filterFunction);

	return (
		<div className='App'>
			<header className='bg-blue-50 mb-12 mainHeader'>
				<img src='/images/bg-header-desktop.svg' alt='bg-header' />
			</header>
			<div className='container m-auto'>
				{filters.length > 0 && (
					<div className='flex bg-white shadow-md my-16 mx-10 p-6 rounded'>
						{filters.map((filter) => (
							<span
								onClick={() => handleFilterClick(filter)}
								className='cursor-pointer bg-purple-500 font-bold text-white mr-4 mb-4 p-2 rounded sm:mb-0'
							>
								× {filter}
							</span>
						))}
						<button
							onClick={clearFilters}
							className='cursor-pointer font-bold text-white ml-auto bg-red-500 rounded p-2'
						>
							Clear
						</button>
					</div>
				)}
				{jobs.length === 0 ? (
					<p>Jobs are fetching...</p>
				) : (
					filteredJobs.map((job) => (
						<JobBoardComponent
							job={job}
							key={job.id}
							handleTagClick={handleTagClick}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default App;
