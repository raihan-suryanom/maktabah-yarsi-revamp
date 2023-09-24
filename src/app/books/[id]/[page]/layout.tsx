export default function Layout(props: {
  content: React.ReactNode;
  search: React.ReactNode;
}) {
  return (
    <>
      {props.content}
      {props.search}
    </>
  );
}
