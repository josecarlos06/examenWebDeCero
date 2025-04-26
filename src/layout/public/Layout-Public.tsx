import { Outlet } from "react-router"


const LayoutPublic = () => {
  return (
    <main className="h-screen bg-primary flex justify-center items-center">
      <Outlet/>
    </main>
  )
}

export default LayoutPublic