import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Button } from "@repo/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card"
import { Checkbox } from "@repo/ui/checkbox"
import { Input } from "@repo/ui/input"
import React from 'react'

const AvatarData = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    staleTime: Infinity,
    queryKey: ['user'], queryFn: () =>
      fetch(
        "https://reqres.in/api/users/2"
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
      <div className="grid gap-6">
        <Card x-chunk="dashboard-04-chunk-1">
          <CardHeader>
            <CardTitle>First name</CardTitle>
            <CardDescription>
              Used to identify your store in the marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="First name" value={data?.data?.first_name} />
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card x-chunk="dashboard-04-chunk-2">
          <CardHeader>
            <CardTitle>Last name</CardTitle>
            <CardDescription>
              The directory within your project, in which your plugins are
              located.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input
                placeholder="Last name"
                value={data?.data?.last_name}
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="include" defaultChecked />
                <label
                  htmlFor="include"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Allow administrators to change the directory.
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export const AvatarReqRes = ({ client }: any) => {
  return (
    <QueryClientProvider client={client}>
      <AvatarData />
    </QueryClientProvider>
  )
}