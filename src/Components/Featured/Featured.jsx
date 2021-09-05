import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss";

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type &&(
                <div className="category">
                 <span>{type === "movie" ? "Movies": "Series"}</span>
                 <select name="genre" id="genre">
                     <option>genre</option>
                     <option value="adventure">Adventure</option>
                     <option value="comedy">Comedy</option>
                     <option value="crime">Crime</option>
                     <option value="fantasy">Fantasy</option>
                     <option value="historical">Historical</option>
                     <option value="horror">Horror</option> 
                     <option value="romance">Romance</option>
                     <option value="sci-fi">Sci-fi</option>                 
                    <option value="thriller">Thriller</option>
                    <option value="westren">Westren</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                 </select>
                </div>
            )}
            <div className="pic">
          <img src="https://cdn.tmobile.com/content/dam/t-mobile/ntm/specific-use/netflix/bg/619306-bg-full-netflix-grid-v2.desktop.jpg" alt=""/>
          </div>
           <div className="info">
               <img src="https://www.filmsourcing.com/wp-content/uploads/2015/09/Filmsourcing-epik-poster-ONE-SHEET-tutorial4.jpg" alt=""/>
            <span className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eveniet. Earum provident illum vero temporibus eius repellat totam at ullam! At repellendus, incidunt labore molestiae nam exercitationem deleniti ab est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi itaque neque fuga hic, architecto corrupti officia, soluta deleniti ducimus error et perferendis quae. Eveniet exercitationem accusantium eius? Temporibus, ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit rerum porro repellat quasi distinctio. Quae, tempore magni exercitationem accusamus soluta quidem ipsa blanditiis unde error, corrupti reiciendis magnam.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
             
            </div>
           </div>
        </div>
    )
}

export default Featured
