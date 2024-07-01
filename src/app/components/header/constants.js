import { ChevronLeft, X } from "lucide-react";

export const HEADER_MENU_ITEMS = [

  {
    title: "Portfolio",
    link: "/portfolio",
    groupName: "group/portfolio",
  },
  {
    title: "What we do",
    link: "/",
    groupName: "group/wwd",
    subMenu: () => (
      <section className="flex items-center gap-6">
        <section className="grid text-white grid-cols-1 grow sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fill gap-4">
          <div>
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">Website  Development</p>
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">App  Development</p>
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">AI</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">Machine Learning</p>
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">Mobile Application</p>
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">Cyber Secutiry</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2 text-xs">
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">(AR) & (VR)</p>
              </li>
              <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                <p className="text-2xl">BLOCKCHAIN</p>
              </li>
 
            </ul>
          </div>
        </section>
        <div className="max-w-[730px] w-full"></div>
      </section>
    ),
    responsiveSubMenu: ({ onClose }) => {
      return (
        <div className="w-full">
          <header className="flex items-center w-full justify-between mb-6 h-[60px]">
            <button className="flex items-center gap-2 text-3xl" onClick={() => {
              onClose();
            }}>
              <ChevronLeft />
              What we do
            </button>
            <button
              className="flex items-center gap-2"
              onClick={() => {
                onClose();
              }}
            >
              <X  size={30} />
            </button>
          </header>

          <section className="flex flex-col gap-6 overflow-auto overflow-x-hidden max-h-[calc(100vh-60px)] pb-4 scroll">
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2  ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
            <div>
              <button className=" font-semibold hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                Web & AI
              </button>
              <hr class="h-px my-2 border-0 bg-white" />
              <ul className="flex flex-col gap-2 ">
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Website Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  App Design & Development
                </li>
                <li className="hover:translate-x-2 transition-transform ease-in-out duration-300 cursor-pointer">
                  Software Development
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    title: "Contact us",
    link: "/contact-us",
    groupName: "group/contact-us",
  },
];
