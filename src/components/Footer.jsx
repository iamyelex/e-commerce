const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-28 text-black">
        <p className="text:xl lg:text-2xl font-bold">Subscribe newsletter</p>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            className="text-white py-2 lg:py-3 w-72 indent-4 outline-none bg-orange-400 rounded-lg lg:rounded-2xl placeholder:text-white"
          />
          <button></button>
        </form>
        <div className="flex space-x-2 items-center">
            <img src="./headphone.png" alt="telephone" className="w-8"/>
            <div className="flex flex-col">
                <p className="text-sm">Call us 24/7:</p>
                <a href="tel:+620123567789">(+62) 0123567789</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
