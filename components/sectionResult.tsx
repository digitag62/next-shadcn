import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  query: string;
}
const SectionResult = ({ query }: Props) => {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );

  return (
    <div className="ml-2">
      <h1>Mencari: {query}</h1>
      <div>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <div>
            {data.items.map((user: any) => (
              <ul key={user.login}>
                <li>
                  <Link href={`/projects/search-github/${user.login}`}>
                    {user.login} - {user.html_url}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionResult;
