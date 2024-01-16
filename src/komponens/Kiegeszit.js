export default function Kieg({ aktAlap }) {
    return (
      <div className="mb-3">
        <label htmlFor="szo" className="form-label"></label>
        <input type="text" className="form-control" id="szo" placeholder={aktAlap} name="szo"/>
      </div>
    );
  }
  