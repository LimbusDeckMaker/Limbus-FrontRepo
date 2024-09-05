interface MyIdentityCardProps {
  identities: Identity[];
  title: string;
  color: string;
}

const MyIdentityCard = ({ identities, title, color }: MyIdentityCardProps) => {
  return (
    <div className="text-primary-100 my-4">
      <div className="flex items-center">
        <h2 className="text-sm md:text-lg">{title}</h2>
        {title !== "기타" && (
          <img
            src={`assets/keyword/${title}.webp`}
            alt="dd"
            className="w-6 h-6"
          />
        )}
      </div>

      <hr className={`mt-1 mb-2 border-primary-100`} />
      <ul className="flex gap-2 flex-wrap text-center">
        {identities.map((identity) => (
          <li key={identity.id} className="mb-2 w-20 md:w-28 leading-4">
            <div className="w-20 h-16 md:w-28 md:h-20 rounded-full overflow-hidden md:mb-1">
              <img
                src={identity.beforeImage}
                alt={identity.name}
                className="object-contain w-full h-full scale-150"
              />
            </div>
            <span className="text-xs md:text-sm tracking-tight break-keep">
              {identity.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyIdentityCard;
