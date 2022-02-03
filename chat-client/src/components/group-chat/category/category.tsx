import './category.scss';

export default function category(name: string) {
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <text className="category-name">
          {name.substring(0, 1).toUpperCase() + name.substring(1, name.length)}
        </text>
      </div>
    </div>
  );
}
