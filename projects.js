var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            github: {
                status: false,
                availability: true,
                projects: {}
            }
        };
        this.updateProjects = this.updateProjects.bind(this);
    }

    updateProjects() {
        fetch("https://api.github.com/users/hussainsaj/repos")
        .then(res => res.json())
        .then(
            (result) => {
                result.sort((a,b) => {
                    return new Date(b.updated_at) - new Date(a.updated_at)
                })

                let projects = {
                    mockups: [],
                    udacity: [],
                    others: []
                }
                
                for (let i=0; i<result.length; i++) {
                    
                    result[i].updated_at_formatted = this.props.formatDateTime(result[i].updated_at)
                    if (result[i].description === null) {
                        result[i].description = ''
                    } else if (result[i].description.length > 160) {
                        result[i].description = result[i].description.slice(0,150) + '...'
                    }
                    if(result[i].name.split('-')[0] === 'mockup') {projects['mockups'].push(result[i])}
                    else if(result[i].name.split('-')[0] === 'udacity') {projects['udacity'].push(result[i])}
                    else if(result[i].name !== 'hussainsaj.github.io') {projects['others'].push(result[i])}
                }

                this.setState({github:{status: true, availability: true, author: result[0].owner, projects: projects}})
            },
            (error) => {
                this.setState({github:{status: true, availability: false, projects: {}}})
                console.error(error)
            }
        )
    }

    componentDidMount() {
        this.updateProjects()
    }

    render() {
        const github = this.state.github.projects
        return (
            <div className='content'>
                {this.state.github.status && this.state.github.availability ? <div>
                    {Object.keys(github).map(function(key) {
                        if(github[key].length !== 0) {
                            return <div className='desktop-flex'>
                                <h2 className='text'>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                                {github[key].map(project => {
                                    return <div className='entry text'>
                                        {key === 'mockups' ?
                                            <h2><a className='text' href={`/${project.name}`}>{project.name}</a></h2> : 
                                            <h2>{project.name}</h2>
                                        }
                                        <p>{project.description}</p>
                                        <p>{project.updated_at_formatted}</p>
                                        <a className='text' href={`https://github.com/hussainsaj/${project.name}`}>View in GitHub</a>
                                    </div>
                                })}
                                <hr/>
                            </div>
                        }
                    })}
                    <div className='social'>
                        <h2>More on GitHub</h2>
                        <div className='entry social_card flex'>
                            <picture>
                                <img src={this.state.github.author.avatar_url} alt='GitHub profile icon'></img>
                            </picture>
                            <h3><a className='text' href={this.state.github.author.html_url} rel='noopener' target='_blank'>{this.state.github.author.login}</a></h3>
                        </div>
                    </div>
                </div>
                    : this.state.github.status && !this.state.github.availability ?
                    <div>
                    <div className='entry text'>
                        <p>Error loading results. Please try again later</p>
                    </div>
                    <hr/>
                    <div className='social'>
                        <h2>All of my projects</h2>
                        <p><a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>GitHub</a></p>
                    </div>
                </div>
                    :
                <div>
                    <div className='entry text'>
                        <p>Loading...</p>
                    </div>
                </div>}
            </div>
        )
    }
}*/

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.categories = [{
            name: 'Senior digital development analyst (web development)',
            subtext: "Some of the projects that I've worked on as a Senior digital development analyst (web development).",
            projects: [{
                name: 'Personalized User Landing Page',
                description: 'Created a personalized landing page for logged-in users. The page displays localized information and features a full redesign to enhance user experience.'
            }, {
                name: 'Archival Material Ordering System',
                description: 'Developed an online ordering system for archival research materials. The system includes features for customer inquiries, order management by staff, and interactive communication between users and staff.'
            }, {
                name: 'Waste Collection Form Update',
                description: 'Updated online forms for waste collection services to integrate with new waste management systems. Adapted the forms twice to keep up with changes in the service.'
            }]
        }, {
            name: 'Web developer',
            subtext: "Some of the projects that I've worked on as a Web developer.",
            projects: [{
                name: 'Sports and Events Booking System',
                description: 'Digitized a manual booking system to streamline the process. The new system features dynamic forms for user inquiries and a management interface for staff to track payments and bookings.'
            }, {
                name: 'Highways Report Fault Form Update',
                description: 'Updated the highways report fault form to display already reported faults on a map, reducing duplicate reports and allowing users to add more information to existing reports.'
            }]
        }, {
            name: 'Personal projects',
            subtext: "Projects that I've created to solve my real life problems",
            projects: [{
                name: 'EyeGlide',
                description: 'A Chrome extension that implements RSI on the webpage.',
                githubURL: 'https://github.com/hussainsaj/EyeGlide'
            }]
        }, {
            name: 'Mockups',
            subtext: "Replica of some of my favourite websites for training purposes",
            projects: [{
                name: 'blizzy',
                description: "Blizzy's mockup website for training purposes",
                url: 'https://www.hussainsajid.com/mockup-blizzy/',
                githubURL: 'https://github.com/hussainsaj/mockup-blizzy'
            }, {
                name: 'greenspace',
                description: "The Greenspace's website mockup for training purposes",
                url: 'https://www.hussainsajid.com/mockup-greenspace/',
                githubURL: 'https://github.com/hussainsaj/mockup-greenspace'
            }, {
                name: 'polestar',
                description: "Polestar's website mockup",
                url: 'https://www.hussainsajid.com/mockup-polestar/',
                githubURL: 'https://github.com/hussainsaj/mockup-polestar'
            }]
        }];
        return _this;
    }

    _createClass(Projects, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    null,
                    this.categories.map(function (category) {
                        return React.createElement(
                            'div',
                            { className: 'desktop-flex' },
                            React.createElement(
                                'h2',
                                { className: 'text' },
                                category.name
                            ),
                            React.createElement(
                                'p',
                                { 'class': 'project-subtext' },
                                category.subtext
                            ),
                            category.projects.map(function (project) {
                                return React.createElement(
                                    'div',
                                    { className: 'entry text' },
                                    'url' in project ? React.createElement(
                                        'h2',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'text', href: '' + project.url },
                                            project.name
                                        )
                                    ) : React.createElement(
                                        'h2',
                                        null,
                                        project.name
                                    ),
                                    'description' in project ? React.createElement(
                                        'p',
                                        null,
                                        project.description
                                    ) : '',
                                    'githubURL' in project ? React.createElement(
                                        'a',
                                        { className: 'text', href: '' + project.githubURL },
                                        'View in GitHub'
                                    ) : ''
                                );
                            }),
                            React.createElement('hr', null)
                        );
                    }),
                    React.createElement(
                        'div',
                        { className: 'social' },
                        React.createElement(
                            'h2',
                            null,
                            'More on GitHub'
                        ),
                        React.createElement(
                            'div',
                            { className: 'entry social_card flex' },
                            React.createElement(
                                'picture',
                                null,
                                React.createElement('img', { src: 'https://avatars.githubusercontent.com/u/38162048?v=4', alt: 'GitHub profile icon' })
                            ),
                            React.createElement(
                                'h3',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: 'https://github.com/hussainsaj?tab=repositories', rel: 'noopener', target: '_blank' },
                                    'hussainsaj'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

export default Projects;