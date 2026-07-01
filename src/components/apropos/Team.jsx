import { teamContent, teamMembers } from "../../data/teamData";

const Team = () => {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto px-5">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase  text-secondary">
              {teamContent.badge}
            </span>

            <h2 className="mt-4 text-3xl  sm:text-5xl font-bold leading-tight text-white">
              Des experts{" "}
              <span className="text-primary">{teamContent.highlight}</span> à
              votre service
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {teamContent.description}
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex h-full flex-col rounded-2xl border border-[#183B73] bg-[#071126] p-5 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-48 w-full rounded-xl object-cover"
                />

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-gray-400">
                  {member.position}
                </p>

                <div className="mt-auto flex justify-center gap-3 pt-6">
                  {member.social.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={index}
                        href={item.link}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary text-secondary transition hover:bg-secondary/80 hover:text-black"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
