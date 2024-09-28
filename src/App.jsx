import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Header from './components/Header'
import Landing from './pages/landing'
import QuizPage from "./components/QuizPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <section className="bg-gray-200/70 h-screen">
        <section className='px-4 sm:px-0 sm:max-w-5xl mx-auto py-8 space-y-10 sm:space-y-24'>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </section>
      </section>
    </BrowserRouter>
  )
}

export default App
