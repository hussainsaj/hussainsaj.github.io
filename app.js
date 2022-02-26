var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Blog from '/blog.js';
import Projects from '/project.js';
import About from '/about.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            tab: 'home',
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

export default App;