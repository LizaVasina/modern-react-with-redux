import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>PostList</div>
        )
    }
}

export default connect(null, {
    fetchPosts
})(PostList);
