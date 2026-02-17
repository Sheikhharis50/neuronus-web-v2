import CardDescription from "./CardDescription";
import CardHeading from "./CardHeading";
import CardTitle from "./CardTitle";
import Pill from "./Pill";

interface ActivityLogProps {
  title: string;
  data: { title: string; pill: string; description: string; logs: string[] }[];
}

const ActivityLog = ({ data, title }: ActivityLogProps) => {
  return (
    <div className="bg-white rounded-[9.71px] space-y-3 lg:space-y-5">
      <CardTitle
        text="Activity Log"
        className="px-3 lg:px-5 2xl:px-7 pt-3 lg:pt-5 2xl:pt-7"
      />

      <hr className="border-[#BDBDBD]" />

      <div className="px-3 lg:px-5 2xl:px-7 pb-3 lg:pb-5 lg:space-y-5 space-y-3">
        {data.map((item, i) => (
          <div
            className="bg-slate/55 border border-[#D8D8D8] rounded-[6.5px] py-3 xl:py-4 pl-3 lg:pl-4 2xl:pl-6 pe-1.5 lg:pe-2 2xl:pe-2.5"
            key={`${title}-${item.title}-${i}`}
          >
            <p className="bg-[#D2D5DB] size-6.5 lg:size-7.5 2xl:size-8.25 rounded-full flex items-center justify-center font-semibold text-sm lg:text-base 2xl:text-lg mb-3 2xl:mb-5">
              {i + 1}
            </p>
            <div className="flex items-center justify-between mb-1">
              <CardHeading text={item.title} />
              <Pill text={item.pill} />
            </div>
            <CardDescription
              sm
              text={item.description}
              className="mb-1.5 lg:mb-2 2xl:mb-2.5"
            />

            <div className="flex flex-col gap-2 lg:gap-2.75 2xl:gap-3.25 mb-1.5 2xl:mb-3">
              {item.logs.map((log, index) => (
                <div
                  key={`${title}-activity-logs-${log}-${index}`}
                  className="flex items-center gap-2 2xl:gap-3"
                >
                  <div className="size-4 lg:size-5 2xl:size-6 rounded-full bg-[#E6E7EB]" />
                  <CardDescription
                    sm
                    text={log}
                    className="2xl:w-[80%] flex-1"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
