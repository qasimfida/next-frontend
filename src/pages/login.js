import WithLayout from "../component/layout";
import Login from "../container/Login";

export default function Home() {
  return (
    <>
      <WithLayout>
        <Login />
      </WithLayout>
    </>
  );
}
