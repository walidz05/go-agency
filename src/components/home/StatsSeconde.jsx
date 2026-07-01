import { stats } from "../../data/stats";
import Counter from "../common/Counter";

function StatsSeconde() {
  return (
    <section className="container">
      <div className="mx-auto max-w-7xl ">
        <div
          className="
           
            grid
            grid-cols-1
            lg:grid-cols-4
            rounded-2xl
            border
            border-[#16335E]
            bg-gradient-to-r
            from-[#07172D]
            via-[#0A1C38]
            to-[#07172D]
            overflow-hidden
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  p-8
                  border-white/5
                  transition-all
                  duration-300
                  hover:bg-[#10254A]
                  lg:border-r
                  last:border-r-0
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#FFD700]/10
                    transition-all
                    duration-300
                    group-hover:bg-[#FFD700]/20
                  "
                >
                  <Icon size={28} className="text-[#FFD700]" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-secondary">
                    <Counter
                      end={item.number}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      duration={2500}
                    />
                  </h3>

                  <p className="mt-1 text-gray-400">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSeconde;
