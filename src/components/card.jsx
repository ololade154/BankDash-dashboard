import { CardChipWhite, CardChipBlack } from '../Icons/cardChip';
import { CardTag, CardTagTwo } from '../Icons/cardTag';
export const Card = ({
  title,
  amount,
  bgColor,
  gradientBottom,
  borderTop,
  border,
  cardColor,
  cardTag,
  textColor,
}) => {
  return (
    <div
      className={`${bgColor} p-6 lato-font max-w-full flex flex-col gap-y-4  ${border ? 'card-border' : ''} 
      ${textColor ? 'text-white' : 'card-text-three'}`}
      style={{ borderRadius: '20px' }}
    >
      <div className="flex justify-between items-center ">
        <div>
          <h1
            className={`${textColor ? 'card-text-one' : 'card-text-two'} text-[11px]  font-normal`}
          >
            {title}
          </h1>
          <p className="text-[16px] font-semibold">{amount}</p>
        </div>
        {cardColor === 'colored' && <CardChipWhite />}
        {cardColor === 'white' && <CardChipBlack />}
      </div>
      <div className="flex items-center gap-28">
        <div>
          <p
            className={`${textColor ? 'card-text-one' : 'card-text-two'} text-[10px] font-normal`}
          >
            CARD HOLDER
          </p>
          <span className=" text-[16px]  font-semibold">Eddy Cusuma</span>
        </div>
        <div>
          <p
            className={`${textColor ? 'card-text-one' : 'card-text-two'} text-[10px] font-normal`}
          >
            VALID THRU
          </p>
          <span className=" text-[16px]  font-semibold">12/22</span>
        </div>
      </div>
      <div
        className={`-mx-6 px-6 pt-2
        ${borderTop ? 'border-top' : ''}
        ${
          gradientBottom
            ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]'
            : ''
        } flex justify-between items-center`}
      >
        <p className="md:text-[15px] text-[17px] font-semibold">
          3778 **** **** 1234
        </p>
        <div>
          {cardTag === 'hash' && <CardTag />}
          {cardTag === 'deephash' && <CardTagTwo />}
        </div>
      </div>
    </div>
  );
};
