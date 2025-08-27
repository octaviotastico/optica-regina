import {
  ArrowUpRight
} from "lucide-react";

export const NetworkCard = ({
  title,
  handle,
  icon,
  cta,
  profileUrl,
}: {
  title: string;
  handle: string;
  icon: React.ReactNode;
  cta: string;
  profileUrl: string;
}) => {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-gray-200 p-4 sm:p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-gray-200 p-2">{icon}</div>
        <div className="text-left">
          <p className="font-semibold leading-none text-base sm:text-lg">{title}</p>
          <p className="text-xs sm:text-sm text-gray-500 leading-none mt-1">{handle}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 text-xs sm:text-sm text-brand group-hover:underline">
          {cta} <ArrowUpRight className="size-4" />
        </span>
      </div>
    </a>
  );
}

export default NetworkCard;