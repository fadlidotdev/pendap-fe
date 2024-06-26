/* eslint-disable react/prop-types */
export default function Register({ onToSignIn, onRegister }) {
  return (
    <>
      <div className="flex min-h-screen flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex gap-3">
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />

                <div>
                  <h1 className="font-bold tracking-widest text-2xl">PENDAP</h1>
                  <span className="text-gray-500">
                    Pelayanan Digital Persuratan
                  </span>
                </div>
              </div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Registrasi
              </h2>
              <p>Masukkan informasi Anda untuk membuat akun</p>
            </div>

            <div className="mt-6">
              <div>
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();

                    onRegister();
                  }}
                >
                  <div>
                    <label
                      htmlFor="instansi"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Instansi
                    </label>
                    <div className="mt-2">
                      <input
                        id="instansi"
                        name="instansi"
                        type="text"
                        placeholder="Masyarakat Umum"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="nama"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nama Lengkap
                    </label>
                    <div className="mt-2">
                      <input
                        id="nama"
                        name="nama"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="email@contoh.com"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Daftar
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-center text-sm leading-6 text-gray-500">
                  Sudah punya akun?{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    onClick={(e) => {
                      e.preventDefault();

                      onToSignIn();
                    }}
                  >
                    Masuk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
