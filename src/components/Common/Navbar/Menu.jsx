import { Link } from "react-router-dom";

const Links = [
  { id: "1", label: "دوره ها", href: "/" },
  { id: "2", label: "اساتید", href: "/courses" },
  { id: "3", label: "ارتباط با ما", href: "/conectus" },
  { id: "4", label: "اخبار و مقالات", href: "/news" },
];

const Menu = () => {
  return (
    <div className="h-full w-4/12 flexItemJustify">
      {Links.map((e) => (
        <Link key={e.id} to={e.href}>
          {e.label}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
