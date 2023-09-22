export default function Layout(props: {
  children: React.ReactNode;
  search: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.search}
    </>
  );
}
