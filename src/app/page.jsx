export const dynamic = "force-dynamic"; //SSR
// export const dynamic = "force-static"; //SSG


export const metadata = {
  title: "Fronpage",
  description: "Description",
};

// denne function genererer nyt img for hver gang browseren bliver reloaded
// https fetcher billeder fra message i data'en ned som gør billederne bliver vist i browseren
export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  return (
  <main>
    <h1>And so it begins...</h1>
    <img src={data.message} alt="random dog" />
  </main>
  );
}
