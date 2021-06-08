import React from 'react';

const JobBoardComponent = ({job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
},}) => {

    const tags =[role, level];

    if (tools) {
        tags.push(...tools);
    }

    if (languages) {
        tags.push(...languages);
    }


    return (
        <div className="flex bg-white shadow-md m-4 p-6 rounded">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-blue-500">
                    {company}
                    {isNew && (<span className="bg-red-500 font-bold text-white m-2 py-1 px-2 rounded-full">New</span>)}
                    {featured && (<span className="bg-gray-700 font-bold text-white m-2 py-1 px-2 rounded-full">Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-400">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                { tags ? (
                        tags.map(tag => (
                            <span className="bg-purple-500 font-bold text-white m-2 p-2 rounded-full">{tag}</span>
                        ))
                    ) : ( '' ) 
                }
            </div>
        </div>
    )
        }

export default JobBoardComponent;