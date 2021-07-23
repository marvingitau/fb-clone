import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>

            <Post profilePic="https://avatars.githubusercontent.com/u/51716819?v=4"
            message="This works"
            timestamp="saa hii"
            username="elgato mkenya"
            image="http://hd.wallpaperswide.com/thumbs/lone_tree_on_a_hill-t2.jpg"
            />
            

            <Post profilePic="https://pbs.twimg.com/profile_images/1296362061329506304/otQDWuKa_400x400.jpg"
            message="This works"
            timestamp="saa hii"
            username="elgato mkenya"
            image="https://images.unsplash.com/photo-1527251402749-0d14a4b5a735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHN3aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />


<Post profilePic="https://storage.googleapis.com/kaggle-avatars/images/3430945-fb.jpg"
            message="This works"
            timestamp="saa hii"
            username="elgato mkenya"
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bac69b73-56f0-4635-af21-1fc9f831bdf5/d22s2vl-c508ce7f-cecb-47b9-9f5e-64e04c904c5d.jpg/v1/fill/w_1024,h_768,q_75,strp/hill_tree_by_aram287_d22s2vl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYmFjNjliNzMtNTZmMC00NjM1LWFmMjEtMWZjOWY4MzFiZGY1XC9kMjJzMnZsLWM1MDhjZTdmLWNlY2ItNDdiOS05ZjVlLTY0ZTA0YzkwNGM1ZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._SZqweFZoyLYWHNqBp4SPkTJVSwKvKQTXqheGWPv3qo"
            />
          
        </div>
    )
}

export default Feed
