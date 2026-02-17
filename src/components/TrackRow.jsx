export default function TrackRow({
  index,
  track,
  isSelected,
  onSelect,
}) {
  return (
    <div
      className={`track-row ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="track-index">{index}</span>

      <div className="track-title">
        <div className="track-name">{track.name}</div>
        <div className="track-artist">{track.artist}</div>
      </div>

      <span className="track-album">{track.album}</span>
      <span className="track-duration">{track.duration}</span>
    </div>
  );
}
