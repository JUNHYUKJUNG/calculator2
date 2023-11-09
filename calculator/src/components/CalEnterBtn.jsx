const CalEnterBtn = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(Number(temp) / Number(result)));
        break;
    }

    setTemp("");
    setOperator("");
  };

  return (
    <button
      className="btn-style bg-green-500 active:bg-green-700"
      onClick={onClickEnter}
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
