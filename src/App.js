import PaintingList from "./components/PaintingList";
import paintingRen from "./paining.json";

export default function App() {
  return (
    <div>
      <PaintingList items={paintingRen} />
    </div>
  );
}