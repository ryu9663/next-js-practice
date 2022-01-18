import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return (
    <button type="button" onClick={() => router.push("/about")}>
      Click me {id}
    </button>
  );
}
