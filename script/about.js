class About extends React.Component {
    render() {
        return (
            <div className='content flex'>
                <div class='col'>
                    <div className='section text'>
                        <h2>About me</h2>
                        <p>Hey, the name's Hussain and I'm an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over several years of professional and personal experience, I’m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.</p>
                        <p>In my free time, I usually create small fun projects to keep my skills sharp and experiment with new technologies which may help me keep up to date with technologies. They are available here or on <a className='text' href='https://github.com/hussainsaj' rel='noopener' target='_blank'>my GitHub profile</a>.</p>
                        <p>Outside tech, I like to exercise, hike, travel and try anything new which I may or may not like.</p>
                        <p>Also, I've got a <a className='text' href='https://medium.com/@joyful_inchworm_butterfly_535' rel='noopener' target='_blank'>blog on Medium</a>. On which, I tend to write about anything related to tech or productivity in hopes that it might benefit someone else.</p>
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

export default About