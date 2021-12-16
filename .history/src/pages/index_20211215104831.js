import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [] = useState(false)

  return (
    <>
      <Head>
        <title>App - Counter</title>
      </Head>
      <h1>App - Counter</h1>
      <button>Abrir o contador</button>
      <button>Adicionar ao contador</button>
    </>
  )
}
