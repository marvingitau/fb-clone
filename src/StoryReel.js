import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="https://www.thecoderpedia.com/wp-content/uploads/2020/06/Advantage-of-Servers.jpg" profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQHlQ9HA28FsNg/profile-displayphoto-shrink_100_100/0/1625243221820?e=1632355200&v=beta&t=RO-XEaJWvmUX9wS4upNypH9o5mh1X81D6Makqydfork" title="Gitua Laavel"/>

            <Story image="https://pbs.twimg.com/media/EteXl2yXYAI0ZGw?format=jpg&name=large" profileSrc="https://pbs.twimg.com/profile_images/1405753944672923655/0tzIzm7a_400x400.jpg" title="Cosplay Taryn"/>
        </div>
    )
}

export default StoryReel
