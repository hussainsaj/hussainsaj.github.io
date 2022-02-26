var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blog = function (_React$Component) {
    _inherits(Blog, _React$Component);

    function Blog(props) {
        _classCallCheck(this, Blog);

        var _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props));

        _this.state = {
            medium: {
                status: false,
                availability: true,
                author: {},
                blogs: []
            }
        };
        _this.updateBlog = _this.updateBlog.bind(_this);
        return _this;
    }

    _createClass(Blog, [{
        key: 'updateBlog',
        value: function updateBlog() {
            var _this2 = this;

            fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joyful_inchworm_butterfly_535").then(function (res) {
                return res.json();
            }).then(function (result) {
                result.items = result.items.slice(0, 7);
                for (var i = 0; i < result.items.length; i++) {
                    result.items[i].date = _this2.props.formatDateTime(result.items[i].pubDate);
                    result.items[i].content = _this2.props.toText(result.items[i].content);
                    result.items[i].content = result.items[i].content.replace('Continue reading on Medium »', '');
                }
                result.feed.name = result.items[0].author;
                _this2.setState({ medium: { status: true, availability: true, author: result.feed, blogs: result.items } });
            }, function (error) {
                _this2.setState({ medium: { status: true, availability: false } });
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

export default Blog;