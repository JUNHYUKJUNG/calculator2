const CalNumberBtn = ({ result, setResult, number }) => {
  const onClickNumber = () => {
    if (result == "0") {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };

  return (
    <button className="btn-style" onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalNumberBtn;
