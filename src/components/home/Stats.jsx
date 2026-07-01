import { stats } from "../../data/stats";

import Counter from "../common/Counter";
function Stats() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                <Icon size={22} className="text-blue-500" />
              </div>

              {/* Content */}
              <div>
                <h2 className="flex items-center text-2xl font-bold text-blue-500">
                  <Counter
                    end={item.number}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={2500}
                  />
                </h2>

                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;
