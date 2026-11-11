const videos = require.context("assets", true, /^\.\/video\/.*\.mp4$/);
const available = new Set(videos.keys());

export function projectVideo(filename) {
  const key = "./video/" + filename;
  if (available.has(key)) {
    return videos(key);
  }
}
