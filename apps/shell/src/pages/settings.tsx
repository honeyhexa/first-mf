import { queryClient } from "@/utils/react-query";
import dynamic from "next/dynamic";

// @ts-ignore
const Layout: React.FC<any> = dynamic(() => import("shared/layout"));
// @ts-ignore
const UserReqRes: React.FC<any> = dynamic(() => import("settings/user").then((mod) => mod.UserReqRes));
// @ts-ignore
const AvatarReqRes: React.FC<any> = dynamic(() => import("users/avatar").then((mod) => mod.AvatarReqRes));

const Page = () => (
    <Layout>
        <AvatarReqRes client={queryClient} />
        <UserReqRes client={queryClient} />
    </Layout>
)
export default Page;