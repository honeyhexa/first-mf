import dynamic from "next/dynamic";

// @ts-ignore
const Layout: React.FC<any> = dynamic(() => import("shared/layout"));
// @ts-ignore
const DataTable: React.FC<any> = dynamic(() => import("users/table").then((mod) => mod.DataTable));

const Page = () => (
    <Layout>
        <DataTable />
    </Layout>
)
export default Page;