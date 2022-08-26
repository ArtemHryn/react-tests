import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintingRen from "./paining.json";

export default function App() {
  return (
    <div>
      <Section title="My React Test">
        <PaintingList items={paintingRen} />
      </Section>
      <Section title="The Best">
        <PaintingList items={paintingRen} />
      </Section>
    </div>
  );
}
