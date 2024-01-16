import Kieg from './Kiegeszit';

export default function Mondat({ mondat, aktAlap }) {
  return (
    <p>
      {mondat.map((szo, index) => {
        if (szo === "_") {
          return <Kieg key={index} aktAlap={aktAlap} />;
        }
        return <span key={index}>{szo} </span>;
      })}
    </p>
  );
}
