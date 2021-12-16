import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleOpenCounter = () => {
    setIsOpen(true)
  }

  const handleClosedCounter = () => {
    setIsOpen(true)
  }

  const handleAddCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <Head>
        <title>App - Counter</title>
      </Head>
      <h1>App - Counter</h1>

      <button onClick={handleOpenCounte}>Abrir o contador</button>
      {isOpen && (
        <button onClick={handleAddCounter}>Adicionar ao contador</button>
      )}
      <button onClick={handleClosedCounter}>Fechar contador</button>

      <h2>{counter}</h2>
    </>
  )
}
