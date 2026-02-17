export default function PlaylistHeader({ playlist }) {
  return (
    <div className="playlist-header">
      <img src={playlist.image} alt={playlist.name} />
      <div className="playlist-info">
        <span className="playlist-type">PLAYLIST</span>
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>
        <span className="playlist-count">
          {playlist.tracks.length} songs
        </span>
      </div>
    </div>
  );
}
