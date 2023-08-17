



// eslint-disable-next-line react/prop-types
export function LearningCard({ text, iconPath }) {
  

  return (
    <section className="flexcol justify-center align-middle  border 1 px h-[80px] w-[250px]">
        <div className=''>
      <div className="">
        <img className='object-contain w-[35px]' src={iconPath}  alt='' />
      </div>
      <p className="text-xs font-poppins font-bold text-center text-about-text">{text}</p>
    </div>
      </section>     
  );
}
