import { Component } from "react";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true});
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false});
  }

  render() {
    const { title, content, link, imgPath, tools, postkey } = this.props;
    const {isHovered} = this.state;
    const image = require(`../assets/projects/${String(imgPath)}`);

    return (
      <div className="post-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {isHovered ? (
          <div className="post-behind" key={postkey}>
            <h1>{title}</h1>
            <div className="post-content">
              {link !== "" ? (<a href={link} target = "blank">[Link to project page]</a>) : ""}
              <p>Description: {content}</p>
              <p>Tools used: {tools}</p>
            </div>
          </div>
        ) : (
          <div key={postkey} className="post-cover" style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="dark-overlay">
              <h1>{title}</h1>
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default PostCard;