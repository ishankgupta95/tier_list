import { useDroppable } from "@dnd-kit/core";

type ListProp = {
  tier: {id: string, tierLabel: string, color: string};
  items: {name: string, tier?: string}[];
}

export const TierList = ({tier, items}: ListProp) => {

  const { setNodeRef } = useDroppable({
    id: tier.id
  })

  return (
    <div style={{marginBottom: 2}}>
      <div className="tier-row" style={{display: 'flex'}}>
        <div className="tier-label" style={{height: 80, width: 80,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: tier.color}}>
          <span>{tier.tierLabel}</span>
        </div>
        <div ref={setNodeRef} className="tier-items-wrapper" style={{width: 800, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#ebebeb'}}>
          {items.filter((item) => item.tier === tier.tierLabel).map((item) => <span style={{height: 80, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ababab'}}>{item.name}</span>)}
        </div>
      </div>
    </div>
  )
}