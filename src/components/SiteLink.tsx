import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const SiteLink = () => {
  return (
    <ul>
      {linkList.map((item) => (
        <li className="py-1 hover:bg-primary-450">
          <a href={item.link} className="flex gap-2 items-center">
            {item.icon}
            <span className="text-sm md:text-base">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const linkList = [
  {
    name: "Project Moon 공식 트위터",
    link: "https://twitter.com/ProjMoonStudio",
    icon: <FaSquareXTwitter size={25} className="text-primary-500" />,
  },
  {
    name: "Project Moon 공식 유튜브",
    link: "https://www.youtube.com/channel/UCpqyr6h4RCXCEswHlkSjykA",
    icon: <FaSquareYoutube size={25} className="text-primary-500" />,
  },
  {
    name: "LCB 홈페이지",
    link: "https://limbuscompany.kr",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcShROIHRbR4rWXlRoqw87jfeT3592yG1IN18E6titTVZNKsz9YNygkYhSM9e5Ts1xgDedkpjShwJIMaqDHd1mMn0GObkYg0hVPXAeMOndnEhZI1PpqaqKbEVQ"
        alt="LCB favicon"
        width={23}
        height={23}
      />
    ),
  },
  {
    name: "LCB 공식 트위터",
    link: "https://twitter.com/LimbusCompany_B",
    icon: <FaSquareXTwitter size={25} className="text-primary-500" />,
  },
];

export default SiteLink;
