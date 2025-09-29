import {Header} from "@/components/header";

const Layout = ({children}: {children : React.ReactNode}) => {
    return (
<main className="min-h-screen text_gray-400"  >
    <Header />
    <div className= "container py-10">
        {children}
    </div>
</main>
)
}
export default Layout
