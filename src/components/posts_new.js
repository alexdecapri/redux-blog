import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props; // same as const handleSubmit = this.props.handleSubmit;
    // console.log(title);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStatetoProps (null here), 3rd is mapDispatchToProps (action creator createPost here)

export default reduxForm({
  form: 'PostsNewForm', // just needs to be unique
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);