const CalInput = ({ result, setResult }) => {
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };

  return (
    <input
      className="px-4 py-2 text-xl text-right w-full rounded-xl focus:outline-pink-400"
      type="text"
      value={result}
      S
      onChange={onChangeResult}
    />
  );
};

export default CalInput;
