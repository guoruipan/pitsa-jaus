interface Props {
    imgUrl : string,
    text : string
}

export default function Card ({ imgUrl, text } : Props) {
    return (
      <div className="border border-slate-500 rounded-lg shadow-lg p-3 m-2.5 w-52" >
        <img src={imgUrl} alt="Imagen" className="max-w-full h-auto" />
        <p className="font-bold">{text}</p>
      </div>
    );
  };