var Youtube = require('youtube-video-api')


var youtube = Youtube({ 
  video: {
    part: 'status,snippet' 
  }
})
 
var params = {
  resource: {
    snippet: {
      title: 'test video',
      description: 'This is a test video uploaded via the YouTube API'
    },
    status: {
      privacyStatus: 'private'
    }
  }
}
 
youtube.authenticate('642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com', 'Iz3Vo_-l983aS0KFkjGN3-eZ', function (err, tokens) {
  if (err) return console.error('Cannot authenticate:', err)
  uploadVideo()
})
 
function uploadVideo() {
  youtube.upload('path/to/video.mp4', params, function (err, video) {
    // 'path/to/video.mp4' can be replaced with readable stream. 
    // When passing stream adding mediaType to params is advised.
    if (err) {
      return console.error('Cannot upload video:', err)
    }
 
    console.log('Video was uploaded with ID:', video.id)
  
    // this is just a test! delete it
    youtube.delete(video.id, function (err) {
      if (!err) console.log('Video was deleted')
    })
  })
}