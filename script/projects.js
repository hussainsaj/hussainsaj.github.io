class Projects extends React.Component {
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
}

export default Projects