import { FinderIcon } from '../Icons/finderIcon';
import { PayIcon } from '../Icons/payIcon';
import { LayerIcon } from '../Icons/layerIcon';

export const Transaction = () => {
  const transValue = [
    {
      id: 1,
      icon: <FinderIcon />,
      bgColor: '#FFF5D9',
      transHeader: 'Deposite from my',
      date: '28 January 2021',
      price: '-$850',
      color: '#FF4B4A',
    },
    {
      id: 2,
      icon: <PayIcon />,
      bgColor: '#E7EDFF',
      transHeader: 'Deposite Paypal',
      date: '25 January 2021',
      price: '+$2,500',
      color: '#41D4A8',
    },
    {
      id: 3,
      icon: <LayerIcon />,
      bgColor: '#DCFAF8',
      transHeader: 'Jemi Wilson',
      date: '21 January 2021',
      price: '+$5,400',
      color: '#41D4A8',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl w-full h-50 flex flex-col gap-y-3 inter-font">
      {transValue.map((value) => {
        return (
          <div key={value.id} className="flex items-center justify-between">
            <div className="flex items-center gap-x-3 min-w-0 flex-1">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full "
                style={{ backgroundColor: value.bgColor }}
              >
                {value.icon}
              </div>

              <div className="">
                <h1
                  className="font-medium text-[13px] "
                  style={{ color: '#232323' }}
                >
                  {value.transHeader}
                </h1>
                <p
                  className="font-normal text-[12px] "
                  style={{ color: '#718EBF' }}
                >
                  {value.date}
                </p>
              </div>
            </div>

            <div>
              <p
                style={{ color: value.color }}
                className="text-[11px] font-medium"
              >
                {value.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
