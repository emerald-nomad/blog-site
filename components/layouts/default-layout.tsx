import Link from "next/link"

const DefaultLayout: React.FC = ({children}) => {
  return (
    <>
      <nav>
        <div>
          <a className="border-bottom" href="/"><b>My digital garden</b></a>
        </div>
      </nav>
      <div className="wrapper">
        <main>{children}</main>
        <footer>This is the footer. Include anything you'd like here, like a link to an <Link  href="/about"><a className="internal-link">About</a></Link> page.</footer>
      </div>
    </>
  )
}

export default DefaultLayout