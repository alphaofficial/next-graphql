import { Inter } from "next/font/google";
import { dehydrate } from "@tanstack/react-query";
import { useUsersQuery } from "@/generated/graphql";
import { serialize } from "@/utils/serialize";
import { client } from "@/lib/client";
import PageLayout from "@/layout/page-layout";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  await client.prefetchQuery(
    useUsersQuery.getKey(),
    useUsersQuery.fetcher({ limit: 10 })
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(client)),
    },
  };
}

export default function Home() {
  const { user, error, isLoading } = useUser();
  const { data } = useUsersQuery(
    { limit: 10 },
    {
      queryKey: useUsersQuery.getKey(),
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <PageLayout>
      <div className="px-4 py-2">
        <div className="flex w-full justify-end space-x-4">
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
        </div>

        <div className="space-y-4">
          <h1 aria-label="heading" className="text-4xl font-bold">
            Hello graphql!
          </h1>
          <p className="text-xl">Welcome to your new app!</p>
          {!user && <p aria-label="loginText">Log in to see your followers.</p>}
        </div>

        {user && (
          <div className="flex flex-col space-y-4">
            <div>
              <p className="" aria-label="authUser">
                {user.name}
              </p>
            </div>
            <div>
              <img src={user.picture || ""} alt={user.name || ""} />
            </div>
            <div>
              <p>{user.email}</p>
            </div>
          </div>
        )}

        {user && (
          <div className="mt-4 space-y-4">
            <h2 className="text-2xl">Followers</h2>
            <div className="space-y-2">
              {data?.users.map((user) => (
                <div key={user.id}>
                  <p>{user.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
