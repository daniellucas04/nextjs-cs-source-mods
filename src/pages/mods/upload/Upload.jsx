import { FiLink, FiUploadCloud } from 'react-icons/fi'
import Title from '@/pages/typography/Title';

export default function Upload(){

  function handleSubmit(event){
    event.preventDefault();
  }

  return(
    <>
      <Title text={"Complete the form to upload your mod"} />
      <main className='flex'>
        <div className="w-full h-screen flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-[40rem] rounded ml-10 gap-4 flex flex-col bg-secondary p-10">
            
            <label className='text-xl' htmlFor="title">Title</label>
            <div className="relative">
              <div className="input-icon">

              </div>
              <input className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10" id= "title" type="text"/>
            </div>

            <label className='text-xl' htmlFor="description">Description</label>
            <textarea id="description" cols="30" rows="10" className='resize-none'></textarea>
            
            <label className='text-xl' htmlFor="youtube-link">Video URL</label>
            <div className="relative">
              <div className="input-icon">
                <FiLink size={20} />
              </div>
              <input className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10" id="youtube-link" type="text"/>
            </div>

            <label className='text-xl' htmlFor="thumbnail">Thumbnail</label>
            <input className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10" id="thumbnail" type="file"/>
            
            <label className='text-xl' htmlFor="upload_file">Upload your files</label>
            <div className='relative'>  
              <div className='input-icon'>
                <FiUploadCloud/>
              </div>
              <input className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10" type="file" id="upload_file" />
            </div>
            <button className="button-link text-primary-text hover:text-secondary-text bg-primary px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md">Upload mod</button>
          </form>  
        </div>
      </main>
    </>
  )
}