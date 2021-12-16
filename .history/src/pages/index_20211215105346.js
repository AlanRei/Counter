import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>App - Counter</title>
      </Head>
      <h1>App - Counter</h1>
      <button onClick={handleOpenCounter}>Abrir o contador</button>
      {isOpen && <button>Adicionar ao contador</button>}
    </>
  )
}
