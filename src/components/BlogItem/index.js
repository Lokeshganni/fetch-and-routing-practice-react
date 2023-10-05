// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, author, topic, avatarUrl, imageUrl} = blogDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <div className="blog-item-image-card">
          <img src={imageUrl} alt={`item${id}`} className="blog-item-image" />
        </div>
        <div className="blog-item-content-card">
          <p className="topic-para">{topic}</p>
          <p className="title-para">{title}</p>
          <div className="avatar-and-author-card">
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="blog-item-avatar"
            />
            <p className="author-para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
