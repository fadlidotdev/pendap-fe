import {
  ArchiveBoxIcon,
  PaperClipIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import Breadcrumbs from "./Breadcrumbs";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import Notification from "./Notification";
import { createPortal } from "react-dom";

export default function LetterDetail() {
  const [openPdf, setOpenPdf] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [showDeleted, setShowDeleted] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    let timeout;

    if (showDeleted) {
      timeout = setTimeout(() => {
        setShowDeleted(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [showDeleted]);

  useEffect(() => {
    let timeout;

    if (showArchived) {
      timeout = setTimeout(() => {
        setShowArchived(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [showArchived]);

  return (
    <div className="space-y-3">
      <div className="block lg:hidden">
        <Breadcrumbs
          pages={[
            { name: "Kotak Masuk", href: "#", current: false },
            { name: "Detail", href: "#", current: true },
          ]}
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <header>
            <h2 className="text-xl lg:text-2xl font-bold leading-tight tracking-tight text-gray-900">
              Pengaduan Masyarakat Terkait Hukum Perdata
            </h2>
            <div className="text-gray-500 mt-1 text-xs lg:text-sm">
              Dikirim pada 19 Januari 2023
            </div>
          </header>

          <div className="flex items-center">
            <button
              type="button"
              title="Arsipkan"
              className="flex items-center justify-center bg-white p-2.5 text-gray-300 hover:text-gray-400"
              onClick={() => {
                setShowArchived(true);
              }}
            >
              <span className="sr-only">Arsip</span>
              <ArchiveBoxIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <span
              className="mx-2 h-6 w-px bg-gray-200 lg:mx-4"
              aria-hidden="true"
            />

            <button
              type="button"
              title="Hapus"
              className="flex items-center justify-center bg-white p-2.5 text-gray-300 hover:text-red-400"
              onClick={() => setOpenDelete(true)}
            >
              <span className="sr-only">Hapus</span>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm lg:text-base font-medium leading-6 text-gray-900">
                Asal Instansi
              </dt>
              <dd className="mt-1 text-sm lg:text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Masyarakat Umum
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm lg:text-base font-medium leading-6 text-gray-900">
                Judul Surat
              </dt>
              <dd className="mt-1 text-sm lg:text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Pengaduan Masyarakat Umum Hukum Perdata
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm lg:text-base font-medium leading-6 text-gray-900">
                Perihal
              </dt>
              <dd className="mt-1 text-sm lg:text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Perdata merupakan pengaturan hak, harta benda dan sesuatu yang
                berkaitan antara individu dengan badan hukum. Hukum perdata
                adalah ketentuan-ketentuan yang mengatur hak dan kewajiban
                seseorang dalam masyarakat.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm lg:text-base font-medium leading-6 text-gray-900">
                Attachments
              </dt>
              <dd className="mt-2 text-sm lg:text-base text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm lg:text-base leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          Pengaduan Hukum Perdata.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex gap-2">
                      <button
                        className="font-medium text-gray-900 hover:text-indigo-500"
                        onClick={() => setOpenPdf(true)}
                      >
                        Lihat
                      </button>

                      {/* Separator */}
                      <div
                        className="h-6 w-px bg-gray-900/10"
                        aria-hidden="true"
                      />

                      <a
                        href="https://www.orimi.com/pdf-test.pdf"
                        download
                        target="_blank"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <Drawer
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        title="Pengaduan Hukum Perdata.pdf"
      >
        <iframe
          src="https://www.orimi.com/pdf-test.pdf"
          className="w-full h-[600px] aspect-[3/4] mb-2"
        ></iframe>

        <a
          href="https://www.orimi.com/pdf-test.pdf"
          target="_blank"
          download
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download
        </a>
      </Drawer>

      <ConfirmDialog
        open={openDelete}
        title="Hapus Surat"
        description="Apakah anda yakin ingin menghapus surat ini?"
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          setOpenDelete(false);
          setShowDeleted(true);
        }}
      />

      {createPortal(
        <Notification
          show={showDeleted}
          onDismiss={() => setShowDeleted(false)}
          type="success"
          message="Surat berhasil dihapus"
        />,
        document.body
      )}

      {createPortal(
        <Notification
          show={showArchived}
          onDismiss={() => setShowArchived(false)}
          type="success"
          message="Surat berhasil diarsip"
        />,
        document.body
      )}
    </div>
  );
}
