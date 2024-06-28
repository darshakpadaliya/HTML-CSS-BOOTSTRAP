// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  var audioPlayers = document.querySelectorAll('.audio-player');
  var currentTrackIndex = 0; // Track the index of the currently playing track

  audioPlayers.forEach(function(player, index) {
    player.addEventListener('play', function() {
      // Pause other players when one starts playing
      audioPlayers.forEach(function(otherPlayer) {
        if (otherPlayer !== player && !otherPlayer.paused) {
          otherPlayer.pause();
        }
      });
    });

    player.addEventListener('ended', function() {
      // Move to the next track index
      currentTrackIndex = (currentTrackIndex + 1) % audioPlayers.length;
      
      // Pause all players first
      audioPlayers.forEach(function(player) {
        player.pause();
      });

      // Play the next track
      audioPlayers[currentTrackIndex].play();
    });
  });
});
