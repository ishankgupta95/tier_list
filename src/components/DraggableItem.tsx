import { useDraggable } from "@dnd-kit/core";

type Props = {
  item: { id: string; name: string };
};

export const DraggableItem = ({ item }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: item.id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="draggable-item"
      style={{
        opacity: isDragging ? 0.4 : 1,
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        zIndex: isDragging ? 999 : undefined,
      }}
    >
      {item.name}
    </div>
  );
};
