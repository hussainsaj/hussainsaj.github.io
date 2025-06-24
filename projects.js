var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.categories = [{
            name: 'Junior web developer - Cheshire West and Chester council',
            subtext: "Some of the projects that I've worked on as a Junior web developer.",
            projects: [{
                name: 'Modular polling',
                description: 'A scheduled job system designed to monitor and manage payment, and case statuses. It runs on customizable intervals and days, automatically updating the database, sending notifications for status changes, and handling case closures, reminders for payments, and cancellations based on real-time data.'
            }, {
                name: 'Recruitment and pay',
                description: 'Aside an usual enquiry form, added a support for self service to export data and manage permissions. Exported data can be customer by date range, status, organsiations and other filters. Calculations can also be performed on each case on the data such as whether a case is overdue or not.'
            }, {
                name: 'FPN',
                description: "Updated the existing FPN system to support the new regulations, request payments online, automatically escalate cases if they've not been paid for, automatically close cases once the fine is paid and calculating correct amount to pay based on the issue date and FPN tier."
            }]
        },{
            name: 'Senior digital development analyst (web development) - Qwest services',
            subtext: "Some of the projects that I've worked on as a Senior digital development analyst (web development).",
            projects: [{
                name: 'Personalized User Landing Page',
                description: 'Created a personalized landing page for logged-in users. The page displays localized information and features a full redesign to enhance user experience.'
            }, {
                name: 'Archival Material Ordering System',
                description: 'Developed an online ordering system for archival research materials. The system includes features for customer inquiries, order management by staff, and interactive communication between users and staff.'
            }, {
                name: 'Waste Collection Form Update',
                description: 'Updated online forms for waste collection services to integrate with new waste management systems. Adapted the forms twice to keep up with changes in the service.'
            }]
        }, {
            name: 'Web developer - Qwest services',
            subtext: "Some of the projects that I've worked on as a Web developer.",
            projects: [{
                name: 'Sports and Events Booking System',
                description: 'Digitized a manual booking system to streamline the process. The new system features dynamic forms for user inquiries and a management interface for staff to track payments and bookings.'
            }, {
                name: 'Highways Report Fault Form Update',
                description: 'Updated the highways report fault form to display already reported faults on a map, reducing duplicate reports and allowing users to add more information to existing reports.'
            }]
        }, {
            name: 'Personal projects',
            subtext: "Projects that I've created to solve my real life problems",
            projects: [{
                name: 'hue',
                description: "A raspeberry pi app which monitors the smart bulb's status accross the house and updates to reflect the time of day such as bright cool white in the morning and dimmed warm white at the night.",
                githubURL: 'https://github.com/hussainsaj/hue'
            },{
                name: 'prayer-times',
                description: 'A raspeberry pi app which fetches the prayer time of a specified region and plays athan on speaker on time.',
                githubURL: 'https://github.com/hussainsaj/prayer-times'
            }]
        }, {
            name: 'Mockups',
            subtext: "Replica of some of my favourite websites for training purposes",
            projects: [{
                name: 'blizzy',
                description: "Blizzy's mockup website for training purposes",
                url: 'https://www.hussainsajid.com/mockup-blizzy/',
                githubURL: 'https://github.com/hussainsaj/mockup-blizzy'
            }, {
                name: 'greenspace',
                description: "The Greenspace's website mockup for training purposes",
                url: 'https://www.hussainsajid.com/mockup-greenspace/',
                githubURL: 'https://github.com/hussainsaj/mockup-greenspace'
            }, {
                name: 'polestar',
                description: "Polestar's website mockup",
                url: 'https://www.hussainsajid.com/mockup-polestar/',
                githubURL: 'https://github.com/hussainsaj/mockup-polestar'
            }]
        }];
        return _this;
    }

    _createClass(Projects, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    null,
                    this.categories.map(function (category) {
                        return React.createElement(
                            'div',
                            { className: 'desktop-flex' },
                            React.createElement(
                                'h2',
                                { className: 'text' },
                                category.name
                            ),
                            React.createElement(
                                'p',
                                { 'class': 'project-subtext' },
                                category.subtext
                            ),
                            category.projects.map(function (project) {
                                return React.createElement(
                                    'div',
                                    { className: 'entry text' },
                                    'url' in project ? React.createElement(
                                        'h2',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'text', href: '' + project.url },
                                            project.name
                                        )
                                    ) : React.createElement(
                                        'h2',
                                        null,
                                        project.name
                                    ),
                                    'description' in project ? React.createElement(
                                        'p',
                                        null,
                                        project.description
                                    ) : '',
                                    'githubURL' in project ? React.createElement(
                                        'a',
                                        { className: 'text', href: '' + project.githubURL },
                                        'View in GitHub'
                                    ) : ''
                                );
                            }),
                            React.createElement('hr', null)
                        );
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
                                React.createElement('img', { src: 'https://avatars.githubusercontent.com/u/38162048?v=4', alt: 'GitHub profile icon' })
                            ),
                            React.createElement(
                                'h3',
                                null,
                                React.createElement(
                                    'a',
                                    { className: 'text', href: 'https://github.com/hussainsaj?tab=repositories', rel: 'noopener', target: '_blank' },
                                    'hussainsaj'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

export default Projects;
