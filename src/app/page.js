import Homepage from "@/components/Homepage";
import Nav from "@/components/Nav";

export default function Home(){
  return(
    <div className='bg-zinc-900'>
      <Nav/>
      <Homepage/>
    </div>
  )
}