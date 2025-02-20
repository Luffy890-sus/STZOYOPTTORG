import { useState } from "react";
import { FiMenu, FiX} from "react-icons/fi";

const Sidebar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-black rounded-md fixed top-3 left-4 z-50">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-[#011120E5] w-full p-5 transition-transform ${ isOpen ? "translate-x-0" : "-translate-x-full" }`} >
        <div className="w-[340px] h-full bg-white">
            <p className="text-[20px] ml-[240px] font-bold">
            Меню
            </p>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[15px]"></div>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
        <ul className="">
            <li><a href="" className="text-[14px] font-light text-black">О компании</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Оплата</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Доставка</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Возврат</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Отзывы</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Вопрос-ответ</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px]  mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black">Новости</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10xp] mb-[10px]"></div>
            <li><a href="" className="text-[14px] font-light text-black ">Контакты</a></li>
            <div className="w-full h-[1px] bg-[#EBEEF0] mt-[10px]"></div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
