class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.categories = [
            {
                name : 'Senior digital development analyst (web development)',
                subtext: "Some of the projects that I've worked on as a Senior digital development analyst (web development).",
                projects:  [
                    {
                        name: 'Personalized User Landing Page',
                        description: 'Created a personalized landing page for logged-in users. The page displays localized information and features a full redesign to enhance user experience.'
                    },
                    {
                        name: 'Archival Material Ordering System',
                        description: 'Developed an online ordering system for archival research materials. The system includes features for customer inquiries, order management by staff, and interactive communication between users and staff.'
                    },
                    {
                        name: 'Waste Collection Form Update',
                        description: 'Updated online forms for waste collection services to integrate with new waste management systems. Adapted the forms twice to keep up with changes in the service.'
                    }
                ]
            },
            {
                name : 'Web developer',
                subtext: "Some of the projects that I've worked on as a Web developer.",
                projects:  [
                    {
                        name: 'Sports and Events Booking System',
                        description: 'Digitized a manual booking system to streamline the process. The new system features dynamic forms for user inquiries and a management interface for staff to track payments and bookings.'
                    },
                    {
                        name: 'Highways Report Fault Form Update',
                        description: 'Updated the highways report fault form to display already reported faults on a map, reducing duplicate reports and allowing users to add more information to existing reports.'
                    }
                ]
            },
            {
                name : 'Personal projects',
                subtext: "Projects that I've created to solve my real life problems",
                projects:  [
                    {
                        name: 'EyeGlide',
                        description: 'A Chrome extension that implements RSI on the webpage.',
                        githubURL: 'https://github.com/hussainsaj/EyeGlide'
                    }
                ]
            },
            {
                name : 'Mockups',
                subtext: "Replica of some of my favourite websites for training purposes",
                projects:  [
                    {
                        name: 'blizzy',
                        description: "Blizzy's mockup website for training purposes",
                        url: 'https://www.hussainsajid.com/mockup-blizzy/',
                        githubURL: 'https://github.com/hussainsaj/mockup-blizzy'
                    },
                    {
                        name: 'greenspace',
                        description: "The Greenspace's website mockup for training purposes",
                        url: 'https://www.hussainsajid.com/mockup-greenspace/',
                        githubURL: 'https://github.com/hussainsaj/mockup-greenspace'
                    },
                    {
                        name: 'polestar',
                        description: "Polestar's website mockup",
                        url: 'https://www.hussainsajid.com/mockup-polestar/',
                        githubURL: 'https://github.com/hussainsaj/mockup-polestar'
                    }
                ]
            }
        ];
    }

    render() {
        return (
            <div className='content'>
                <div>
                    {this.categories.map(function(category) {
                        return <div className='desktop-flex'>
                            <h2 className='text'>{category.name}</h2>
                            <p class='project-subtext'>{category.subtext}</p>
                            {category.projects.map(project => {
                                return <div className='entry text'>
                                    {'url' in project ?
                                        <h2><a className='text' href={`${project.url}`}>{project.name}</a></h2> : 
                                        <h2>{project.name}</h2>
                                    }
                                    {'description' in project ?
                                        <p>{project.description}</p> : 
                                        ''
                                    }
                                    {'githubURL' in project ?
                                        <a className='text' href={`${project.githubURL}`}>View in GitHub</a> : 
                                        ''
                                    }
                                </div>
                            })}
                            <hr/>
                        </div>
                    })}
                    <div className='social'>
                        <h2>More on GitHub</h2>
                        <div className='entry social_card flex'>
                            <picture>
                                <img src='https://avatars.githubusercontent.com/u/38162048?v=4' alt='GitHub profile icon'></img>
                            </picture>
                            <h3><a className='text' href='https://github.com/hussainsaj?tab=repositories' rel='noopener' target='_blank'>hussainsaj</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects