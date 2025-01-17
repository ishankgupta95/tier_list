import { useDraggable } from "@dnd-kit/core";

type ItemList = {
  items: {id: string, name: string}[];
}

export const ItemList = ({items}: ItemList) => {
   
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
      {items.map((item) => {

        const {attributes, listeners, setNodeRef, transform} = useDraggable({
          id: item.id
        });

        const transformStyle = transform ? {transform: `translate(${transform.x}px, ${transform.y}px)`} : undefined

        return (
          <div ref={setNodeRef} {...listeners} {...attributes} style={{height: 80, width: 80,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebebeb', ...transformStyle}}>
            <span>{item.name}</span>
          </div>
        )})}
    </div>
  )
}