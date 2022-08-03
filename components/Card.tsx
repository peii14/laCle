const Card = (props: any) => {
  return (
    <div className="p-10 bg-third w-full rounded-2xl shadow-md shadow-black h-max">
      <div>{props.children}</div>
    </div>
  );
};
export default Card;
