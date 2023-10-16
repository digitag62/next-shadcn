import Link from "next/link";
import React from "react";

const getUser = async (slug: string) => {
  const res = await fetch(`https://api.github.com/users/${slug}`);
  return res.json();
};

const getRepos = async (slug: string) => {
  const res = await fetch(`https://api.github.com/users/${slug}/repos`);
  return res.json();
};

const DetailUserPage = async ({ params }: { params: { slug: string } }) => {
  const dataUser = await getUser(params.slug);
  const dataRepos = await getRepos(params.slug);

  return (
    <div className="container max-w-full h-screen flex flex-col gap-4 justify-center items-center">
      <Link href="/projects/search-github">Get Back</Link>
      <h1>Detail User: {params.slug}</h1>
      <div>
        {dataUser.login} - {dataUser.html_url}
      </div>
      <div className="flex flex-col justify-center items-center">
        {dataRepos.map((repo: any, idx: number) => (
          <div key={idx}>
            {repo.name} ({repo.visibility})
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailUserPage;
