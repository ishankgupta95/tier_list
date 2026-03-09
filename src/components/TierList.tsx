import { useDroppable } from "@dnd-kit/core";
import { DraggableItem } from "./DraggableItem";

type Props = {
  tier: { id: string; tierLabel: string; color: string };
  items: { id: string; name: string; tier?: string }[];
};

export const TierList = ({ tier, items }: Props) => {
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
        style={{ backgroundColor: isOver ? "#d4d4d4" : "#2a2a2a" }}
      >
        {tierItems.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
