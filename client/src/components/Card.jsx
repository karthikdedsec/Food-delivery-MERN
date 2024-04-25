const Card = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden animate-fade-in">
      <img
        className="object-contain hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        src={item.image}
        alt="image"
      />

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-sm">{item.description}</p>
        <div className="card-actions items-center justify-between">
          <p className="text-[tomato]">${item.price}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
