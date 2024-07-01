import React , {useId} from 'react'


function InputBox(
  {
    label,
    amount,
    onAmountChange,
    onCurrencychange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    //if any user would don't want to give amount this will come in handy
    currencyDisable = false,
    //if any user would don't want to give currency this will come in handy
    className = "", }
) {

  const amountInputId = useId()
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            ${label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          // this onchange event handler that triggers the value of the unput field changes
          //&&: This is a logical AND operator. It ensures that onAmountChange exists and is a function before attempting to call it.
          //Number(e.target.value): This part converts the input value to a number using the 
          //Number() function. It extracts the value of the input field from the event object e and converts it to a number data type before passing it to the onAmountChange function.
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencychange &&
              onCurrencychange(Number(e.target.value))}
            disabled={currencyDisable}
          >

            {currencyOptions.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}


          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox;


