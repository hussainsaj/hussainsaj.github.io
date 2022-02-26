var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            //tab: 'home',
            tab: 'projects',
            menu: true,
            screen: {
                width: 0,
                height: 0
            }
        };
        _this.tabs = ['blog', 'projects', 'about'];
        _this.formatDateTime = _this.formatDateTime.bind(_this);
        _this.toText = _this.toText.bind(_this);
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'formatDateTime',
        value: function formatDateTime(dateTime) {
            dateTime = dateTime.slice(0, 10);
            var date = new Date(dateTime);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + '/' + mm + '/' + yyyy;
        }
    }, {
        key: 'toText',
        value: function toText(node) {
            var tag = document.createElement('div');
            tag.innerHTML = node;
            node = tag.innerText;
            return node;
        }
    }, {
        key: 'updateWindowDimensions',
        value: function updateWindowDimensions() {
            this.setState({ screen: { width: window.innerWidth, height: window.innerHeight } });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'header',
                    { className: this.state.tab === 'home' ? 'absolute text' : 'flex' },
                    React.createElement(
                        'div',
                        { id: 'logo', className: 'flex' },
                        React.createElement(
                            'h1',
                            { className: 'pointer', onClick: function onClick() {
                                    return _this2.setState({ tab: 'home' });
                                } },
                            'Hussain Sajid'
                        )
                    ),
                    this.state.screen.width >= 1024 && this.state.tab !== 'home' && React.createElement(
                        'nav',
                        { className: 'flex' },
                        this.tabs.map(function (value) {
                            return React.createElement(
                                'div',
                                { className: 'nav-item nav-link pointer', onClick: function onClick() {
                                        return _this2.setState({ tab: value, menu: !_this2.state.menu });
                                    } },
                                React.createElement(
                                    'a',
                                    { className: value === _this2.state.tab ? 'active' : '' },
                                    value
                                )
                            );
                        })
                    ),
                    this.state.screen.width < 1024 && this.state.tab !== 'home' && React.createElement(
                        'nav',
                        { className: 'flex pointer', onClick: function onClick() {
                                return _this2.setState({ menu: !_this2.state.menu });
                            } },
                        this.tabs.map(function (value, i) {
                            var display = _this2.state.menu ? _this2.state.tab : value;
                            var navLink = React.createElement(
                                'div',
                                { className: 'nav-item nav-link', onClick: function onClick() {
                                        return _this2.setState({ tab: display, menu: !_this2.state.menu });
                                    } },
                                React.createElement(
                                    'a',
                                    { className: display === _this2.state.tab ? 'active' : '' },
                                    display
                                )
                            );
                            var navButton = React.createElement(
                                'div',
                                { id: 'nav-button', className: 'nav-item' },
                                _this2.state.menu ? React.createElement('i', { className: 'fas fa-chevron-down' }) : React.createElement('i', { className: 'fas fa-chevron-up' })
                            );
                            if (i === 0) {
                                return [navLink, navButton];
                            } else if (!_this2.state.menu) {
                                return navLink;
                            }
                        })
                    )
                ),
                React.createElement(
                    'main',
                    null,
                    this.state.tab === 'home' && React.createElement(
                        'div',
                        { id: 'home', className: 'content absolute' },
                        React.createElement(
                            'div',
                            { className: 'section text' },
                            React.createElement(
                                'h2',
                                null,
                                'I help build websites with forward-thinking teams that generate positive and lasting value.'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'section text' },
                            React.createElement(
                                'button',
                                { className: 'transision pointer', onClick: function onClick() {
                                        return _this2.setState({ tab: 'about' });
                                    } },
                                React.createElement(
                                    'h3',
                                    null,
                                    'Enter'
                                )
                            )
                        )
                    ),
                    this.state.tab === 'blog' && React.createElement(Blog, { formatDateTime: this.formatDateTime, toText: this.toText }),
                    this.state.tab === 'projects' && React.createElement(Projects, { formatDateTime: this.formatDateTime }),
                    this.state.tab === 'about' && React.createElement(About, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

var Blog = function (_React$Component2) {
    _inherits(Blog, _React$Component2);

    function Blog(props) {
        _classCallCheck(this, Blog);

        var _this3 = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props));

        _this3.state = {
            medium: {
                status: false,
                availability: true,
                author: {},
                blogs: []
            }
        };
        _this3.updateBlog = _this3.updateBlog.bind(_this3);
        return _this3;
    }

    _createClass(Blog, [{
        key: 'updateBlog',
        value: function updateBlog() {
            var _this4 = this;

            fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joyful_inchworm_butterfly_535").then(function (res) {
                return res.json();
            }).then(function (result) {
                result.items = result.items.slice(0, 7);
                for (var i = 0; i < result.items.length; i++) {
                    result.items[i].date = _this4.props.formatDateTime(result.items[i].pubDate);
                    result.items[i].content = _this4.props.toText(result.items[i].content);
                    result.items[i].content = result.items[i].content.replace('Continue reading on Medium »', '');
                }
                result.feed.name = result.items[0].author;
                _this4.setState({ medium: { status: true, availability: true, author: result.feed, blogs: result.items } });
            }, function (error) {
                _this4.setState({ medium: { status: true, availability: false } });
                console.error(error);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateBlog();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content' },
                this.state.medium.status && this.state.medium.availability ? React.createElement(
                    'div',
                    { className: 'desktop-flex' },
                    this.state.medium.blogs.map(function (blog) {
                        return React.createElement(
                            'div',
                            { className: 'entry text' },
                            React.createElement(
                                'h2',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: blog.link, rel: 'noopener', target: '_blank' },
                                    blog.title
                                )
                            ),
                            React.createElement(
                                'p',
                                null,
                                blog.content
                            ),
                            React.createElement(
                                'p',
                                null,
                                blog.date
                            )
                        );
                    }),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'social' },
                        React.createElement(
                            'h2',
                            null,
                            'More on Medium'
                        ),
                        React.createElement(
                            'div',
                            { className: 'social_card flex' },
                            React.createElement(
                                'picture',
                                null,
                                React.createElement('img', { src: this.state.medium.author.image, alt: 'GitHub profile icon' })
                            ),
                            React.createElement(
                                'h3',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: this.state.medium.author.link, rel: 'noopener', target: '_blank' },
                                    this.state.medium.author.name
                                )
                            )
                        )
                    )
                ) : this.state.medium.status && !this.state.medium.availability ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'entry text' },
                        React.createElement(
                            'p',
                            null,
                            'Error loading results. Please try again later'
                        )
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'social' },
                        React.createElement(
                            'h2',
                            null,
                            'All of my blogs'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text', href: 'https://medium.com/@joyful_inchworm_butterfly_535', rel: 'noopener', target: '_blank' },
                                'Medium'
                            )
                        )
                    )
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'entry text' },
                        React.createElement(
                            'p',
                            null,
                            'Loading...'
                        )
                    )
                )
            );
        }
    }]);

    return Blog;
}(React.Component);

var Projects = function (_React$Component3) {
    _inherits(Projects, _React$Component3);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this5 = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this5.state = {
            github: {
                status: false,
                availability: true,
                projects: {}
            }
        };
        _this5.updateProjects = _this5.updateProjects.bind(_this5);
        return _this5;
    }

    _createClass(Projects, [{
        key: 'updateProjects',
        value: function updateProjects() {
            var _this6 = this;

            fetch("https://api.github.com/users/hussainsaj/repos").then(function (res) {
                return res.json();
            }).then(function (result) {
                result.sort(function (a, b) {
                    return new Date(b.updated_at) - new Date(a.updated_at);
                });

                var projects = {
                    mockups: [],
                    udacity: [],
                    others: []
                };

                for (var i = 0; i < result.length; i++) {

                    result[i].updated_at_formatted = _this6.props.formatDateTime(result[i].updated_at);
                    if (result[i].description === null) {
                        result[i].description = '';
                    } else if (result[i].description.length > 160) {
                        result[i].description = result[i].description.slice(0, 150) + '...';
                    }
                    if (result[i].name.split('-')[0] === 'mockup') {
                        projects['mockups'].push(result[i]);
                    } else if (result[i].name.split('-')[0] === 'udacity') {
                        projects['udacity'].push(result[i]);
                    } else if (result[i].name !== 'hussainsaj.github.io') {
                        projects['others'].push(result[i]);
                    }
                }

                _this6.setState({ github: { status: true, availability: true, author: result[0].owner, projects: projects } });
            }, function (error) {
                _this6.setState({ github: { status: true, availability: false, projects: {} } });
                console.error(error);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateProjects();
        }
    }, {
        key: 'render',
        value: function render() {
            var github = this.state.github.projects;
            return React.createElement(
                'div',
                { className: 'content' },
                this.state.github.status && this.state.github.availability ? React.createElement(
                    'div',
                    null,
                    Object.keys(github).map(function (key) {
                        if (github[key].length !== 0) {
                            return React.createElement(
                                'div',
                                { className: 'desktop-flex' },
                                React.createElement(
                                    'h2',
                                    { className: 'text' },
                                    key.charAt(0).toUpperCase() + key.slice(1)
                                ),
                                github[key].map(function (project) {
                                    return React.createElement(
                                        'div',
                                        { className: 'entry text' },
                                        React.createElement(
                                            'h2',
                                            null,
                                            React.createElement(
                                                'a',
                                                { className: 'text', href: '/' + project.name },
                                                project.name
                                            )
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            project.description
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            project.updated_at_formatted
                                        )
                                    );
                                }),
                                React.createElement('hr', null)
                            );
                        }
                    }),
                    React.createElement(
                        'div',
                        { className: 'social' },
                        React.createElement(
                            'h2',
                            null,
                            'More on GitHub'
                        ),
                        React.createElement(
                            'div',
                            { className: 'entry social_card flex' },
                            React.createElement(
                                'picture',
                                null,
                                React.createElement('img', { src: this.state.github.author.avatar_url, alt: 'GitHub profile icon' })
                            ),
                            React.createElement(
                                'h3',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: this.state.github.author.html_url, rel: 'noopener', target: '_blank' },
                                    this.state.github.author.login
                                )
                            )
                        )
                    )
                ) : this.state.github.status && !this.state.github.availability ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'entry text' },
                        React.createElement(
                            'p',
                            null,
                            'Error loading results. Please try again later'
                        )
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'social' },
                        React.createElement(
                            'h2',
                            null,
                            'All of my projects'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text', href: 'https://github.com/hussainsaj', rel: 'noopener', target: '_blank' },
                                'GitHub'
                            )
                        )
                    )
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'entry text' },
                        React.createElement(
                            'p',
                            null,
                            'Loading...'
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

var About = function (_React$Component4) {
    _inherits(About, _React$Component4);

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

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));