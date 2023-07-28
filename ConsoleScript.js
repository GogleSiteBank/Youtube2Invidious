const webPageName = document.URL;
if (!webPageName.includes("watch?")) {
    console.log("Outside of video");
    window.location.href = 'https://redirect.invidious.io'

} else {
const Video = webPageName.split("watch?v=")
window.location.href = "https://redirect.invidious.io/watch/" + Video
}
