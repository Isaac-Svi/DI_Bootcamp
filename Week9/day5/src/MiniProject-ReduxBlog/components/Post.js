import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../redux/actions'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        const { post } = this.props

        return (
            <div className='container'>
                {post ? (
                    <>
                        <h3 className='center-align'>{post.title}</h3>
                        <p>{post.body}</p>
                        <button
                            className='btn waves-effect waves-light red lighten-2'
                            onClick={this.handleClick}
                        >
                            Delete Post
                        </button>
                    </>
                ) : (
                    <h4>Loading</h4>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { post_id },
        },
    } = ownProps

    return {
        post: state.posts.find((post) => post.id === post_id),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
