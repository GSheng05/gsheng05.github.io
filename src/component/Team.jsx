import React from 'react';
import LohImg from '../assets/Wei_Chuen.jpg';
//import LimImg from '../assets/lim.jpg';
import YunImg from '../assets/yun.jpg';
import LumImg from '../assets/lum.jpg';
import DummyImg from '../assets/board.jpg';

const Team = () => {
    const members = [
        {
            id: 1,
            image: LohImg,
            name: 'Loh Wei Chuen',
            role: 'Chief Data Scientist',
            description: 'Leads our data strategy with over 10 years of experience in AI and predictive modeling, ensuring actionable insights for every client.',
            position: 'object-top'
        },
        {
            id: 2,
            image: DummyImg,
            name: 'Lim Jie Shen',
            role: 'Machine Learning Engineer',
            description: 'Specializes in developing scalable deep learning algorithms and deploying robust ML pipelines for enterprise solutions.'
        },
        {
            id: 3,
            image: YunImg,
            name: 'Pik Yun Han',
            role: 'BI Specialist',
            description: 'Expert in transforming complex datasets into intuitive visualizations and decision-ready intelligence dashboards.'
        },
        {
            id: 4,
            image: LumImg,
            name: 'Lum Yeen Thoong',
            role: 'Data Architect',
            description: 'Architects secure and scalable data infrastructure, ensuring integrity and accessibility across all systems.'
        },
    ];

    return (
        <div id='team' className='w-full py-16 px-4 bg-orange-50/30 text-black'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center pb-12'>
                    <p className='text-[#eab308] font-bold uppercase'>Meet The Team</p>
                    <h1 className='text-4xl font-bold py-2'>The Minds Behind Neuralytic</h1>
                </div>
                <div className='grid md:grid-cols-4 gap-8'>
                    {members.map((member) => (
                        <div key={member.id} className='w-full shadow-md shadow-orange-100 bg-white rounded-lg p-4 hover:scale-105 duration-300 flex flex-col items-center border border-gray-100'>
                            <div className='w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-[#f97316]'>
                                <img className={`w-full h-full object-cover ${member.position || ''}`} src={member.image} alt={member.name} />
                            </div>
                            <h2 className='text-xl font-bold text-center'>{member.name}</h2>
                            <p className='text-[#f97316] font-medium text-center'>{member.role}</p>
                            <p className='mt-4 text-center text-sm text-gray-600'>
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
