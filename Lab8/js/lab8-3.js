var player = document.getElementById("myplayer");

function playPause() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function stopVideo() {
  player.pause();
  if (player.currentTime) {
    player.currentTime = 0;
  }
}

function replayVideo() {
  player.currentTime = 0;
  player.play();
}

function increaseVolume() {
  if (player.volume < 1)
    player.volume = parseFloat(player.volume + 0.1).toFixed(1);
}

function decreaseVolume() {
  if (player.volume > 0)
    player.volume = parseFloat(player.volume - 0.1).toFixed(1);
}

function muteVolume() {
  // if (player.muted) {
  //   player.muted = false;
  // } else {
  //   player.muted = true;
  // }
  player.muted = !player.muted;
}
