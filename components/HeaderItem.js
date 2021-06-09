function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 w-12 sm:20 ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p ClassName="opacity-100 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
