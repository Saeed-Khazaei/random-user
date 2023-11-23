import Layout from "@/components/Layout";
import UserContainer from "@/modules/User/Container";

export default function Home() {
  return (
    <Layout>
      <UserContainer />
      <div className="flex flex-col gap-2 w-full items-center max-w-sm">
        <hr className="w-full border-gray-100" />
        <p className="text-xs text-gray-300">Have a nice day!</p>
      </div>
    </Layout>
  );
}
