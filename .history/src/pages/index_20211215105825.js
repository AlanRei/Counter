import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleOpenCounter = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>App - Counter</title>
      </Head>
      <h1>App - Counter</h1>
      <button onClick={handleOpenCounter}>Abrir o contador</button>
      {isOpen && <button>Adicionar ao contador</button>}
      <h2>0</h2>
    </>
  )
}
