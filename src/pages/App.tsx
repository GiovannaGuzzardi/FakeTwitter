import React, { useState } from 'react'
import { Header } from '../components/header'
import { Now } from '../components/now'
import { Post } from '../components/post'
import { Search } from '../components/search'
import { SideBar } from '../components/sidebar'


const posts = [
  {
    id: 1,
    author: "Diego",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam nemo minus, totam consequatur temporibus esse sint voluptatem animi quasi odit aut deserunt beatae cumque voluptates deleniti sit libero dolorem.",
  },
  {
    id: 2,
    author: "Debora",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam nemo minus, totam consequatur temporibus esse sint voluptatem animi quasi odit aut deserunt beatae cumque voluptates deleniti sit libero dolorem.",
  }
]

function App() {
  const [count, setCount] = useState(0)
  const [hei, sethei] = useState(false) // fazer um context
  const [sideBarStatus, setSideBarStatus] = useState(true) // fazer um context

  const close = () => {
    setSideBarStatus(false)
  }
  const open = () => {
    setSideBarStatus(true)
  }
  return (
    <div className={`App w-[100vw] ${hei ? "max-h-[100vh] overflow-hidden" : "min-h-[100vh]"} flex flex-col items-center bg-neutral-800 text-neutral-0 `}>
      <Header />
      <div className='w-[100vw]  md:my-[2rem] md:px-[1rem] grid  md:grid-cols-[256px_1fr_280px] max-md:grid-cols-[ifr]  items-start ' >
        <div className={`md:sticky top-[7rem] max-md:w-[100vw] md:flex ${sideBarStatus ? "hidden" : "flex"} `}>
          <SideBar />
        </div>
        <main className='mx-[1vw]'>
          <Post />
          <Post />
          <Post />
        </main>
        <div className='sticky top-[7rem] z-0 max-md:hidden '>
          <Search />
          <Now />
        </div>
      </div>
    </div>
  )
}

export default App