var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.state = {
            github: {
                status: false,
                availability: true,
                projects: {}
            }
        };
        _this.updateProjects = _this.updateProjects.bind(_this);
        return _this;
    }

    _createClass(Projects, [{
        key: 'updateProjects',
        value: function updateProjects() {
            var _this2 = this;

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

                    result[i].updated_at_formatted = _this2.props.formatDateTime(result[i].updated_at);
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

                _this2.setState({ github: { status: true, availability: true, author: result[0].owner, projects: projects } });
            }, function (error) {
                _this2.setState({ github: { status: true, availability: false, projects: {} } });
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
                                        key === 'mockups' ? React.createElement(
                                            'h2',
                                            null,
                                            React.createElement(
                                                'a',
                                                { className: 'text', href: '/' + project.name },
                                                project.name
                                            )
                                        ) : React.createElement(
                                            'h2',
                                            null,
                                            project.name
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
                                        ),
                                        React.createElement(
                                            'a',
                                            { className: 'text', href: 'https://github.com/hussainsaj/' + project.name },
                                            'View in GitHub'
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

export default Projects;