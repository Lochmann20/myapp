import Link from 'next/link'

export default async function Header() {
    const res = await fetch(`https://nice-dogs.vercel.app/api/dogs`);
    const dogs = await res.json();

  return (
    <nav className="bg-black text-white p-2">
        <ul className="flex gap-2">
            <li>
                <Link href={"/"} prefetch={false}>
                    Home
                </Link>
            </li>
            
                {dogs.map((dog) => {
                    const { name, slug } = dog;
                    return (
                    <li key={slug}>
                        <Link href={`/${slug}`} prefetch={false}>
                            {name}
                        </Link>
                    </li>
                    );
                })}
        </ul>
    </nav>
  );
}



// import Link from 'next/link'

// export default async function Header({params}) {
//     const { slug } = params;

//     const url = `https://nice-dogs.vercel.app/api/dogs`;
//     const res = await fetch(url);

//   return (
//     <nav className="bg-black text-white p-2">
//         <ul className="flex gap-2">
//             <li>
//                 <Link href={"/"} prefetch={false}>
//                     Home
//                 </Link>
//             </li>
//             <li>
//                 <Link href={"/henry", "/pete", "/tommi"} prefetch={false}>
//                     <h1>{data.slug} {data.slug} {data.slug}</h1>
//                 </Link>
//             </li>
//         </ul>
//     </nav>
//   );
// }





