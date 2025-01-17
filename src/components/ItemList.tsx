type ItemList = {
  items: {name: string}[];
}

export const ItemList = ({items}: ItemList) => {

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
      {items.map((item) => {
        return (
          <div style={{height: 80, width: 80,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebebeb'}}>
            <span>{item.name}</span>
          </div>
        )})}
    </div>
  )
}