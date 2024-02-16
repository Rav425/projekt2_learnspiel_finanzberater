import { IoMenu } from "react-icons/io5";
// import { useLocation } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { MdAddToPhotos } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from "react";
// import AdminCategory from "../pages/admin/AdminCategory";
// import { BrowserRouter as  Routes, Route } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    // const location = useLocation();

    const menuItem = [
        
        {
          path: "/adminCategories",
        //   component: AdminCategory,
          name: "Kategorien",
          icon: <BiSolidCategoryAlt />,
        },
        {
          path: "/adminAddCategory",
          name: "Kategorie hinzufügen",
          icon: <TbCategoryPlus />,
        },
        {
          path: "/adminQuizzes",
          name: "Quizzes",
          icon: <FaListUl />,
        },
        {
          path: "/adminAddQuiz",
          name: "Quiz erstellen",
          icon: <MdAddToPhotos />,
        },
        {
            path: "/adminProfile",
            name: "Profil",
            icon: <FaUserAlt />,
        },

        {
            path: "",
            name: "Logout",
            icon: <IoLogOut />,
        },
    ];
  return (
    <div className={`bg-slate-800 text-white w-64 h-screen space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ${isOpen ? "w-48" : "w-16"}`}>
        <div className="">
        <IoMenu size="32" onClick={toggle}/>
        </div>
    
                {menuItem.map((item, index) => (
                    <Link to={item.path} key={index} className={`flex items-center space-x-3 px-4 py-2.5 rounded transition duration-200 hover:bg-sky-500  hover:text-black" ${location.pathname === item.path ? "bg-sky-500 text-black" : ""}`}>
                        {item.icon}

                        <div className={`${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        
                    </Link>

                ))}
        

    </div>
  )
}
