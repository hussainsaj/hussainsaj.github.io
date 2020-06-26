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
            cover: false, //true
            rotation: 0,
            tab: 'home', //home
            menu: true,
            github: {
                status: true,
                projects: []
            },
            medium: {
                status: true,
                author: {},
                blogs: []
            }
        };
        _this.formatDateTime = _this.formatDateTime.bind(_this);
        _this.toText = _this.toText.bind(_this);
        _this.updateProjects = _this.updateProjects.bind(_this);
        _this.updateBlog = _this.updateBlog.bind(_this);
        _this.tabs = ['home', 'blog', 'projects', 'about'];
        _this.coverValues = {
            true: {
                color: 'white',
                display: 'block'
            },
            false: {
                color: 'black',
                display: 'none'
            }
        };
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
        key: 'updateProjects',
        value: function updateProjects() {
            var _this2 = this;

            fetch("https://api.github.com/users/hussainsaj/repos").then(function (res) {
                return res.json();
            }).then(function (result) {
                result.sort(function (a, b) {
                    return new Date(b.updated_at) - new Date(a.updated_at);
                });
                result = result.slice(0, 5);
                for (var i = 0; i < result.length; i++) {
                    result[i].updated_at_formatted = _this2.formatDateTime(result[i].updated_at);
                    if (result[i].description.length > 160) {
                        result[i].description = result[i].description.slice(0, 150) + '...';
                    }
                }

                _this2.setState({ github: { status: true, author: result[0].owner, projects: result } });
            }, function (error) {
                _this2.setState({ github: { status: false, projects: [] } });
                console.error(error);
            });
        }
    }, {
        key: 'updateBlog',
        value: function updateBlog() {
            var _this3 = this;

            fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joyful_inchworm_butterfly_535").then(function (res) {
                return res.json();
            }).then(function (result) {
                result.items = result.items.slice(0, 5);
                for (var i = 0; i < result.items.length; i++) {
                    result.items[i].date = _this3.formatDateTime(result.items[i].pubDate);
                    result.items[i].content = _this3.toText(result.items[i].content);
                    result.items[i].content = result.items[i].content.replace('Continue reading on Medium »', '');
                }
                result.feed.name = result.items[0].author;
                _this3.setState({ medium: { status: true, author: result.feed, blogs: result.items } });
            }, function (error) {
                _this3.setState({ medium: { status: false, blogs: [] } });
                console.error(error);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateProjects();
            this.updateBlog();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                !this.state.cover && React.createElement(
                    'header',
                    null,
                    React.createElement(
                        'title',
                        { className: 'flex' },
                        React.createElement(
                            'div',
                            { id: 'logo' },
                            React.createElement(
                                'h1',
                                { className: 'pointer', onClick: function onClick() {
                                        return _this4.setState({ tab: 'home' });
                                    } },
                                'Hussain Sajid'
                            )
                        )
                    ),
                    React.createElement(
                        'nav',
                        { className: 'flex pointer', onClick: function onClick() {
                                return _this4.setState({ menu: !_this4.state.menu });
                            } },
                        this.tabs.map(function (value, i) {
                            var display = _this4.state.menu ? _this4.state.tab : value;
                            var navLink = React.createElement(
                                'div',
                                { className: 'nav-item nav-link', onClick: function onClick() {
                                        return _this4.setState({ tab: display, menu: !_this4.state.menu });
                                    } },
                                React.createElement(
                                    'a',
                                    { className: display === _this4.state.tab ? 'active' : '' },
                                    display
                                )
                            );
                            var navButton = React.createElement(
                                'div',
                                { id: 'nav-button', className: 'nav-item' },
                                _this4.state.menu ? React.createElement('i', { className: 'fas fa-sort-down' }) : React.createElement('i', { className: 'fas fa-sort-up' })
                            );
                            if (_this4.state.menu && i === 0) {
                                return [navLink, navButton];
                            } else if (!_this4.state.menu) {
                                if (i == 0) {
                                    return [navLink, navButton];
                                } else {
                                    return navLink;
                                }
                            }
                        })
                    )
                ),
                React.createElement(
                    'main',
                    null,
                    this.state.tab === 'home' && React.createElement(
                        'div',
                        { id: 'content' },
                        React.createElement(
                            'div',
                            { className: 'entry text' },
                            React.createElement(
                                'h2',
                                null,
                                'I help build websites with forward-thinking teams that generate positive and lasting value.'
                            ),
                            React.createElement(
                                'p',
                                null,
                                '(Full site coming soon)'
                            )
                        )
                    ),
                    this.state.tab === 'blog' && React.createElement(
                        'div',
                        { className: 'content' },
                        this.state.medium.status ? React.createElement(
                            'div',
                            null,
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
                                'h2',
                                null,
                                'More on Medium'
                            ),
                            React.createElement(
                                'div',
                                { className: 'entry social_card flex' },
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
                        ) : React.createElement(
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
                                { className: 'entry' },
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
                        )
                    ),
                    this.state.tab === 'projects' && React.createElement(
                        'div',
                        { className: 'content' },
                        this.state.github.status ? React.createElement(
                            'div',
                            null,
                            this.state.github.projects.map(function (project) {
                                return React.createElement(
                                    'div',
                                    { className: 'entry text' },
                                    React.createElement(
                                        'h2',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'text', href: project.html_url, rel: 'noopener', target: '_blank' },
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
                            React.createElement('hr', null),
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
                        ) : React.createElement(
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
                                { className: 'entry' },
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
                        )
                    ),
                    this.state.tab === 'about' && React.createElement(
                        'div',
                        { className: 'content' },
                        React.createElement(
                            'div',
                            { className: 'entry text' },
                            React.createElement(
                                'h2',
                                null,
                                'About me'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'I\'m an ambitious developer who would like to work as part of a team of like-minded developers in an always challenging environment. With over a year of professional and personal experience, I\u2019m always looking for ways to challenge myself and learn new skills. A strong communicator with the ability to share ideas with the team and client.'
                            )
                        ),
                        React.createElement(
                            'div',
                            { id: 'contact', className: 'entry flex' },
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
                        React.createElement('hr', null),
                        React.createElement(
                            'div',
                            { id: 'skills', className: 'entry' },
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
                            { className: 'entry' },
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
                            { className: 'entry' },
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
                            { className: 'entry' },
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
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));