export default function WhyChooseCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-2xl border border-[#15396E] bg-[#071223] p-7 transition duration-500 hover:-translate-y-3 hover:border-[#1C7DFF] hover:shadow-[0_0_40px_rgba(0,102,255,.25)]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#184D99] bg-[#091D3D]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FDB813] text-[#04101D]">
          <Icon size={24} />
        </div>
      </div>

      <div className="mx-auto my-5 h-[2px] w-10 bg-[#FDB813]" />

      <h3 className="text-center text-lg font-semibold text-white">
        {item.title}
      </h3>

      <p className="mt-4 text-center text-sm leading-7 text-gray-400">
        {item.description}
      </p>

      <div className="mx-auto mt-8 h-1 w-8 rounded-full bg-[#1479FF]" />
    </div>
  );
}
