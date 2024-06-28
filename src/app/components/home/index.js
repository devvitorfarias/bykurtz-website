export function addEventListenersToVideo(video) {
  const handleMouseEnter = (event) => {
    event.currentTarget.play();
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;
  };

  video.addEventListener('mouseenter', handleMouseEnter);
  video.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    video.removeEventListener('mouseenter', handleMouseEnter);
    video.removeEventListener('mouseleave', handleMouseLeave);
  };
}
