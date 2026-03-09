import './App.css'
import { TierList } from './components/TierList'
import { ItemList } from './components/ItemList'
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';

const TIER_CONFIG = [
  { id: 'S', tierLabel: 'S', color: '#f37b7d' },
  { id: 'A', tierLabel: 'A', color: '#ffb347' },
  { id: 'B', tierLabel: 'B', color: '#fbff7b' },
  { id: 'C', tierLabel: 'C', color: '#a2ef5a' },
  { id: 'D', tierLabel: 'D', color: '#4bdef1' },
  { id: 'F', tierLabel: 'F', color: '#cb8cf8' },
];

function App() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
  ]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const itemId = active.id as string;
    const destination = over.id as string;

    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, tier: destination === 'pool' ? undefined : destination }
          : item
      )
    );
  }

  return (
    <div className="app">
      <h1 className="app-title">Tier List</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="tier-list-container">
          {TIER_CONFIG.map((tier) => (
            <TierList key={tier.id} tier={tier} items={items} />
          ))}
        </div>
        <div className="pool-container">
          <ItemList items={items} />
        </div>
      </DndContext>
    </div>
  );
}

export default App;
