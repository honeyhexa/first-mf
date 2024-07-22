import { queryClient } from "@/utils/react-query";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

// @ts-ignore
// const Components = dynamic(() => import("dashboard/charts").then((mod) => mod.Component));
// @ts-ignore
// const Table = dynamic(() => import("users/table").then((mod) => mod.DataTableDemo));

// @ts-ignore
const UserReqRes: React.FC<any> = dynamic(() => import("users/reqres").then((mod) => mod.ReqRes));
// @ts-ignore
const DashReqRes: React.FC<any> = dynamic(() => import("dashboard/reqres").then((mod) => mod.ReqRes));

const queryOptions = {
    staleTime: Infinity,
};

const Dashboard = () => {
    // const { isLoading, error, data, isFetching } = useQuery({
    //     queryKey: ['todos'], queryFn: () =>
    //         fetch(
    //             "https://reqres.in/api/users"
    //         ).then((res) => res.json())
    // })
    // if (isLoading) {
    //     return "Loading...";
    // }
    // if (error) {
    //     return "An error has occurred: " + error.message;
    // }
    return (
        <div>
            {/* <Components /> */}
            <DashReqRes client={queryClient} />
            <UserReqRes client={queryClient} />
            {/* {JSON.stringify(data)} */}
        </div>
    )
}

export default Dashboard;