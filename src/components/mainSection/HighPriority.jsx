import React from "react";

const HighPriority = () => {
  return (
    <div className="mt-7 font-semibold text-xl flex flex-col gap-4">
      <div>
        <h3>High Priority alerts (14)</h3>
      </div>
      <div className="max-w-[970px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-3 mx-auto w-full bg-white rounded-2xl shadow-sm max-md:mt-10">
              <div className="flex gap-2 text-neutral-900">
                <div className="shrink-0 w-8 shadow-sm aspect-square">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_185)">
                      <rect
                        x="2"
                        y="2"
                        width="32"
                        height="32"
                        rx="4"
                        fill="#E0EAFF"
                      />
                      <path
                        d="M17.999 17.9146C17.0451 17.9146 16.2652 17.6117 15.6593 17.0058C15.0534 16.3999 14.7505 15.62 14.7505 14.6661C14.7505 13.7122 15.0534 12.932 15.6593 12.3254C16.2652 11.7188 17.0451 11.4155 17.999 11.4155C18.9529 11.4155 19.7339 11.7188 20.3422 12.3254C20.9504 12.932 21.2546 13.7122 21.2546 14.6661C21.2546 15.62 20.9504 16.3999 20.3422 17.0058C19.7339 17.6117 18.9529 17.9146 17.999 17.9146ZM11.2088 24.8562V22.7644C11.2088 22.215 11.3471 21.7425 11.6237 21.3469C11.9003 20.9512 12.2575 20.6507 12.6952 20.4454C13.6324 20.0254 14.533 19.7105 15.397 19.5005C16.261 19.2905 17.1282 19.1855 17.9987 19.1855C18.8755 19.1855 19.7421 19.2939 20.5985 19.5109C21.4549 19.7278 22.3495 20.0407 23.2823 20.4495C23.739 20.6522 24.1055 20.9507 24.3818 21.3452C24.6581 21.7396 24.7962 22.2123 24.7962 22.7631V24.8562H11.2088ZM12.6282 23.4368H23.3718V22.7833C23.3718 22.5632 23.3059 22.3534 23.1739 22.1537C23.042 21.9541 22.8788 21.8062 22.6843 21.7099C21.8087 21.2893 21.007 21.0008 20.2792 20.8444C19.5514 20.688 18.7909 20.6098 17.9976 20.6098C17.2108 20.6098 16.445 20.688 15.7 20.8444C14.955 21.0008 14.154 21.2891 13.297 21.7092C13.1011 21.8054 12.9407 21.9535 12.8157 22.1532C12.6907 22.353 12.6282 22.563 12.6282 22.7833V23.4368ZM17.999 16.4953C18.528 16.4953 18.9655 16.3226 19.3114 15.9772C19.6572 15.6319 19.8302 15.1945 19.8302 14.6653C19.8302 14.1346 19.6576 13.6969 19.3124 13.3521C18.9672 13.0073 18.5301 12.8349 18.001 12.8349C17.472 12.8349 17.0345 13.0074 16.6886 13.3523C16.3428 13.6973 16.1698 14.1341 16.1698 14.6628C16.1698 15.1929 16.3424 15.6308 16.6876 15.9766C17.0328 16.3224 17.4699 16.4953 17.999 16.4953Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_185"
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.815686 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_185"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_185"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>

                <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
                  <div className="flex gap-5">
                    <div className="flex-auto text-sm font-medium">
                      Driver Raised Concern
                    </div>
                    <div className="text-xs">13 Fab 24</div>
                  </div>
                  <div className="flex gap-2.5 mt-2.5 text-xs">
                    <div>Load No : 12454,</div>
                    <div className="flex-auto">
                      Bill To : RoaDo demo Bangalore
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs leading-4 text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua
              </div>
              <div className="flex gap-5 justify-between self-end mt-3.5 max-w-full text-sm whitespace-nowrap w-[164px]">
                <button className="my-auto text-blue-900 underline">
                  Ignore
                </button>
                <button className="justify-center px-3 py-2 text-white bg-blue-900 rounded">
                  Resolve
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-3 mx-auto w-full bg-white rounded-2xl shadow-sm max-md:mt-10">
              <div className="flex gap-2 text-neutral-900">
                <div className="shrink-0 w-8 shadow-sm aspect-square">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_200)">
                      <rect
                        x="2"
                        y="2"
                        width="40"
                        height="40"
                        rx="4"
                        fill="#E0EAFF"
                      />
                      <path
                        d="M18.0007 26.3346C16.8479 26.3346 15.8652 25.9284 15.0527 25.1159C14.2402 24.3034 13.834 23.3207 13.834 22.168C13.834 21.5013 13.9798 20.8798 14.2715 20.3034C14.5632 19.727 14.9729 19.2374 15.5007 18.8346V12.168C15.5007 11.4735 15.7437 10.8832 16.2298 10.3971C16.7159 9.91102 17.3062 9.66797 18.0007 9.66797C18.6951 9.66797 19.2854 9.91102 19.7715 10.3971C20.2576 10.8832 20.5007 11.4735 20.5007 12.168V18.8346C21.0284 19.2374 21.4382 19.727 21.7298 20.3034C22.0215 20.8798 22.1673 21.5013 22.1673 22.168C22.1673 23.3207 21.7611 24.3034 20.9486 25.1159C20.1361 25.9284 19.1534 26.3346 18.0007 26.3346ZM17.1673 17.168H18.834V16.3346H18.0007V15.5013H18.834V13.8346H18.0007V13.0013H18.834V12.168C18.834 11.9319 18.7541 11.7339 18.5944 11.5742C18.4347 11.4145 18.2368 11.3346 18.0007 11.3346C17.7645 11.3346 17.5666 11.4145 17.4069 11.5742C17.2472 11.7339 17.1673 11.9319 17.1673 12.168V17.168Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_200"
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.815686 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_200"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_200"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                  <div className="flex gap-5">
                    <div className="flex-auto text-sm font-medium">
                      Reefer Temp. out of range
                    </div>
                    <div className="text-xs">13 Fab 24</div>
                  </div>
                  <div className="flex gap-2.5 mt-1.5 text-xs">
                    <div>Load No : 12454,</div>
                    <div className="flex-auto">
                      Bill To : RoaDo demo Bangalore
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs leading-4 text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua
              </div>
              <div className="flex gap-5 justify-between self-end mt-3.5 max-w-full text-sm whitespace-nowrap w-[169px]">
                <button className="my-auto text-blue-900 underline">
                  Ignore
                </button>
                <button className="justify-center px-3 py-2 text-white bg-blue-900 rounded">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPriority;
