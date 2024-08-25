import { Content } from "../layout/components/Content"
import { SideBar } from "../layout/components/SideBar"

export default function ProductionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <SideBar />
        <Content>
            {children}
        </Content>
    </section>
}