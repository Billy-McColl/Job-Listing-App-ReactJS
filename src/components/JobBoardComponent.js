import React from 'react';

const JobBoardComponent = ({job}) => (
    <div className="flex bg-white shadow-md m-4 p-4">
        <div>
            <img src={job.logo} alt={job.company} />
        </div>
        <div>
            <h3>{job.company}</h3>
            <h2>{job.position}</h2>
            <p>
                {job.postedAt} - {job.contract} - {job.location}
            </p>
        </div>
        <div></div>
    </div>
)

export default JobBoardComponent;