"use client";

import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, HTMLAttributes, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const BtnPrimary = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="text-white px-1 py-1 rounded-lg" {...props}>
      {children}
    </button>
  );
};

type TLinkData = {
  label: string;
} & (
  | {
      link: string;
    }
  | {
      links: TLinkData[];
    }
);

export const BtnTools = ({
  categories,
  parentHeight,
}: {
  categories: TProductCategory[];
  parentHeight?: number | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  const data: TLinkData[] = [
    {
      label: "INICIO",
      link: "/",
    },
    {
      label: "PRODUCTOS",
      links: [
        {
          label: "EPP",
          links: [
            {
              label: "TODOS",
              link: "/productos/epp#products",
            },
            ...categories
              .map((category) => ({
                label: category.name,
                link: `/productos/epp/${category.slug}#products`,
              }))
              .reverse(),
          ],
        },
        {
          label: "FERRETERÍA",
          link: "/productos/ferreteria",
        },
      ],
    },
    {
      label: "SERVICIOS",
      links: [
        {
          label: "GENERAL",
          link: "/servicios/general",
        },
        {
          label: "ASESORÍAS",
          link: "/servicios/asesorias",
        },
        {
          label: "PORTAFOLIO",
          link: "/servicios/portafolio",
        },
      ],
    },
    {
      label: "CONTACTOS",
      link: "/contacto",
    },
  ];

  const currentMenu = data[menu];
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 flex-wrap w-[44px] items-center justify-center cursor-pointer"
      >
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
      </div>
      {isOpen && (
        <div
          className="bottom-0 right-0 z-[10000] fixed p-3 md:px-6 md:pr-5 flex justify-center items-center w-full md:w-auto bg-[rgba(38,38,38,0.98)] text-white"
          style={{
            height: `calc(100vh - ${parentHeight || 106}px)`,
          }}
        >
          <div className="max-w-[1120px] mx-auto h-full relative flex justify-center items-center w-full">
            <div className="relative flex gap-6 items-stretch max-h-[90vh] w-full h-full">
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex flex-col gap-2 items-start">
                  <h4 className="text-md mb-4 px-3">MENÚ</h4>

                  {data.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        {index ? <hr className="w-full bg-white" /> : null}
                        {"links" in item ? (
                          <BtnPrimary
                            onClick={() => setMenu(index)}
                            key={index}
                            className="text-md"
                          >
                            {item.label}
                          </BtnPrimary>
                        ) : (
                          <Link
                            href={item.link}
                            onClick={() => {
                              setMenu(index);
                              setIsOpen(false);
                            }}
                          >
                            <BtnPrimary key={index} className="text-md">
                              {item.label}
                            </BtnPrimary>
                          </Link>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
                <div>
                  <img
                    src="/img/logo/large-logo-dark.png"
                    width={215}
                    alt=""
                    className="max-w-[160px] md:max-w-[220px]"
                  />
                </div>
              </div>
              <div className="h-[90%] w-[1px] bg-white"></div>
              <div className="flex flex-col">
                {"links" in currentMenu && (
                  <>
                    <h4 className="text-md mb-4 px-3 inline w-auto self-start">
                      CATEGORÍAS
                    </h4>
                    <ul className="mb-4">
                      {currentMenu?.links?.map((item, index) => {
                        const hasLink = "link" in item;
                        return (
                          <li
                            key={index}
                            className={cn(
                              "ml-3 text-md mb-2 md:mb-5",
                              index ? "text-[rgba(255,255,255,0.5)]" : ""
                            )}
                          >
                            {hasLink && (
                              <Link
                                href={item.link || ""}
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )}
                            {!hasLink && (
                              <div>
                                <div>{item.label}</div>
                                <ul>
                                  {item.links?.map((link, index) => (
                                    <li
                                      key={index}
                                      className="ml-3 text-md mb-1 md:mb-2 text-[rgba(255,255,255,0.5)]"
                                    >
                                      {"link" in link && (
                                        <Link
                                          href={link.link || ""}
                                          onClick={() => setIsOpen(false)}
                                          className={cn(
                                            "hover:text-white",
                                            pathname ===
                                              link.link.split("#")[0] &&
                                              "text-white"
                                          )}
                                        >
                                          {link.label}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
              <IoClose
                onClick={() => setIsOpen(false)}
                className="hidden text-[3rem] text-white absolute top-[-2rem] md:top-5 right-3 md:right-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
