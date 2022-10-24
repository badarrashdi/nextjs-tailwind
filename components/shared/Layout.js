import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, props }) {
  return (
    <>
      <Header props={props} />
      {children}
      <Footer />
    </>
  )
}