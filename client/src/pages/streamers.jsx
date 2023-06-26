import { Page, StreamersList } from "../components";
import data from "../data.json"

export default function Properties() {
  console.log(data)
  return (
    <Page title="Streamers" className="streamers" >
      <StreamersList streamers={data.streamers} />
    </Page>
  );
}
