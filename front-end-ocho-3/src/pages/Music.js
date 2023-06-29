import React from 'react'
import ReactPlayer from 'react-player'

function Music() {
  return (
    <div>
      <ReactPlayer  
      url = "https://soundcloud.com/iamdj8pm/live-from-panda-harlem-42123?si=46cf7187bd86457db4227cc99b945301&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
      config = {{ 
        soundcloud: {
          options: {
            sharing: true
          }
        }
      }}
      />
    </div>
  )
}

export default Music