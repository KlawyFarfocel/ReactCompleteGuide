import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSeachTerm] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearchChange(event) {
    if(lastChange.current){
        clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current=null;
      setSeachTerm(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input
        onChange={handleSearchChange}
        type="search"
        placeholder="Search..."
      />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
