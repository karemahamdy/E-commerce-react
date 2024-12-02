import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../ui/Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />
      
      <main className="mx-auto max-w-3xl">
        <Outlet/>
      </main>
       <Footer />
    </div>
  )
}
