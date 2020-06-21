//import About from './about';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: true,
            rotation: 0,
            tab: 'home'
        };
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

    componentDidUpdate() {
        const h1 = document.getElementsByTagName('h1')
        for (let i=0; i<h1.length; i++) {
            h1[i].style.color = this.coverValues[this.state.cover].color
        }

        document.getElementById('background').style.display = this.coverValues[this.state.cover].display

        document.getElementById('background-overlay').style.display = this.coverValues[this.state.cover].display
    }

    render() {
        return (     
            <div>
                <nav>
                    <div id='logo'>
                        <h1>Hussain Sajid</h1>
                    </div>
                    <div id='cross' className='mobile-hide' style={{transform: 'rotate(' + this.state.rotation + 'deg)'}}>
                        <h1 onClick={() => this.setState({cover: !this.state.cover, rotation: this.state.rotation + 45})}>+</h1>
                    </div>
                </nav>
                <main>
                    <div id={this.state.tab}>
                    </div>
                    <div id='background'>
                        <picture>
                            <source media="(min-width: 1280px)" srcSet="./media/background-XL.jpeg"></source>
                            <source media="(min-width: 1024px)" srcSet="./media/background-L.jpeg"></source>
                            <source media="(min-width: 640px)" srcSet="./media/background-M.jpeg"></source>
                            <img src='./media/background-S.jpeg' alt='classical background image'></img>
                        </picture>
                    </div>
                    <div id='background-overlay' className='mobile-hide'>
                        <div id='background-text'>
                            <h1>I'm a developer</h1>
                        </div>
                    </div>
                </main>
                <footer>
                    <div id='contact'>
                        <ul>
                            <li><a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>GitHub</a></li>
                        </ul>
                        <ul>
                            <li><a className='text' href='https://www.linkedin.com/in/hussainsaj/' rel='noopener' target='_blank'>LinkedIn</a></li>
                        </ul>
                        <ul>
                            <li><a className='text' href='mailto:hussain-sajid@outlook.com'>hussain-sajid@outlook.com</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))