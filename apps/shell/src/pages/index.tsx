import dynamic from "next/dynamic";

// @ts-ignore
const Layout: React.FC<any> = dynamic(() => import("shared/layout"));
// @ts-ignore
const Charts: React.FC<any> = dynamic(() => import("dashboard/charts").then((mod) => mod.Charts));

const Page = () => (
    <Layout>
        <Charts />
    </Layout>
)
export default Page;