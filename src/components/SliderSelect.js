import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        label="Home Value"
        value={data.homeValue}
        unit="$"
        amount={data.homeValue}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
      />

      <SliderComponent
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        step={100}
        label="Down Payment"
        unit="$"
        value={data.downPayment}
        amount={data.downPayment}
        onChange={(e, value) =>
          setData({
            ...data,

            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
      />

      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        label="Loan Amount"
        unit="$"
        value={data.loanAmount}
        amount={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
      />

      <SliderComponent
        defaultValue={data.interestRate}
        min={0}
        max={20}
        step={0.1}
        label="Interest Rate"
        unit="%"
        value={data.interestRate}
        amount={data.interestRate}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
      />
    </>
  );
};

export default SliderSelect;
