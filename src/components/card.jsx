import { CardChipWhite, CardChipBlack } from '../Icons/cardChip';
export const Card = ({
  title,
  amount,
  bgColor,
  gradientBottom,
  borderTop,
  border,
  cardColor,
}) => {
  return (
    <div
      className={`${bgColor} p-4  w-full h-40 flex flex-col justify-between  ${border ? 'card-border' : ''}`}
      style={{ borderRadius: '20px' }}
    >
      <div>
        {cardColor === 'colored' && <CardChipWhite />}
        {cardColor === 'white' && <CardChipBlack />}
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-semibold">{amount}</p>
      </div>
      <div
        className={`-mx-4 px-4 pt-2
        ${borderTop ? 'border-top' : ''}
        ${
          gradientBottom
            ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]'
            : ''
        }`}
      >
        <h1>Ololade</h1>
      </div>
    </div>
  );
};
