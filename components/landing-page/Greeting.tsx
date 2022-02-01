
const Greeting = () => {
  return (
    <div className="w-full 2xl:w-10/12 2xl:ml-auto lg:flex font-sora px-6 lg:px-8 lg:py-20">
        <div className="w-full lg:w-1/2 2xl:px-10">
            <span className="block text-base lg:text-lg 2xl:text-xl">Sambutan</span>
            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium pt-2">Kepala Sekolah</h1>
            <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
                Selamat datang di website MI As - Shodiq yang saya tujukan untuk seluruh unsur pimpinan, guru, karyawan dan siswa serta khalayak umum guna dapat mengakses seluruh informasi tentang sekolah kami. Tentunya dalam penyajian informasi masih banyak kekurangan, oleh karena itu kepada seluruh civitas akademika dan masyarakat umum dapat memberikan saran dan kritik demi kemajuan lebih lanjut.
            </p>
            <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
                Saya berharap Website ini dapat dijadikan wahana interaksi yang positif baik antar civitas akademika maupun masyarakat pada umumnya, sehingga dapat menjalin silaturahmi yang erat disegala unsur. Mari kita bekerja dan berkarya dengan mengharap ridho sang Kuasa dan keikhlasan yang tulus demi anak bangsa.
            </p>
            <h2 className="font-bold pt-4 text-base lg:text-lg 2xl:text-xl">- Uswida, S. Pd</h2>
        </div>
        <div className="w-full lg:w-1/2 py-10 lg:px-10 lg:py-0">
            <img className="lg:ml-auto w-full lg:w-2/3 h-auto"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.clipartof.com%2Fsmall%2F1234969-Clipart-Of-A-Caucasian-Female-Teacher-And-Mother-Talking-At-A-Conference-Royalty-Free-Vector-Illustration.jpg&f=1&nofb=1"
                alt="principal" loading="lazy"
            />
        </div>
    </div>
  )
}

export default Greeting
