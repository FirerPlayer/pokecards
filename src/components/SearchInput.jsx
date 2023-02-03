function SearchInput(props) {
  return (
    <div className="self-center bg-white rounded-full flex flex-row  items-center justify-center w-1/4 min-w-min mb-7">
      <input
        className="h-8 text-lg bg-transparent focus:outline-none min-w-[195px] w-full pl-3 mr-2"
        placeholder="Search Pokemon"
        onChange={props.onChange}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") props.onSearch();
        }}
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 pr-1 stroke-2 md:stroke-1 cursor-pointer transition-all ease-linear md:hover:stroke-2"
        onClick={props.onSearch}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}

export default SearchInput;
