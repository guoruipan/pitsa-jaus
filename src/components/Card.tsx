interface Props {
    imgUrl : string,
    texto : string
}

export default function Card ({ imgUrl, texto } : Props) {
    return (
      <div className="border border-slate-500 rounded-lg shadow-lg p-3 m-2.5 w-52" >
        <img src={imgUrl} alt="Imagen" className="max-w-full h-auto" />
        <p className="font-bold">{texto}</p>
      </div>
    );
  };