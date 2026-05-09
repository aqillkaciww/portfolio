export default function Music() {
  return (
    <section className="music-section px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="playlist-title">
          My Favorite Playlist 🎧
        </h2>

        <div className="music-embed-wrapper">
          <iframe
            className="music-embed"
            src="https://open.spotify.com/embed/playlist/13EFUxCSuU91mtX6nN3Qgr?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}