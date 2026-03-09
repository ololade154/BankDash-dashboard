import { CardSlider } from './cardSlider';
import { Transaction } from './transaction';
export const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-8 md:items-center">
        <div className="min-w-0 md:flex-2 ">
          <div className="flex justify-between">
            <div>Hello</div>
            <div>Ololade</div>
          </div>
          <CardSlider />
        </div>
        <div className="min-w-0 md:flex-1">
          <div>Hello</div>
          <Transaction title="ololade" amount="$5000" />
        </div>
      </div>
    </div>
  );
};
