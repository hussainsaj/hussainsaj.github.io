class About extends React.Component {
    render() {
        return (
            <div className='content flex'>
                <div class='col'>
                    <div className='section text'>
                        <h2>About me</h2>
                        <p>Hello! I'm Hussain, a passionate and committed developer with over 4 years of professional experience. I thrive on challenge and am always on the lookout for opportunities to further develop my skills and push my limits. I value strong communication and believe in the power of sharing ideas and collaborating with my team and clients.</p>
                        <p>When I'm not coding or experimenting with new technologies, you'll likely find me embracing my diverse range of interests. I have a love for travel and enjoy the thrill of discovering new places and cultures. I'm also a driving enthusiast, a regular at the gym, and a keen hiker. I appreciate the excitement of attending events, with motorsports and music being particular favorites.</p>
                        <p>To stay on top of trends and continue learning, I often undertake small, innovative projects in my free time. These projects allow me to sharpen my skills and keep my technical knowledge current. You can check out some of these projects here or on <a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>my GitHub profile</a>.</p>
                        <p>Whether it's in tech or in my personal pursuits, I'm always ready to try new things, embrace different experiences, and continue learning along the way.</p>
                    </div>
                    <div id='contact' className='section flex'>
                        <p><a className='text' href='https://www.linkedin.com/in/hussainsaj/' rel='noopener' target='_blank'>LinkedIn</a></p>
                        <p><a className='text' href='mailto:hussain-sajid@outlook.com'>hussain-sajid@outlook.com</a></p>
                    </div>
                    <hr/>
                </div>
                <div class='col'>
                    <div id='skills' className='section'>
                        <h2>Key skills</h2>
                        <ul className='flex'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>SQL Server</li>
                            <li>Git</li>
                            <li>AWS</li>
                            <li>Lambda</li>
                            <li>API Endpoint</li>
                            <li>S3</li>
                            <li>Python</li>
                            <li>SOAP API</li>
                            <li>REST API</li>
                        </ul>
                        <ul className='flex'>
                            <li>Scrum</li>
                            <li>Agile</li>
                            <li>Responsive Web Design</li>
                            <li>Problem-solving</li>
                            <li>Team Collaboration</li>
                            <li>Continuous Learning</li>
                        </ul>
                    </div>
                    <hr/>
                    <div className='section'>
                        <h2>Employment history</h2>
                        <table>
                            <tr>
                                <td>05/2020-Present</td>
                                <td>Qwest Services</td>
                                <td>Senior Digital Development Analyst (Web development)</td>
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

export default About