import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { DraggableItem } from "./DraggableItem";

type Props = {
  items: { id: string; name: string; tier?: string }[];
  onAddItem: (name: string) => void;
  onDelete: (id: string) => void;
  onReset: () => void;
};

export const ItemList = ({ items, onAddItem, onDelete, onReset }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id: "pool" });
  const [input, setInput] = useState("");

  const unplacedItems = items.filter((item) => !item.tier);
  const hasAnyItems = items.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onAddItem(trimmed);
    setInput("");
  }

  return (
    <div>
      <div
        ref={setNodeRef}
        className="item-pool"
        style={{ backgroundColor: isOver ? "#d4d4d4" : undefined }}
      >
        {!hasAnyItems ? (
          <span className="pool-empty">Add items below to start building your tier list</span>
        ) : unplacedItems.length === 0 ? (
          <span className="pool-empty">All items placed!</span>
        ) : (
          unplacedItems.map((item) => (
            <DraggableItem key={item.id} item={item} onDelete={onDelete} />
          ))
        )}
      </div>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          className="add-item-input"
          type="text"
          placeholder="New item name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-item-btn" type="submit">Add</button>
        <button className="reset-btn" type="button" onClick={onReset} disabled={items.length <= 0}>Reset</button>
      </form>
    </div>
  );
};
