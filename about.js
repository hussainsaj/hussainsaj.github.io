var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content flex' },
                React.createElement(
                    'div',
                    { 'class': 'col' },
                    React.createElement(
                        'div',
                        { className: 'section text' },
                        React.createElement(
                            'h2',
                            null,
                            'About me'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Hello! I\'m Hussain, a passionate and committed developer with over 4 years of professional experience. I thrive on challenge and am always on the lookout for opportunities to further develop my skills and push my limits. I value strong communication and believe in the power of sharing ideas and collaborating with my team and clients.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'When I\'m not coding or experimenting with new technologies, you\'ll likely find me embracing my diverse range of interests. I have a love for travel and enjoy the thrill of discovering new places and cultures. I\'m also a driving enthusiast, a regular at the gym, and a keen hiker. I appreciate the excitement of attending events, with motorsports and music being particular favorites.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'To stay on top of trends and continue learning, I often undertake small, innovative projects in my free time. These projects allow me to sharpen my skills and keep my technical knowledge current. You can check out some of these projects here or on ',
                            React.createElement(
                                'a',
                                { className: 'text', href: 'https://github.com/hussainsaj', rel: 'noopener', target: '_blank' },
                                'my GitHub profile'
                            ),
                            '.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Whether it\'s in tech or in my personal pursuits, I\'m always ready to try new things, embrace different experiences, and continue learning along the way.'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'contact', className: 'section flex' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text', href: 'https://www.linkedin.com/in/hussainsaj/', rel: 'noopener', target: '_blank' },
                                'LinkedIn'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text', href: 'mailto:hussain-sajid@outlook.com' },
                                'hussain-sajid@outlook.com'
                            )
                        )
                    ),
                    React.createElement('hr', null)
                ),
                React.createElement(
                    'div',
                    { 'class': 'col' },
                    React.createElement(
                        'div',
                        { id: 'skills', className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Key skills'
                        ),
                        React.createElement(
                            'ul',
                            { className: 'flex' },
                            React.createElement(
                                'li',
                                null,
                                'HTML'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'CSS'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'JavaScript'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'React'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'jQuery'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'SQL Server'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Git'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'AWS'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Lambda'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'API Endpoint'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'S3'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Python'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'SOAP API'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'REST API'
                            )
                        ),
                        React.createElement(
                            'ul',
                            { className: 'flex' },
                            React.createElement(
                                'li',
                                null,
                                'Scrum'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Agile'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Responsive Web Design'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Problem-solving'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Team Collaboration'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Continuous Learning'
                            )
                        )
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Employment history'
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '04/2025-present'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Cheshire West and Chester'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Junior web developer'
                                )
                            ),
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '05/2020-03/2025'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Qwest Services'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Senior Digital Development Analyst'
                                )
                            ),
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '09/2018-05/2020'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Qwest Services'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Web developer'
                                )
                            )
                        )
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Recognitions'
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '2019'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'DXA\'19'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Best Digital Change & Transformation - Shortlisted'
                                )
                            ),
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '2018'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Qwest Services'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Best team'
                                )
                            )
                        )
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Education history'
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '09/2017-08/2018'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Udacity'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'Front-end Web Developer Nanodegree Program'
                                )
                            ),
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '09/2015-06/2018'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'City of Stoke-on-Trent Sixth Form Collecge'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    'A-level Physics/Maths/Computer Science'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

export default About;
