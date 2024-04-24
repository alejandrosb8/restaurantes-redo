export default function Home({ params }: { params: { subdomain: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Subdomain</h1>
      <p className="text-2xl mt-12">Subdomain: {params.subdomain}</p>
    </main>
  );
}
