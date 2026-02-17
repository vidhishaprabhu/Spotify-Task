import { useState } from "react";
import TrackRow from "./TrackRow";

export default function TrackList({ tracks }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div className="tracklist">
      <div className="tracklist-header">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Duration</span>
      </div>

      {tracks.map((track, index) => (
        <TrackRow
          key={track.id}
          index={index + 1}
          track={track}
          isSelected={selectedTrack === track.id}
          onSelect={() => setSelectedTrack(track.id)}
        />
      ))}
    </div>
  );
}
