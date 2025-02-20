import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Sidebar from "../ponel/index"

// img
import svg_2 from "../../assets/svg/2.svg";

// header



const Header = () => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log("Выход выполнен");
      } catch (error) {
        console.error("Ошибка выхода:", error);
      }
    };
  return (
    <>
     <div className="max-w-[1620px] m-auto">
      <div className="h-[45px]  pb-15 w-full flex items-center justify-between">
        <div className="ml-[15px]">
        <div className="xl:hidden flex items-center gap-[13px]">
           <Sidebar onLogout={handleLogout} className=" lg:hidden" />
           <div className="p-10">   
           <p className="text-[15px] font-medium hidden sm:block ml-[20px]">Меню</p>
           </div>
         </div>
          <ul className="xl:flex gap-[30px] items-center max-w-[719px] hidden">
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">О компании</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Оплата</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Доставка</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Возврат</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Отзывы</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Вопрос-ответ</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Новости</a></li>
            <li><a href="" className="text-[14px] font-light text-[#6C6F71]">Контакты</a></li>
          </ul>
        </div>
        <div className="mr-[15px] flex gap-[13px] items-center">
          <p className="text-[13px] text-[#4E5760] font-medium hidden sm:block">Ежедневно, с 8:00 до 18:00</p>
          <a href="" className="font-medium">8 800 444 00 65</a>
          <Button  style={{zIndex: "-1", width: "142px", height: "32px", fontSize: "10px", background:"#F2F6FC", boxShadow: "none", color: "#2A5E8D", fontWeight: "700"}}variant="contained">
            Заказать звонок
          </Button> 
        </div>
      </div>
     </div>

    <div className="w-full h-[1px] bg-[#F3F4F5]"></div>

     <div className="max-w-[1620px] m-auto">
      <div className="h-[70px] sm:h-[84px] items-center justify-between ml-[13px] pt-[15px] flex">
        <Link to={"/"} >
          <img src={svg_2} alt="" className="sm:w-[215px]"/>
        </Link> 
        <div className="h-[65px] items-center hidden ml-[13px] mr-[13px] gap-[10px] xl:flex">
        <Button  style={{zIndex: "-1", width: "154px", height: "52px", fontSize: "13px", background:"#186FD4", display: "flex", alignItems: "center", gap: "10px", boxShadow: "none", color: "#FFFFFF", fontWeight: "700"}}variant="contained">
            <svg width="20" height="20" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19M1 7H19" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            Каталог 
        </Button>

        <div className="lg:w-[422px] 2xl:w-[722px] h-[52px] bg-[#186FD4] rounded-lg flex items-center">
          <input type="text" placeholder="Поиск..." className="max-w-[660px] w-full h-[46px] bg-white ml-[3px] rounded-lg pl-[15px]"/>
          <button className="ml-[12px] mr-[14px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15L11.6167 11.6166M13.4444 7.22226C13.4444 10.6587 10.6586 13.4445 7.22221 13.4445C3.78578 13.4445 1 10.6587 1 7.22226C1 3.7858 3.78578 1 7.22221 1C10.6586 1 13.4444 3.7858 13.4444 7.22226Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
        <div className="flex gap-[6px] sm:gap-[27px] mr-[13px]">
          <button className="text-center text-[14px] text-[#6B7076] hidden sm:block">
            <svg className="ml-[20px]" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 7.3337V22.5M11.5 7.3337C11.078 5.59472 10.3514 4.10802 9.41486 3.06749C8.47836 2.02697 7.37547 1.4809 6.25 1.50051C5.47645 1.50051 4.73459 1.80779 4.18761 2.35476C3.64062 2.90173 3.33333 3.64358 3.33333 4.41711C3.33333 5.19064 3.64062 5.93248 4.18761 6.47945C4.73459 7.02642 5.47645 7.3337 6.25 7.3337M11.5 7.3337C11.922 5.59472 12.6486 4.10802 13.5851 3.06749C14.5216 2.02697 15.6245 1.4809 16.75 1.50051C17.5235 1.50051 18.2654 1.80779 18.8124 2.35476C19.3594 2.90173 19.6667 3.64358 19.6667 4.41711C19.6667 5.19064 19.3594 5.93248 18.8124 6.47945C18.2654 7.02642 17.5235 7.3337 16.75 7.3337M19.6667 12.0003V20.1667C19.6667 20.7855 19.4208 21.379 18.9832 21.8166C18.5457 22.2542 17.9522 22.5 17.3333 22.5H5.66667C5.04783 22.5 4.45434 22.2542 4.01675 21.8166C3.57917 21.379 3.33333 20.7855 3.33333 20.1667V12.0003M1 8.50034C1 8.19093 1.12292 7.89419 1.34171 7.6754C1.5605 7.45662 1.85725 7.3337 2.16667 7.3337H20.8333C21.1428 7.3337 21.4395 7.45662 21.6583 7.6754C21.8771 7.89419 22 8.19093 22 8.50034V10.8336C22 11.143 21.8771 11.4398 21.6583 11.6586C21.4395 11.8773 21.1428 12.0003 20.8333 12.0003H2.16667C1.85725 12.0003 1.5605 11.8773 1.34171 11.6586C1.12292 11.4398 1 11.143 1 10.8336V8.50034Z" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10"/>
            </svg>
            Все акции
          </button>
          <Link to={"/login"} className="text-center text-[14px] text-[#6B7076]">
            <svg className="sm:ml-[4px]" width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6.8" y="3.3" width="20.4" height="20.4" rx="7.2" stroke="#16191E" stroke-width="1.6"/>
            <path d="M14.1089 13.9469C13.3421 13.18 12.9113 12.14 12.9113 11.0556C12.9113 9.97113 13.3421 8.93111 14.1089 8.1643C14.8758 7.39748 15.9158 6.96669 17.0002 6.96669C18.0847 6.96669 19.1247 7.39748 19.8915 8.16429C20.6583 8.93111 21.0891 9.97113 21.0891 11.0556C21.0891 12.14 20.6583 13.18 19.8915 13.9469C19.1247 14.7137 18.0847 15.1445 17.0002 15.1445C15.9158 15.1445 14.8758 14.7137 14.1089 13.9469Z" stroke="#16191E" stroke-width="1.6"/>
            <path d="M24.3327 22.0556C24.3327 18.3055 21.0494 15.9445 16.9993 15.9445C12.9493 15.9445 9.66602 18.3055 9.66602 22.0556" stroke="#16191E" stroke-width="1.6"/>
            </svg>
            <p className="hidden sm:block">Войти</p>
          </Link>
          <button className="text-center text-[14px] text-[#6B7076]">
            <svg className="sm:ml-[17px]" width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10.8" y1="8.6125" x2="10.8" y2="21.6375" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="17.3" y1="5.3625" x2="17.3" y2="21.6375" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="23.8" y1="14.3" x2="23.8" y2="21.6375" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="hidden sm:block">Сравнение</p>
          </button>
          <Link to={"/liki"} className="text-center text-[14px] text-[#6B7076]">
            <svg className="sm:ml-[18px]" width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9.25C17 9.25 18.2204 5 22.0847 5C25.0949 5 27 7.43661 27 10.3232C27 14.3154 23.0312 16.9589 17 22C10.9689 16.9589 7 14.3154 7 10.3232C7 7.43661 8.90508 5 11.9153 5C15.7797 5 17 9.25 17 9.25Z" stroke="#16191E" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="hidden sm:block">Избранное</p>
          </Link>
          <Link to={"/basket"} className="text-center text-[14px] text-[#6B7076]">
            <svg className="sm:ml-[7px]" width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5.61108H8.45649C9.30294 5.61108 10.0577 6.14394 10.3411 6.94155L10.8732 8.43937M10.8732 8.43937L13.6717 16.3167C14.0207 17.2988 15.0653 17.8484 16.0723 17.5795L25.516 15.0579C26.3912 14.8242 27 14.0314 27 13.1256V10.4394C27 9.3348 26.1046 8.43937 25 8.43937H10.8732Z" stroke="#16191E" stroke-width="1.6"/>
            <path d="M10.0898 20.3889C10.0898 21.5671 11.0449 22.5222 12.2231 22.5222C13.4013 22.5222 14.3564 21.5671 14.3564 20.3889C14.3564 19.2106 13.4013 18.2555 12.2231 18.2555C11.0449 18.2555 10.0898 19.2106 10.0898 20.3889ZM11.4453 20.7889H12.2231V19.9889H11.4453V20.7889Z" fill="#16191E"/>
            <path d="M20.1991 20.3889C20.1991 21.5671 21.1543 22.5222 22.3325 22.5222C23.5107 22.5222 24.4658 21.5671 24.4658 20.3889C24.4658 19.2106 23.5107 18.2555 22.3325 18.2555C21.1543 18.2555 20.1991 19.2106 20.1991 20.3889ZM21.5547 20.7889H22.3325V19.9889H21.5547V20.7889Z" fill="#16191E"/>
            </svg>
            <p className="hidden sm:block">Корзина</p>
          </Link>
        </div>
      </div>
      <div className="h-[65px] items-center flex ml-[13px] mr-[13px] gap-[10px] xl:hidden">
        <Button  style={{zIndex: "-1", width: "154px", height: "52px", fontSize: "13px", background:"#186FD4", display: "flex", alignItems: "center", gap: "10px", boxShadow: "none", color: "#FFFFFF", fontWeight: "700"}}variant="contained">
            <svg width="20" height="20" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19M1 7H19" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            Каталог 
        </Button>

        <div className="max-w-[722px] w-full h-[52px] bg-[#186FD4] rounded-lg flex items-center lg">
          <input type="text" placeholder="Поиск..." className="max-w-[660px] w-full h-[46px] bg-white ml-[3px] rounded-lg pl-[15px]"/>
          <button className="ml-[12px] mr-[14px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15L11.6167 11.6166M13.4444 7.22226C13.4444 10.6587 10.6586 13.4445 7.22221 13.4445C3.78578 13.4445 1 10.6587 1 7.22226C1 3.7858 3.78578 1 7.22221 1C10.6586 1 13.4444 3.7858 13.4444 7.22226Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
     </div>

     <div className="w-full h-[1px] bg-[#F3F4F5] sm:hidden"></div>
    </>
  );
};
export default Header;