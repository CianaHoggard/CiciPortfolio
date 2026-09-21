export default function PageLoader({ loading }) {
  return (
    <div className={`pageLoader ${loading ? "" : "hidden"}`}>
      <div className="triangleLoader" />
    </div>
  );
}
