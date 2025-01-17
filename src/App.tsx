import './App.css'
import { TierList } from './components/TierList'
import { ItemList } from './components/ItemList'

function App() {
  const tierListConfig = [
    {tierLabel: 'S', color: '#f37b7d'}, 
    {tierLabel: 'A', color: '#ffe089'},
    {tierLabel: 'B', color: '#fbff7b'},
    {tierLabel: 'C', color: '#a2ef5a'},
    {tierLabel: 'D', color: '#4bdef1'},
    {tierLabel: 'F', color: '#cb8cf8'}
  ];

  const items = [
    {name: 'Item 1', tier: 'S'},
    {name: 'Item 1', tier: 'A'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'}
  ];

  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      {tierListConfig.map((tierLabel, index) => <TierList key={index} tier={tierLabel} items={items}/>)}
      <div style={{marginTop: '50px'}}>
        <ItemList items={items}/>
      </div>
    </div>
  )
}

export default App