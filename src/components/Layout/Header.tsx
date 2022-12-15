import { Menu } from "components/ui-kit/Menu-bar/Menu"
import { Link } from "react-router-dom"
import logo from "../../ui/assets/images/yuo.png"

const PageHeader: React.FC = () => {
  return (
    <div className="container">
      <header className="bg-fixed top-0 z-30 w-full shadow-sm">
        <div className="flex items-center max-w-full mx-10">
          <Link to="/">
            <img
              src={logo}
              height="96"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="logo"></span>
          </Link>
          <div className="title font-bold">
            <h1>Южный округ</h1>
            <h3>войск национальной гвардии Российской Федерации</h3>
          </div>
        </div>
        <nav className="flex items-end justify-end mr-10">
          <Link to="/login">
            <button className="inline-block rounded-md transition duration-200 text-sm px-4 text-white bg-red-800 hover:bg-red-900">
              Вход
            </button>
          </Link>
        </nav>
      </header>
      <Menu />
      <hr className="border-1.5 border-red-900" />
    </div>
  )
}

export default PageHeader
