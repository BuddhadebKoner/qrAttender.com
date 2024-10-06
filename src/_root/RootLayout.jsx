import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
  return (
    <>
      <div className="flex w-full h-full flex-col">
        <Navbar />
        <section>
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default RootLayout