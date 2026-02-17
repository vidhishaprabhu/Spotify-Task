import { useEffect, useState } from "react";
import { playlistData } from "./data/playlistData";
import PlaylistHeader from "./components/PlaylistHeader";
import TrackList from "./components/TrackList";
import Loader from "./components/Loader";
// import EmptyState from "./components/EmptyState";

export default function App() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlaylist(playlistData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  // if (!playlist || playlist.tracks.length === 0)
  //   return <EmptyState />;

  return (
    <div className="app">
      <PlaylistHeader playlist={playlist} />
      <TrackList tracks={playlist.tracks} />
    </div>
  );
}
