import Painting from "./Painting";
import PropTypes from "prop-types";

export default function PaintingList({ items }) {
  return (<ul>
    {items.map(item => (
      <li key={item.id}>
        <Painting
          url={item.url}
          title={item.title}
          author={item.author.tag}
          authorUrl={item.author.url}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
    <Painting />
  </ul>)
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.string.isRequired,}
    )),
}