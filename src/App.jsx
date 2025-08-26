import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function App() {


  return (
    <main className=" h-auto grid grid-cols-1 md:grid-cols-[300px_1fr] ">
      <Sidebar />
      <Content />
    </main>
  )
}
