interface GameBannerProps {
  banner_url: string;
  title: string;
  ads_count: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a
      href=""
      className=" relative rounded-lg scale-95 hover:scale-100 transition-all duration-200"
    >
      <img src={props.banner_url} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.ads_count} Anúncio(s)
        </span>
      </div>
    </a>
  );
}
