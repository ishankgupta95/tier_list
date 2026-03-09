import { useDroppable } from "@dnd-kit/core";
import { DraggableItem } from "./DraggableItem";

type Props = {
  tier: { id: string; tierLabel: string; color: string };
  items: { id: string; name: string; tier?: string }[];
  onDelete: (id: string) => void;
};

export const TierList = ({ tier, items, onDelete }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id: tier.id });

  const tierItems = items.filter((item) => item.tier === tier.tierLabel);

  return (
    <div className="tier-row">
      <div className="tier-label" style={{ backgroundColor: tier.color }}>
        <span>{tier.tierLabel}</span>
      </div>
      <div
        ref={setNodeRef}
        className="tier-items-wrapper"
        style={{ backgroundColor: isOver ? "#3a3a3a" : "#2a2a2a" }}
      >
        {tierItems.map((item) => (
          <DraggableItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
