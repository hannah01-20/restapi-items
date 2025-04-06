import CreateItem from '@/pages/CreateItem'
import { createFileRoute } from '@tanstack/react-router'

// This route will be used to create a new item
export const Route = createFileRoute('/create-item')({
  component: CreateItem,
})

