export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-brand-navy mb-4">LLM Wiki</h1>
      <p className="text-muted text-lg max-w-md text-center">
        Persistent knowledge wiki powered by the Karpathy pattern. Markdown is
        the source of truth.
      </p>
    </main>
  );
}
