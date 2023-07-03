const SongsManager = function () {
    // const songs = {
    //   "sax": "3JZ4pnNtyxQ",
    //   "how long": "CwfoyVa980U"
    // }
    const _songsDictionary = {}
    return {
        addSong: (tag, url) => _songsDictionary[tag] = url.split("=")[1],
        getSong: tag => console.log("https://www.youtube.com/watch?v=" + _songsDictionary[tag])
    }
} 

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ