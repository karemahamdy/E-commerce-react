import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../ui/Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />
      
      <main className="">
        <Outlet/>
      </main>
       <Footer />
    </div>
  )
}
