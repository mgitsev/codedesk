import Head from "next/head";
import HomePageHeader from "../components/HomePageHeader";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codedesk - Homepage</title>
      </Head>
      <HomePageHeader />
      <main className="flex justify-center items-center w-full gap-1">
        <div className="w-3/12 bg-white min-h-full flex flex-col justify-center items-start">
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            <Link href="/">Home</Link>
          </div>
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            Software development
          </div>
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            Software testing
          </div>
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            DevOps
          </div>
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            Design, UX, UI
          </div>
          <div className="flex justify-start pl-10 items-center h-12 w-full text-lg font-semibold">
            Product management
          </div>
        </div>
        <div className="w-5/12 bg-white">bla</div>
        <div className="w-4/12 bg-white">aha</div>
      </main>
    </>
  );
}
