import "./ListItems.scss";
import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";

const ListItems = ({index}) => {
  const [isHovered , setIsHovered] = useState(false);
  //const trailer ="https://player.vimeo.com/video/599019945?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=3a340011ad"; 
  
  return (
        <div className="ListItems" 
        style= {{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
           <img src="https://m.media-amazon.com/images/I/71OIhbUOF-L.jpg" alt=""/>
            {isHovered && (
              <>
           
            <iframe src="https://player.vimeo.com/video/599019945?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=3a340011ad"   
               allowfullscreen title="What a scene &amp;quot;Joker &amp;quot; How about another joke Murray Joker" autoPlay={true} loop ></iframe>
            <div className="itemInfo">
              <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" /> 
              <ThumbDownAltOutlined className="icon" />

              </div>
              <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
              </div>
              <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat, vel sequi praesentium voluptatum doloremque ad quis quidem? Quia aut doloribus distinctio dolore rerum 
              
              </div>
              <div className="genre">Action</div>
                </div>
                </>
                )} 
        </div>
    )
}

export default ListItems
