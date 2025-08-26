import Header from "./Header"
import Table from "./Table"

const Content = () => {
    return (
        <section className="flex flex-col px-4 py-5 md:px-8 gap-y-5">
            <Header />
            <Table />
        </section>
    )
}

export default Content