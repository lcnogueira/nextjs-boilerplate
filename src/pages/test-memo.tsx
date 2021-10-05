import { Item } from 'components/Item'
import { useState } from 'react'

export default function List() {
  const [items, setItems] = useState<string[]>([])

  function addItemToList() {
    setItems((items) => [...items, `Item ${items.length}`])
  }

  return (
    <div>
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => (
          <Item key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}
