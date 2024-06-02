/* eslint-disable react/prop-types */
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import Autocomplete from "./Autocomplete";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function WriteLetter({ open, onClose, handleSubmit }) {
  const fileRef = useRef(null);

  if (!open) return null;

  return (
    <div className="fixed z-50 bottom-0 right-4 w-full max-w-sm lg:max-w-xl shadow-2xl px-4 pt-4 pb-2 bg-indigo-50 rounded-tl-lg rounded-tr-lg overflow-hidden">
      <div className="flex items-center justify-between bg-indigo-100 -mx-4 px-4 -mt-4 py-2  mb-2">
        <header className="font-medium text-gray-900">Kirim Surat Baru</header>

        <button
          type="button"
          className="relative rounded-md bg-indigo-100 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 -mr-1"
          onClick={onClose}
        >
          <span className="absolute -inset-2.5" />
          <span className="sr-only">Close panel</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <form
        action="#"
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Autocomplete />

        <div className="mt-2">
          <label
            htmlFor="instansi"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Instansi
          </label>
          <div className="mt-1">
            <input
              id="instansi"
              name="instansi"
              type="text"
              placeholder="Opsional"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded mt-4">
          <label htmlFor="subject" className="sr-only">
            Subjek
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
            placeholder="Subjek"
          />
          <label htmlFor="instansi" className="sr-only">
            Instansi
          </label>

          <label htmlFor="perihal" className="sr-only">
            Perihal
          </label>
          <textarea
            rows={3}
            name="perihal"
            id="perihal"
            className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Tulis perihal..."
            defaultValue={""}
          />

          {/* Spacer element to match the height of the toolbar */}
          <div aria-hidden="true">
            <div className="py-2">
              <div className="h-9" />
            </div>
            <div className="h-px" />
            <div className="py-2">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-px bottom-0">
          <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
            <div className="flex">
              <input ref={fileRef} type="file" id="file-input" hidden />
              <button
                type="button"
                className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <PaperClipIcon
                  className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-xs italic text-gray-500 group-hover:text-gray-600">
                  Lampirkan pdf (maksimal 3MB)
                </span>
              </button>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
