import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import "./watch.scss";



const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
             <ArrowBack/>
            Home
            </div>
             
              <iframe className="video" src="https://player.vimeo.com/video/599019945?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=3a340011ad" allow="autoplay; fullscreen; picture-in-picture"
               allowfullscreen title="What a scene &amp;quot;Joker &amp;quot; How about another joke Murray Joker"></iframe>
            
            
        </div>
    )
}

export default Watch
