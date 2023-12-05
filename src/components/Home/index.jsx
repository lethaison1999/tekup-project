import React, { useState } from 'react';
import imageBg from '../../assets/imagebg.png';
import imageBg1 from '../../assets/imagebg-1.png';
import imageBg2 from '../../assets/imagebg-2.png';
import imageBg3 from '../../assets/imagebg-3.png';
import imageBg4 from '../../assets/imagebg-4.png';

let links = [
  {
    id: 1,
    link: 'All',
  },
  {
    id: 2,
    link: 'Manpower Supply',
  },
  {
    id: 3,
    link: 'Mobie App / Websites',
  },
  {
    id: 4,
    link: 'UI/UX Design',
  },
];
const Home = () => {
  const [scroll, setScroll] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScroll(true);
    } else if (scrolled <= 300) {
      setScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="">
      <div className="top-home mt-20 mb-20 ">
        <ul className="sm:flex sm:items-center sm:justify-center  cursor-pointer gap-9 text-[#212529] text-[18px] font-semibold">
          {links.map((item) => (
            <li
              key={item.id}
              className={`${
                item.id === 1
                  ? 'bg-[#F8D000]  px-4 py-2 border rounded-md  '
                  : 'mt-[10px] px-4 py-2'
              } `}
            >
              {item.link}
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-home grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-[#212529] mb-20">
        <div className="border px-2 py-4 bg-[#f8f8f8] shadow-xl rounded-md cursor-pointer hover:-translate-y-1 hover:scale-100 transition ease-in duration-75">
          <div className="">
            <img src={imageBg} alt="" className="w-[418px] h-[418px]" />
            <div>
              <div className="bg-white px-4 py-4 m-4 shadow-xl flex items-center justify-between gap-2 rounded-md ">
                <h6 className="font-semibold text-[18px]">TOI 3D Customize E-commerce</h6>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border px-2 py-4 bg-[#f8f8f8] shadow-xl rounded-md cursor-pointer hover:-translate-y-1 hover:scale-100 transition ease-in duration-75">
          <div>
            <img src={imageBg1} alt="" className="w-[418px] h-[418px] " />
            <div>
              <div className="bg-white px-4 py-4 m-4 shadow-xl flex items-center justify-between gap-2 rounded-md ">
                <h6 className="font-semibold text-[18px]">
                  E-learning – Internal training platform
                </h6>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border px-2 py-4 bg-[#f8f8f8] shadow-xl rounded-md cursor-pointer hover:-translate-y-1 hover:scale-100 transition ease-in duration-75">
          <div>
            <img src={imageBg2} alt="" className="w-[418px] h-[418px]" />
            <div>
              <div className="bg-white px-4 py-4 m-4 shadow-xl flex items-center justify-between gap-2 rounded-md ">
                <h6 className="font-semibold text-[18px]">
                  Summer 21 Cosmetic E-commerce Platform
                </h6>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border px-2 py-4 bg-[#f8f8f8] shadow-xl rounded-md cursor-pointer hover:-translate-y-1 hover:scale-100 transition ease-in duration-75">
          <div>
            <img src={imageBg3} alt="" className="w-[418px] h-[418px]" />
            <div>
              <div className="bg-white px-4 py-4 m-4 shadow-xl flex items-center justify-between gap-2 rounded-md ">
                <h6 className="font-semibold text-[18px]">
                  Kiva – Ambition to digital transformation in the brokerage assiduity
                </h6>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border px-2 py-4 bg-[#f8f8f8] shadow-xl rounded-md cursor-pointer hover:-translate-y-1 hover:scale-100 transition ease-in duration-75">
          <div>
            <img src={imageBg4} alt="" className="w-[407px] h-[407px]" />
            <div>
              <div className="bg-white px-4 py-4 m-4 shadow-xl flex items-center justify-between gap-2 rounded-md ">
                <h6 className="font-semibold text-[18px]">
                  Boxgo – Professional Warehouse Management
                </h6>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[10px]">
        <div className="bg-[#0A7CFF] rounded-full px-2 py-2 w-[60px] cursor-pointer h-[60px] flex items-center justify-center fixed right-[15px] bottom-[30px] ">
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path
              fill="white"
              d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`${
          scroll === true
            ? 'bg-[#E9ECEF]   rounded-full px-2 py-2 w-[60px] h-[60px] flex items-center justify-center fixed left-[15px] bottom-[30px] '
            : ''
        }`}
      >
        <i
          onClick={scrollToTop}
          className="fa-solid fa-angle-up text-black text-[18px] cursor-pointer"
          style={{ display: scroll ? 'block' : 'none' }}
        ></i>
      </div>
    </div>
  );
};

export default Home;
