// eslint-disable-next-line react/prop-types
const Testimonial = ({ name, summary, image }) => {
  return (
    <div className="border border-black rounded-lg p-3">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 p-1 rounded-full object-contain border border-black border-dotted"
        />
        <p className="text-lg capitalize">{name}</p>
      </div>
      <p className="bg-black rounded-lg mt-2 lg:mt-4 px-4 py-2">{summary}</p>
    </div>
  );
};

export default Testimonial;
