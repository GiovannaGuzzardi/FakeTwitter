import React, { useState } from 'react'
import { Header } from '../components/header'
import { Now } from '../components/now'
import { Post } from '../components/post'
import { Search } from '../components/search'
import { SideBar } from '../components/sidebar'


function App() {
  const [count, setCount] = useState(0)
  const [hei, sethei] = useState(true) // fazer um context
  const [sideBarStatus, setSideBarStatus] = useState(true) // fazer um context

  const close = () => {
    setSideBarStatus(false)
  }
  const open = () => {
    setSideBarStatus(true)
  }

  const list: React.ReactNode[] = [
    <p>bla bla bla</p>,
    <p>sit quos cum ratione quaerat? Praesentium distinctio iste cum consectetur quos ratione voluptatum facilis aspernatur labore qui sit rerum omnis ex, laboriosam corporis minima cupiditate voluptate! Non?</p>,
    <a href="produtos.html">produtos.html</a>,
    <p>#tag </p>
  ]

  return (
    <div className={`App w-[100vw] ${hei ? "max-h-[100vh] overflow-hidden" : "min-h-[100vh]"} flex flex-col items-center bg-neutral-800 text-neutral-0 `}>
      <Header />
      <div className='w-[100vw]  md:my-[2rem] md:px-[1rem] grid  md:grid-cols-[256px_1fr_280px] max-md:grid-cols-[ifr]  items-start ' >
        <div className={`md:sticky top-[7rem] max-md:w-[100vw] md:flex ${sideBarStatus ? "hidden" : "flex"} `}>
          <SideBar />
        </div>
        <main className='mx-[1vw]'>
          <Post nameUser='giovanna' roleUser='deelope' text={list} />
          <Post nameUser='Diego' roleUser='deelope' text={list} />
          <Post nameUser='Maria' roleUser='deelope' text={list} />
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