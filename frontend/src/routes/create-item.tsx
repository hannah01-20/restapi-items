import CreateItem from '@/pages/CreateItem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-item')({
  component: CreateItem,
})

