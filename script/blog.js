class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medium: {
                status: false,
                availability: true,
                author: {},
                blogs: []
            }
        };
        this.updateBlog = this.updateBlog.bind(this);
    }
    
    updateBlog() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joyful_inchworm_butterfly_535")
        .then(res => res.json())
        .then(
            (result) => {
                result.items = result.items.slice(0,7);
                for (let i=0; i<result.items.length; i++) {
                    result.items[i].date = this.props.formatDateTime(result.items[i].pubDate)
                    result.items[i].content = this.props.toText(result.items[i].content)
                    result.items[i].content = result.items[i].content.replace('Continue reading on Medium »','')
                }
                result.feed.name = result.items[0].author
                this.setState({medium:{status: true, availability: true, author: result.feed, blogs: result.items}})
            },
            (error) => {
                this.setState({medium:{status: true, availability: false}})
                console.error(error)
            }
        )
    }

    componentDidMount() {
        this.updateBlog()
    }

    render() {
        return (
            <div className='content'>
                {this.state.medium.status && this.state.medium.availability ? <div className='desktop-flex'>
                    {this.state.medium.blogs.map(blog => {
                        return <div className='entry text'>
                            <h2><a className='text' href={blog.link} rel='noopener' target='_blank'>{blog.title}</a></h2>
                            <p>{blog.content}</p>
                            <p>{blog.date}</p>
                        </div>
                    })}
                    <hr/>
                    <div className='social'>
                        <h2>More on Medium</h2>
                        <div className='social_card flex'>
                            <picture>
                                <img src={this.state.medium.author.image} alt='GitHub profile icon'></img>
                            </picture>
                            <h3><a className='text' href={this.state.medium.author.link} rel='noopener' target='_blank'>{this.state.medium.author.name}</a></h3>
                        </div>
                    </div>
                </div>
                    : this.state.medium.status && !this.state.medium.availability ?
                <div>
                    <div className='entry text'>
                        <p>Error loading results. Please try again later</p>
                    </div>
                    <hr/>
                    <div className='social'>
                        <h2>All of my blogs</h2>
                        <p><a className='text' href='https://medium.com/@joyful_inchworm_butterfly_535' rel='noopener' target='_blank'>Medium</a></p>
                    </div>
                </div>
                    :
                <div>
                    <div className='entry text'>
                        <p>Loading...</p>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Blog;