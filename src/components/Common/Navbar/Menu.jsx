import { Link, NavLink } from "react-router-dom";

const Links = [
  { id: "1", label: "دوره ها", href: "/course" },
  { id: "2", label: "اساتید", href: "/teachers" },
  { id: "3", label: "ارتباط با ما", href: "/conectus" },
  { id: "4", label: "اخبار و مقالات", href: "/news" },
];

const Menu = () => {
  return (
    <div className="h-full w-4/12 flexItemJustify">
      {Links.map((e) => (
        <NavLink
          key={e.id}
          to={e.href}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-400" : ""
          }
        >
          {e.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
