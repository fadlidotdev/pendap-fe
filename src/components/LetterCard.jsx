/* eslint-disable react/prop-types */
export default function LetterCard({ data, onClick }) {
  return (
    <button
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:bg-gray-100 bg-white shadow w-full relative"
      onClick={onClick}
    >
      <div className="flex justify-between w-full gap-2 items-center">
        <div className="flex gap-2 items-center">
          <div className="font-semibold text-sm lg:text-base">
            {data.nama}{" "}
            <span className="font-normal text-xs lg:text-sm text-gray-500">
              dari Masyarakat Umum
            </span>
          </div>

          {!data.sudahDibaca && (
            <span className="absolute bottom-1 right-1 lg:static flex h-2 w-2 rounded-full bg-indigo-500"></span>
          )}
        </div>

        <div className="text-xs text-gray-400">5 jam yg lalu</div>
      </div>

      <div className="line-clamp-2 text-sm text-gray-400 text-left">
        {data.perihal}
      </div>
    </button>
  );
}
