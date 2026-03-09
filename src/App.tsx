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

type Item = { id: string; name: string; tier?: string };

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(name: string) {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), name }]);
  }

  function handleDeleteItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

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
            <TierList
              key={tier.id}
              tier={tier}
              items={items}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
        <div className="pool-container">
          <ItemList
            items={items}
            onAddItem={handleAddItem}
            onDelete={handleDeleteItem}
          />
        </div>
      </DndContext>
    </div>
  );
}

export default App;
