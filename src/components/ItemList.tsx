import { useDroppable } from "@dnd-kit/core";
import { DraggableItem } from "./DraggableItem";

type Props = {
  items: { id: string; name: string; tier?: string }[];
};

export const ItemList = ({ items }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id: "pool" });

  const unplacedItems = items.filter((item) => !item.tier);

  return (
    <div
      ref={setNodeRef}
      className="item-pool"
      style={{ backgroundColor: isOver ? "#d4d4d4" : "#ebebeb" }}
    >
      {unplacedItems.length === 0 ? (
        <span className="pool-empty">All items placed!</span>
      ) : (
        unplacedItems.map((item) => <DraggableItem key={item.id} item={item} />)
      )}
    </div>
  );
};
