import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleOpenCounter = () => {
    setIsOpen(true)
  }

  const handleAddCounter = () => {
    setCounter(counter + 1)
  }

  const handleRemoveCounter = () => {
    setCounter(counter - 1 >= 0)
  }

  return (
    <>
      <Head>
        <title>App - Counter</title>
      </Head>
      <h1>App - Counter</h1>

      <button onClick={handleOpenCounter}>Abrir o contador</button>
      {isOpen && (
        <button onClick={handleAddCounter}>Adicionar ao contador</button>
      )}

      {isOpen && (
        <button onClick={handleRemoveCounter}>Diminuir contador</button>
      )}

      <h2>{counter}</h2>
    </>
  )
}
