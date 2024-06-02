/* eslint-disable react/prop-types */
export default function LetterCard({ data, onClick }) {
  return (
    <button
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:bg-gray-100 bg-white shadow w-full"
      onClick={onClick}
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2 items-center">
          <div className="font-semibold text-base">
            {data.nama}{" "}
            <span className="font-normal text-sm text-gray-500">
              dari Masyarakat Umum
            </span>
          </div>

          {!data.sudahDibaca && (
            <span className="flex h-2 w-2 rounded-full bg-indigo-700"></span>
          )}
        </div>

        <div className="text-xs text-gray-400">5 jam yang lalu</div>
      </div>

      <div className="line-clamp-2 text-sm text-gray-400 text-left">
        {data.perihal}
      </div>
    </button>
  );
}
