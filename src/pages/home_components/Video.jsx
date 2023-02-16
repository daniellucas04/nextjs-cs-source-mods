import Youtube from 'react-youtube';

export default function Video({ title, src }){
  const opts = {
    height: '330',
    width:'390',
  };

  return(
    <div className="bg-secondary p-4 rounded-sm">
      <div className="flex justify-center mb-2">
        {/* <Youtube videoId='0zl72thBKzo' opts={opts}  /> */}
      </div>
      <h1 className="text-xl ml-[0.7rem] font-bold text-left">{title}</h1>
    </div>
  )
}
