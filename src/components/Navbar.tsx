import { Input } from "./ui/input"

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between items-center p-2'>
      <div>
        WeatherVue
      </div>
      <div>
        <Input />
      </div>
    </nav>
  )
}

export default Navbar
