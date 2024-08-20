import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center font-mono text-2xl">
        <h1>
          Welecome To Coding Ka Kida
        </h1>
        
        </div>
        <a className=" p-10 underline" href='/chat'>Go to GPT </a>
    </main>
  );
}
