import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import AddNewTodo from './addNewTodo'
import TodoList from './todoList'

const inter = Inter({ subsets: ['latin'] })
// NextComponentType<NextPageContext, {}, Props> = (props: Props)
export default function Home() {
  return (
    
      <div>
      <AddNewTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
      </div>
    
    
  )
}
