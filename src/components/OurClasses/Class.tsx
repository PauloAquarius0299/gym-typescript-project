

type Props = {
    name: string;
    description:  string | undefined;
    image: string;
   
}

const Class = ({name, description, image}: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 cursor-pointer text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            {description && <p className="mt-5">{description}</p>}
        </div>
        <img src={`${image}`} alt={image} />
    </li>
  )
}

export default Class;