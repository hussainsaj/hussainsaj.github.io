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
            cover: true,
            rotation: 0
        };
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
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var h1 = document.getElementsByTagName('h1');
            for (var i = 0; i < h1.length; i++) {
                h1[i].style.color = this.coverValues[this.state.cover].color;
            }

            document.getElementById('background').style.display = this.coverValues[this.state.cover].display;

            document.getElementById('background-overlay').style.display = this.coverValues[this.state.cover].display;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'nav',
                    null,
                    React.createElement(
                        'div',
                        { id: 'logo' },
                        React.createElement(
                            'h1',
                            null,
                            'Hussain Sajid'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'cross', className: 'mobile-hide', style: { transform: 'rotate(' + this.state.rotation + 'deg)' } },
                        React.createElement(
                            'h1',
                            { onClick: function onClick() {
                                    return _this2.setState({ cover: !_this2.state.cover, rotation: _this2.state.rotation + 45 });
                                } },
                            '+'
                        )
                    )
                ),
                React.createElement(
                    'main',
                    null,
                    React.createElement(
                        'div',
                        { id: 'content' },
                        React.createElement(
                            'h2',
                            null,
                            'I help build websites with forward-thinking teams that generate positive and lasting value.'
                        ),
                        React.createElement(
                            'h2',
                            null,
                            '(Full site coming soon)'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'background' },
                        React.createElement(
                            'picture',
                            null,
                            React.createElement('source', { media: '(min-width: 1280px)', srcSet: './media/background-XL.jpeg' }),
                            React.createElement('source', { media: '(min-width: 1024px)', srcSet: './media/background-L.jpeg' }),
                            React.createElement('source', { media: '(min-width: 640px)', srcSet: './media/background-M.jpeg' }),
                            React.createElement('img', { src: './media/background-S.jpeg', alt: 'classical background image' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'background-overlay', className: 'mobile-hide' },
                        React.createElement(
                            'div',
                            { id: 'background-text' },
                            React.createElement(
                                'h1',
                                null,
                                'I\'m a developer'
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    null,
                    React.createElement(
                        'div',
                        { id: 'contact' },
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: 'https://github.com/hussainsaj', rel: 'noopener', target: '_blank' },
                                    'GitHub'
                                )
                            )
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: 'https://www.linkedin.com/in/hussainsaj/', rel: 'noopener', target: '_blank' },
                                    'LinkedIn'
                                )
                            )
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: 'mailto:hussain-sajid@outlook.com' },
                                    'hussain-sajid@outlook.com'
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

var domContainer = document.querySelector('main');
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));