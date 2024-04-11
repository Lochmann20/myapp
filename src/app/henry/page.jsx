async function getHenry() {
    const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
    const data = await res.json();
    return data;
}


export default async function HenryPage() {
  return (
    <main>
    <h1>hej</h1>
    </main>
  );
}
