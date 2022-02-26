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
                            'Hey, the name\'s Hussain and I\'m an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over several years of professional and personal experience, I\u2019m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'In my free time, I usually create small fun projects to keep my skills sharp and experiment with new technologies which may help me keep up to date with technologies. They are available here or on ',
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
                            'Outside tech, I like to exercise, hike, travel and try anything new which I may or may not like.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Also, I\'ve got a ',
                            React.createElement(
                                'a',
                                { className: 'text', href: 'https://medium.com/@joyful_inchworm_butterfly_535', rel: 'noopener', target: '_blank' },
                                'blog on Medium'
                            ),
                            '. On which, I tend to write about anything related to tech or productivity in hopes that it might benefit someone else.'
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
                                'Scrum'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Agile Methodologies'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Responsive Web Design'
                            )
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
                                'SQL server'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Git'
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
                                    '05/2020-Present'
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