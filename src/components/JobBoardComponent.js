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

    const langAndTools =[];

    if (tools) {
        langAndTools.push(...tools);
    }

    if (languages) {
        langAndTools.push(...languages);
    }


    return (
        <div className="flex bg-white shadow-md m-4 p-6">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-blue-500">{company}</h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-400">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                { langAndTools ? (
                        langAndTools.map(langAndTool => (
                            <span className="bg-blue-500 font-bold text-white m-2 p-2 rounded">{langAndTool}</span>
                        ))
                    ) : ( '' ) 
                }
            </div>
        </div>
    )
        }

export default JobBoardComponent;