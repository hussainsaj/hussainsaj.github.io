//import About from './about';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: false, //true
            rotation: 0,
            tab: 'home',
            menu: true
        };
        this.updateProjects = this.updateProjects.bind(this);
        this.tabs = ['home','blog','projects','about'] 
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

    updateProjects() {
        
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                {!this.state.cover && <header>
                    <title className='flex'>
                        <div id='logo'>
                            <h1 onClick={() => this.setState({tab: 'home'})}>Hussain Sajid</h1>
                        </div>
                        <div id='cross' className='transision' style={{transform: 'rotate(' + this.state.rotation + 'deg)'}}>
                            <h1 onClick={() => this.setState({cover: !this.state.cover, rotation: this.state.rotation + 45, tab: 'home'})}>+</h1>
                        </div>
                    </title>
                    <nav className='flex'>
                        {this.tabs.map((value, i)=>{
                            const display = this.state.menu ? this.state.tab : value
                            const navLink = <div>
                                    <a className={display===this.state.tab ? 'active' : ''} onClick={() => this.setState({tab: display, menu:!this.state.menu})}>{display}</a>
                                </div>
                            const navButton = <div id='menu-button' onClick={() => this.setState({menu: !this.state.menu})}>
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
                        <h2>I help build websites with forward-thinking teams that generate positive and lasting value.</h2>
                        <p>(Full site coming soon)</p>
                    </div>}
                    {this.state.tab === 'blog' && <div>
                        <p>Blog coming soon</p>
                        <br/>
                        <h2>All of my blogs</h2>
                        <p><a className='text' href='https://medium.com/@joyful_inchworm_butterfly_535' rel='noopener' target='_blank'>Medium</a></p>
                    </div>}
                    {this.state.tab === 'projects' && <div>
                        <p>Projects coming soon</p>
                        <br/>
                        <h2>All of my projects</h2>
                        <p><a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>GitHub</a></p>
                    </div>}
                    {this.state.tab === 'about' && <div>
                        <h2>About me</h2>
                        <p>I'm an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over a year of professional and personal experience, I’m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.</p>
                        <br/>
                        <h2>Feel free to say hello!</h2>
                        <p><a className='text' href='https://www.linkedin.com/in/hussainsaj/' rel='noopener' target='_blank'>LinkedIn</a></p>
                        <p><a className='text' href='mailto:hussain-sajid@outlook.com'>hussain-sajid@outlook.com</a></p>
                    </div>}
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))