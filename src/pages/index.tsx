import { dehydrate } from "@tanstack/react-query";
import { useCharactersByVillageQuery } from "@/client/generated/graphql";
import { serialize } from "@/common/utils/serialize";
import { client } from "@/client/lib/client";
import PageLayout from "@/client/layout/page-layout";

export async function getServerSideProps() {
  await client.prefetchQuery(
    useCharactersByVillageQuery.getKey({ village: "leaf" }),
    useCharactersByVillageQuery.fetcher({ village: "leaf" })
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(client)),
    },
  };
}

export default function Home() {
  const { data } = useCharactersByVillageQuery({ village: "leaf" });

  return (
    <PageLayout>
      <div className="bg-white dark:bg-slate-800 px-12 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white min-h-screen">
        <div className="space-y-4">
          <h1 aria-label="heading" className="text-4xl font-bold">
            Hajimemashite 👋🏽
          </h1>
          <p>Welcome to Naruto world</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Characters</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {!data?.characters?.results?.length && <li>No users found</li>}
            {data?.characters?.results?.map((character) => (
              <div key={character._id}>
                <div className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={character.avatarSrc || ""}
                      alt={character.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <div className="flex justify-between bg-green-400 rounded-sm p-1">
                        <h3 className="text-sm">
                          <a href="#">{character.name}</a>
                        </h3>
                        <p className="text-sm font-bold">{character.rank}</p>
                      </div>
                      <p className="mt-1 text-sm">{character.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
