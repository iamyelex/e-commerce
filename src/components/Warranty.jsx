// eslint-disable-next-line react/prop-types
const Warranty = ({ icon, title, summary }) => {
  return (
    <div className="flex space-x-3 items-center justify-center text-black">
      <img src={icon} alt="icon" className="w-12"/>
      <div className="flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <p className="text-md font-thin w-40">{summary}</p>
      </div>
    </div>
  );
};

export default Warranty;
