export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full px-4 sm:px-6 border-t border-gray-200">
        {/* Top area: Blocks */}

        {/* Bottom area */}
        <div className="md:flex mx-auto max-w-6xl md:items-center md:justify-between py-4 md:py-8">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href=""
                className="flex justify-center p-2 items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <svg
                  fill="#000000"
                  height="16px"
                  width="16px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 310"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="XMLID_801_">
                      {" "}
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                      ></path>{" "}
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      ></path>{" "}
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                      ></path>{" "}
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@poshet.co"
                className="flex justify-center p-1 ml-4 items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height="24px"
                  width="24px"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title></title>{" "}
                    <g id="Complete">
                      {" "}
                      <g id="mail">
                        {" "}
                        <g>
                          {" "}
                          <polyline
                            fill="none"
                            points="4 8.2 12 14.1 20 8.2"
                            stroke="#000000"
                            strokeWidth="2"
                          ></polyline>{" "}
                          <rect
                            fill="none"
                            height="14"
                            rx="2"
                            ry="2"
                            stroke="#000000"
                            strokeWidth="2"
                            width="18"
                            x="3"
                            y="6.5"
                          ></rect>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Poshet.co. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
