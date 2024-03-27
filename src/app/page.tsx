import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* este div ocupará todo el alto de la pantalla */}
      <Nav/>
      <main className="container mx-auto bg-blue-500">
        <h1>Esto es el main</h1>
      </main>
      <footer></footer>
    </div>
  );
}
