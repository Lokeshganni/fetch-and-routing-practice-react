// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {fetchedData: {}, isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formattedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({fetchedData: formattedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {fetchedData} = this.state
    const {title, author, content, imageUrl, avatarUrl} = fetchedData
    return (
      <div className="blog-details-container">
        <p className="blog-details-title">{title}</p>
        <div className="blog-details-avatar-and-author-card">
          <img src={avatarUrl} alt={author} className="blog-details-avatar" />
          <p className="blog-details-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-details-image" />
        <p className="blog-details-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      this.renderBlogItemDetails()
    )
  }
}
export default BlogItemDetails
