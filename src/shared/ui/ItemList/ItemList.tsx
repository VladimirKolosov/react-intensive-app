interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function ItemList<T>({ items, renderItem }: ItemListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default ItemList;
