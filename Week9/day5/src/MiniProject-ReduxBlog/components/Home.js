import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        const { posts } = this.props
        return (
            <div>
                <h2 className='center-align'>Home</h2>
                <div className='container'>
                    {posts.length > 0 ? (
                        posts.map(({ id, title, body }) => {
                            return (
                                <div
                                    key={`post-${id}`}
                                    className='row card-panel'
                                >
                                    <img
                                        className='col s6 m3'
                                        src='/images/blog.png'
                                        alt='blog'
                                    />
                                    <div className='col s12 m9'>
                                        <Link to={`post/${id}`}>
                                            <h5 className='red-text lighten-1'>
                                                {title}
                                            </h5>
                                        </Link>
                                        <p>{body}</p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p>No post to show</p>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(Home)
