import Blog from '/blog.js'
import Projects from '/project.js'
import About from '/about.js'

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

export default App;