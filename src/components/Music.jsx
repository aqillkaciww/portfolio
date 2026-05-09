export default function Music() {
  return (
    <section className="music-section px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Fav Playlist 🎧
        </h2>

        <iframe
          style={{ borderRadius: "16px" }}
          src="https://open.spotify.com/embed/playlist/13EFUxCSuU91mtX6nN3Qgr?utm_source=generator"
          width="70%"
          height="430"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}