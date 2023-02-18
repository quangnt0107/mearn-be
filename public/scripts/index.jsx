

const App = (props) => {
  const [soSv, setSoSv] = React.useState(0);
  const [keyword, setKeyWord] = React.useState('');
  
  const handleChangeKeyword = (e) => {
    console.log(keyword);
    setKeyWord( e.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1 className='text-center'>btvn1</h1>
        <div className='d-flex align-items-center gap-4 mb-5'>
          <p className='m-0'>So luong SV: {soSv}</p>
          <button
            className='btn btn-success'
            onClick={() => setSoSv(soSv +  1)}
          >Dang ky hoc</button>
        </div>

        <div className="d-flex align-items-center gap-4">
        <div className="mb-3">
          <label htmlFor="IKeyword" className="form-label">nhap tu khoa can tim:</label>
          <input 
            type="text" className="form-control" 
            id="IKeyword" 
            placeholder="moi nhap tu khoa"
            value={keyword}
            onChange={handleChangeKeyword}
          />
        </div>
          <p className='m-0'>tu khoa can tim: {keyword}</p>
        </div>
      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);
