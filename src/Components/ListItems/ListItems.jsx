import "./ListItems.scss";
import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

const ListItems = () => {
    return (
        <div className="ListItems">
           <img src="https://m.media-amazon.com/images/I/71OIhbUOF-L.jpg" alt=""/>
            <div className="itemInfo">
              <div className="icons">
              <PlayArrow />
              <Add/>
              <ThumbUpAltOutlined/>
              <ThumbDownAltOutlined />

              </div>
              <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
              </div>
              <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat, vel sequi praesentium voluptatum doloremque ad quis quidem? Quia aut doloribus distinctio dolore rerum 
              quibusdam nemo voluptatum, enim nulla saepe.
              </div>
              <div className="genre">Action</div>
                </div> 
        </div>
    )
}

export default ListItems
