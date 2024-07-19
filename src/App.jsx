import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="list-disc text-2xl font-medium">
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/infinite-scroll">Infinite Scroll</Link>
        </li>
        <li>
          <Link to="/nested-comments">Nested Comments</Link>
        </li>
        <li>
          <Link to="/image-slider">Image Slider</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
