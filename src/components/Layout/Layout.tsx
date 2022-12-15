import { FC } from "react"
import PageHeader from "./Header"
import PageFooter from "./Footer"

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <PageHeader />
      <div className="container">{children}</div>
      <PageFooter />
    </>
  )
}

export default PageLayout
