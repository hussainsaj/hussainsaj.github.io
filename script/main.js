class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'home',
            menu: true,
            screen: {
                width: 0,
                height: 0
            }
        };
        this.tabs = ['blog','projects','about']
        this.formatDateTime = this.formatDateTime.bind(this);
        this.toText = this.toText.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    formatDateTime(dateTime) {
        dateTime = dateTime.slice(0,10)
        const date = new Date(dateTime);
        let dd = date.getDate();
        let mm = date.getMonth()+1; 
        let yyyy = date.getFullYear();
        if(dd < 10) {dd = '0' + dd}
        if(mm < 10) {mm = '0' + mm}
        return `${dd}/${mm}/${yyyy}`
        
    }

    toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }

    updateWindowDimensions() {
      this.setState({screen: {width: window.innerWidth, height: window.innerHeight}});
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        return (
            <div>
                <header className={this.state.tab === 'home' ? 'absolute text' : 'flex'}>
                    <div id='logo' className='flex'>
                        <h1 className='pointer' onClick={() => this.setState({tab: 'home'})}>Hussain Sajid</h1>
                    </div>
                    {this.state.screen.width >= 1024 && this.state.tab !== 'home' && <nav className='flex'>
                        {this.tabs.map((value)=>{
                            return <div className='nav-item nav-link pointer' onClick={() => this.setState({tab: value, menu:!this.state.menu})}>
                                <a className={value===this.state.tab ? 'active' : ''}>{value}</a>
                            </div>
                        })}
                    </nav>}
                    {this.state.screen.width < 1024 && this.state.tab !== 'home' && <nav className='flex pointer' onClick={() => this.setState({menu: !this.state.menu})}>
                        {this.tabs.map((value, i)=>{
                            const display = this.state.menu ? this.state.tab : value
                            const navLink = <div className='nav-item nav-link' onClick={() => this.setState({tab: display, menu:!this.state.menu})}>
                                    <a className={display===this.state.tab ? 'active' : ''}>{display}</a>
                                </div>
                            const navButton = <div id='nav-button' className='nav-item'>
                                    {this.state.menu ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                                </div>
                            if (i===0) {
                                return [navLink,navButton]
                            } else if (!this.state.menu) {
                                return navLink
                            }
                        })}
                    </nav>}
                </header>
                <main>
                    {/*<div>
                        <div id='background' className='absolute'>
                            <picture>
                                <source media="(min-width: 1280px)" srcSet="./media/background-XL.jpeg"></source>
                                <source media="(min-width: 1024px)" srcSet="./media/background-L.jpeg"></source>
                                <source media="(min-width: 640px)" srcSet="./media/background-M.jpeg"></source>
                                <img src='./media/background-S.jpeg' alt='classical background image'></img>
                            </picture>
                        </div>
                        {<div id='background-overlay' className='absolute'>
                            <div id='background-text'>
                                <h1>Hussain Sajid</h1>
                                <h2>I'm a developer</h2>
                            </div>
                        </div>}
                    </div>*/}
                    {this.state.tab === 'home' && <div id='home' className='content absolute'>
                        <div className='section text'>
                            <h2>I help build websites with forward-thinking teams that generate positive and lasting value.</h2>
                        </div>
                        <div className='section text'>
                            <button className='transision pointer' onClick={() => this.setState({tab: 'about'})}><h3>Enter</h3></button>
                        </div>
                    </div>}
                    {this.state.tab === 'blog' && <Blog formatDateTime={this.formatDateTime} toText={this.toText}/>}
                    {this.state.tab === 'projects' && <Projects formatDateTime={this.formatDateTime}/>}
                    {this.state.tab === 'about' && <About/>}
                </main>
            </div>
        )
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medium: {
                status: false,
                availability: true,
                author: {},
                blogs: []
            }
        };
        this.updateBlog = this.updateBlog.bind(this);
    }

    updateBlog() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joyful_inchworm_butterfly_535")
        .then(res => res.json())
        .then(
            (result) => {
                result.items = result.items.slice(0,5);
                for (let i=0; i<result.items.length; i++) {
                    result.items[i].date = this.props.formatDateTime(result.items[i].pubDate)
                    result.items[i].content = this.props.toText(result.items[i].content)
                    result.items[i].content = result.items[i].content.replace('Continue reading on Medium »','')
                }
                result.feed.name = result.items[0].author
                this.setState({medium:{status: true, availability: true, author: result.feed, blogs: result.items}})
            },
            (error) => {
                this.setState({medium:{status: true, availability: false}})
                console.error(error)
            }
        )
    }

    componentDidMount() {
        this.updateBlog()
    }

    render() {
        return (
            <div className='content'>
                {this.state.medium.status && this.state.medium.availability ? <div className='desktop-flex'>
                    {this.state.medium.blogs.map(blog => {
                        return <div className='entry text'>
                            <h2><a className='text' href={blog.link} rel='noopener' target='_blank'>{blog.title}</a></h2>
                            <p>{blog.content}</p>
                            <p>{blog.date}</p>
                        </div>
                    })}
                    <hr/>
                    <div className='social'>
                        <h2>More on Medium</h2>
                        <div className='social_card flex'>
                            <picture>
                                <img src={this.state.medium.author.image} alt='GitHub profile icon'></img>
                            </picture>
                            <h3><a className='text' href={this.state.medium.author.link} rel='noopener' target='_blank'>{this.state.medium.author.name}</a></h3>
                        </div>
                    </div>
                </div>
                    : this.state.medium.status && !this.state.medium.availability ?
                <div>
                    <div className='entry text'>
                        <p>Error loading results. Please try again later</p>
                    </div>
                    <hr/>
                    <div className='social'>
                        <h2>All of my blogs</h2>
                        <p><a className='text' href='https://medium.com/@joyful_inchworm_butterfly_535' rel='noopener' target='_blank'>Medium</a></p>
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

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            github: {
                status: false,
                availability: true,
                projects: []
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
                result = result.slice(0, 5);
                for (let i=0; i<result.length; i++) {
                    result[i].updated_at_formatted = this.props.formatDateTime(result[i].updated_at)
                    if (result[i].description.length > 160) {
                        result[i].description = result[i].description.slice(0,150) + '...'
                    }
                }

                this.setState({github:{status: true, availability: true, author: result[0].owner, projects: result}})
            },
            (error) => {
                this.setState({github:{status: true, availability: false, projects: []}})
                console.error(error)
            }
        )
    }

    componentDidMount() {
        this.updateProjects()
    }

    render() {
        return (
            <div className='content'>
                {this.state.github.status && this.state.github.availability ? <div className='desktop-flex'>
                    {this.state.github.projects.map(project => {
                        return <div className='entry text'>
                            <h2><a className='text' href={project.html_url} rel='noopener' target='_blank'>{project.name}</a></h2>
                            <p>{project.description}</p>
                            <p>{project.updated_at_formatted}</p>
                        </div>
                    })}
                    <hr/>
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

class About extends React.Component {
    render() {
        return (
            <div className='content flex'>
                <div class='col'>
                    <div className='section text'>
                        <h2>About me</h2>
                        <p>I'm an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over a year of professional and personal experience, I’m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.</p>
                    </div>
                    <div id='contact' className='section flex'>
                        <p><a className='text' href='https://www.linkedin.com/in/hussainsaj/' rel='noopener' target='_blank'>LinkedIn</a></p>
                        <p><a className='text' href='mailto:hussain-sajid@outlook.com'>hussain-sajid@outlook.com</a></p>
                    </div>
                    <hr/>
                    <div id='skills' className='section'>
                        <h2>Key skills</h2>
                        <ul className='flex'>
                            <li>Scrum</li>
                            <li>Agile Methodologies</li>
                            <li>Responsive Web Design</li>
                        </ul>
                        <ul className='flex'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>SQL server</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <hr/>
                </div>
                <div class='col'>
                    <div className='section'>
                        <h2>Employment history</h2>
                        <table>
                            <tr>
                                <td>05/2020-Present</td>
                                <td>Qwest Services</td>
                                <td>Senior Digital Development Analyst</td>
                            </tr>
                            <tr>
                                <td>09/2018-05/2020</td>
                                <td>Qwest Services</td>
                                <td>Web developer</td>
                            </tr>
                        </table>
                    </div>
                    <hr/>
                    <div className='section'>
                        <h2>Recognitions</h2>
                        <table>
                            <tr>
                                <td>2019</td>
                                <td>DXA'19</td>
                                <td>Best Digital Change & Transformation - Shortlisted</td>
                            </tr>
                            <tr>
                                <td>2018</td>
                                <td>Qwest Services</td>
                                <td>Best team</td>
                            </tr>
                        </table>
                    </div>
                    <hr/>
                    <div className='section'>
                        <h2>Education history</h2>
                        <table>
                            <tr>
                                <td>09/2017-08/2018</td>
                                <td>Udacity</td>
                                <td>Front-end Web Developer Nanodegree Program</td>
                            </tr>
                            <tr>
                                <td>09/2015-06/2018</td>
                                <td>City of Stoke-on-Trent Sixth Form Collecge</td>
                                <td>A-level Physics/Maths/Computer Science</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))