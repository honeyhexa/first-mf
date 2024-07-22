import { Button } from '@repo/ui/button';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import React from 'react'

const RepoData = () => {
    const { isLoading, error, data, isFetching } = useQuery({
        staleTime: Infinity,
        queryKey: ['todos'], queryFn: () =>
            fetch(
                "https://reqres.in/api/users"
            ).then((res) => res.json())
    })
    if (isLoading) {
        return "Loading...";
    }
    if (error) {
        return "An error has occurred: " + error.message;
    }
    return (
        <>
            <h3>{data.page}</h3>
            <p>{data.per_page}</p>
            <strong>👀 {data.total}</strong>{" "}
            <strong>✨ {data.total_pages}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
        </>
    );
}

export const ReqRes = ({ client }: any) => {
    const [show, setShow] = React.useState(false);
    return (
        <QueryClientProvider client={client}>
            <Button
                variant="outline"
                size="sm"
                onClick={() => setShow(!show)}
            >
                Fetch
            </Button>
            {show ? <RepoData /> : null}
        </QueryClientProvider>
    )
}