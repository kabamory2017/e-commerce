import Loader from "../components/Loader";

export const GetProductLoader = () => {
    let loader = [];
    for (let index = 0; index < 8; index++) {
      loader.push(
        <div key={index} className="col-12 col-md-3 mb-3">
          <Loader />
        </div>
      )
    }
    return loader;
}