import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { classNames } from "../lib/utils";

// eslint-disable-next-line react/prop-types
export default function Notifications({ onClick }) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="-m-1.5 flex items-center p-1.5 relative">
        <div className="h-3 w-3 bg-red-500 rounded-full absolute top-1 right-1 border-2 border-red-300" />
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute -right-10 z-10 mt-2.5 w-[320px] origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <div className="text-sm font-semibold px-2 border-b pb-2">
            Notifikasi
          </div>

          <MenuItem>
            {({ focus, close }) => (
              <a
                href=""
                className={classNames(
                  focus ? "bg-gray-50" : "",
                  "block px-3 py-1 text-sm leading-6 text-gray-900 relative"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                  onClick();
                }}
              >
                <div className="space-y-1">
                  <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-indigo-500"></span>

                  <div>
                    <span className="font-bold">Admin</span> meneruskan surat{" "}
                    <span className="font-medium italic">
                      Pengaduan Masyarakat Hukum Perdata
                    </span>{" "}
                    kepada Anda.
                  </div>
                  <div className="text-gray-400 text-xs">6 jam yang lalu</div>
                </div>
              </a>
            )}
          </MenuItem>

          <hr className="mt-2 mb-1" />

          <MenuItem>
            {({ focus, close }) => (
              <a
                href=""
                className={classNames(
                  focus ? "bg-gray-50" : "",
                  "block px-3 py-1 text-sm leading-6 text-gray-900 relative"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                  onClick();
                }}
              >
                <div className="space-y-1">
                  <div>
                    <span className="font-bold">Admin</span> meneruskan surat{" "}
                    <span className="font-medium italic">
                      Pengaduan Masyarakat Hukum Perdata
                    </span>{" "}
                    kepada Anda.
                  </div>
                  <div className="text-gray-400 text-xs">
                    4 Juni 2024 16:30 WIB
                  </div>
                </div>
              </a>
            )}
          </MenuItem>

          <hr className="mt-2 mb-1" />

          <MenuItem>
            {({ focus, close }) => (
              <a
                href=""
                className={classNames(
                  focus ? "bg-gray-50" : "",
                  "block px-3 py-1 text-sm leading-6 text-gray-900 relative"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                  onClick();
                }}
              >
                <div className="space-y-1">
                  <div>
                    <span className="font-bold">Pimpinan</span> memberikan
                    balasan terhadap surat{" "}
                    <span className="font-medium italic">
                      Pengaduan Masyarakat Hukum Perdata
                    </span>{" "}
                    kepada Anda.
                  </div>
                  <div className="text-gray-400 text-xs">
                    1 Juni 2024 10:23 WIB
                  </div>
                </div>
              </a>
            )}
          </MenuItem>

          <hr className="mt-2 mb-1" />

          <MenuItem>
            {({ focus, close }) => (
              <a
                href=""
                className={classNames(
                  focus ? "bg-gray-50" : "",
                  "block px-3 py-1 text-sm leading-6 text-gray-900 relative"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                  onClick();
                }}
              >
                <div className="space-y-1">
                  <div>
                    <span className="font-bold">Admin</span> telah membaca surat Anda yang berjudul{" "}
                    <span className="font-medium italic">
                      Pengaduan Masyarakat Hukum Perdata
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    4 Juni 2024 16:30 WIB
                  </div>
                </div>
              </a>
            )}
          </MenuItem>


        </MenuItems>
      </Transition>
    </Menu>
  );
}
