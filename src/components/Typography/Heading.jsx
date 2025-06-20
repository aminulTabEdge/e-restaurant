const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-orange-400">{subtitle}</p>
      <p className="text-3xl border-t-2 border-b-2 py-2 mt-2 uppercase">
        {title}
      </p>
    </div>
  );
};

export default Heading;
