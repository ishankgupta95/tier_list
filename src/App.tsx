import './App.css'
import { TierList } from './components/TierList'
import { ItemList } from './components/ItemList'
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';

function App() {

  const [tierListConfig, setTierListConfig] = useState([
    {id: 'S', tierLabel: 'S', color: '#f37b7d'}, 
    {id: 'A',tierLabel: 'A', color: '#ffe089'},
    {id: 'B',tierLabel: 'B', color: '#fbff7b'},
    {id: 'C',tierLabel: 'C', color: '#a2ef5a'},
    {id: 'D',tierLabel: 'D', color: '#4bdef1'},
    {id: 'F',tierLabel: 'F', color: '#cb8cf8'}
  ]);

  const [items, setItems] = useState([
    {id: '1', name: 'Item 1', tier: 'S'},
    {id: '2', name: 'Item 2', tier: 'A'},
    {id: '3', name: 'Item 3'},
    {id: '4', name: 'Item 4'},
    {id: '5', name: 'Item 5'},
    {id: '6', name: 'Item 6'}
  ]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const itemId = active.id as string;
    const newTier = over.id as string;

    setItems(() => items.map((item) => item.id === itemId ? {...item, tier: newTier} : item))
  }

  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <DndContext onDragEnd={handleDragEnd}>
        {tierListConfig.map((tier, index) => <TierList key={index} tier={tier} items={items}/>)}

        <div style={{marginTop: '50px'}}>
          <ItemList items={items}/>
        </div>
      </DndContext>
      
    </div>
  )
}

export default App