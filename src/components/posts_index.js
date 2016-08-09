import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
      // console.log("this would be a good time to call an action creator to fetch posts");
      this.props.fetchPosts(); // made possible by mapDispatchToProps, bindActionCreators, and finally connect
  }


  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }

export default connect(null, { fetchPosts })(PostsIndex);
// could have been  { fetchPosts: fetchPosts }
// go rid of mapDispatchToProps
