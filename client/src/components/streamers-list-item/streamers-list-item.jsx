import "./streamers-list-item.css";

export default function StreamersListItem({
  id,
  name,
  platform,
  description,
  upvotes,
  downvotes
}) {

  return (
    <div className={"streamer-list-item"}>
      <img className="streamer-list-item__image" src="https://staticc.sportskeeda.com/editor/2023/02/8d8d8-16775633289121.png" alt="Asmongold" />
      <h2>{name}</h2>
      <h3>{platform}</h3>
    </div>
  );
}
