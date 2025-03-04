var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: /*'zqvTHz-xnGc'*/'Z2j06NQ6KLE',
    playerVars: {
      'autoplay': 1, 
      'fs': 0,
      'iv_load_policy': 3, 
      'modestbranding': 1,
      'playsinline': 1,
      'rel': 0, 
      'showinfo': 0,
      'mute': 1 
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

