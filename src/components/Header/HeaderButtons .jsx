const HeaderButtons = () => (
  <div className="flex space-x-4">
    <button
      className="bg-mainColor hover:bg-white
           hover:text-black hover:border hover:border-mainColor text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Zobacz zdjęcia
    </button>
    <button className="border border-mainColor hover:bg-mainColor text-mainColor hover:text-white font-bold py-2 px-4 rounded">
      Zadzwoń do nas
    </button>
  </div>
);

export default HeaderButtons;
