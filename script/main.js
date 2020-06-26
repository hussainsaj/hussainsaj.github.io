class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: false, //true
            rotation: 0,
            tab: 'home', //home
            menu: true,
            github: {
                status: true,
                projects: []
            }
        };
        this.formatDateTime = this.formatDateTime.bind(this);
        this.updateProjects = this.updateProjects.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.tabs = ['home','projects','about'] //['home','blog','projects','about']
        this.coverValues = {
            true: {
                color: 'white',
                display: 'block'
            },
            false: {
                color: 'black',
                display: 'none'
            }
        }
    }

    formatDateTime(dateTime) {
        const date = new Date(dateTime);
        let dd = date.getDate();
        let mm = date.getMonth()+1; 
        let yyyy = date.getFullYear();
        if(dd < 10) {dd = '0' + dd}
        if(mm < 10) {mm = '0' + mm}
        return `${dd}/${mm}/${yyyy}`
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
                    result[i].updated_at_formatted = this.formatDateTime(result[i].updated_at)
                }
                this.setState({github:{status: true, projects: result}}) 
            },
            (error) => {
                this.setState({github:{status: false, projects: []}})
                console.error(error)
            }
        )
    }

    updateBlog() {

    }

    componentDidMount() {
        this.updateProjects()
        this.updateBlog()
    }

    render() {
        return (
            <div>
                {!this.state.cover && <header>
                    <title className='flex'>
                        <div id='logo'>
                            <h1 onClick={() => this.setState({tab: 'home'})}>Hussain Sajid</h1>
                        </div>
                        {/*<div id='cross' className='transision' style={{transform: 'rotate(' + this.state.rotation + 'deg)'}}>
                            <h1 onClick={() => this.setState({cover: !this.state.cover, rotation: this.state.rotation + 45, tab: 'home'})}>+</h1>
                        </div>*/}
                    </title>
                    <nav className='flex' onClick={() => this.setState({menu: !this.state.menu})}>
                        {this.tabs.map((value, i)=>{
                            const display = this.state.menu ? this.state.tab : value
                            const navLink = <div className='nav-item nav-link' onClick={() => this.setState({tab: display, menu:!this.state.menu})}>
                                    <a className={display===this.state.tab ? 'active' : ''}>{display}</a>
                                </div>
                            const navButton = <div id='nav-button' className='nav-item'>
                                    {this.state.menu ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>}
                                </div>
                            if (this.state.menu && i===0) {
                                return [navLink,navButton]
                            } else if (!this.state.menu) {
                                if (i==0) {
                                    return [navLink,navButton]
                                } else {
                                    return navLink
                                }
                            }
                        })}
                    </nav>
                </header>}
                <main>
                    {/*this.state.cover && <div>
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
                    {this.state.tab === 'home' && <div id='content'>
                        <div className='entry'>
                            <h2>I help build websites with forward-thinking teams that generate positive and lasting value.</h2>
                            <p>(Full site coming soon)</p>
                        </div>
                    </div>}
                    {/*this.state.tab === 'blog' && <div className='content'>
                        <div className='entry>
                            <p>Blog coming soon</p>
                        </div>
                        <hr/>
                        <div className='entry>
                            <h2>All of my blogs</h2>
                            <p><a className='text' href='https://medium.com/@joyful_inchworm_butterfly_535' rel='noopener' target='_blank'>Medium</a></p>
                        </div>
                    </div>*/}
                    {this.state.tab === 'projects' && <div>
                        {this.state.github.status ? <div className='content'>
                            {this.state.github.projects.map(project => {
                                return <div className='entry'>
                                    <h2><a className='text' href={project.html_url} rel='noopener' target='_blank'>{project.name}</a></h2>
                                    <p>{project.description}</p>
                                    <p>{project.updated_at_formatted}</p>
                                </div>
                            })}
                        </div>
                         : 
                        <div className='entry'>
                            <p>Error loading results. Please try again later</p>
                        </div>}
                        <hr/>
                        <div className='entry'>
                            <h2>All of my projects</h2>
                            <p><a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>GitHub</a></p>
                        </div>
                    </div>}
                    {this.state.tab === 'about' && <div className='content'>
                        <div id='about' className='entry'>
                            <h2>About me</h2>
                            <p>I'm an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over a year of professional and personal experience, I’m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.</p>
                        </div>
                        <div id='contact' className='entry flex'>
                            <p><a className='text' href='https://www.linkedin.com/in/hussainsaj/' rel='noopener' target='_blank'>LinkedIn</a></p>
                            <p><a className='text' href='mailto:hussain-sajid@outlook.com'>hussain-sajid@outlook.com</a></p>
                        </div>
                        <hr/>
                        <div id='skills' className='entry'>
                            <h2>Key skills</h2>
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
                        <div className='entry'>
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
                        <div className='entry'>
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
                        <div className='entry'>
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
                    </div>}
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))