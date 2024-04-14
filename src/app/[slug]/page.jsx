// notFound page (404)
import { notFound } from "next/navigation";

import { getAllDogs, getDogBySlug } from "@/lib/dogApi";

// [slug]/page.js
export async function generateStaticParams() {
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs`);
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({params}) {
  const { slug } = params;
  const data = await getDogBySlug(slug);
  if(data.message) return notFound();
  
  return{
    title: data.name,
    description: `Here is ${data.name}`,
  };
}


// Den params der bliver skrevet i { slug } i browseren er den tekst/img som bliver tilføjet som h1'eren
export default async function DogPage({params}) {
  const { slug } = params; 

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  // no dog found in API = return 404
  if(res.status !== 200) return notFound();

  const data = await res.json();


console.log(data)
  return (
  <main>
  <h1>{data.name} is {data.age} {data.age == "1" ? "year" : "years"} old</h1>
  {data.favouriteColor && <h2>{data.name} favorite color is {data.favouriteColor}</h2>}
  <img src={data.image.url} alt="dog" />
  </main>
  )
}
