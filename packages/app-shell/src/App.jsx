import React, { Suspense } from 'react';

const RemoteButton = React.lazy(() => import("uiShell/Button"));

const App = () => {
  return (
    <div>
      <div>Hi, this is app shell.</div>
      <Suspense fallback={"loading"}>
        <RemoteButton onClick={() => {alert('hi')}}>
          hi this is remote button
        </RemoteButton>
      </Suspense>
    </div>
  )
}

export default App;