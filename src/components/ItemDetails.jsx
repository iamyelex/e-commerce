import { useLoaderData } from "react-router-dom";

/* eslint-disable react/prop-types */
const ItemDetails = () => {
  const item = useLoaderData();
  // console.log(item);

  const { price, title, thumbnail } = item;

  return (
    <section className="p-2">
      <img src={thumbnail} alt="item-image" className="w-full h-60 rounded-md" />
      <h2 className="font-semibold capitalize">{title}</h2>
      <p className="font-bold">#{price}</p>
      <h5 className="uppercase font-semibold bg-black p-1 rounded-md">
        product details
      </h5>
      <div className="bg-white p-2 rounded-lg text-black mt-2 divide-y divide-orange-400">
        <p className="capitalize font-semibold pb-1">description</p>
        <p className="text-sm pt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          aliquam cum. Culpa, cumque. Vel alias quisquam iste placeat fugit nam
          nihil esse voluptas est nemo? Dolores dolor labore voluptas eius
          dicta. Aperiam sit rerum illo totam. Quibusdam obcaecati, labore
          voluptatibus, temporibus, error quo numquam est deleniti dolor
          architecto iste.
        </p>
      </div>
      <button
        className="sticky bottom-20 font-bold bg-black w-full rounded-lg hover:text-black hover:bg-white outline-none transition-all duration-150 py-2 mt-2 uppercase"
        // onClick={addItems}
      >
        Add to Cart
      </button>
    </section>
  );
};

export async function Loader({ params }) {
  const details = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await details.json();
  console.log(data);
  return data;
}

export default ItemDetails;
