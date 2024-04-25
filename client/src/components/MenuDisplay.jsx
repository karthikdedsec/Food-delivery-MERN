import { food_list } from "../assets/assets";
import Card from "./Card";

const MenuDisplay = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold mb-5">Top dishes near you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {food_list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default MenuDisplay;
