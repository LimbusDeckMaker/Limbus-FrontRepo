interface MyIdentityCardProps {
  identities: Identity[];
  title: string;
  color: string;
}

const MyIdentityCard = ({ identities, title, color }: MyIdentityCardProps) => {
  return (
    <div className="text-primary-100 my-4">
      <div className="flex items-center">
        <h2 className="text-lg">{title}</h2>
        <img
          src={`assets/keyword/${title}.webp`}
          alt="dd"
          className="w-6 h-6"
        />
      </div>

      <hr className={`mt-1 mb-2 border-primary-100`} />
      <ul className="flex gap-2 flex-wrap text-center">
        {identities.map((identity) => (
          <li key={identity.id} className="mb-2 w-28">
            <div className="w-28 h-20 rounded-full overflow-hidden">
              <img
                src={identity.beforeImage}
                alt={identity.name}
                className="object-contain w-full h-full scale-150"
              />
            </div>
            <span className="text-sm tracking-tight break-keep">
              {identity.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyIdentityCard;
