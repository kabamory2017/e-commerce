import Skeleton from "react-loading-skeleton";

const Loader = () => {
  return (
    <div className="card">
      <Skeleton style={{ height: 200 }} count={1} />
      <div className="card-body">
        <Skeleton count={1} />
        <Skeleton style={{ width: 80 }} count={1} />
        <div className="my-2 d-flex">
          <Skeleton className="me-2" style={{ width: 80 }} count={1} />
          <Skeleton style={{ width: 80 }} count={1} />
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Skeleton style={{ width: 80, height: 24 }} count={1} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
