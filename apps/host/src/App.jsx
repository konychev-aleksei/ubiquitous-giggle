import { Suspense, lazy } from 'react'

const RemoteButton = lazy(() => import('remote/Button'))

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  )
}

export default App
