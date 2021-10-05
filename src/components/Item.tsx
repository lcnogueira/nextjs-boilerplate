import { memo } from 'react'

type ItemProps = {
  title: string
}

export function Item({ title }: ItemProps) {
  return <li>{title}</li>
}

export const MemoizedItem = memo(Item)
