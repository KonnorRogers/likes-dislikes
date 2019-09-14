import React from 'react';
import Likes from './likes';
import Dislikes from './dislikes';

export default class LikesDislikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      dislikes: 25,
    };
  }

  handleClick(e) {
    e.preventDefault();

    const likeBtn = e.target.closest('.like-button');
    const dislikeBtn = e.target.closest('.dislike-button');

    if (likeBtn) {
      this.handleLike(likeBtn);
    } else if (dislikeBtn) {
      this.handleDislike(dislikeBtn);
    }
  }

  handleLike(likeBtn) {
    // If the user has liked already, remove the like
    if (this.hasLiked(likeBtn)) {
      return this.removeLike(likeBtn);
    }

    this.addLike(likeBtn);

    // If the user has disliked the post already, remove the dislike
    const dislikeBtn = document.querySelector('.dislike-button');
    if (this.hasDisliked(dislikeBtn)) {
      this.removeDislike(dislikeBtn);
    }
  }

  handleDislike(dislikeBtn) {
    // If the user has disliked already, remove the dislike
    if (this.hasDisliked(dislikeBtn)) {
      return this.removeDislike(dislikeBtn);
    }

    this.addDislike(dislikeBtn);

    // If the user has liked the post already, remove the like
    const likeBtn = document.querySelector('.like-button');
    if (this.hasLiked(likeBtn)) {
      this.removeLike(likeBtn);
    }
  }

  addLike(btn) {
    let likes = this.state.likes;
    likes += 1;
    btn.classList.add('liked');
    this.setState({likes: likes});
  }

  removeLike(btn) {
    let likes = this.state.likes;
    likes -= 1;
    btn.classList.remove('liked');

    this.setState({likes: likes});
  }

  addDislike(btn) {
    let dislikes = this.state.dislikes;
    dislikes += 1;
    btn.classList.add('disliked');

    this.setState({dislikes: dislikes});
  }

  removeDislike(btn) {
    let dislikes = this.state.dislikes;
    dislikes -= 1;
    btn.classList.remove('disliked');

    this.setState({dislikes: dislikes});
  }

  hasLiked(btn) {
    if (btn.classList.contains('liked')) {
      return true;
    }

    return false;
  }

  hasDisliked(btn) {
    if (btn.classList.contains('disliked')) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        <Likes likes={this.state.likes} onClick={e => this.handleClick(e)} />
        <Dislikes
          dislikes={this.state.dislikes}
          onClick={e => this.handleClick(e)}
        />
      </div>
    );
  }
}
