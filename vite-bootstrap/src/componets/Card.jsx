import Modal from "./Modal";
export default function Card() {
  const sty = {
    width: "18rem;",
  };

  return (
    <div>
      <div className="card" style={sty}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-primary">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary" onClick={<Modal />}>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
