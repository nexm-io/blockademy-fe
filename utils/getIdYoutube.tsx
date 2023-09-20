export function extractYouTubeVideoId(youtubeURL: string) {
  const videoIdMatch = youtubeURL.match(
    /(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return videoIdMatch ? videoIdMatch[1] : null;
}
