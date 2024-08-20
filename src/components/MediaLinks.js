export function LinksContainer({children}){
    return (
        <div className="flex items-center justify-center p-4 gap-4 bg-black w-[160px] h-14 shadow-lg shadow-blue-900/70 text-white text-2xl rounded-lg">
          {children}
        </div>
      );
}

export function LinkItem({href,children}){
    return(
        <a href={href} target="blank">
            {children}
        </a>

    );
}