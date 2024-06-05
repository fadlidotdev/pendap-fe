/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  InboxIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import NavHeader from "./NavHeader";
import { classNames } from "../lib/utils";
import Tabs from "./Tabs";
import LetterCard from "./LetterCard";
import { faker } from "@faker-js/faker";
import LetterDetail from "./LetterDetail";
import SentCard from "./SentCard";
import { createPortal } from "react-dom";
import WriteLetter from "./WriteLetter";
import Notification from "./Notification";

const navigation = [
  {
    name: "Kotak Masuk",
    href: "#",
    icon: InboxIcon,
    current: true,
    view: "inbox",
  },
  {
    name: "Terkirim",
    href: "#",
    icon: PaperAirplaneIcon,
    current: false,
    view: "sent",
  },
  {
    name: "Arsip",
    href: "#",
    icon: ArchiveBoxIcon,
    current: false,
    view: "archived",
  },
];

export default function Dashboard({ onSignOut }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openWrite, setOpenWrite] = useState(false);
  const [showWritten, setShowWritten] = useState(false);

  useEffect(() => {
    let timeout;

    if (showWritten) {
      timeout = setTimeout(() => {
        setShowWritten(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [showWritten]);

  const [view, setView] = useState("inbox");
  const [selectedTab, setSelectedTab] = useState("all");

  const handleClickDetail = () => {
    setView("detail");
  };

  const handleSubmitLetter = () => {
    setShowWritten(true);
    setOpenWrite(false);
  };

  return (
    <>
      <>
        <Transition show={sidebarOpen}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-20 shrink-0 items-center gap-3">
                      <img
                        className="h-8 w-auto"
                        src="/logo.png"
                        alt="Kejaksaan Negeri"
                      />

                      <div className="flex flex-col">
                        <h1 className="tracking-widest text-white font-bold text-xl">
                          PENDAP
                        </h1>
                        <span className="text-gray-200 text-sm">
                          Pelayanan Digital Persuratan
                        </span>
                      </div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href=""
                                  className={classNames(
                                    item.view === view
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setView(item.view);
                                    setSidebarOpen(false);
                                  }}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-24 shrink-0 items-center gap-3">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="Kejaksaan Negeri"
              />
              <div className="flex flex-col">
                <h1 className="tracking-widest text-white font-bold text-xl">
                  PENDAP
                </h1>
                <span className="text-gray-200 text-sm">
                  Pelayanan Digital Persuratan
                </span>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <div className="-mx-2 mb-3 space-y-3">
                <button
                  className={classNames(
                    "bg-white text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100 group flex gap-x-3 rounded-md p-2 py-3 leading-6 font-semibold w-full"
                  )}
                  onClick={() => setOpenWrite(true)}
                >
                  <PencilSquareIcon className="h-6 w-6 shrink-0" />
                  Kirim Surat
                </button>

                <div
                  className="h-px w-full bg-indigo-500/75 mb-3"
                  aria-hidden="true"
                />
              </div>

              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.view === view
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            setView(item.view);
                            setSidebarOpen(false);
                          }}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <NavHeader
            onSignOut={onSignOut}
            onClickNotification={() => setView("detail")}
            onOpenSidebar={() => setSidebarOpen(true)}
          />

          {view === "inbox" && (
            <header className="sticky top-16 z-30 flex shrink-0 gap-x-4 backdrop-blur-md bg-white/25 px-4 sm:gap-x-6 sm:px-6 lg:px-8 h-16 justify-between items-center">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                Kotak Masuk
              </h2>

              <Tabs
                defaultValue="all"
                value={selectedTab}
                tabs={[
                  { name: "Semua", value: "all" },
                  {
                    name: "Belum dibaca",
                    value: "unread",
                  },
                ]}
                onChange={setSelectedTab}
              />
            </header>
          )}

          {view === "sent" && (
            <header className="sticky top-16 z-30 flex shrink-0 gap-x-4 backdrop-blur-md bg-white/25 px-4 sm:gap-x-6 sm:px-6 lg:px-8 h-16 justify-between items-center">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                Terkirim
              </h2>
            </header>
          )}

          {view === "archived" && (
            <header className="sticky top-16 z-30 flex shrink-0 gap-x-4 backdrop-blur-md bg-white/25 px-4 sm:gap-x-6 sm:px-6 lg:px-8 h-16 justify-between items-center">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                Arsip
              </h2>
            </header>
          )}

          <main className="py-4 sm:pb-6 lg:pb-8">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-2 lg:space-y-3 overflow-auto">
              {view === "inbox" && (
                <>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <LetterCard
                      key={i}
                      data={{
                        sudahDibaca:
                          selectedTab === "all"
                            ? faker.datatype.boolean()
                            : false,
                        nama: faker.person.fullName(),
                        perihal: faker.lorem.paragraph(3),
                      }}
                      onClick={handleClickDetail}
                    />
                  ))}
                </>
              )}

              {view === "sent" && (
                <>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SentCard
                      key={i}
                      data={{
                        sudahDibaca: true,
                        nama: faker.person.fullName(),
                        perihal: faker.lorem.paragraph(3),
                      }}
                      onClick={handleClickDetail}
                    />
                  ))}
                </>
              )}

              {view === "archived" && (
                <>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <LetterCard
                      key={i}
                      data={{
                        sudahDibaca: true,
                        nama: faker.person.fullName(),
                        perihal: faker.lorem.paragraph(3),
                      }}
                      onClick={handleClickDetail}
                    />
                  ))}
                </>
              )}

              {view === "detail" && <LetterDetail />}
            </div>
          </main>
        </div>

        {!openWrite && (
          <div className="block lg:hidden fixed bottom-4 left-4 z-20">
            <button
              type="button"
              className="rounded-full bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setOpenWrite(true)}
            >
              <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}

        {createPortal(
          <WriteLetter
            open={openWrite}
            onClose={() => setOpenWrite(false)}
            handleSubmit={handleSubmitLetter}
          />,
          document.body
        )}

        {createPortal(
          <Notification
            show={showWritten}
            onDismiss={() => setShowWritten(false)}
            type="success"
            message="Surat berhasil dikirim"
          />,
          document.body
        )}
      </>
    </>
  );
}
